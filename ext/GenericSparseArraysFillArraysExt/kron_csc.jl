# Kronecker product with Diagonal{AbstractFill} for CSC format

using GenericSparseArrays: trans_adj_wrappers

function kron(
        D::Diagonal{Tv, <:AbstractFill{Tv}},
        B::GenericSparseMatrixCSC,
    ) where {Tv}
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(D, B_coo)
    return GenericSparseMatrixCSC(C_coo)
end

function kron(
        A::GenericSparseMatrixCSC,
        D::Diagonal{Tv, <:AbstractFill{Tv}},
    ) where {Tv}
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = kron(A_coo, D)
    return GenericSparseMatrixCSC(C_coo)
end

for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    trans == false && continue

    TypeB = wrap(:(T))

    @eval function kron(
            D::Diagonal{Tv1, <:AbstractFill{Tv1}},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        C_coo = kron(D, B_coo)
        return GenericSparseMatrixCSC(C_coo)
    end

    TypeA = wrap(:(T))
    @eval function kron(
            A::$TypeA,
            D::Diagonal{Tv2, <:AbstractFill{Tv2}},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        C_coo = kron(A_coo, D)
        return GenericSparseMatrixCSC(C_coo)
    end
end
