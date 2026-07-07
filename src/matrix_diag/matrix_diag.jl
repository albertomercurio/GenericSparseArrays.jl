# GenericSparseDiagMatrix implementation

"""
    GenericSparseDiagMatrix{Tv,Ti,OffsetsT<:AbstractVector{Ti},DiagPtrsT<:AbstractVector{Ti},NzValT<:AbstractVector{Tv}} <: AbstractGenericSparseMatrix{Tv,Ti}

Sparse Diagonal (DIA) format matrix with generic storage vectors. Stores the
matrix as a collection of diagonals. Each diagonal is identified by an offset
from the main diagonal (0 = main, positive = above, negative = below).

The values of all diagonals are packed contiguously in `nzval`, and `diag_ptrs`
indicates where each diagonal's data starts (similar to `colptr` in CSC).

# Fields
- `m::Int`               - number of rows
- `n::Int`               - number of columns
- `offsets::OffsetsT`    - diagonal offsets (length = number of diagonals)
- `diag_ptrs::DiagPtrsT` - pointer to the start of each diagonal in nzval (length = ndiags+1)
- `nzval::NzValT`        - stored values (packed diagonals)
"""
struct GenericSparseDiagMatrix{
        Tv,
        Ti,
        OffsetsT <: AbstractVector{Ti},
        DiagPtrsT <: AbstractVector{Ti},
        NzValT <: AbstractVector{Tv},
    } <: AbstractGenericSparseMatrix{Tv, Ti}
    m::Int
    n::Int
    offsets::OffsetsT
    diag_ptrs::DiagPtrsT
    nzval::NzValT

    function GenericSparseDiagMatrix(
            m::Integer,
            n::Integer,
            offsets::OffsetsT,
            diag_ptrs::DiagPtrsT,
            nzval::NzValT,
        ) where {
            Tv,
            Ti,
            OffsetsT <: AbstractVector{Ti},
            DiagPtrsT <: AbstractVector{Ti},
            NzValT <: AbstractVector{Tv},
        }
        get_backend(offsets) == get_backend(diag_ptrs) == get_backend(nzval) ||
            throw(ArgumentError("All storage vectors must be on the same device/backend."))

        m >= 0 || throw(ArgumentError("m must be non-negative"))
        n >= 0 || throw(ArgumentError("n must be non-negative"))

        ndiags = length(offsets)
        length(diag_ptrs) == ndiags + 1 ||
            throw(ArgumentError("diag_ptrs length must be ndiags+1"))

        return new{Tv, Ti, OffsetsT, DiagPtrsT, NzValT}(
            Int(m),
            Int(n),
            copy(offsets),
            copy(diag_ptrs),
            copy(nzval),
        )
    end
end

"""
    _diag_length(m, n, d)

Compute the length of the diagonal at offset `d` for an m×n matrix.
"""
function _diag_length(m::Integer, n::Integer, d::Integer)
    if d >= 0
        return min(m, n - d)
    else
        return min(m + d, n)
    end
end

"""
    GenericSparseDiagMatrix(m, n, diag_offsets, diag_values)

Construct a `GenericSparseDiagMatrix` from a vector of diagonal offsets and
a vector of diagonal value vectors.
"""
function GenericSparseDiagMatrix(
        m::Integer,
        n::Integer,
        diag_offsets::AbstractVector{Ti},
        diag_values::AbstractVector{<:AbstractVector{Tv}},
    ) where {Tv, Ti <: Integer}
    ndiags = length(diag_offsets)
    length(diag_values) == ndiags ||
        throw(ArgumentError("diag_offsets and diag_values must have the same length"))

    # Validate diagonal lengths
    for k in 1:ndiags
        d = diag_offsets[k]
        expected_len = _diag_length(m, n, d)
        expected_len >= 0 ||
            throw(ArgumentError("Invalid diagonal offset $d for $m×$n matrix"))
        length(diag_values[k]) == expected_len ||
            throw(
                ArgumentError(
                    "Diagonal at offset $d should have length $expected_len, got $(length(diag_values[k]))",
                ),
            )
    end

    # Build diag_ptrs on CPU
    diag_ptrs_cpu = Vector{Ti}(undef, ndiags + 1)
    diag_ptrs_cpu[1] = one(Ti)
    for k in 1:ndiags
        diag_ptrs_cpu[k + 1] = diag_ptrs_cpu[k] + Ti(length(diag_values[k]))
    end

    # Concatenate all diagonal values
    total_nnz = diag_ptrs_cpu[end] - one(Ti)
    nzval = similar(diag_values[1], Tv, Int(total_nnz))
    pos = 1
    for k in 1:ndiags
        len = length(diag_values[k])
        nzval[pos:(pos + len - 1)] .= diag_values[k]
        pos += len
    end

    # Build offsets
    offsets = similar(diag_values[1], Ti, ndiags)
    offsets .= diag_offsets

    diag_ptrs = similar(diag_values[1], Ti, ndiags + 1)
    diag_ptrs .= diag_ptrs_cpu

    return GenericSparseDiagMatrix(m, n, offsets, diag_ptrs, nzval)
end

# Conversion from SparseMatrixCSC
function GenericSparseDiagMatrix(A::SparseMatrixCSC{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)

    # Find all non-zero diagonals
    diag_set = Set{Ti}()
    for col in 1:n
        for j in nzrange(A, col)
            row = rowvals(A)[j]
            d = Ti(col - row)
            push!(diag_set, d)
        end
    end

    diag_offsets = sort!(collect(diag_set))
    ndiags = length(diag_offsets)

    if ndiags == 0
        offsets = Vector{Ti}()
        diag_ptrs = Ti[one(Ti)]
        nzval = Vector{Tv}()
        return GenericSparseDiagMatrix(m, n, offsets, diag_ptrs, nzval)
    end

    # Build diag_ptrs
    diag_ptrs = Vector{Ti}(undef, ndiags + 1)
    diag_ptrs[1] = one(Ti)
    for k in 1:ndiags
        d = diag_offsets[k]
        diag_ptrs[k + 1] = diag_ptrs[k] + Ti(_diag_length(m, n, Int(d)))
    end

    total_nnz = Int(diag_ptrs[end] - one(Ti))
    nzval = zeros(Tv, total_nnz)

    # Create a map from offset to diagonal index
    offset_to_idx = Dict{Ti, Int}()
    for k in 1:ndiags
        offset_to_idx[diag_offsets[k]] = k
    end

    # Fill nzval
    for col in 1:n
        for j in nzrange(A, col)
            row = rowvals(A)[j]
            d = Ti(col - row)
            k = offset_to_idx[d]
            row_start = max(1, 1 - Int(d))
            local_idx = row - row_start + 1
            nzval[Int(diag_ptrs[k]) + local_idx - 1] = nonzeros(A)[j]
        end
    end

    return GenericSparseDiagMatrix(m, n, diag_offsets, diag_ptrs, nzval)
end

Adapt.adapt_structure(to, A::GenericSparseDiagMatrix) = GenericSparseDiagMatrix(
    A.m,
    A.n,
    Adapt.adapt_structure(to, A.offsets),
    Adapt.adapt_structure(to, A.diag_ptrs),
    Adapt.adapt_structure(to, A.nzval),
)

Base.size(A::GenericSparseDiagMatrix) = (A.m, A.n)
Base.length(A::GenericSparseDiagMatrix) = A.m * A.n
Base.copy(A::GenericSparseDiagMatrix) =
    GenericSparseDiagMatrix(A.m, A.n, copy(A.offsets), copy(A.diag_ptrs), copy(A.nzval))

Base.collect(A::GenericSparseDiagMatrix) = collect(SparseMatrixCSC(A))

function Base.zero(A::GenericSparseDiagMatrix)
    offsets = similar(A.offsets, 0)
    diag_ptrs = similar(A.diag_ptrs, 1)
    fill!(diag_ptrs, one(eltype(diag_ptrs)))
    nzval = similar(A.nzval, 0)
    return GenericSparseDiagMatrix(A.m, A.n, offsets, diag_ptrs, nzval)
end

function Base.:-(A::GenericSparseDiagMatrix)
    return GenericSparseDiagMatrix(A.m, A.n, copy(A.offsets), copy(A.diag_ptrs), -A.nzval)
end

Base.conj(A::GenericSparseDiagMatrix{<:Real}) = A
function Base.conj(A::GenericSparseDiagMatrix{<:Complex})
    return GenericSparseDiagMatrix(
        A.m, A.n, copy(A.offsets), copy(A.diag_ptrs), conj.(A.nzval),
    )
end

Base.real(A::GenericSparseDiagMatrix{<:Real}) = A
function Base.real(A::GenericSparseDiagMatrix{<:Complex})
    return GenericSparseDiagMatrix(
        A.m, A.n, copy(A.offsets), copy(A.diag_ptrs), real.(A.nzval),
    )
end

Base.imag(A::GenericSparseDiagMatrix{<:Real}) = zero(A)
function Base.imag(A::GenericSparseDiagMatrix{<:Complex})
    return GenericSparseDiagMatrix(
        A.m, A.n, copy(A.offsets), copy(A.diag_ptrs), imag.(A.nzval),
    )
end

SparseArrays.nonzeros(A::GenericSparseDiagMatrix) = A.nzval
getoffsets(A::GenericSparseDiagMatrix) = A.offsets
getdiagptrs(A::GenericSparseDiagMatrix) = A.diag_ptrs

function LinearAlgebra.tr(A::GenericSparseDiagMatrix)
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to compute the trace."))

    # The trace is the sum of the main diagonal (offset 0).
    # Find if offset 0 exists
    backend = get_backend(A)
    offsets = A.offsets
    diag_ptrs = A.diag_ptrs

    # We need to find the diagonal with offset 0
    # To avoid scalar indexing, search on CPU
    offsets_cpu = collect(offsets)
    diag_ptrs_cpu = collect(diag_ptrs)

    for k in eachindex(offsets_cpu)
        if offsets_cpu[k] == 0
            start_idx = diag_ptrs_cpu[k]
            end_idx = diag_ptrs_cpu[k + 1] - 1
            return sum(A.nzval[start_idx:end_idx])
        end
    end

    return zero(eltype(A))
end

# Matrix-Vector and Matrix-Matrix multiplication
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:DenseVecOrMat)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))
        TypeC = :(DenseVecOrMat{T3})

        kernel_spmatmul! = transa ? :kernel_spmatmul_diag_T! : :kernel_spmatmul_diag_N!

        @eval function LinearAlgebra.mul!(
                C::$TypeC,
                A::$TypeA,
                B::$TypeB,
                α::Number,
                β::Number,
            ) where {$(whereT1(:T1)), $(whereT2(:T2)), T3}
            size(A, 2) == size(B, 1) || throw(
                DimensionMismatch(
                    "second dimension of A, $(size(A, 2)), does not match the first dimension of B, $(size(B, 1))",
                ),
            )
            size(A, 1) == size(C, 1) || throw(
                DimensionMismatch(
                    "first dimension of A, $(size(A, 1)), does not match the first dimension of C, $(size(C, 1))",
                ),
            )
            size(B, 2) == size(C, 2) || throw(
                DimensionMismatch(
                    "second dimension of B, $(size(B, 2)), does not match the second dimension of C, $(size(C, 2))",
                ),
            )

            promote_type(T1, T2, eltype(α), eltype(β)) <: T3 || throw(
                ArgumentError(
                    "element types of A, B, α, and β must be promotable to the element type of C",
                ),
            )

            _A = $(unwrapa(:A))
            _B = $(unwrapb(:B))

            backend_C = get_backend(C)
            backend_A = get_backend(_A)
            backend_B = get_backend(_B)

            backend_A == backend_B == backend_C ||
                throw(ArgumentError("All arrays must have the same backend"))

            β != one(β) && LinearAlgebra._rmul_or_fill!(C, β)

            total_nnz = nnz(_A)
            total_nnz == 0 && return C

            kernel! = $kernel_spmatmul!(backend_A)
            kernel!(
                C,
                getoffsets(_A),
                getdiagptrs(_A),
                getnzval(_A),
                _B,
                α,
                Val{$conja}(),
                Val{$conjb}(),
                Val{$transb}();
                ndrange = (total_nnz, size(C, 2)),
            )

            return C
        end
    end
end

# Three-argument dot product: dot(x, A, y) = x' * A * y
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    TypeA = wrapa(:(T1))

    kernel_dot! = transa ? :kernel_workgroup_dot_diag_T! : :kernel_workgroup_dot_diag_N!

    @eval function LinearAlgebra.dot(
            x::AbstractVector{T2},
            A::$TypeA,
            y::AbstractVector{T3},
        ) where {$(whereT1(:T1)), T2, T3}
        size(A, 1) == length(x) || throw(
            DimensionMismatch(
                "first dimension of A, $(size(A, 1)), does not match the length of x, $(length(x))",
            ),
        )
        size(A, 2) == length(y) || throw(
            DimensionMismatch(
                "second dimension of A, $(size(A, 2)), does not match the length of y, $(length(y))",
            ),
        )

        _A = $(unwrapa(:A))

        backend_x = get_backend(x)
        backend_A = get_backend(_A)
        backend_y = get_backend(y)

        backend_x == backend_A == backend_y ||
            throw(ArgumentError("All arrays must have the same backend"))

        T = promote_type(T1, T2, T3)

        total_nnz = nnz(_A)
        total_nnz == 0 && return zero(T)

        nzval = getnzval(_A)

        backend = backend_A

        group_size = 256
        n_groups = min(cld(total_nnz, group_size), 256)
        total_workitems = group_size * n_groups

        # Allocate array for block results (one per workgroup)
        block_results = similar(nzval, T, n_groups)

        # Launch kernel with workgroup configuration
        kernel! = $kernel_dot!(backend, group_size)
        kernel!(
            block_results,
            x,
            getoffsets(_A),
            getdiagptrs(_A),
            nzval,
            y,
            total_nnz,
            Val{$conja}();
            ndrange = (total_workitems,),
        )

        # Final reduction: sum all block results
        return sum(block_results)
    end
end

# Helper function for adding GenericSparseDiagMatrix to dense matrix
function _add_sparse_to_dense!(C::DenseMatrix, A::GenericSparseDiagMatrix)
    backend = get_backend(A)
    nnz_val = nnz(A)
    nnz_val == 0 && return C

    kernel! = kernel_add_sparse_to_dense_diag!(backend)
    kernel!(C, getoffsets(A), getdiagptrs(A), getnzval(A), A.m; ndrange = (nnz_val,))

    return C
end

# Addition between two GenericSparseDiagMatrix: convert to COO, add, convert back
function Base.:+(A::GenericSparseDiagMatrix, B::GenericSparseDiagMatrix)
    size(A) == size(B) || throw(
        DimensionMismatch(
            "dimensions must match: A has dims $(size(A)), B has dims $(size(B))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    # Convert to COO, add, convert back
    A_coo = GenericSparseMatrixCOO(A)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = A_coo + B_coo
    return GenericSparseDiagMatrix(C_coo)
end

# Addition with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseDiagMatrix)
        # Skip the case where both are not transposed (already handled above)
        (transa == false && transb == false) && continue

        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function Base.:+(A::$TypeA, B::$TypeB) where {$(whereT1(:T1)), $(whereT2(:T2))}
            size(A) == size(B) || throw(
                DimensionMismatch(
                    "dimensions must match: A has dims $(size(A)), B has dims $(size(B))",
                ),
            )

            # Convert to COO, add, convert back
            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = A_coo + B_coo
            return GenericSparseDiagMatrix(C_coo)
        end

        @eval function Base.:-(A::$TypeA, B::$TypeB) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return A + (-B)
        end
    end
end

# Addition with UniformScaling
function Base.:+(A::GenericSparseDiagMatrix{Tv, Ti}, J::UniformScaling) where {Tv, Ti}
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to add UniformScaling."))
    λ = J.λ
    iszero(λ) && return copy(A)

    # Convert to COO, add UniformScaling, convert back
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = A_coo + J
    return GenericSparseDiagMatrix(C_coo)
end

# Sparse-sparse multiplication: delegate to COO
function Base.:(*)(A::GenericSparseDiagMatrix, B::GenericSparseDiagMatrix)
    size(A, 2) == size(B, 1) || throw(
        DimensionMismatch(
            "second dimension of A, $(size(A, 2)), does not match first dimension of B, $(size(B, 1))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    # Convert to COO, multiply via CSC, convert back
    A_coo = GenericSparseMatrixCOO(A)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = A_coo * B_coo
    return GenericSparseDiagMatrix(C_coo)
end

# Multiplication with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseDiagMatrix)
        # Skip the case where both are not transposed (already handled above)
        (transa == false && transb == false) && continue

        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function Base.:(*)(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            size(A, 2) == size(B, 1) || throw(
                DimensionMismatch(
                    "second dimension of A, $(size(A, 2)), does not match first dimension of B, $(size(B, 1))",
                ),
            )

            backend_A = get_backend($(unwrapa(:A)))
            backend_B = get_backend($(unwrapb(:B)))
            backend_A == backend_B ||
                throw(ArgumentError("Both matrices must have the same backend"))

            # Convert to COO, multiply via CSC, convert back
            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = A_coo * B_coo
            return GenericSparseDiagMatrix(C_coo)
        end
    end
end

# Kronecker product: delegate to COO
function LinearAlgebra.kron(
        A::GenericSparseDiagMatrix{Tv1, Ti1},
        B::GenericSparseDiagMatrix{Tv2, Ti2},
    ) where {Tv1, Ti1, Tv2, Ti2}
    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B || throw(ArgumentError("Both arrays must have the same backend"))

    A_coo = GenericSparseMatrixCOO(A)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(A_coo, B_coo)
    return GenericSparseDiagMatrix(C_coo)
end

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:GenericSparseDiagMatrix)
        # Skip the case where both are not transposed (already handled above)
        (transa == false && transb == false) && continue

        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function LinearAlgebra.kron(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return kron(GenericSparseMatrixCOO(A), GenericSparseMatrixCOO(B)) |> GenericSparseDiagMatrix
        end
    end
end

# kron with Diagonal
function LinearAlgebra.kron(
        D::Diagonal{Tv1},
        B::GenericSparseDiagMatrix{Tv2, Ti},
    ) where {Tv1, Tv2, Ti}
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(D, B_coo)
    return GenericSparseDiagMatrix(C_coo)
end

function LinearAlgebra.kron(
        A::GenericSparseDiagMatrix{Tv1, Ti},
        D::Diagonal{Tv2},
    ) where {Tv1, Ti, Tv2}
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = kron(A_coo, D)
    return GenericSparseDiagMatrix(C_coo)
end

# kron with Diagonal and transpose/adjoint wrappers
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseDiagMatrix)
    # Skip identity case (already handled above)
    trans == false && continue

    TypeB = wrap(:(T))

    # kron(D, op(B))
    @eval function LinearAlgebra.kron(
            D::Diagonal{Tv1},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        return kron(D, B_coo) |> GenericSparseDiagMatrix
    end

    # kron(op(A), D)
    TypeA = wrap(:(T))
    @eval function LinearAlgebra.kron(
            A::$TypeA,
            D::Diagonal{Tv2},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        return kron(A_coo, D) |> GenericSparseDiagMatrix
    end
end

function LinearAlgebra.issymmetric(A::GenericSparseDiagMatrix)
    m, n = size(A)
    m == n || return false
    return issymmetric(GenericSparseMatrixCSC(A))
end

function LinearAlgebra.ishermitian(A::GenericSparseDiagMatrix)
    m, n = size(A)
    m == n || return false
    return ishermitian(GenericSparseMatrixCSC(A))
end
