# GenericSparseMatrixCSC implementation

"""
    GenericSparseMatrixCSC{Tv,Ti,ColPtrT,RowValT,NzValT} <: AbstractGenericSparseMatrix{Tv,Ti}

Compressed Sparse Column (CSC) matrix with generic storage vectors for column
pointer, row indices, and nonzero values. Buffer types (e.g. `Vector`, GPU array
types) enable dispatch on device characteristics.

# Fields
- `m::Int`               - number of rows
- `n::Int`               - number of columns
- `colptr::ColPtrT`      - column pointer array (length n+1)
- `rowval::RowValT`      - row indices of stored entries
- `nzval::NzValT`        - stored values
"""
struct GenericSparseMatrixCSC{
        Tv,
        Ti,
        ColPtrT <: AbstractVector{Ti},
        RowValT <: AbstractVector{Ti},
        NzValT <: AbstractVector{Tv},
    } <: AbstractGenericSparseMatrix{Tv, Ti}
    m::Int
    n::Int
    colptr::ColPtrT
    rowval::RowValT
    nzval::NzValT

    function GenericSparseMatrixCSC(
            m::Integer,
            n::Integer,
            colptr::ColPtrT,
            rowval::RowValT,
            nzval::NzValT,
        ) where {
            Tv,
            Ti,
            ColPtrT <: AbstractVector{Ti},
            RowValT <: AbstractVector{Ti},
            NzValT <: AbstractVector{Tv},
        }
        get_backend(colptr) == get_backend(rowval) == get_backend(nzval) ||
            throw(ArgumentError("All storage vectors must be on the same device/backend."))

        m >= 0 || throw(ArgumentError("m must be non-negative"))
        n >= 0 || throw(ArgumentError("n must be non-negative"))
        SparseArrays.sparse_check_Ti(m, n, Ti)
        # SparseArrays.sparse_check(n, colptr, rowval, nzval) # TODO: this uses scalar indexing

        length(colptr) == n + 1 || throw(ArgumentError("colptr length must be n+1"))
        length(rowval) == length(nzval) ||
            throw(ArgumentError("rowval and nzval must have same length"))

        return new{Tv, Ti, ColPtrT, RowValT, NzValT}(
            Int(m),
            Int(n),
            copy(colptr),
            copy(rowval),
            copy(nzval),
        )
    end
end

Adapt.adapt_structure(to, A::GenericSparseMatrixCSC) = GenericSparseMatrixCSC(
    A.m,
    A.n,
    Adapt.adapt_structure(to, A.colptr),
    Adapt.adapt_structure(to, A.rowval),
    Adapt.adapt_structure(to, A.nzval),
)

Base.size(A::GenericSparseMatrixCSC) = (A.m, A.n)
Base.length(A::GenericSparseMatrixCSC) = A.m * A.n
Base.copy(A::GenericSparseMatrixCSC) =
    GenericSparseMatrixCSC(A.m, A.n, copy(A.colptr), copy(A.rowval), copy(A.nzval))

Base.collect(A::GenericSparseMatrixCSC) = collect(SparseMatrixCSC(A))

function Base.zero(A::GenericSparseMatrixCSC)
    colptr = similar(A.colptr)
    rowval = similar(A.rowval, 0)
    nzval = similar(A.nzval, 0)
    fill!(colptr, one(eltype(colptr)))
    return GenericSparseMatrixCSC(A.m, A.n, colptr, rowval, nzval)
end

function Base.:-(A::GenericSparseMatrixCSC)
    return GenericSparseMatrixCSC(A.m, A.n, copy(A.colptr), copy(A.rowval), -A.nzval)
end

Base.conj(A::GenericSparseMatrixCSC{<:Real}) = A
function Base.conj(A::GenericSparseMatrixCSC{<:Complex})
    return GenericSparseMatrixCSC(A.m, A.n, copy(A.colptr), copy(A.rowval), conj.(A.nzval))
end

Base.real(A::GenericSparseMatrixCSC{<:Real}) = A
function Base.real(A::GenericSparseMatrixCSC{<:Complex})
    return GenericSparseMatrixCSC(A.m, A.n, copy(A.colptr), copy(A.rowval), real.(A.nzval))
end

Base.imag(A::GenericSparseMatrixCSC{<:Real}) = zero(A)
function Base.imag(A::GenericSparseMatrixCSC{<:Complex})
    return GenericSparseMatrixCSC(A.m, A.n, copy(A.colptr), copy(A.rowval), imag.(A.nzval))
end

SparseArrays.nonzeros(A::GenericSparseMatrixCSC) = A.nzval
SparseArrays.getcolptr(A::GenericSparseMatrixCSC) = A.colptr
SparseArrays.rowvals(A::GenericSparseMatrixCSC) = A.rowval
SparseArrays.getrowval(A::GenericSparseMatrixCSC) = rowvals(A)
function SparseArrays.nzrange(A::GenericSparseMatrixCSC, col::Integer)
    get_backend(A) isa KernelAbstractions.CPU ||
        throw(ArgumentError("nzrange is only supported on CPU backend"))
    return getcolptr(A)[col]:(getcolptr(A)[col + 1] - 1)
end

function LinearAlgebra.tr(A::GenericSparseMatrixCSC)
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to compute the trace."))

    # TODO: use AK.mapreduce instead?
    backend = get_backend(A)

    @kernel function kernel_tr(res, @Const(colptr), @Const(rowval), @Const(nzval))
        col = @index(Global)

        @inbounds for j in colptr[col]:(colptr[col + 1] - 1)
            if rowval[j] == col
                @atomic res[1] += nzval[j]
            end
        end
    end

    res = similar(nonzeros(A), 1)
    fill!(res, zero(eltype(A)))

    kernel = kernel_tr(backend)
    kernel(res, getcolptr(A), getrowval(A), getnzval(A); ndrange = (n,))

    return @allowscalar res[1]
end

# Matrix-Vector and Matrix-Matrix multiplication
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:DenseVecOrMat)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))
        TypeC = :(DenseVecOrMat{T3})

        kernel_spmatmul! = transa ? :kernel_spmatmul_csc_T! : :kernel_spmatmul_csc_N!

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

            # backend_A isa KernelAbstractions.CPU &&
            #     return SparseArrays._spmatmul!(C, _A, _B, α, β)

            β != one(β) && LinearAlgebra._rmul_or_fill!(C, β)

            kernel! = $kernel_spmatmul!(backend_A)
            kernel!(
                C,
                getcolptr(_A),
                getrowval(_A),
                getnzval(_A),
                _B,
                α,
                Val{$conja}(),
                Val{$conjb}(),
                Val{$transb}();
                ndrange = (size(C, 2), size(_A, 2)),
            )

            return C
        end
    end
end

# Three-argument dot product: dot(x, A, y) = x' * A * y
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    TypeA = wrapa(:(T1))

    kernel_dot! = transa ? :kernel_workgroup_dot_csc_T! : :kernel_workgroup_dot_csc_N!

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

        n = size(_A, 2)
        colptr = getcolptr(_A)
        rowval = getrowval(_A)
        nzval = getnzval(_A)

        backend = backend_A

        group_size = 256
        n_groups = min(cld(n, group_size), 256)
        total_workitems = group_size * n_groups

        # Allocate array for block results (one per workgroup)
        block_results = similar(nzval, T, n_groups)

        # Launch kernel with workgroup configuration
        kernel! = $kernel_dot!(backend, group_size)
        kernel!(
            block_results,
            x,
            colptr,
            rowval,
            nzval,
            y,
            n,
            Val{$conja}();
            ndrange = (total_workitems,),
        )

        # Final reduction: sum all block results
        return sum(block_results)
    end
end

# Helper function for adding GenericSparseMatrixCSC to dense matrix
function _add_sparse_to_dense!(C::DenseMatrix, A::GenericSparseMatrixCSC)
    backend = get_backend(A)
    n = size(A, 2)

    kernel! = kernel_add_sparse_to_dense_csc!(backend)
    kernel!(C, getcolptr(A), getrowval(A), getnzval(A); ndrange = (n,))

    return C
end

function Base.:+(A::GenericSparseMatrixCSC, B::GenericSparseMatrixCSC)
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
    Ti = eltype(getcolptr(A))
    Tv = promote_type(eltype(nonzeros(A)), eltype(nonzeros(B)))

    # Count non-zeros per column
    nnz_per_col = similar(getcolptr(A), n)
    fill!(nnz_per_col, zero(Ti))

    backend = backend_A
    kernel_count! = kernel_count_nnz_per_col_csc!(backend)
    kernel_count!(
        nnz_per_col,
        getcolptr(A),
        getrowval(A),
        getcolptr(B),
        getrowval(B);
        ndrange = (n,),
    )

    # Build colptr for result matrix using cumsum
    # colptr_C[i+1] = 1 + sum(nnz_per_col[1:i])
    cumsum_nnz = _cumsum_AK(nnz_per_col)
    colptr_C = similar(getcolptr(A), n + 1)
    # Set colptr_C[2:end] to cumsum + 1
    colptr_C[2:end] .= cumsum_nnz
    colptr_C[2:end] .+= one(Ti)
    # Set colptr_C[1] to 1 using broadcasting
    colptr_C[1:1] .= one(Ti)

    # Allocate result arrays
    nnz_total = @allowscalar colptr_C[n + 1] - one(Ti)
    rowval_C = similar(getrowval(A), nnz_total)
    nzval_C = similar(nonzeros(A), Tv, nnz_total)

    # Merge the two matrices
    kernel_merge! = kernel_merge_csc!(backend)
    kernel_merge!(
        rowval_C,
        nzval_C,
        colptr_C,
        getcolptr(A),
        getrowval(A),
        nonzeros(A),
        getcolptr(B),
        getrowval(B),
        nonzeros(B),
        Val{false}(),
        Val{false}();
        ndrange = (n,),
    )

    C = GenericSparseMatrixCSC(m, n, colptr_C, rowval_C, nzval_C)
    dropzeros!(C)
    return C
end

# Addition with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCSC)
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

            # Convert both to CSR (transpose/adjoint of CSC has CSR structure)
            # and use existing CSR + CSR addition. The conversion methods
            # already handle transpose/adjoint correctly.
            A_csr = GenericSparseMatrixCSR(A)
            B_csr = GenericSparseMatrixCSR(B)
            result_csr = A_csr + B_csr

            # Convert back to CSC
            return GenericSparseMatrixCSC(result_csr)
        end

        @eval function Base.:-(A::$TypeA, B::$TypeB) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return A + (-B)
        end
    end
end

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:GenericSparseMatrixCSC)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function LinearAlgebra.kron(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            # Convert to COO, compute kron, convert back to CSC
            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = kron(A_coo, B_coo)
            return GenericSparseMatrixCSC(C_coo)
        end
    end
end

function LinearAlgebra.kron(D::Diagonal, B::GenericSparseMatrixCSC)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(D, B_coo)
    return GenericSparseMatrixCSC(C_coo)
end

function LinearAlgebra.kron(A::GenericSparseMatrixCSC, D::Diagonal)
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = kron(A_coo, D)
    return GenericSparseMatrixCSC(C_coo)
end

# kron with Diagonal and transpose/adjoint wrappers for CSC
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    trans == false && continue

    TypeB = wrap(:(T))

    @eval function LinearAlgebra.kron(
            D::Diagonal{Tv1},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        C_coo = kron(D, B_coo)
        return GenericSparseMatrixCSC(C_coo)
    end

    TypeA = wrap(:(T))
    @eval function LinearAlgebra.kron(
            A::$TypeA,
            D::Diagonal{Tv2},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        C_coo = kron(A_coo, D)
        return GenericSparseMatrixCSC(C_coo)
    end
end

function Base.:(*)(A::GenericSparseMatrixCSC, B::GenericSparseMatrixCSC)
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
    Ti = eltype(getcolptr(A))
    Tv = promote_type(eltype(nonzeros(A)), eltype(nonzeros(B)))

    backend = backend_A

    # Allocate workspace for counting (one flag per row per column of B)
    row_seen = similar(nonzeros(A), Bool, m * n)

    # Count non-zeros per column of C
    nnz_per_col = similar(getcolptr(A), n)
    fill!(nnz_per_col, zero(Ti))

    kernel_count! = kernel_count_nnz_spgemm_csc!(backend)
    kernel_count!(
        nnz_per_col,
        row_seen,
        getcolptr(A),
        getrowval(A),
        getcolptr(B),
        getrowval(B),
        m;
        ndrange = (n,),
    )

    # Build colptr for result matrix
    cumsum_nnz = _cumsum_AK(nnz_per_col)
    colptr_C = similar(getcolptr(A), n + 1)
    colptr_C[2:end] .= cumsum_nnz
    colptr_C[2:end] .+= one(Ti)
    colptr_C[1:1] .= one(Ti)

    # Allocate result arrays
    nnz_total = @allowscalar colptr_C[n + 1] - one(Ti)
    rowval_C = similar(getrowval(A), nnz_total)
    nzval_C = similar(nonzeros(A), Tv, nnz_total)

    # Allocate workspace for accumulation
    row_accum = similar(nonzeros(A), Tv, m * n)
    row_flags = similar(nonzeros(A), Bool, m * n)

    # Compute the product
    kernel_mult! = kernel_spgemm_csc!(backend)
    kernel_mult!(
        rowval_C,
        nzval_C,
        colptr_C,
        getcolptr(A),
        getrowval(A),
        nonzeros(A),
        getcolptr(B),
        getrowval(B),
        nonzeros(B),
        row_accum,
        row_flags,
        m,
        Val{false}(),
        Val{false}();
        ndrange = (n,),
    )

    return GenericSparseMatrixCSC(m, n, colptr_C, rowval_C, nzval_C)
end

# Multiplication with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixCSC)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixCSC)
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

            _A = $(unwrapa(:A))
            _B = $(unwrapb(:B))

            backend_A = get_backend(_A)
            backend_B = get_backend(_B)
            backend_A == backend_B ||
                throw(ArgumentError("Both matrices must have the same backend"))

            # For transpose/adjoint, convert to CSR format (which is CSC transposed structurally)
            # This follows the same pattern as addition with transpose/adjoint
            A_csr = GenericSparseMatrixCSR(A)
            B_csr = GenericSparseMatrixCSR(B)
            result_csr = A_csr * B_csr

            # Convert back to CSC
            return GenericSparseMatrixCSC(result_csr)
        end
    end
end

function LinearAlgebra.issymmetric(A::GenericSparseMatrixCSC)
    m, n = size(A)
    m == n || return false

    # Empty matrix is symmetric
    nnz(A) == 0 && return true

    backend = get_backend(A)

    # Result array (initialize to true)
    result = similar(nonzeros(A), Bool, 1)
    fill!(result, true)

    kernel! = kernel_check_symmetry_csc!(backend)
    kernel!(result, getcolptr(A), rowvals(A), nonzeros(A), Val{false}(); ndrange = (n,))

    return @allowscalar result[1]
end

function LinearAlgebra.ishermitian(A::GenericSparseMatrixCSC)
    m, n = size(A)
    m == n || return false

    # Empty matrix is hermitian
    nnz(A) == 0 && return true

    backend = get_backend(A)

    # Result array (initialize to true)
    result = similar(nonzeros(A), Bool, 1)
    fill!(result, true)

    kernel! = kernel_check_symmetry_csc!(backend)
    kernel!(result, getcolptr(A), rowvals(A), nonzeros(A), Val{true}(); ndrange = (n,))

    return @allowscalar result[1]
end

# Internal implementation that writes into the provided arrays
function _dropzeros_impl_csc!(new_colptr, new_rowval, new_nzval, A::GenericSparseMatrixCSC)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getcolptr(A))

    # Count non-zeros per column
    nnz_per_col = similar(getcolptr(A), n)
    kernel_count! = kernel_count_nonzeros_csc!(backend)
    kernel_count!(nnz_per_col, getcolptr(A), nonzeros(A); ndrange = (n,))

    # Build new colptr
    cumsum_nnz = _cumsum_AK(nnz_per_col)
    fill!(view(new_colptr, 1:1), one(Ti))
    view(new_colptr, 2:(n + 1)) .= cumsum_nnz .+ one(Ti)

    # Get total number of non-zeros
    total_nnz = @allowscalar new_colptr[end] - one(Ti)

    if total_nnz > 0
        # Copy non-zero entries
        kernel_drop! = kernel_dropzeros_csc!(backend)
        kernel_drop!(
            new_rowval,
            new_nzval,
            new_colptr,
            getcolptr(A),
            rowvals(A),
            nonzeros(A);
            ndrange = (n,),
        )
    end

    return total_nnz
end

function SparseArrays.dropzeros!(A::GenericSparseMatrixCSC)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getcolptr(A))

    # Count non-zeros per column to determine new size
    nnz_per_col = similar(getcolptr(A), n)
    kernel_count! = kernel_count_nonzeros_csc!(backend)
    kernel_count!(nnz_per_col, getcolptr(A), nonzeros(A); ndrange = (n,))

    cumsum_nnz = _cumsum_AK(nnz_per_col)
    total_nnz = @allowscalar cumsum_nnz[end]

    # Allocate temporary arrays for new data
    new_colptr = similar(getcolptr(A))
    new_rowval = similar(rowvals(A), total_nnz)
    new_nzval = similar(nonzeros(A), total_nnz)

    # Fill the new arrays
    _dropzeros_impl_csc!(new_colptr, new_rowval, new_nzval, A)

    # Copy back to original arrays
    copyto!(A.colptr, new_colptr)
    resize!(A.rowval, total_nnz)
    copyto!(A.rowval, new_rowval)
    resize!(A.nzval, total_nnz)
    copyto!(A.nzval, new_nzval)

    return A
end

function SparseArrays.dropzeros(A::GenericSparseMatrixCSC)
    m, n = size(A)
    backend = get_backend(A)
    Ti = eltype(getcolptr(A))

    # Count non-zeros per column to determine new size
    nnz_per_col = similar(getcolptr(A), n)
    kernel_count! = kernel_count_nonzeros_csc!(backend)
    kernel_count!(nnz_per_col, getcolptr(A), nonzeros(A); ndrange = (n,))

    cumsum_nnz = _cumsum_AK(nnz_per_col)
    total_nnz = @allowscalar cumsum_nnz[end]

    # Allocate new arrays
    new_colptr = similar(getcolptr(A))
    new_rowval = similar(rowvals(A), total_nnz)
    new_nzval = similar(nonzeros(A), total_nnz)

    # Fill the new arrays
    _dropzeros_impl_csc!(new_colptr, new_rowval, new_nzval, A)

    return GenericSparseMatrixCSC(m, n, new_colptr, new_rowval, new_nzval)
end
