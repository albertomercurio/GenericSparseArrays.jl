# GenericSparseMatrixCOO implementation

"""
    GenericSparseMatrixCOO{Tv,Ti,RowIndT<:AbstractVector{Ti},ColIndT<:AbstractVector{Ti},NzValT<:AbstractVector{Tv}} <: AbstractGenericSparseMatrix{Tv,Ti}

Coordinate (COO) sparse matrix with generic storage vectors for row indices,
column indices, and nonzero values. Buffer types (e.g. `Vector`, GPU array
types) enable dispatch on device characteristics.

# Fields
- `m::Int`               - number of rows
- `n::Int`               - number of columns
- `rowind::RowIndT`      - row indices of stored entries
- `colind::ColIndT`      - column indices of stored entries
- `nzval::NzValT`        - stored values
"""
struct GenericSparseMatrixCOO{
        Tv,
        Ti,
        RowIndT <: AbstractVector{Ti},
        ColIndT <: AbstractVector{Ti},
        NzValT <: AbstractVector{Tv},
    } <: AbstractGenericSparseMatrix{Tv, Ti}
    m::Int
    n::Int
    rowind::RowIndT
    colind::ColIndT
    nzval::NzValT

    function GenericSparseMatrixCOO(
            m::Integer,
            n::Integer,
            rowind::RowIndT,
            colind::ColIndT,
            nzval::NzValT,
        ) where {
            Tv,
            Ti,
            RowIndT <: AbstractVector{Ti},
            ColIndT <: AbstractVector{Ti},
            NzValT <: AbstractVector{Tv},
        }
        get_backend(rowind) == get_backend(colind) == get_backend(nzval) ||
            throw(ArgumentError("All storage vectors must be on the same device/backend."))

        m >= 0 || throw(ArgumentError("m must be non-negative"))
        n >= 0 || throw(ArgumentError("n must be non-negative"))
        SparseArrays.sparse_check_Ti(m, n, Ti)

        length(rowind) == length(colind) == length(nzval) ||
            throw(ArgumentError("rowind, colind, and nzval must have same length"))

        return new{Tv, Ti, RowIndT, ColIndT, NzValT}(
            Int(m),
            Int(n),
            copy(rowind),
            copy(colind),
            copy(nzval),
        )
    end
end

# Conversion from SparseMatrixCSC to COO
function GenericSparseMatrixCOO(A::SparseMatrixCSC{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    rowind = Vector{Ti}(undef, nnz_count)
    colind = Vector{Ti}(undef, nnz_count)
    nzval = Vector{Tv}(undef, nnz_count)

    idx = 1
    for col in 1:n
        for j in nzrange(A, col)
            rowind[idx] = rowvals(A)[j]
            colind[idx] = col
            nzval[idx] = nonzeros(A)[j]
            idx += 1
        end
    end

    return GenericSparseMatrixCOO(m, n, rowind, colind, nzval)
end

Adapt.adapt_structure(to, A::GenericSparseMatrixCOO) = GenericSparseMatrixCOO(
    A.m,
    A.n,
    Adapt.adapt_structure(to, A.rowind),
    Adapt.adapt_structure(to, A.colind),
    Adapt.adapt_structure(to, A.nzval),
)

Base.size(A::GenericSparseMatrixCOO) = (A.m, A.n)
Base.length(A::GenericSparseMatrixCOO) = A.m * A.n
Base.copy(A::GenericSparseMatrixCOO) =
    GenericSparseMatrixCOO(A.m, A.n, copy(A.rowind), copy(A.colind), copy(A.nzval))

Base.collect(A::GenericSparseMatrixCOO) = collect(SparseMatrixCSC(A))

function Base.zero(A::GenericSparseMatrixCOO)
    rowind = similar(A.rowind, 0)
    colind = similar(A.colind, 0)
    nzval = similar(A.nzval, 0)
    return GenericSparseMatrixCOO(A.m, A.n, rowind, colind, nzval)
end

function Base.:(*)(α::Number, A::GenericSparseMatrixCOO)
    return GenericSparseMatrixCOO(
        A.m,
        A.n,
        copy(getrowind(A)),
        copy(getcolind(A)),
        α .* nonzeros(A),
    )
end
Base.:(*)(A::GenericSparseMatrixCOO, α::Number) = α * A
Base.:(/)(A::GenericSparseMatrixCOO, α::Number) = (1 / α) * A

function Base.:-(A::GenericSparseMatrixCOO)
    return GenericSparseMatrixCOO(A.m, A.n, copy(A.rowind), copy(A.colind), -A.nzval)
end

Base.conj(A::GenericSparseMatrixCOO{<:Real}) = A
function Base.conj(A::GenericSparseMatrixCOO{<:Complex})
    return GenericSparseMatrixCOO(A.m, A.n, copy(A.rowind), copy(A.colind), conj.(A.nzval))
end

Base.real(A::GenericSparseMatrixCOO{<:Real}) = A
function Base.real(A::GenericSparseMatrixCOO{<:Complex})
    return GenericSparseMatrixCOO(A.m, A.n, copy(A.rowind), copy(A.colind), real.(A.nzval))
end

Base.imag(A::GenericSparseMatrixCOO{<:Real}) = zero(A)
function Base.imag(A::GenericSparseMatrixCOO{<:Complex})
    return GenericSparseMatrixCOO(A.m, A.n, copy(A.rowind), copy(A.colind), imag.(A.nzval))
end

SparseArrays.nonzeros(A::GenericSparseMatrixCOO) = A.nzval
getrowind(A::GenericSparseMatrixCOO) = A.rowind
getcolind(A::GenericSparseMatrixCOO) = A.colind
SparseArrays.getnzval(A::GenericSparseMatrixCOO) = nonzeros(A)

function LinearAlgebra.tr(A::GenericSparseMatrixCOO)
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to compute the trace."))

    backend = get_backend(A)

    @kernel function kernel_tr(res, @Const(rowind), @Const(colind), @Const(nzval))
        i = @index(Global)

        @inbounds if rowind[i] == colind[i]
            @atomic res[1] += nzval[i]
        end
    end

    res = similar(nonzeros(A), 1)
    fill!(res, zero(eltype(A)))

    kernel = kernel_tr(backend)
    kernel(res, getrowind(A), getcolind(A), nonzeros(A); ndrange = (length(nonzeros(A)),))

    return @allowscalar res[1]
end

# Matrix-Vector and Matrix-Matrix multiplication
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:DenseVecOrMat)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))
        TypeC = :(DenseVecOrMat{T3})

        kernel_spmatmul! = transa ? :kernel_spmatmul_coo_T! : :kernel_spmatmul_coo_N!

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

            kernel! = $kernel_spmatmul!(backend_A)
            kernel!(
                C,
                getrowind(_A),
                getcolind(_A),
                getnzval(_A),
                _B,
                α,
                Val{$conja}(),
                Val{$conjb}(),
                Val{$transb}();
                ndrange = (size(C, 2), length(nonzeros(_A))),
            )

            return C
        end
    end
end

# Three-argument dot product: dot(x, A, y) = x' * A * y
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    TypeA = wrapa(:(T1))

    kernel_dot! = transa ? :kernel_workgroup_dot_coo_T! : :kernel_workgroup_dot_coo_N!

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

        nnz_val = nnz(_A)
        rowind = getrowind(_A)
        colind = getcolind(_A)
        nzval = getnzval(_A)

        backend = backend_A

        group_size = 256
        n_groups = min(cld(nnz_val, group_size), 256)
        total_workitems = group_size * n_groups

        # Allocate array for block results (one per workgroup)
        block_results = similar(nzval, T, n_groups)

        # Launch kernel with workgroup configuration
        kernel! = $kernel_dot!(backend, group_size)
        kernel!(
            block_results,
            x,
            rowind,
            colind,
            nzval,
            y,
            nnz_val,
            Val{$conja}();
            ndrange = (total_workitems,),
        )

        # Final reduction: sum all block results
        return sum(block_results)
    end
end

# Helper function for adding GenericSparseMatrixCOO to dense matrix
function _add_sparse_to_dense!(C::DenseMatrix, A::GenericSparseMatrixCOO)
    backend = get_backend(A)
    nnz_val = nnz(A)

    kernel! = kernel_add_sparse_to_dense_coo!(backend)
    kernel!(C, getrowind(A), getcolind(A), getnzval(A); ndrange = (nnz_val,))

    return C
end

function Base.:+(A::GenericSparseMatrixCOO, B::GenericSparseMatrixCOO)
    size(A) == size(B) || throw(
        DimensionMismatch(
            "dimensions must match: A has dims $(size(A)), B has dims $(size(B))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    m, n = size(A)
    Ti = eltype(getrowind(A))
    Tv = promote_type(eltype(nonzeros(A)), eltype(nonzeros(B)))

    # Concatenate the coordinate arrays
    nnz_A = nnz(A)
    nnz_B = nnz(B)
    nnz_concat = nnz_A + nnz_B

    # Allocate concatenated arrays
    rowind_concat = similar(getrowind(A), nnz_concat)
    colind_concat = similar(getcolind(A), nnz_concat)
    nzval_concat = similar(nonzeros(A), Tv, nnz_concat)

    # Copy entries from A and B
    rowind_concat[1:nnz_A] .= getrowind(A)
    colind_concat[1:nnz_A] .= getcolind(A)
    nzval_concat[1:nnz_A] .= nonzeros(A)
    rowind_concat[(nnz_A + 1):end] .= getrowind(B)
    colind_concat[(nnz_A + 1):end] .= getcolind(B)
    nzval_concat[(nnz_A + 1):end] .= nonzeros(B)

    # Sort by (row, col) using keys similar to COO->CSC conversion
    backend = backend_A
    keys = similar(rowind_concat, Ti, nnz_concat)
    kernel_make_keys! = kernel_make_csc_keys!(backend)
    kernel_make_keys!(keys, rowind_concat, colind_concat, m; ndrange = (nnz_concat,))

    # Sort using AcceleratedKernels
    perm = _sortperm_AK(keys)

    # Apply permutation to get sorted arrays
    rowind_sorted = rowind_concat[perm]
    colind_sorted = colind_concat[perm]
    nzval_sorted = nzval_concat[perm]

    # Mark unique entries (first occurrence of each (row, col) pair)
    keep_mask = similar(rowind_sorted, Bool, nnz_concat)
    kernel_mark! = kernel_mark_unique_coo!(backend)
    kernel_mark!(
        keep_mask,
        rowind_sorted,
        colind_sorted,
        nnz_concat;
        ndrange = (nnz_concat,),
    )

    # Compute write indices using cumsum
    write_indices = _cumsum_AK(keep_mask)
    nnz_final = @allowscalar write_indices[nnz_concat]

    # Allocate final arrays
    rowind_C = similar(getrowind(A), nnz_final)
    colind_C = similar(getcolind(A), nnz_final)
    nzval_C = similar(nonzeros(A), Tv, nnz_final)

    # Compact: merge duplicates by summing
    kernel_compact! = kernel_compact_coo!(backend)
    kernel_compact!(
        rowind_C,
        colind_C,
        nzval_C,
        rowind_sorted,
        colind_sorted,
        nzval_sorted,
        write_indices,
        nnz_concat;
        ndrange = (nnz_concat,),
    )

    return GenericSparseMatrixCOO(m, n, rowind_C, colind_C, nzval_C)
end

# Addition with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCOO)
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

            _A = $(unwrapa(:A))
            _B = $(unwrapb(:B))

            backend_A = get_backend(_A)
            backend_B = get_backend(_B)
            backend_A == backend_B ||
                throw(ArgumentError("Both matrices must have the same backend"))

            m, n = size(A)
            Ti = eltype(getrowind(_A))
            Tv = promote_type(eltype(nonzeros(_A)), eltype(nonzeros(_B)))

            # For transposed COO, swap row and column indices
            nnz_A = nnz(_A)
            nnz_B = nnz(_B)
            nnz_concat = nnz_A + nnz_B

            # Allocate concatenated arrays
            rowind_concat = similar(getrowind(_A), nnz_concat)
            colind_concat = similar(getcolind(_A), nnz_concat)
            nzval_concat = similar(nonzeros(_A), Tv, nnz_concat)

            # Copy entries from A (potentially swapping row/col for transpose)
            if $transa
                rowind_concat[1:nnz_A] .= getcolind(_A)  # Swap for transpose
                colind_concat[1:nnz_A] .= getrowind(_A)
            else
                rowind_concat[1:nnz_A] .= getrowind(_A)
                colind_concat[1:nnz_A] .= getcolind(_A)
            end
            if $conja
                nzval_concat[1:nnz_A] .= conj.(nonzeros(_A))
            else
                nzval_concat[1:nnz_A] .= nonzeros(_A)
            end

            # Copy entries from B (potentially swapping row/col for transpose)
            if $transb
                rowind_concat[(nnz_A + 1):end] .= getcolind(_B)  # Swap for transpose
                colind_concat[(nnz_A + 1):end] .= getrowind(_B)
            else
                rowind_concat[(nnz_A + 1):end] .= getrowind(_B)
                colind_concat[(nnz_A + 1):end] .= getcolind(_B)
            end
            if $conjb
                nzval_concat[(nnz_A + 1):end] .= conj.(nonzeros(_B))
            else
                nzval_concat[(nnz_A + 1):end] .= nonzeros(_B)
            end

            # Sort and compact (same as before)
            backend = backend_A
            keys = similar(rowind_concat, Ti, nnz_concat)
            kernel_make_keys! = kernel_make_csc_keys!(backend)
            kernel_make_keys!(
                keys,
                rowind_concat,
                colind_concat,
                m;
                ndrange = (nnz_concat,),
            )

            perm = _sortperm_AK(keys)
            rowind_sorted = rowind_concat[perm]
            colind_sorted = colind_concat[perm]
            nzval_sorted = nzval_concat[perm]

            keep_mask = similar(rowind_sorted, Bool, nnz_concat)
            kernel_mark! = kernel_mark_unique_coo!(backend)
            kernel_mark!(
                keep_mask,
                rowind_sorted,
                colind_sorted,
                nnz_concat;
                ndrange = (nnz_concat,),
            )

            write_indices = _cumsum_AK(keep_mask)
            nnz_final = @allowscalar write_indices[nnz_concat]

            rowind_C = similar(getrowind(_A), nnz_final)
            colind_C = similar(getcolind(_A), nnz_final)
            nzval_C = similar(nonzeros(_A), Tv, nnz_final)

            kernel_compact! = kernel_compact_coo!(backend)
            kernel_compact!(
                rowind_C,
                colind_C,
                nzval_C,
                rowind_sorted,
                colind_sorted,
                nzval_sorted,
                write_indices,
                nnz_concat;
                ndrange = (nnz_concat,),
            )

            return GenericSparseMatrixCOO(m, n, rowind_C, colind_C, nzval_C)
        end
    end
end

function Base.:(*)(A::GenericSparseMatrixCOO, B::GenericSparseMatrixCOO)
    size(A, 2) == size(B, 1) || throw(
        DimensionMismatch(
            "second dimension of A, $(size(A, 2)), does not match first dimension of B, $(size(B, 1))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    # Convert to CSC, multiply, convert back to COO
    # This is acceptable as COO doesn't have an efficient direct multiplication algorithm
    # and CSC provides the sorted structure needed for efficient SpGEMM
    A_csc = GenericSparseMatrixCSC(A)
    B_csc = GenericSparseMatrixCSC(B)
    C_csc = A_csc * B_csc
    return GenericSparseMatrixCOO(C_csc)
end

# Multiplication with transpose/adjoint support - all cases use the same approach
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCOO)
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

            # Convert to CSC (handles transpose/adjoint), multiply, convert back to COO
            # Same approach as the base case since COO doesn't have an efficient
            # direct multiplication algorithm
            A_csc = GenericSparseMatrixCSC(A)
            B_csc = GenericSparseMatrixCSC(B)
            C_csc = A_csc * B_csc
            return GenericSparseMatrixCOO(C_csc)
        end
    end
end

function LinearAlgebra.kron(
        A::GenericSparseMatrixCOO{Tv1, Ti1},
        B::GenericSparseMatrixCOO{Tv2, Ti2},
    ) where {Tv1, Ti1, Tv2, Ti2}
    # Result dimensions
    m_C = size(A, 1) * size(B, 1)
    n_C = size(A, 2) * size(B, 2)
    nnz_C = nnz(A) * nnz(B)

    # Determine result types
    Tv = promote_type(Tv1, Tv2)
    Ti = promote_type(Ti1, Ti2)

    # Check backend compatibility
    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B || throw(ArgumentError("Both arrays must have the same backend"))

    # Allocate output arrays
    rowind_C = similar(A.rowind, Ti, nnz_C)
    colind_C = similar(A.colind, Ti, nnz_C)
    nzval_C = similar(A.nzval, Tv, nnz_C)

    # Launch kernel
    kernel! = kernel_kron_coo!(backend_A)
    kernel!(
        A.rowind,
        A.colind,
        A.nzval,
        B.rowind,
        B.colind,
        B.nzval,
        rowind_C,
        colind_C,
        nzval_C,
        size(B, 1),
        size(B, 2);
        ndrange = nnz_C,
    )

    return GenericSparseMatrixCOO(m_C, n_C, rowind_C, colind_C, nzval_C)
end

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:GenericSparseMatrixCOO)
        # Skip the case where both are not transposed (already handled above)
        (transa == false && transb == false) && continue

        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function LinearAlgebra.kron(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return kron(GenericSparseMatrixCOO(A), GenericSparseMatrixCOO(B))
        end
    end
end

# =============================================================================
# Kronecker product with Diagonal matrices
# =============================================================================

function LinearAlgebra.kron(
        D::Diagonal{Tv1},
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

    # Launch kernel
    kernel! = kernel_kron_diag_coo!(backend)
    kernel!(
        rowind_C,
        colind_C,
        nzval_C,
        D.diag,
        B.rowind,
        B.colind,
        B.nzval,
        m_B,
        n_B;
        ndrange = nnz_C,
    )

    return GenericSparseMatrixCOO(m_C, n_C, rowind_C, colind_C, nzval_C)
end

function LinearAlgebra.kron(
        A::GenericSparseMatrixCOO{Tv1, Ti},
        D::Diagonal{Tv2},
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

    # Launch kernel
    kernel! = kernel_kron_coo_diag!(backend)
    kernel!(
        rowind_C,
        colind_C,
        nzval_C,
        A.rowind,
        A.colind,
        A.nzval,
        D.diag,
        p;
        ndrange = nnz_C,
    )

    return GenericSparseMatrixCOO(m_C, n_C, rowind_C, colind_C, nzval_C)
end

# kron with Diagonal and transpose/adjoint wrappers
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixCOO)
    # Skip identity case (already handled above)
    trans == false && continue

    TypeB = wrap(:(T))

    # kron(D, op(B))
    @eval function LinearAlgebra.kron(
            D::Diagonal{Tv1},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        return kron(D, B_coo)
    end

    # kron(op(A), D)
    TypeA = wrap(:(T))
    @eval function LinearAlgebra.kron(
            A::$TypeA,
            D::Diagonal{Tv2},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        return kron(A_coo, D)
    end
end

function LinearAlgebra.issymmetric(A::GenericSparseMatrixCOO)
    m, n = size(A)
    m == n || return false
    return issymmetric(GenericSparseMatrixCSC(A))
end

function LinearAlgebra.ishermitian(A::GenericSparseMatrixCOO)
    m, n = size(A)
    m == n || return false
    return ishermitian(GenericSparseMatrixCSC(A))
end
