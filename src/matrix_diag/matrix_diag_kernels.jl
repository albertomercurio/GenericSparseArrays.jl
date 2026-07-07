# Helper function to find which diagonal a flat nzval index belongs to
# and compute the (row, col) position. Used by all DIA kernels.
# Returns (i, j, found) where found is whether idx is valid.
@inline function _diag_index_to_ij(idx, offsets, diag_ptrs)
    ndiags = length(offsets)
    lo = 1
    hi = ndiags
    diag_idx = 1
    while lo <= hi
        mid = (lo + hi) ÷ 2
        if diag_ptrs[mid] <= idx
            diag_idx = mid
            lo = mid + 1
        else
            hi = mid - 1
        end
    end

    d = offsets[diag_idx]
    diag_start = diag_ptrs[diag_idx]
    local_pos = idx - diag_start + 1

    row_start = max(1, 1 - d)
    i = row_start + local_pos - 1
    j = i + d

    return (i, j)
end

# Kernels for SpMV: y = α * A * x + β * y (non-transposed)
# Launched with ndrange = (total_nnz, ncols_C) - one work item per (nz entry, output column)
@kernel inbounds = true function kernel_spmatmul_diag_N!(
        C,
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval),
        @Const(B),
        α,
        ::Val{conjA},
        ::Val{conjB},
        ::Val{transB},
    ) where {conjA, conjB, transB}
    nz_idx, k = @index(Global, NTuple)

    i, j = _diag_index_to_ij(nz_idx, offsets, diag_ptrs)

    val = nzval[nz_idx]
    val = conjA ? conj(val) : val

    Bi, Bj = transB ? (k, j) : (j, k)
    b_val = conjB ? conj(B[Bi, Bj]) : B[Bi, Bj]
    @atomic C[i, k] += α * val * b_val
end

# Kernels for SpMV: y = α * A' * x + β * y (transposed)
# A' has size (n, m), so row of A' = col of A, col of A' = row of A
@kernel inbounds = true function kernel_spmatmul_diag_T!(
        C,
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval),
        @Const(B),
        α,
        ::Val{conjA},
        ::Val{conjB},
        ::Val{transB},
    ) where {conjA, conjB, transB}
    nz_idx, k = @index(Global, NTuple)

    i, j = _diag_index_to_ij(nz_idx, offsets, diag_ptrs)

    # In original A: entry at (i, j) with value val
    # In A^T: entry at (j, i), so row=j, col=i
    val = nzval[nz_idx]
    val = conjA ? conj(val) : val

    Bi, Bj = transB ? (k, i) : (i, k)
    b_val = conjB ? conj(B[Bi, Bj]) : B[Bi, Bj]
    @atomic C[j, k] += α * val * b_val
end

# Kernel for three-argument dot: dot(x, A, y) = x' * A * y (non-transposed)
@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_diag_N!(
        block_results,
        @Const(x),
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval),
        @Const(y),
        @Const(total_nnz),
        ::Val{conjA},
    ) where {conjA}
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    shared = @localmem(eltype(block_results), workgroup_size)

    local_sum = zero(eltype(block_results))
    for idx in global_id:stride:total_nnz
        i, j = _diag_index_to_ij(idx, offsets, diag_ptrs)
        val = conjA ? conj(nzval[idx]) : nzval[idx]
        local_sum += dot(x[i], val, y[j])
    end

    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        s = zero(eltype(block_results))
        for k in 1:workgroup_size
            s += shared[k]
        end
        block_results[group_id] = s
    end
end

# Kernel for three-argument dot: dot(x, A', y) (transposed)
@kernel inbounds = true unsafe_indices = true function kernel_workgroup_dot_diag_T!(
        block_results,
        @Const(x),
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval),
        @Const(y),
        @Const(total_nnz),
        ::Val{conjA},
    ) where {conjA}
    local_id = @index(Local, Linear)
    group_id = @index(Group, Linear)
    global_id = @index(Global, Linear)

    workgroup_size = @uniform @groupsize()[1]
    stride = @uniform @ndrange()[1]

    shared = @localmem(eltype(block_results), workgroup_size)

    local_sum = zero(eltype(block_results))
    for idx in global_id:stride:total_nnz
        i, j = _diag_index_to_ij(idx, offsets, diag_ptrs)
        # A^T[j, i] = A[i, j], so x is indexed by j, y by i
        val = conjA ? conj(nzval[idx]) : nzval[idx]
        local_sum += dot(x[j], val, y[i])
    end

    shared[local_id] = local_sum
    @synchronize()

    if local_id == 1
        s = zero(eltype(block_results))
        for k in 1:workgroup_size
            s += shared[k]
        end
        block_results[group_id] = s
    end
end

# Kernel for adding sparse DIA entries to a dense matrix
@kernel inbounds = true function kernel_add_sparse_to_dense_diag!(
        C,
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval),
        m,
    )
    idx = @index(Global)

    i, j = _diag_index_to_ij(idx, offsets, diag_ptrs)
    C[i, j] += nzval[idx]
end

# Kernel for converting DIA format to COO format
@kernel inbounds = true function kernel_diag_to_coo!(
        rowind,
        colind,
        nzval_out,
        @Const(offsets),
        @Const(diag_ptrs),
        @Const(nzval_in),
        m,
    )
    idx = @index(Global)

    i, j = _diag_index_to_ij(idx, offsets, diag_ptrs)

    rowind[idx] = i
    colind[idx] = j
    nzval_out[idx] = nzval_in[idx]
end
