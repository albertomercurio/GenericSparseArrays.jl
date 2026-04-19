# GenericSparseMatrixDIA implementation

"""
    GenericSparseMatrixDIA{Tv,Ti,OffsetsT,DiagPtrT,DataT} <: AbstractGenericSparseMatrix{Tv,Ti}

Diagonal (DIA) sparse matrix with generic storage vectors for diagonal offsets,
diagonal pointers, and concatenated nonzero values. Buffer types (e.g. `Vector`,
GPU array types) enable dispatch on device characteristics.

The diagonals are stored concatenated in a flat vector `data`. For a matrix `A`
of size `m × n`, diagonal `d` with offset `k = offsets[d]` contains the elements
`A[i, i+k]` for valid `i`. The elements of diagonal `d` are stored in
`data[diagptr[d] : diagptr[d+1]-1]`.

# Fields
- `m::Int`                  - number of rows
- `n::Int`                  - number of columns
- `offsets::OffsetsT`       - sorted diagonal offsets (length ndiags)
- `diagptr::DiagPtrT`       - pointers into data for each diagonal (length ndiags+1)
- `data::DataT`             - concatenated diagonal values
"""
struct GenericSparseMatrixDIA{
        Tv,
        Ti,
        OffsetsT <: AbstractVector{Ti},
        DiagPtrT <: AbstractVector{Ti},
        DataT <: AbstractVector{Tv},
    } <: AbstractGenericSparseMatrix{Tv, Ti}
    m::Int
    n::Int
    offsets::OffsetsT
    diagptr::DiagPtrT
    data::DataT

    function GenericSparseMatrixDIA(
            m::Integer,
            n::Integer,
            offsets::OffsetsT,
            diagptr::DiagPtrT,
            data::DataT,
        ) where {
            Tv,
            Ti,
            OffsetsT <: AbstractVector{Ti},
            DiagPtrT <: AbstractVector{Ti},
            DataT <: AbstractVector{Tv},
        }
        get_backend(offsets) == get_backend(diagptr) == get_backend(data) ||
            throw(ArgumentError("All storage vectors must be on the same device/backend."))

        m >= 0 || throw(ArgumentError("m must be non-negative"))
        n >= 0 || throw(ArgumentError("n must be non-negative"))

        length(diagptr) == length(offsets) + 1 ||
            throw(ArgumentError("diagptr length must be length(offsets)+1"))

        return new{Tv, Ti, OffsetsT, DiagPtrT, DataT}(
            Int(m),
            Int(n),
            copy(offsets),
            copy(diagptr),
            copy(data),
        )
    end
end

# Identity/copy constructor
GenericSparseMatrixDIA(A::GenericSparseMatrixDIA) = copy(A)

"""
    _diag_length(m, n, k)

Length of diagonal with offset `k` in an `m × n` matrix.
"""
_diag_length(m, n, k) = max(0, min(m, n - k, m + k, n))

"""
    GenericSparseMatrixDIA(m, n, diag_offsets, diag_values)

Construct a DIA matrix from vectors of diagonal offsets and their values.

# Arguments
- `m::Integer`                      - number of rows
- `n::Integer`                      - number of columns
- `diag_offsets::AbstractVector`     - vector of diagonal offsets (will be sorted)
- `diag_values::AbstractVector`      - vector of vectors, each containing diagonal values
"""
function GenericSparseMatrixDIA(
        m::Integer,
        n::Integer,
        diag_offsets::AbstractVector{<:Integer},
        diag_values::AbstractVector{<:AbstractVector},
    )
    ndiags = length(diag_offsets)
    length(diag_values) == ndiags ||
        throw(ArgumentError("diag_offsets and diag_values must have the same length"))

    # Sort by offset
    perm = sortperm(collect(diag_offsets))
    sorted_offsets = collect(diag_offsets)[perm]
    sorted_values = diag_values[perm]

    # Validate diagonal lengths
    for (i, (k, v)) in enumerate(zip(sorted_offsets, sorted_values))
        expected_len = _diag_length(m, n, k)
        length(v) == expected_len || throw(
            ArgumentError(
                "diagonal at offset $k should have length $expected_len, got $(length(v))",
            ),
        )
    end

    # Determine element types
    Tv = ndiags > 0 ? promote_type(map(eltype, sorted_values)...) : Float64
    Ti = eltype(sorted_offsets)
    Ti = Ti <: Integer ? Ti : Int

    # Build diagptr and concatenated data
    diagptr = Vector{Ti}(undef, ndiags + 1)
    diagptr[1] = one(Ti)
    for i in 1:ndiags
        diagptr[i + 1] = diagptr[i] + Ti(length(sorted_values[i]))
    end

    total_nnz = diagptr[end] - one(Ti)
    data = Vector{Tv}(undef, total_nnz)
    for i in 1:ndiags
        data[diagptr[i]:(diagptr[i + 1] - 1)] .= sorted_values[i]
    end

    offsets_vec = Vector{Ti}(sorted_offsets)

    return GenericSparseMatrixDIA(m, n, offsets_vec, diagptr, data)
end

Adapt.adapt_structure(to, A::GenericSparseMatrixDIA) = GenericSparseMatrixDIA(
    A.m,
    A.n,
    Adapt.adapt_structure(to, A.offsets),
    Adapt.adapt_structure(to, A.diagptr),
    Adapt.adapt_structure(to, A.data),
)

Base.size(A::GenericSparseMatrixDIA) = (A.m, A.n)
Base.length(A::GenericSparseMatrixDIA) = A.m * A.n
Base.copy(A::GenericSparseMatrixDIA) =
    GenericSparseMatrixDIA(A.m, A.n, copy(A.offsets), copy(A.diagptr), copy(A.data))

Base.collect(A::GenericSparseMatrixDIA) = collect(SparseMatrixCSC(A))

function Base.zero(A::GenericSparseMatrixDIA{Tv, Ti}) where {Tv, Ti}
    offsets = similar(A.offsets, 0)
    diagptr = similar(A.diagptr, 1)
    fill!(diagptr, one(Ti))
    data = similar(A.data, 0)
    return GenericSparseMatrixDIA(A.m, A.n, offsets, diagptr, data)
end

function Base.:-(A::GenericSparseMatrixDIA)
    return GenericSparseMatrixDIA(A.m, A.n, copy(A.offsets), copy(A.diagptr), -A.data)
end

Base.conj(A::GenericSparseMatrixDIA{<:Real}) = A
function Base.conj(A::GenericSparseMatrixDIA{<:Complex})
    return GenericSparseMatrixDIA(
        A.m,
        A.n,
        copy(A.offsets),
        copy(A.diagptr),
        conj.(A.data),
    )
end

Base.real(A::GenericSparseMatrixDIA{<:Real}) = A
function Base.real(A::GenericSparseMatrixDIA{<:Complex})
    return GenericSparseMatrixDIA(
        A.m,
        A.n,
        copy(A.offsets),
        copy(A.diagptr),
        real.(A.data),
    )
end

Base.imag(A::GenericSparseMatrixDIA{<:Real}) = zero(A)
function Base.imag(A::GenericSparseMatrixDIA{<:Complex})
    return GenericSparseMatrixDIA(
        A.m,
        A.n,
        copy(A.offsets),
        copy(A.diagptr),
        imag.(A.data),
    )
end

SparseArrays.nonzeros(A::GenericSparseMatrixDIA) = A.data

"""
    getoffsets(A::GenericSparseMatrixDIA)

Return the diagonal offsets vector of the DIA matrix.
"""
getoffsets(A::GenericSparseMatrixDIA) = A.offsets

"""
    getdiagptr(A::GenericSparseMatrixDIA)

Return the diagonal pointer vector of the DIA matrix.
"""
getdiagptr(A::GenericSparseMatrixDIA) = A.diagptr

# ============================================================================
# Trace
# ============================================================================

function LinearAlgebra.tr(A::GenericSparseMatrixDIA)
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to compute the trace."))

    # Find the main diagonal (offset == 0)
    offsets_cpu = collect(A.offsets)
    idx = findfirst(==(0), offsets_cpu)
    idx === nothing && return zero(eltype(A))

    # Sum the main diagonal entries
    diagptr_cpu = collect(A.diagptr)
    start_idx = diagptr_cpu[idx]
    end_idx = diagptr_cpu[idx + 1] - 1
    return reduce(+, view(A.data, start_idx:end_idx); init = zero(eltype(A)))
end

# ============================================================================
# Matrix-Vector and Matrix-Matrix multiplication
# ============================================================================

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:DenseVecOrMat)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))
        TypeC = :(DenseVecOrMat{T3})

        kernel_spmv! = transa ? :kernel_spmv_dia_T! : :kernel_spmv_dia_N!
        kernel_spmatmul! = transa ? :kernel_spmatmul_dia_T! : :kernel_spmatmul_dia_N!

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

            m_A = size(_A, 1)

            if B isa AbstractVector
                kernel! = $kernel_spmv!(backend_A)
                if $transa
                    kernel!(
                        C,
                        _A.data,
                        _A.offsets,
                        _A.diagptr,
                        _B,
                        α,
                        m_A,
                        Val{$conja}();
                        ndrange = (size(C, 1),),
                    )
                else
                    kernel!(
                        C,
                        _A.data,
                        _A.offsets,
                        _A.diagptr,
                        _B,
                        α,
                        Val{$conja}();
                        ndrange = (size(C, 1),),
                    )
                end
            else
                kernel! = $kernel_spmatmul!(backend_A)
                if $transa
                    kernel!(
                        C,
                        _A.data,
                        _A.offsets,
                        _A.diagptr,
                        _B,
                        α,
                        m_A,
                        Val{$conja}(),
                        Val{$conjb}(),
                        Val{$transb}();
                        ndrange = (size(C, 2), size(C, 1)),
                    )
                else
                    kernel!(
                        C,
                        _A.data,
                        _A.offsets,
                        _A.diagptr,
                        _B,
                        α,
                        Val{$conja}(),
                        Val{$conjb}(),
                        Val{$transb}();
                        ndrange = (size(C, 2), size(C, 1)),
                    )
                end
            end

            return C
        end
    end
end

# ============================================================================
# Three-argument dot product: dot(x, A, y) = x' * A * y
# ============================================================================

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    TypeA = wrapa(:(T1))

    kernel_dot! = transa ? :kernel_workgroup_dot_dia_T! : :kernel_workgroup_dot_dia_N!

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

        m_A = size(_A, 1)
        n_A = size(_A, 2)
        iter_dim = $transa ? n_A : m_A

        backend = backend_A

        group_size = 256
        n_groups = min(cld(iter_dim, group_size), 256)
        total_workitems = group_size * n_groups

        block_results = similar(_A.data, T, n_groups)

        kernel! = $kernel_dot!(backend, group_size)
        if $transa
            kernel!(
                block_results,
                x,
                _A.data,
                _A.offsets,
                _A.diagptr,
                y,
                m_A,
                n_A,
                Val{$conja}();
                ndrange = (total_workitems,),
            )
        else
            kernel!(
                block_results,
                x,
                _A.data,
                _A.offsets,
                _A.diagptr,
                y,
                m_A,
                Val{$conja}();
                ndrange = (total_workitems,),
            )
        end

        return sum(block_results)
    end
end

# ============================================================================
# Helper function for adding DIA to dense matrix
# ============================================================================

function _add_sparse_to_dense!(C::DenseMatrix, A::GenericSparseMatrixDIA)
    backend = get_backend(A)
    m = size(A, 1)

    kernel! = kernel_add_sparse_to_dense_dia!(backend)
    kernel!(C, A.data, A.offsets, A.diagptr; ndrange = (m,))

    return C
end

# ============================================================================
# DIA + DIA addition
# ============================================================================

function Base.:+(A::GenericSparseMatrixDIA, B::GenericSparseMatrixDIA)
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

    # Merge offsets on CPU
    offsets_A_cpu = collect(A.offsets)
    offsets_B_cpu = collect(B.offsets)
    diagptr_A_cpu = collect(A.diagptr)
    diagptr_B_cpu = collect(B.diagptr)

    # Merge sorted offset arrays
    merged_offsets = sort(unique(vcat(offsets_A_cpu, offsets_B_cpu)))
    ndiags = length(merged_offsets)

    Ti = eltype(offsets_A_cpu)
    Tv = promote_type(eltype(A), eltype(B))

    # Build new diagptr
    new_diagptr = Vector{Ti}(undef, ndiags + 1)
    new_diagptr[1] = one(Ti)
    for i in 1:ndiags
        dlen = _diag_length(m, n, merged_offsets[i])
        new_diagptr[i + 1] = new_diagptr[i] + Ti(dlen)
    end

    total_nnz = new_diagptr[end] - one(Ti)
    new_data = zeros(Tv, total_nnz)

    # Fill data from A and B
    for i in 1:ndiags
        k = merged_offsets[i]
        dlen = _diag_length(m, n, k)
        dst_range = new_diagptr[i]:(new_diagptr[i + 1] - 1)

        idx_A = findfirst(==(k), offsets_A_cpu)
        if idx_A !== nothing
            src_range = diagptr_A_cpu[idx_A]:(diagptr_A_cpu[idx_A + 1] - 1)
            new_data[dst_range] .+= collect(view(A.data, src_range))
        end

        idx_B = findfirst(==(k), offsets_B_cpu)
        if idx_B !== nothing
            src_range = diagptr_B_cpu[idx_B]:(diagptr_B_cpu[idx_B + 1] - 1)
            new_data[dst_range] .+= collect(view(B.data, src_range))
        end
    end

    # Transfer back to device
    new_offsets = Adapt.adapt_structure(backend_A, Vector{Ti}(merged_offsets))
    new_diagptr_dev = Adapt.adapt_structure(backend_A, new_diagptr)
    new_data_dev = Adapt.adapt_structure(backend_A, new_data)

    return GenericSparseMatrixDIA(m, n, new_offsets, new_diagptr_dev, new_data_dev)
end

# ============================================================================
# Addition with UniformScaling
# ============================================================================

function Base.:+(A::GenericSparseMatrixDIA{Tv, Ti}, J::UniformScaling) where {Tv, Ti}
    m, n = size(A)
    m == n || throw(DimensionMismatch("Matrix must be square to add UniformScaling."))
    λ = J.λ
    iszero(λ) && return copy(A)

    offsets_cpu = collect(A.offsets)
    diagptr_cpu = collect(A.diagptr)

    main_idx = findfirst(==(0), offsets_cpu)

    Tv_new = promote_type(Tv, typeof(λ))

    if main_idx !== nothing
        # Main diagonal exists — add λ to it
        new_data = similar(A.data, Tv_new, length(A.data))
        new_data .= A.data
        start_idx = diagptr_cpu[main_idx]
        end_idx = diagptr_cpu[main_idx + 1] - 1
        new_data[start_idx:end_idx] .+= Tv_new(λ)
        return GenericSparseMatrixDIA(m, n, copy(A.offsets), copy(A.diagptr), new_data)
    else
        # Need to insert main diagonal
        insert_pos = searchsortedfirst(offsets_cpu, zero(Ti))
        ndiags_old = length(offsets_cpu)

        new_offsets = Vector{Ti}(undef, ndiags_old + 1)
        new_offsets[1:(insert_pos - 1)] .= offsets_cpu[1:(insert_pos - 1)]
        new_offsets[insert_pos] = zero(Ti)
        new_offsets[(insert_pos + 1):end] .= offsets_cpu[insert_pos:end]

        diag_len = _diag_length(m, n, 0)
        old_total = length(A.data)
        new_total = old_total + diag_len

        new_diagptr = Vector{Ti}(undef, ndiags_old + 2)
        new_diagptr[1:insert_pos] .= diagptr_cpu[1:insert_pos]
        insert_start = diagptr_cpu[insert_pos]
        new_diagptr[insert_pos + 1] = insert_start + Ti(diag_len)
        for i in (insert_pos + 1):(ndiags_old + 1)
            new_diagptr[i + 1] = diagptr_cpu[i] + Ti(diag_len)
        end

        new_data = Vector{Tv_new}(undef, new_total)
        # Copy data before insertion point
        if insert_start > 1
            new_data[1:(insert_start - 1)] .= collect(view(A.data, 1:(insert_start - 1)))
        end
        # Insert new diagonal
        fill!(view(new_data, insert_start:(insert_start + diag_len - 1)), Tv_new(λ))
        # Copy data after insertion point
        if insert_start <= old_total
            new_data[(insert_start + diag_len):end] .=
                collect(view(A.data, insert_start:old_total))
        end

        backend = get_backend(A)
        return GenericSparseMatrixDIA(
            m,
            n,
            Adapt.adapt_structure(backend, new_offsets),
            Adapt.adapt_structure(backend, new_diagptr),
            Adapt.adapt_structure(backend, new_data),
        )
    end
end

# ============================================================================
# Addition with transpose/adjoint support
# ============================================================================

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixDIA)
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

            A_dia = GenericSparseMatrixDIA(A)
            B_dia = GenericSparseMatrixDIA(B)
            return A_dia + B_dia
        end

        @eval function Base.:-(A::$TypeA, B::$TypeB) where {$(whereT1(:T1)), $(whereT2(:T2))}
            return A + (-B)
        end
    end
end

# ============================================================================
# Sparse * Sparse Multiplication (DIA × DIA)
# ============================================================================

function Base.:(*)(A::GenericSparseMatrixDIA, B::GenericSparseMatrixDIA)
    size(A, 2) == size(B, 1) || throw(
        DimensionMismatch(
            "second dimension of A, $(size(A, 2)), does not match first dimension of B, $(size(B, 1))",
        ),
    )

    backend_A = get_backend(A)
    backend_B = get_backend(B)
    backend_A == backend_B ||
        throw(ArgumentError("Both matrices must have the same backend"))

    # Convert to COO for multiplication, then back to DIA
    A_coo = GenericSparseMatrixCOO(A)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = A_coo * B_coo
    return GenericSparseMatrixDIA(C_coo)
end

# Multiplication with transpose/adjoint support
for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    for (wrapb, transb, conjb, unwrapb, whereT2) in
        trans_adj_wrappers(:GenericSparseMatrixDIA)
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

            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = A_coo * B_coo
            return GenericSparseMatrixDIA(C_coo)
        end
    end
end

# ============================================================================
# Kronecker product
# ============================================================================

for (wrapa, transa, conja, unwrapa, whereT1) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    for (wrapb, transb, conjb, unwrapb, whereT2) in trans_adj_wrappers(:GenericSparseMatrixDIA)
        TypeA = wrapa(:(T1))
        TypeB = wrapb(:(T2))

        @eval function LinearAlgebra.kron(
                A::$TypeA,
                B::$TypeB,
            ) where {$(whereT1(:T1)), $(whereT2(:T2))}
            A_coo = GenericSparseMatrixCOO(A)
            B_coo = GenericSparseMatrixCOO(B)
            C_coo = kron(A_coo, B_coo)
            return GenericSparseMatrixDIA(C_coo)
        end
    end
end

function LinearAlgebra.kron(D::Diagonal, B::GenericSparseMatrixDIA)
    B_coo = GenericSparseMatrixCOO(B)
    C_coo = kron(D, B_coo)
    return GenericSparseMatrixDIA(C_coo)
end

function LinearAlgebra.kron(A::GenericSparseMatrixDIA, D::Diagonal)
    A_coo = GenericSparseMatrixCOO(A)
    C_coo = kron(A_coo, D)
    return GenericSparseMatrixDIA(C_coo)
end

# kron with Diagonal and transpose/adjoint wrappers for DIA
for (wrap, trans, conj, unwrap, whereT) in trans_adj_wrappers(:GenericSparseMatrixDIA)
    trans == false && continue

    TypeB = wrap(:(T))

    @eval function LinearAlgebra.kron(
            D::Diagonal{Tv1},
            B::$TypeB,
        ) where {Tv1, $(whereT(:T))}
        B_coo = GenericSparseMatrixCOO(B)
        C_coo = kron(D, B_coo)
        return GenericSparseMatrixDIA(C_coo)
    end

    TypeA = wrap(:(T))
    @eval function LinearAlgebra.kron(
            A::$TypeA,
            D::Diagonal{Tv2},
        ) where {$(whereT(:T)), Tv2}
        A_coo = GenericSparseMatrixCOO(A)
        C_coo = kron(A_coo, D)
        return GenericSparseMatrixDIA(C_coo)
    end
end

# ============================================================================
# issymmetric / ishermitian
# ============================================================================

function LinearAlgebra.issymmetric(A::GenericSparseMatrixDIA)
    m, n = size(A)
    m == n || return false

    nnz(A) == 0 && return true

    offsets_cpu = collect(A.offsets)
    diagptr_cpu = collect(A.diagptr)

    # Check that for every offset k, offset -k also exists and has matching values
    for (idx, k) in enumerate(offsets_cpu)
        if k == 0
            continue
        end
        mirror_idx = findfirst(==(-k), offsets_cpu)
        mirror_idx === nothing && return false

        # Compare: A[i, i+k] should equal A[i+k, i] = diag_{-k}[i+k - max(1, 1+k) + ...]
        # For offset k: entries are A[i, i+k] for i = max(1, 1-k) .. min(m, n-k)
        # For offset -k: entries are A[j, j-k] for j = max(1, 1+k) .. min(m, n+k)
        # A[i, i+k] should match entry in diag -k at row i+k:
        # diag_{-k} stores A[j, j + (-k)] = A[j, j-k]. We need A[i+k, i], which means j-k = i, j = i+k.
        # So row j = i+k, and that's valid when j = max(1, 1-(-k)) = max(1, 1+k).
        # position in diag -k: j - max(1, 1+k)
        # position in diag k: i - max(1, 1-k)
        # Since j = i + k, these positions are offset the same way.

        dlen_k = _diag_length(m, n, k)
        dlen_mk = _diag_length(m, n, -k)
        dlen_k == dlen_mk || return false

        data_k = collect(view(A.data, diagptr_cpu[idx]:(diagptr_cpu[idx + 1] - 1)))
        data_mk = collect(view(A.data, diagptr_cpu[mirror_idx]:(diagptr_cpu[mirror_idx + 1] - 1)))

        data_k ≈ data_mk || return false
    end

    return true
end

function LinearAlgebra.ishermitian(A::GenericSparseMatrixDIA)
    m, n = size(A)
    m == n || return false

    nnz(A) == 0 && return true

    offsets_cpu = collect(A.offsets)
    diagptr_cpu = collect(A.diagptr)

    for (idx, k) in enumerate(offsets_cpu)
        if k == 0
            # Diagonal must be real-valued (self-conjugate)
            data_k = collect(view(A.data, diagptr_cpu[idx]:(diagptr_cpu[idx + 1] - 1)))
            data_k ≈ conj.(data_k) || return false
            continue
        end
        mirror_idx = findfirst(==(-k), offsets_cpu)
        mirror_idx === nothing && return false

        dlen_k = _diag_length(m, n, k)
        dlen_mk = _diag_length(m, n, -k)
        dlen_k == dlen_mk || return false

        data_k = collect(view(A.data, diagptr_cpu[idx]:(diagptr_cpu[idx + 1] - 1)))
        data_mk = collect(view(A.data, diagptr_cpu[mirror_idx]:(diagptr_cpu[mirror_idx + 1] - 1)))

        data_k ≈ conj.(data_mk) || return false
    end

    return true
end
