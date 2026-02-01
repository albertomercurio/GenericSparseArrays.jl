# GenericSparseMatrixCSR implementation

"""
    GenericSparseMatrixCSR{Tv,Ti,RowPtrT,ColValT,NzValT} <: AbstractGenericSparseMatrix{Tv,Ti}

Compressed Sparse Row (CSR) matrix with generic storage vectors for row
pointer, column indices, and nonzero values. Buffer types (e.g. `Vector`, GPU array
types) enable dispatch on device characteristics.

# Fields
- `m::Int`               - number of rows
- `n::Int`               - number of columns
- `rowptr::RowPtrT`      - row pointer array (length m+1)
- `colval::ColValT`      - column indices of stored entries
- `nzval::NzValT`        - stored values
"""
struct GenericSparseMatrixCSR{
        Tv,
        Ti,
        RowPtrT <: AbstractVector{Ti},
        ColValT <: AbstractVector{Ti},
        NzValT <: AbstractVector{Tv},
    } <: AbstractGenericSparseMatrix{Tv, Ti}
    m::Int
    n::Int
    rowptr::RowPtrT
    colval::ColValT
    nzval::NzValT

    function GenericSparseMatrixCSR(
            m::Integer,
            n::Integer,
            rowptr::RowPtrT,
            colval::ColValT,
            nzval::NzValT,
        ) where {
            Tv,
            Ti,
            RowPtrT <: AbstractVector{Ti},
            ColValT <: AbstractVector{Ti},
            NzValT <: AbstractVector{Tv},
        }
        get_backend(rowptr) == get_backend(colval) == get_backend(nzval) ||
            throw(ArgumentError("All storage vectors must be on the same device/backend."))

        m >= 0 || throw(ArgumentError("m must be non-negative"))
        n >= 0 || throw(ArgumentError("n must be non-negative"))
        SparseArrays.sparse_check_Ti(m, n, Ti)
        # SparseArrays.sparse_check(m, rowptr, colval, nzval) # TODO: this uses scalar indexing

        length(rowptr) == m + 1 || throw(ArgumentError("rowptr length must be m+1"))
        length(colval) == length(nzval) ||
            throw(ArgumentError("colval and nzval must have same length"))

        return new{Tv, Ti, RowPtrT, ColValT, NzValT}(
            Int(m),
            Int(n),
            copy(rowptr),
            copy(colval),
            copy(nzval),
        )
    end
end

Adapt.adapt_structure(to, A::GenericSparseMatrixCSR) = GenericSparseMatrixCSR(
    A.m,
    A.n,
    Adapt.adapt_structure(to, A.rowptr),
    Adapt.adapt_structure(to, A.colval),
    Adapt.adapt_structure(to, A.nzval),
)

Base.size(A::GenericSparseMatrixCSR) = (A.m, A.n)
Base.length(A::GenericSparseMatrixCSR) = A.m * A.n
Base.copy(A::GenericSparseMatrixCSR) =
    GenericSparseMatrixCSR(A.m, A.n, copy(A.rowptr), copy(A.colval), copy(A.nzval))

Base.collect(A::GenericSparseMatrixCSR) = collect(SparseMatrixCSC(A))

function Base.zero(A::GenericSparseMatrixCSR)
    rowptr = similar(A.rowptr)
    rowval = similar(A.colval, 0)
    nzval = similar(A.nzval, 0)
    fill!(rowptr, one(eltype(rowptr)))
    return GenericSparseMatrixCSR(A.m, A.n, rowptr, rowval, nzval)
end

function Base.:-(A::GenericSparseMatrixCSR)
    return GenericSparseMatrixCSR(A.m, A.n, copy(A.rowptr), copy(A.colval), -A.nzval)
end

Base.conj(A::GenericSparseMatrixCSR{<:Real}) = A
function Base.conj(A::GenericSparseMatrixCSR{<:Complex})
    return GenericSparseMatrixCSR(A.m, A.n, copy(A.rowptr), copy(A.colval), conj.(A.nzval))
end

Base.real(A::GenericSparseMatrixCSR{<:Real}) = A
function Base.real(A::GenericSparseMatrixCSR{<:Complex})
    return GenericSparseMatrixCSR(A.m, A.n, copy(A.rowptr), copy(A.colval), real.(A.nzval))
end

Base.imag(A::GenericSparseMatrixCSR{<:Real}) = zero(A)
function Base.imag(A::GenericSparseMatrixCSR{<:Complex})
    return GenericSparseMatrixCSR(A.m, A.n, copy(A.rowptr), copy(A.colval), imag.(A.nzval))
end

SparseArrays.nonzeros(A::GenericSparseMatrixCSR) = A.nzval
getrowptr(A::GenericSparseMatrixCSR) = A.rowptr
colvals(A::GenericSparseMatrixCSR) = A.colval
getcolval(A::GenericSparseMatrixCSR) = colvals(A)
SparseArrays.getnzval(A::GenericSparseMatrixCSR) = nonzeros(A)
function SparseArrays.nzrange(A::GenericSparseMatrixCSR, row::Integer)
    get_backend(A) isa KernelAbstractions.CPU ||
        throw(ArgumentError("nzrange is only supported on CPU backend"))
    return getrowptr(A)[row]:(getrowptr(A)[row + 1] - 1)
end

function LinearAlgebra.tr(A::GenericSparseMatrixCSR)
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to compute the trace."))

    # TODO: use AK.mapreduce instead?
    backend = get_backend(A)

    @kernel function kernel_tr(res, @Const(rowptr), @Const(colval), @Const(nzval))
        row = @index(Global)

        @inbounds for j in rowptr[row]:(rowptr[row + 1] - 1)
            if colval[j] == row
                @atomic res[1] += nzval[j]
            end
        end
    end

    res = similar(nonzeros(A), 1)
    fill!(res, zero(eltype(A)))

    kernel = kernel_tr(backend)
    kernel(res, getrowptr(A), getcolval(A), nonzeros(A); ndrange = (m,))

    return @allowscalar res[1]
end

# Matrix-Vector and Matrix-Matrix multiplication
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:DenseVecOrMat)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))
        TypeC = :(DenseVecOrMat{T3})

        kernel_spmatmul! = transa ? :kernel_spmatmul_csr_T! : :kernel_spmatmul_csr_N!

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
                getrowptr(_A),
                getcolval(_A),
                getnzval(_A),
                _B,
                α,
                Val{$conja}(),
                Val{$conjb}(),
                Val{$transb}();
                ndrange = (size(C, 2), size(_A, 1)),
            )

            return C
        end
    end
end

# Three-argument dot product: dot(x, A, y) = x' * A * y
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    TypeA = wrapa(:(T1))

    kernel_dot! = transa ? :kernel_workgroup_dot_csr_T! : :kernel_workgroup_dot_csr_N!

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

        m = size(_A, 1)
        rowptr = getrowptr(_A)
        colval = getcolval(_A)
        nzval = getnzval(_A)

        backend = backend_A

        group_size = 256
        n_groups = min(cld(m, group_size), 256)
        total_workitems = group_size * n_groups

        # Allocate array for block results (one per workgroup)
        block_results = similar(nzval, T, n_groups)

        # Launch kernel with workgroup configuration
        kernel! = $kernel_dot!(backend, group_size)
        kernel!(
            block_results,
            x,
            rowptr,
            colval,
            nzval,
            y,
            m,
            Val{$conja}();
            ndrange = (total_workitems,),
        )

        # Final reduction: sum all block results
        return sum(block_results)
    end
end

# Helper function for adding GenericSparseMatrixCSR to dense matrix
function _add_sparse_to_dense!(C::DenseMatrix, A::GenericSparseMatrixCSR)
    backend = get_backend(A)
    m = size(A, 1)

    kernel! = kernel_add_sparse_to_dense_csr!(backend)
    kernel!(C, getrowptr(A), getcolval(A), getnzval(A); ndrange = (m,))

    return C
end

function Base.:+(A::GenericSparseMatrixCSR, B::GenericSparseMatrixCSR)
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
    Ti = eltype(getrowptr(A))
    Tv = promote_type(eltype(nonzeros(A)), eltype(nonzeros(B)))

    # Count non-zeros per row
    nnz_per_row = similar(getrowptr(A), m)
    fill!(nnz_per_row, zero(Ti))

    backend = backend_A
    kernel_count! = kernel_count_nnz_per_row_csr!(backend)
    kernel_count!(
        nnz_per_row,
        getrowptr(A),
        getcolval(A),
        getrowptr(B),
        getcolval(B);
        ndrange = (m,),
    )

    # Build rowptr for result matrix using cumsum
    # rowptr_C[i+1] = 1 + sum(nnz_per_row[1:i])
    cumsum_nnz = _cumsum_AK(nnz_per_row)
    rowptr_C = similar(getrowptr(A), m + 1)
    # Set rowptr_C[2:end] to cumsum + 1
    rowptr_C[2:end] .= cumsum_nnz
    rowptr_C[2:end] .+= one(Ti)
    # Set rowptr_C[1] to 1 using broadcasting
    rowptr_C[1:1] .= one(Ti)

    # Allocate result arrays
    nnz_total = @allowscalar rowptr_C[m + 1] - one(Ti)
    colval_C = similar(getcolval(A), nnz_total)
    nzval_C = similar(nonzeros(A), Tv, nnz_total)

    # Merge the two matrices
    kernel_merge! = kernel_merge_csr!(backend)
    kernel_merge!(
        colval_C,
        nzval_C,
        rowptr_C,
        getrowptr(A),
        getcolval(A),
        nonzeros(A),
        getrowptr(B),
        getcolval(B),
        nonzeros(B),
        Val{false}(),
        Val{false}();
        ndrange = (m,),
    )

    C = GenericSparseMatrixCSR(m, n, rowptr_C, colval_C, nzval_C)
    return dropzeros(C)
end

# Addition with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCSR)
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

            # Convert both to CSC (transpose/adjoint of CSR has CSC structure)
            # and use existing CSC + CSC addition. The conversion methods
            # already handle transpose/adjoint correctly.
            A_csc = GenericSparseMatrixCSC(A)
            B_csc = GenericSparseMatrixCSC(B)
            result_csc = A_csc + B_csc

            # Convert back to CSR
            return GenericSparseMatrixCSR(result_csc)
        end

        @eval function Base.:-(A::$TypeA, B::$TypeB) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return A + (-B)
        end
    end
end

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:GenericSparseMatrixCSR)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function LinearAlgebra.kron(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            # Convert to COO, compute kron, convert back to CSR
            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = kron(A_coo, B_coo)
            return GenericSparseMatrixCSR(C_coo)
        end
    end
end

function LinearAlgebra.kron(D::Diagonal, B::GenericSparseMatrixCSR)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(D, B_coo)
    return GenericSparseMatrixCSR(C_coo)
end

function LinearAlgebra.kron(A::GenericSparseMatrixCSR, D::Diagonal)
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = kron(A_coo, D)
    return GenericSparseMatrixCSR(C_coo)
end

# kron with Diagonal and transpose/adjoint wrappers for CSR
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    trans == false && continue

    TypeB = wrap(:(T))

    @eval function LinearAlgebra.kron(
            D::Diagonal{Tv1},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        C_coo = kron(D, B_coo)
        return GenericSparseMatrixCSR(C_coo)
    end

    TypeA = wrap(:(T))
    @eval function LinearAlgebra.kron(
            A::$TypeA,
            D::Diagonal{Tv2},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        C_coo = kron(A_coo, D)
        return GenericSparseMatrixCSR(C_coo)
    end
end

function Base.:(*)(A::GenericSparseMatrixCSR, B::GenericSparseMatrixCSR)
    size(A, 2) == size(B, 1) || throw(
        DimensionMismatch(
            "second dimension of A, $(size(A, 2)), does not match first dimension of B, $(size(B, 1))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    m, k, n = size(A, 1), size(A, 2), size(B, 2)
    Ti = eltype(getrowptr(A))
    Tv = promote_type(eltype(nonzeros(A)), eltype(nonzeros(B)))

    backend = backend_A

    # Allocate workspace for counting (one flag per column per row of A)
    col_seen = similar(nonzeros(A), Bool, m * n)

    # Count non-zeros per row of C
    nnz_per_row = similar(getrowptr(A), m)
    fill!(nnz_per_row, zero(Ti))

    kernel_count! = kernel_count_nnz_spgemm_csr!(backend)
    kernel_count!(
        nnz_per_row,
        col_seen,
        getrowptr(A),
        getcolval(A),
        getrowptr(B),
        getcolval(B),
        n;
        ndrange = (m,),
    )

    # Build rowptr for result matrix
    cumsum_nnz = _cumsum_AK(nnz_per_row)
    rowptr_C = similar(getrowptr(A), m + 1)
    rowptr_C[2:end] .= cumsum_nnz
    rowptr_C[2:end] .+= one(Ti)
    rowptr_C[1:1] .= one(Ti)

    # Allocate result arrays
    nnz_total = @allowscalar rowptr_C[m + 1] - one(Ti)
    colval_C = similar(getcolval(A), nnz_total)
    nzval_C = similar(nonzeros(A), Tv, nnz_total)

    # Allocate workspace for accumulation
    col_accum = similar(nonzeros(A), Tv, m * n)
    col_flags = similar(nonzeros(A), Bool, m * n)

    # Compute the product
    kernel_mult! = kernel_spgemm_csr!(backend)
    kernel_mult!(
        colval_C,
        nzval_C,
        rowptr_C,
        getrowptr(A),
        getcolval(A),
        nonzeros(A),
        getrowptr(B),
        getcolval(B),
        nonzeros(B),
        col_accum,
        col_flags,
        n,
        Val{false}(),
        Val{false}();
        ndrange = (m,),
    )

    return GenericSparseMatrixCSR(m, n, rowptr_C, colval_C, nzval_C)
end

# Multiplication with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSR)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCSR)
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

            # For transpose/adjoint, convert to CSC format (which is CSR transposed structurally)
            # This follows the same pattern as addition with transpose/adjoint
            A_csc = GenericSparseMatrixCSC(A)
            B_csc = GenericSparseMatrixCSC(B)
            result_csc = A_csc * B_csc

            # Convert back to CSR
            return GenericSparseMatrixCSR(result_csc)
        end
    end
end

function LinearAlgebra.issymmetric(A::GenericSparseMatrixCSR)
    m, n = size(A)
    m == n || return false

    # Empty matrix is symmetric
    nnz(A) == 0 && return true

    backend = get_backend(A)

    # Result array (initialize to true)
    result = similar(nonzeros(A), Bool, 1)
    fill!(result, true)

    kernel! = kernel_check_symmetry_csr!(backend)
    kernel!(result, getrowptr(A), colvals(A), nonzeros(A), Val{false}(); ndrange = (m,))

    return @allowscalar result[1]
end

function LinearAlgebra.ishermitian(A::GenericSparseMatrixCSR)
    m, n = size(A)
    m == n || return false

    # Empty matrix is hermitian
    nnz(A) == 0 && return true

    backend = get_backend(A)

    # Result array (initialize to true)
    result = similar(nonzeros(A), Bool, 1)
    fill!(result, true)

    kernel! = kernel_check_symmetry_csr!(backend)
    kernel!(result, getrowptr(A), colvals(A), nonzeros(A), Val{true}(); ndrange = (m,))

    return @allowscalar result[1]
end

# Internal implementation that writes into the provided arrays
function _dropzeros_impl_csr!(new_rowptr, new_colval, new_nzval, A::GenericSparseMatrixCSR)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getrowptr(A))

    # Count non-zeros per row
    nnz_per_row = similar(getrowptr(A), m)
    kernel_count! = kernel_count_nonzeros_csr!(backend)
    kernel_count!(nnz_per_row, getrowptr(A), nonzeros(A); ndrange = (m,))

    # Build new rowptr
    cumsum_nnz = _cumsum_AK(nnz_per_row)
    fill!(view(new_rowptr, 1:1), one(Ti))
    view(new_rowptr, 2:(m + 1)) .= cumsum_nnz .+ one(Ti)

    # Get total number of non-zeros
    total_nnz = @allowscalar new_rowptr[end] - one(Ti)

    if total_nnz > 0
        # Copy non-zero entries
        kernel_drop! = kernel_dropzeros_csr!(backend)
        kernel_drop!(
            new_colval,
            new_nzval,
            new_rowptr,
            getrowptr(A),
            colvals(A),
            nonzeros(A);
            ndrange = (m,),
        )
    end

    return total_nnz
end

function SparseArrays.dropzeros!(A::GenericSparseMatrixCSR)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getrowptr(A))

    # Count non-zeros per row to determine new size
    nnz_per_row = similar(getrowptr(A), m)
    kernel_count! = kernel_count_nonzeros_csr!(backend)
    kernel_count!(nnz_per_row, getrowptr(A), nonzeros(A); ndrange = (m,))

    cumsum_nnz = _cumsum_AK(nnz_per_row)
    total_nnz = @allowscalar cumsum_nnz[end]

    if total_nnz == 0
        # All elements are zeros - some GPU backends (e.g., Metal) don't support
        # resize to 0. Keep the stored zeros; users can use dropzeros() (non-mutating)
        # which returns a new matrix with properly empty arrays.
        return A
    end

    # Allocate temporary arrays for new data
    new_rowptr = similar(getrowptr(A))
    new_colval = similar(colvals(A), total_nnz)
    new_nzval = similar(nonzeros(A), total_nnz)

    # Fill the new arrays
    _dropzeros_impl_csr!(new_rowptr, new_colval, new_nzval, A)

    # Copy back to original arrays
    copyto!(A.rowptr, new_rowptr)
    resize!(A.colval, total_nnz)
    copyto!(A.colval, new_colval)
    resize!(A.nzval, total_nnz)
    copyto!(A.nzval, new_nzval)

    return A
end

function SparseArrays.dropzeros(A::GenericSparseMatrixCSR)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getrowptr(A))

    # Count non-zeros per row to determine new size
    nnz_per_row = similar(getrowptr(A), m)
    kernel_count! = kernel_count_nonzeros_csr!(backend)
    kernel_count!(nnz_per_row, getrowptr(A), nonzeros(A); ndrange = (m,))

    cumsum_nnz = _cumsum_AK(nnz_per_row)
    total_nnz = @allowscalar cumsum_nnz[end]

    # Allocate new arrays
    new_rowptr = similar(getrowptr(A))
    new_colval = similar(colvals(A), total_nnz)
    new_nzval = similar(nonzeros(A), total_nnz)

    # Fill the new arrays
    _dropzeros_impl_csr!(new_rowptr, new_colval, new_nzval, A)

    return GenericSparseMatrixCSR(m, n, new_rowptr, new_colval, new_nzval)
end
