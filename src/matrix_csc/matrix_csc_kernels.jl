@kernel inbounds = true function kernel_spmatmul_csc_N!(
        C,
        @Const(colptr),
        @Const(rowval),
        @Const(nzval),
        @Const(B),
        α,
        ::Val{CONJA},
        ::Val{CONJB},
        ::Val{TRANSB},
    ) where {CONJA, CONJB, TRANSB}
    k, col = @index(Global, NTuple)

    Bi, Bj = TRANSB ? (k, col) : (col, k)

    valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
    axj = valb * α
    for j in colptr[col]:(colptr[col + 1] - 1) # nzrange(A, col)
        vala = CONJA ? conj(nzval[j]) : nzval[j]
        @atomic C[rowval[j], k] += vala * axj
    end
end

@kernel inbounds = true function kernel_spmatmul_csc_T!(
        C,
        @Const(colptr),
        @Const(rowval),
        @Const(nzval),
        @Const(B),
        α,
        ::Val{CONJA},
        ::Val{CONJB},
        ::Val{TRANSB},
    ) where {CONJA, CONJB, TRANSB}
    k, col = @index(Global, NTuple)

    tmp = zero(eltype(C))
    for j in colptr[col]:(colptr[col + 1] - 1) # nzrange(A, col)
        Bi, Bj = TRANSB ? (k, rowval[j]) : (rowval[j], k)
        vala = CONJA ? conj(nzval[j]) : nzval[j]
        valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
        tmp += vala * valb
    end
    @inbounds C[col, k] += tmp * α
end

@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_csc_N!(
        block_results,
        @Const(x),
        @Const(colptr),
        @Const(rowval),
        @Const(nzval),
        @Const(y),
        @Const(n),
        ::Val{CONJA},
    ) where {CONJA}
    # Get work-item and workgroup indices
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    # Allocate shared memory for workgroup reduction
    shared = @localmem(eltype(block_results), workgroup_size)

    # Each work-item accumulates its contribution from columns with stride
    local_sum = zero(eltype(block_results))
    for col in global_id:stride:n
        for j in colptr[col]:(colptr[col + 1] - 1)
            vala = CONJA ? conj(nzval[j]) : nzval[j]
            local_sum += dot(x[rowval[j]], vala, y[col])
        end
    end

    # Store local sum in shared memory
    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        sum = zero(eltype(block_results))
        for i in 1:workgroup_size
            sum += shared[i]
        end
        block_results[group_id] = sum
    end
end

@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_csc_T!(
        block_results,
        @Const(x),
        @Const(colptr),
        @Const(rowval),
        @Const(nzval),
        @Const(y),
        @Const(n),
        ::Val{CONJA},
    ) where {CONJA}
    # Get work-item and workgroup indices
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    # Allocate shared memory for workgroup reduction
    shared = @localmem(eltype(block_results), workgroup_size)

    # Each work-item accumulates its contribution from columns with stride
    local_sum = zero(eltype(block_results))
    for col in global_id:stride:n
        for j in colptr[col]:(colptr[col + 1] - 1)
            vala = CONJA ? conj(nzval[j]) : nzval[j]
            local_sum += dot(x[col], vala, y[rowval[j]])
        end
    end

    # Store local sum in shared memory
    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        sum = zero(eltype(block_results))
        for i in 1:workgroup_size
            sum += shared[i]
        end
        block_results[group_id] = sum
    end
end

# Kernel for adding sparse matrix to dense matrix (CSC format)
@kernel inbounds = true function kernel_add_sparse_to_dense_csc!(
        C,
        @Const(colptr),
        @Const(rowval),
        @Const(nzval),
    )
    col = @index(Global)

    @inbounds for j in colptr[col]:(colptr[col + 1] - 1)
        C[rowval[j], col] += nzval[j]
    end
end

# Kernel for counting non-zeros per column when adding two CSC matrices
@kernel inbounds = true function kernel_count_nnz_per_col_csc!(
        nnz_per_col,
        @Const(colptr_A),
        @Const(rowval_A),
        @Const(colptr_B),
        @Const(rowval_B),
    )
    col = @index(Global)

    i_A = colptr_A[col]
    i_B = colptr_B[col]
    end_A = colptr_A[col + 1]
    end_B = colptr_B[col + 1]

    count = 0
    while i_A < end_A && i_B < end_B
        row_A = rowval_A[i_A]
        row_B = rowval_B[i_B]
        if row_A < row_B
            count += 1
            i_A += 1
        elseif row_A > row_B
            count += 1
            i_B += 1
        else  # row_A == row_B
            count += 1
            i_A += 1
            i_B += 1
        end
    end

    # Add remaining entries from A
    count += (end_A - i_A)
    # Add remaining entries from B
    count += (end_B - i_B)

    nnz_per_col[col] = count
end

# Kernel for merging two CSC matrices (addition) with optional conjugation
@kernel inbounds = true function kernel_merge_csc!(
        rowval_C,
        nzval_C,
        @Const(colptr_C),
        @Const(colptr_A),
        @Const(rowval_A),
        @Const(nzval_A),
        @Const(colptr_B),
        @Const(rowval_B),
        @Const(nzval_B),
        ::Val{CONJA},
        ::Val{CONJB},
    ) where {CONJA, CONJB}
    col = @index(Global)

    i_A = colptr_A[col]
    i_B = colptr_B[col]
    i_C = colptr_C[col]
    end_A = colptr_A[col + 1]
    end_B = colptr_B[col + 1]

    while i_A < end_A && i_B < end_B
        row_A = rowval_A[i_A]
        row_B = rowval_B[i_B]
        if row_A < row_B
            rowval_C[i_C] = row_A
            nzval_C[i_C] = CONJA ? conj(nzval_A[i_A]) : nzval_A[i_A]
            i_A += 1
            i_C += 1
        elseif row_A > row_B
            rowval_C[i_C] = row_B
            nzval_C[i_C] = CONJB ? conj(nzval_B[i_B]) : nzval_B[i_B]
            i_B += 1
            i_C += 1
        else  # row_A == row_B
            rowval_C[i_C] = row_A
            vala = CONJA ? conj(nzval_A[i_A]) : nzval_A[i_A]
            valb = CONJB ? conj(nzval_B[i_B]) : nzval_B[i_B]
            nzval_C[i_C] = vala + valb
            i_A += 1
            i_B += 1
            i_C += 1
        end
    end

    # Copy remaining entries from A
    while i_A < end_A
        rowval_C[i_C] = rowval_A[i_A]
        nzval_C[i_C] = CONJA ? conj(nzval_A[i_A]) : nzval_A[i_A]
        i_A += 1
        i_C += 1
    end

    # Copy remaining entries from B
    while i_B < end_B
        rowval_C[i_C] = rowval_B[i_B]
        nzval_C[i_C] = CONJB ? conj(nzval_B[i_B]) : nzval_B[i_B]
        i_B += 1
        i_C += 1
    end
end

# Kernels for sparse-sparse matrix multiplication (SpGEMM)

# Kernel for counting non-zeros per column in C = A * B (CSC format)
# For each column j of B, we accumulate contributions from all nonzeros B[k,j]
# Each B[k,j] contributes (column k of A) to column j of C
@kernel inbounds = true function kernel_count_nnz_spgemm_csc!(
        nnz_per_col,
        row_seen,
        @Const(colptr_A),
        @Const(rowval_A),
        @Const(colptr_B),
        @Const(rowval_B),
        @Const(m),
    )
    col_B = @index(Global)

    # For column col_B of B, find all rows that will have nonzeros in column col_B of C
    # Use row_seen array to mark rows (needs to be cleared for each column)
    offset = (col_B - 1) * m

    # Clear the seen flags for this column
    for i in 1:m
        row_seen[offset + i] = false
    end

    count = 0
    # For each nonzero B[k, col_B]
    for idx_B in colptr_B[col_B]:(colptr_B[col_B + 1] - 1)
        k = rowval_B[idx_B]  # row index in B (column index in A)

        # Add all rows from column k of A
        for idx_A in colptr_A[k]:(colptr_A[k + 1] - 1)
            i = rowval_A[idx_A]  # row index
            if !row_seen[offset + i]
                row_seen[offset + i] = true
                count += 1
            end
        end
    end

    nnz_per_col[col_B] = count
end

# Kernel for computing C = A * B (CSC format)
# This assumes nnz counts and colptr_C are already computed
@kernel inbounds = true function kernel_spgemm_csc!(
        rowval_C,
        nzval_C,
        @Const(colptr_C),
        @Const(colptr_A),
        @Const(rowval_A),
        @Const(nzval_A),
        @Const(colptr_B),
        @Const(rowval_B),
        @Const(nzval_B),
        row_accum,
        row_flags,
        @Const(m),
        ::Val{CONJA},
        ::Val{CONJB},
    ) where {CONJA, CONJB}
    col_B = @index(Global)

    # Offset for this column's workspace
    offset = (col_B - 1) * m

    # Clear accumulator and flags for this column
    for i in 1:m
        row_accum[offset + i] = zero(eltype(nzval_C))
        row_flags[offset + i] = false
    end

    # Accumulate: C[:, col_B] = sum over k of A[:, k] * B[k, col_B]
    for idx_B in colptr_B[col_B]:(colptr_B[col_B + 1] - 1)
        k = rowval_B[idx_B]
        val_B = CONJB ? conj(nzval_B[idx_B]) : nzval_B[idx_B]

        # Add val_B * A[:, k] to accumulator
        for idx_A in colptr_A[k]:(colptr_A[k + 1] - 1)
            i = rowval_A[idx_A]
            val_A = CONJA ? conj(nzval_A[idx_A]) : nzval_A[idx_A]
            row_accum[offset + i] += val_A * val_B
            row_flags[offset + i] = true
        end
    end

    # Write out results in sorted order
    write_pos = colptr_C[col_B]
    for i in 1:m
        if row_flags[offset + i]
            rowval_C[write_pos] = i
            nzval_C[write_pos] = row_accum[offset + i]
            write_pos += 1
        end
    end
end
