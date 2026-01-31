# Optimized kernels for kron with Diagonal{AbstractFill}

# Optimized kernel for kron(D, B) where D has uniform diagonal value (e.g., scaled identity)
@kernel inbounds = true function kernel_kron_scaled_identity_coo!(
        rowind_C,
        colind_C,
        nzval_C,
        @Const(scale_val),  # The uniform diagonal value
        @Const(n_D::Int),   # Size of the diagonal matrix
        @Const(rowind_B),
        @Const(colind_B),
        @Const(nzval_B),
        @Const(m_B::Int),
        @Const(n_B::Int),
    )
    idx = @index(Global, Linear)

    nnz_B = length(nzval_B)

    if idx <= n_D * nnz_B
        idx_D = div(idx - 1, nnz_B) + 1
        idx_B = mod(idx - 1, nnz_B) + 1

        i_B = rowind_B[idx_B]
        j_B = colind_B[idx_B]
        val_B = nzval_B[idx_B]

        rowind_C[idx] = (idx_D - 1) * m_B + i_B
        colind_C[idx] = (idx_D - 1) * n_B + j_B
        nzval_C[idx] = scale_val * val_B
    end
end

# Optimized kernel for kron(A, D) where D has uniform diagonal value (e.g., scaled identity)
@kernel inbounds = true function kernel_kron_coo_scaled_identity!(
        rowind_C,
        colind_C,
        nzval_C,
        @Const(rowind_A),
        @Const(colind_A),
        @Const(nzval_A),
        @Const(scale_val),  # The uniform diagonal value
        @Const(p::Int),     # Size of the diagonal matrix
    )
    idx = @index(Global, Linear)

    nnz_A = length(nzval_A)

    if idx <= nnz_A * p
        idx_A = div(idx - 1, p) + 1
        idx_D = mod(idx - 1, p) + 1

        i_A = rowind_A[idx_A]
        j_A = colind_A[idx_A]
        val_A = nzval_A[idx_A]

        rowind_C[idx] = (i_A - 1) * p + idx_D
        colind_C[idx] = (j_A - 1) * p + idx_D
        nzval_C[idx] = val_A * scale_val
    end
end
