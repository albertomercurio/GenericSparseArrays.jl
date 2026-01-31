# Kronecker product with Diagonal{AbstractFill} for COO format

using GenericSparseArrays: trans_adj_wrappers

function kron(
        D::Diagonal{Tv1, <:AbstractFill{Tv1}},
        B::GenericSparseMatrixCOO{Tv2, Ti},
    ) where {Tv1, Tv2, Ti}
    n_D = size(D, 1)
    m_B, n_B = size(B)

    # Result dimensions
    m_C = n_D * m_B
    n_C = n_D * n_B
    nnz_C = n_D * nnz(B)

    # Determine result types
    Tv = promote_type(Tv1, Tv2)

    backend = get_backend(B)

    # Allocate output arrays
    rowind_C = similar(B.rowind, Ti, nnz_C)
    colind_C = similar(B.colind, Ti, nnz_C)
    nzval_C = similar(B.nzval, Tv, nnz_C)

    # Get the uniform fill value
    fill_value = getindex_value(D.diag)

    # Launch optimized kernel
    kernel! = kernel_kron_scaled_identity_coo!(backend)
    kernel!(
        rowind_C,
        colind_C,
        nzval_C,
        fill_value,
        n_D,
        B.rowind,
        B.colind,
        B.nzval,
        m_B,
        n_B;
        ndrange = nnz_C,
    )

    return GenericSparseMatrixCOO(m_C, n_C, rowind_C, colind_C, nzval_C)
end

function kron(
        A::GenericSparseMatrixCOO{Tv1, Ti},
        D::Diagonal{Tv2, <:AbstractFill{Tv2}},
    ) where {Tv1, Ti, Tv2}
    m_A, n_A = size(A)
    p = size(D, 1)  # D is p×p

    # Result dimensions
    m_C = m_A * p
    n_C = n_A * p
    nnz_C = nnz(A) * p

    # Determine result types
    Tv = promote_type(Tv1, Tv2)

    backend = get_backend(A)

    # Allocate output arrays
    rowind_C = similar(A.rowind, Ti, nnz_C)
    colind_C = similar(A.colind, Ti, nnz_C)
    nzval_C = similar(A.nzval, Tv, nnz_C)

    # Get the uniform fill value
    fill_value = getindex_value(D.diag)

    # Launch optimized kernel
    kernel! = kernel_kron_coo_scaled_identity!(backend)
    kernel!(
        rowind_C,
        colind_C,
        nzval_C,
        A.rowind,
        A.colind,
        A.nzval,
        fill_value,
        p;
        ndrange = nnz_C,
    )

    return GenericSparseMatrixCOO(m_C, n_C, rowind_C, colind_C, nzval_C)
end

# kron with Diagonal{AbstractFill} and transpose/adjoint wrappers for COO
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    trans == false && continue

    TypeB = wrap(:(T))

    @eval function kron(
            D::Diagonal{Tv1, <:AbstractFill{Tv1}},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        return kron(D, B_coo)
    end

    TypeA = wrap(:(T))
    @eval function kron(
            A::$TypeA,
            D::Diagonal{Tv2, <:AbstractFill{Tv2}},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        return kron(A_coo, D)
    end
end
