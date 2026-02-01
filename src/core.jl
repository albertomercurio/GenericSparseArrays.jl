# Abstract sparse hierarchy and common aliases

"""
    AbstractGenericSparseArray{Tv,Ti,N} <: AbstractSparseArray{Tv,Ti,N}

Supertype for sparse arrays that can have their underlying storage on various
devices (CPU, GPU, accelerators). This package keeps the hierarchy backend-agnostic;
dispatch is expected to leverage the concrete types of internal buffers (e.g. `Vector`,
`CuArray`, etc.) rather than an explicit backend flag.
"""
abstract type AbstractGenericSparseArray{Tv, Ti, N} <: AbstractSparseArray{Tv, Ti, N} end

const AbstractGenericSparseVector{Tv, Ti} = AbstractGenericSparseArray{Tv, Ti, 1}
const AbstractGenericSparseMatrix{Tv, Ti} = AbstractGenericSparseArray{Tv, Ti, 2}
const AbstractGenericSparseVecOrMat{Tv, Ti} =
    Union{AbstractGenericSparseVector{Tv, Ti}, AbstractGenericSparseMatrix{Tv, Ti}}

const AbstractGenericSparseMatrixInclAdjointAndTranspose = Union{
    AbstractGenericSparseMatrix,
    Adjoint{<:Any, <:AbstractGenericSparseMatrix},
    Transpose{<:Any, <:AbstractGenericSparseMatrix},
}

Base.sum(A::AbstractGenericSparseArray) = sum(nonzeros(A))

function LinearAlgebra.rmul!(A::AbstractGenericSparseArray, x::Number)
    rmul!(nonzeros(A), x)
    return A
end
function LinearAlgebra.lmul!(x::Number, A::AbstractGenericSparseArray)
    lmul!(x, nonzeros(A))
    return A
end

function LinearAlgebra.rdiv!(A::AbstractGenericSparseArray, x::Number)
    rdiv!(nonzeros(A), x)
    return A
end

Base.:+(A::AbstractGenericSparseArray) = copy(A)

Base.:*(A::AbstractGenericSparseArray, J::UniformScaling) = A * J.λ
Base.:*(J::UniformScaling, A::AbstractGenericSparseArray) = J.λ * A

SparseArrays.getnzval(A::AbstractGenericSparseArray) = nonzeros(A)
function SparseArrays.nnz(A::AbstractGenericSparseArray)
    return length(nonzeros(A))
end

KernelAbstractions.get_backend(A::AbstractGenericSparseArray) = get_backend(nonzeros(A))

# called by `show(io, MIME("text/plain"), ::AbstractGenericSparseMatrixInclAdjointAndTranspose)`
function Base.print_array(io::IO, A::AbstractGenericSparseMatrixInclAdjointAndTranspose)
    S = SparseMatrixCSC(A)
    return if max(size(S)...) < 16
        Base.print_matrix(io, S)
    else
        _show_with_braille_patterns(io, S)
    end
end

# Generic addition between AbstractGenericSparseMatrix and DenseMatrix
function Base.:+(A::AbstractGenericSparseMatrix, B::DenseMatrix)
    size(A) == size(B) || throw(
        DimensionMismatch(
            "dimensions must match: A has dims $(size(A)), B has dims $(size(B))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)

    backend_A == backend_B || throw(ArgumentError("Both arrays must have the same backend"))

    # Create a copy of B to avoid modifying the input
    C = copy(B)

    # Add the sparse values to C
    _add_sparse_to_dense!(C, A)

    return C
end

Base.:+(B::DenseMatrix, A::AbstractGenericSparseMatrix) = A + B

LinearAlgebra.issymmetric(A::Transpose{<:Any, <:AbstractGenericSparseMatrix}) = issymmetric(parent(A))
LinearAlgebra.issymmetric(A::Adjoint{<:Any, <:AbstractGenericSparseMatrix}) = issymmetric(parent(A))
LinearAlgebra.ishermitian(A::Transpose{<:Any, <:AbstractGenericSparseMatrix}) = ishermitian(parent(A))
LinearAlgebra.ishermitian(A::Adjoint{<:Any, <:AbstractGenericSparseMatrix}) = ishermitian(parent(A))

# Keep this at the end of the file
trans_adj_wrappers(fmt) = (
    (T -> :($fmt{$T}), false, false, identity, T -> :($T)),
    (T -> :(Transpose{$T, <:$fmt{$T}}), true, false, A -> :(parent($A)), T -> :($T <: Real)),
    (
        T -> :(Transpose{$T, <:$fmt{$T}}),
        true,
        false,
        A -> :(parent($A)),
        T -> :($T <: Complex),
    ),
    (T -> :(Adjoint{$T, <:$fmt{$T}}), true, true, A -> :(parent($A)), T -> :($T)),
)
