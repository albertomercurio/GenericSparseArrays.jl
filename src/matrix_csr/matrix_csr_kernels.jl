@kernel inbounds=true function kernel_spmatmul_csr_N!(
    C,
    @Const(rowptr),
    @Const(colval),
    @Const(nzval),
    @Const(B),
    α,
    ::Val{CONJA},
    ::Val{CONJB},
    ::Val{TRANSB},
) where {CONJA,CONJB,TRANSB}
    k, row = @index(Global, NTuple)

    tmp = zero(eltype(C))
    for j = rowptr[row]:(rowptr[row+1]-1) # nzrange(A, row)
        Bi, Bj = TRANSB ? (k, colval[j]) : (colval[j], k)
        vala = CONJA ? conj(nzval[j]) : nzval[j]
        valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
        tmp += vala * valb
    end
    C[row, k] += tmp * α
end

@kernel inbounds=true function kernel_spmatmul_csr_T!(
    C,
    @Const(rowptr),
    @Const(colval),
    @Const(nzval),
    @Const(B),
    α,
    ::Val{CONJA},
    ::Val{CONJB},
    ::Val{TRANSB},
) where {CONJA,CONJB,TRANSB}
    k, row = @index(Global, NTuple)

    Bi, Bj = TRANSB ? (k, row) : (row, k)

    valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
    axj = valb * α
    for j = rowptr[row]:(rowptr[row+1]-1) # nzrange(A, row)
        vala = CONJA ? conj(nzval[j]) : nzval[j]
        @atomic C[colval[j], k] += vala * axj
    end
end

@kernel inbounds=true unsafe_indices=true function kernel_workgroup_dot_csr_N!(
    block_results,
    @Const(x),
    @Const(rowptr),
    @Const(colval),
    @Const(nzval),
    @Const(y),
    @Const(m),
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

    # Each work-item accumulates its contribution from rows with stride
    local_sum = zero(eltype(block_results))
    for row = global_id:stride:m
        for j = rowptr[row]:(rowptr[row+1]-1)
            vala = CONJA ? conj(nzval[j]) : nzval[j]
            local_sum += dot(x[row], vala, y[colval[j]])
        end
    end

    # Store local sum in shared memory
    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        sum = zero(eltype(block_results))
        for i = 1:workgroup_size
            sum += shared[i]
        end
        block_results[group_id] = sum
    end
end

@kernel inbounds=true unsafe_indices=true function kernel_workgroup_dot_csr_T!(
    block_results,
    @Const(x),
    @Const(rowptr),
    @Const(colval),
    @Const(nzval),
    @Const(y),
    @Const(m),
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

    # Each work-item accumulates its contribution from rows with stride
    local_sum = zero(eltype(block_results))
    for row = global_id:stride:m
        for j = rowptr[row]:(rowptr[row+1]-1)
            vala = CONJA ? conj(nzval[j]) : nzval[j]
            local_sum += dot(x[colval[j]], vala, y[row])
        end
    end

    # Store local sum in shared memory
    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        sum = zero(eltype(block_results))
        for i = 1:workgroup_size
            sum += shared[i]
        end
        block_results[group_id] = sum
    end
end

# Kernel for adding sparse matrix to dense matrix (CSR format)
@kernel inbounds=true function kernel_add_sparse_to_dense_csr!(
    C,
    @Const(rowptr),
    @Const(colval),
    @Const(nzval),
)
    row = @index(Global)

    @inbounds for j = rowptr[row]:(rowptr[row+1]-1)
        C[row, colval[j]] += nzval[j]
    end
end

# Kernel for counting non-zeros per row when adding two CSR matrices
@kernel inbounds=true function kernel_count_nnz_per_row_csr!(
    nnz_per_row,
    @Const(rowptr_A),
    @Const(colval_A),
    @Const(rowptr_B),
    @Const(colval_B),
)
    row = @index(Global)

    i_A = rowptr_A[row]
    i_B = rowptr_B[row]
    end_A = rowptr_A[row+1]
    end_B = rowptr_B[row+1]

    count = 0
    while i_A < end_A && i_B < end_B
        col_A = colval_A[i_A]
        col_B = colval_B[i_B]
        if col_A < col_B
            count += 1
            i_A += 1
        elseif col_A > col_B
            count += 1
            i_B += 1
        else  # col_A == col_B
            count += 1
            i_A += 1
            i_B += 1
        end
    end

    # Add remaining entries from A
    count += (end_A - i_A)
    # Add remaining entries from B
    count += (end_B - i_B)

    nnz_per_row[row] = count
end

# Kernel for merging two CSR matrices (addition) with optional conjugation
@kernel inbounds=true function kernel_merge_csr!(
    colval_C,
    nzval_C,
    @Const(rowptr_C),
    @Const(rowptr_A),
    @Const(colval_A),
    @Const(nzval_A),
    @Const(rowptr_B),
    @Const(colval_B),
    @Const(nzval_B),
    ::Val{CONJA},
    ::Val{CONJB},
) where {CONJA,CONJB}
    row = @index(Global)

    i_A = rowptr_A[row]
    i_B = rowptr_B[row]
    i_C = rowptr_C[row]
    end_A = rowptr_A[row+1]
    end_B = rowptr_B[row+1]

    while i_A < end_A && i_B < end_B
        col_A = colval_A[i_A]
        col_B = colval_B[i_B]
        if col_A < col_B
            colval_C[i_C] = col_A
            nzval_C[i_C] = CONJA ? conj(nzval_A[i_A]) : nzval_A[i_A]
            i_A += 1
            i_C += 1
        elseif col_A > col_B
            colval_C[i_C] = col_B
            nzval_C[i_C] = CONJB ? conj(nzval_B[i_B]) : nzval_B[i_B]
            i_B += 1
            i_C += 1
        else  # col_A == col_B
            colval_C[i_C] = col_A
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
        colval_C[i_C] = colval_A[i_A]
        nzval_C[i_C] = CONJA ? conj(nzval_A[i_A]) : nzval_A[i_A]
        i_A += 1
        i_C += 1
    end

    # Copy remaining entries from B
    while i_B < end_B
        colval_C[i_C] = colval_B[i_B]
        nzval_C[i_C] = CONJB ? conj(nzval_B[i_B]) : nzval_B[i_B]
        i_B += 1
        i_C += 1
    end
end

# Kernels for sparse-sparse matrix multiplication (SpGEMM) in CSR format

# Kernel for counting non-zeros per row in C = A * B (CSR format)
# For each row i of A, we find all columns that will have nonzeros in row i of C
@kernel inbounds=true function kernel_count_nnz_spgemm_csr!(
    nnz_per_row,
    col_seen,
    @Const(rowptr_A),
    @Const(colval_A),
    @Const(rowptr_B),
    @Const(colval_B),
    @Const(n),
)
    row_A = @index(Global)
    
    # For row row_A of A, find all columns that will have nonzeros in row row_A of C
    # Use col_seen array to mark columns (needs to be cleared for each row)
    offset = (row_A - 1) * n
    
    # Clear the seen flags for this row
    for j = 1:n
        col_seen[offset + j] = false
    end
    
    count = 0
    # For each nonzero A[row_A, k]
    for idx_A = rowptr_A[row_A]:(rowptr_A[row_A + 1] - 1)
        k = colval_A[idx_A]  # column index in A (row index in B)
        
        # Add all columns from row k of B
        for idx_B = rowptr_B[k]:(rowptr_B[k + 1] - 1)
            j = colval_B[idx_B]  # column index
            if !col_seen[offset + j]
                col_seen[offset + j] = true
                count += 1
            end
        end
    end
    
    nnz_per_row[row_A] = count
end

# Kernel for computing C = A * B (CSR format)
@kernel inbounds=true function kernel_spgemm_csr!(
    colval_C,
    nzval_C,
    @Const(rowptr_C),
    @Const(rowptr_A),
    @Const(colval_A),
    @Const(nzval_A),
    @Const(rowptr_B),
    @Const(colval_B),
    @Const(nzval_B),
    col_accum,
    col_flags,
    @Const(n),
    ::Val{CONJA},
    ::Val{CONJB},
) where {CONJA,CONJB}
    row_A = @index(Global)
    
    # Offset for this row's workspace
    offset = (row_A - 1) * n
    
    # Clear accumulator and flags for this row
    for j = 1:n
        col_accum[offset + j] = zero(eltype(nzval_C))
        col_flags[offset + j] = false
    end
    
    # Accumulate: C[row_A, :] = sum over k of A[row_A, k] * B[k, :]
    for idx_A = rowptr_A[row_A]:(rowptr_A[row_A + 1] - 1)
        k = colval_A[idx_A]
        val_A = CONJA ? conj(nzval_A[idx_A]) : nzval_A[idx_A]
        
        # Add val_A * B[k, :] to accumulator
        for idx_B = rowptr_B[k]:(rowptr_B[k + 1] - 1)
            j = colval_B[idx_B]
            val_B = CONJB ? conj(nzval_B[idx_B]) : nzval_B[idx_B]
            col_accum[offset + j] += val_A * val_B
            col_flags[offset + j] = true
        end
    end
    
    # Write out results in sorted order
    write_pos = rowptr_C[row_A]
    for j = 1:n
        if col_flags[offset + j]
            colval_C[write_pos] = j
            nzval_C[write_pos] = col_accum[offset + j]
            write_pos += 1
        end
    end
end
