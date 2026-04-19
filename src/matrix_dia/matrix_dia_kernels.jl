# Kernels for DIA sparse matrix operations

# ============================================================================
# Matrix-Vector multiplication: y = α * A * x + β * y
# Non-transposed case: each thread handles one row, loops over diagonals
# ============================================================================

@kernel inbounds = true function kernel_spmv_dia_N!(
        y,
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(x),
        α,
        ::Val{CONJA},
    ) where {CONJA}
    i = @index(Global)

    tmp = zero(eltype(y))
    ndiags = length(offsets)
    for d in 1:ndiags
        k = offsets[d]
        col = i + k
        if col >= 1 && col <= length(x)
            row_start = max(1, 1 - k)
            j = diagptr[d] + (i - row_start)
            vala = CONJA ? conj(data[j]) : data[j]
            tmp += vala * x[col]
        end
    end
    y[i] += α * tmp
end

# Transposed case: A^T * x or A^H * x
# For diagonal d with offset k: A[row, row+k], so A^T[col, row] with col = row + k.
# Each thread handles one output index (= col of original A), loops over diagonals.
@kernel inbounds = true function kernel_spmv_dia_T!(
        y,
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(x),
        α,
        @Const(m),
        ::Val{CONJA},
    ) where {CONJA}
    col = @index(Global)  # col in original A = row in A^T

    tmp = zero(eltype(y))
    ndiags = length(offsets)
    for d in 1:ndiags
        k = offsets[d]
        row = col - k  # A[row, col] exists when col = row + k
        if row >= 1 && row <= m
            row_start = max(1, 1 - k)
            j = diagptr[d] + (row - row_start)
            vala = CONJA ? conj(data[j]) : data[j]
            tmp += vala * x[row]
        end
    end
    y[col] += α * tmp
end

# ============================================================================
# Matrix-Matrix multiplication: C = α * A * B + β * C
# Non-transposed case
# ============================================================================

@kernel inbounds = true function kernel_spmatmul_dia_N!(
        C,
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(B),
        α,
        ::Val{CONJA},
        ::Val{CONJB},
        ::Val{TRANSB},
    ) where {CONJA, CONJB, TRANSB}
    bk, i = @index(Global, NTuple)

    tmp = zero(eltype(C))
    ndiags = length(offsets)
    m_B = TRANSB ? size(B, 2) : size(B, 1)
    for d in 1:ndiags
        k = offsets[d]
        col = i + k
        if col >= 1 && col <= m_B
            row_start = max(1, 1 - k)
            j = diagptr[d] + (i - row_start)
            vala = CONJA ? conj(data[j]) : data[j]
            Bi, Bj = TRANSB ? (bk, col) : (col, bk)
            valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
            tmp += vala * valb
        end
    end
    C[i, bk] += α * tmp
end

# Transposed case: C = α * A^T * B (or A^H * B)
@kernel inbounds = true function kernel_spmatmul_dia_T!(
        C,
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(B),
        α,
        @Const(m),
        ::Val{CONJA},
        ::Val{CONJB},
        ::Val{TRANSB},
    ) where {CONJA, CONJB, TRANSB}
    bk, col = @index(Global, NTuple)  # col in original A

    tmp = zero(eltype(C))
    ndiags = length(offsets)
    for d in 1:ndiags
        k = offsets[d]
        row = col - k
        if row >= 1 && row <= m
            row_start = max(1, 1 - k)
            j = diagptr[d] + (row - row_start)
            vala = CONJA ? conj(data[j]) : data[j]
            Bi, Bj = TRANSB ? (bk, row) : (row, bk)
            valb = CONJB ? conj(B[Bi, Bj]) : B[Bi, Bj]
            tmp += vala * valb
        end
    end
    C[col, bk] += α * tmp
end

# ============================================================================
# Three-argument dot: dot(x, A, y) = x^H * A * y
# ============================================================================

@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_dia_N!(
        block_results,
        @Const(x),
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(y),
        @Const(m),
        ::Val{CONJA},
    ) where {CONJA}
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    shared = @localmem(eltype(block_results), workgroup_size)

    local_sum = zero(eltype(block_results))
    ndiags = length(offsets)
    for i in global_id:stride:m
        for d in 1:ndiags
            k = offsets[d]
            col = i + k
            if col >= 1 && col <= length(y)
                row_start = max(1, 1 - k)
                j = diagptr[d] + (i - row_start)
                vala = CONJA ? conj(data[j]) : data[j]
                local_sum += dot(x[i], vala, y[col])
            end
        end
    end

    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        s = zero(eltype(block_results))
        for idx in 1:workgroup_size
            s += shared[idx]
        end
        block_results[group_id] = s
    end
end

@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_dia_T!(
        block_results,
        @Const(x),
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
        @Const(y),
        @Const(m),
        @Const(n),
        ::Val{CONJA},
    ) where {CONJA}
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    shared = @localmem(eltype(block_results), workgroup_size)

    local_sum = zero(eltype(block_results))
    ndiags = length(offsets)
    for col in global_id:stride:n
        for d in 1:ndiags
            k = offsets[d]
            row = col - k
            if row >= 1 && row <= m
                row_start = max(1, 1 - k)
                j = diagptr[d] + (row - row_start)
                vala = CONJA ? conj(data[j]) : data[j]
                local_sum += dot(x[col], vala, y[row])
            end
        end
    end

    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        s = zero(eltype(block_results))
        for idx in 1:workgroup_size
            s += shared[idx]
        end
        block_results[group_id] = s
    end
end

# ============================================================================
# Adding DIA sparse matrix to dense matrix
# ============================================================================

@kernel inbounds = true function kernel_add_sparse_to_dense_dia!(
        C,
        @Const(data),
        @Const(offsets),
        @Const(diagptr),
    )
    i = @index(Global)

    ndiags = length(offsets)
    n = size(C, 2)
    for d in 1:ndiags
        k = offsets[d]
        col = i + k
        if col >= 1 && col <= n
            row_start = max(1, 1 - k)
            j = diagptr[d] + (i - row_start)
            C[i, col] += data[j]
        end
    end
end
