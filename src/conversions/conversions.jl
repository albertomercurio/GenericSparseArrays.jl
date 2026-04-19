# Conversions between CSC, CSR, and COO sparse matrix formats

# ============================================================================
# SparseMatrixCSC ↔ GenericSparseMatrix (CSC-CSR-COO) Conversions
# ============================================================================

GenericSparseMatrixCSC(A::SparseMatrixCSC) =
    GenericSparseMatrixCSC(size(A, 1), size(A, 2), A.colptr, A.rowval, A.nzval)

SparseMatrixCSC(A::GenericSparseMatrixCSC) = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.colptr),
    collect(A.rowval),
    collect(A.nzval),
)
function SparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixCSC}) where {Tv}
    return SparseMatrixCSC(GenericSparseMatrixCSR(A))
end
function SparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixCSC}) where {Tv}
    return SparseMatrixCSC(GenericSparseMatrixCSR(A))
end

function GenericSparseMatrixCSR(A::SparseMatrixCSC)
    # TODO: Implement a direct CSC to CSR conversion without going through transposition
    At = transpose(A)
    At_sparse = transpose(SparseMatrixCSC(At))
    return GenericSparseMatrixCSR(At_sparse)
end

function SparseMatrixCSC(A::GenericSparseMatrixCSR)
    # Convert CSR to CSC by creating transposed CSC and then transposing back
    At_csc =
        SparseMatrixCSC(A.n, A.m, collect(A.rowptr), collect(A.colval), collect(A.nzval))
    return SparseMatrixCSC(transpose(At_csc))
end
function SparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixCSR}) where {Tv}
    At = A.parent
    return SparseMatrixCSC(At.n, At.m, collect(At.rowptr), collect(At.colval), collect(At.nzval))
end
function SparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixCSR}) where {Tv}
    At = A.parent
    return SparseMatrixCSC(
        size(A, 1),
        size(A, 2),
        collect(At.rowptr),
        collect(At.colval),
        collect(conj.(At.nzval)),
    )
end

function GenericSparseMatrixCOO(A::SparseMatrixCSC)
    m, n = size(A)
    rows, cols, vals = findnz(A)
    return GenericSparseMatrixCOO(m, n, rows, cols, vals)
end

function SparseMatrixCSC(A::GenericSparseMatrixCOO)
    m, n = size(A)
    rowind = collect(A.rowind)
    colind = collect(A.colind)
    nzval = collect(A.nzval)

    return sparse(rowind, colind, nzval, m, n)
end
SparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixCOO}) where {Tv} = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.parent.colind),
    collect(A.parent.rowind),
    collect(A.parent.nzval),
)
SparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixCOO}) where {Tv} = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.parent.colind),
    collect(A.parent.rowind),
    collect(conj.(A.parent.nzval)),
)

# ============================================================================
# CSC ↔ CSR Conversions
# ============================================================================

GenericSparseMatrixCSC(A::GenericSparseMatrixCSR) =
    GenericSparseMatrixCSC(GenericSparseMatrixCOO(A))
GenericSparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixCSR}) where {Tv} =
    GenericSparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    A.parent.rowptr,
    A.parent.colval,
    A.parent.nzval,
)
GenericSparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixCSR}) where {Tv} =
    GenericSparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    A.parent.rowptr,
    A.parent.colval,
    conj.(A.parent.nzval),
)

GenericSparseMatrixCSR(A::GenericSparseMatrixCSC) =
    GenericSparseMatrixCSR(GenericSparseMatrixCOO(A))
function GenericSparseMatrixCSR(
        A::Transpose{Tv, <:Union{<:SparseMatrixCSC, <:GenericSparseMatrixCSC}},
    ) where {Tv}
    At = A.parent
    return GenericSparseMatrixCSR(size(A, 1), size(A, 2), At.colptr, rowvals(At), nonzeros(At))
end
function GenericSparseMatrixCSR(
        A::Adjoint{Tv, <:Union{<:SparseMatrixCSC, <:GenericSparseMatrixCSC}},
    ) where {Tv}
    At = A.parent
    return GenericSparseMatrixCSR(
        size(A, 1),
        size(A, 2),
        At.colptr,
        rowvals(At),
        conj.(nonzeros(At)),
    )
end

# ============================================================================
# Transpose and Adjoint conversions for COO
# ============================================================================

GenericSparseMatrixCOO(A::GenericSparseMatrixCOO) = A

GenericSparseMatrixCOO(A::Transpose{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixCOO(
    size(A, 1),
    size(A, 2),
    A.parent.colind,
    A.parent.rowind,
    A.parent.nzval,
)

GenericSparseMatrixCOO(A::Adjoint{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixCOO(
    size(A, 1),
    size(A, 2),
    A.parent.colind,
    A.parent.rowind,
    conj.(A.parent.nzval),
)

# ============================================================================
# CSC ↔ COO Conversions
# ============================================================================

function GenericSparseMatrixCOO(A::GenericSparseMatrixCSC{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

    # Allocate output arrays on the same backend
    rowind = similar(A.rowval, Ti, nnz_count)
    colind = similar(A.rowval, Ti, nnz_count)
    nzval = similar(A.nzval, Tv, nnz_count)

    # Use kernel to convert CSC to COO
    kernel! = kernel_csc_to_coo!(backend)
    kernel!(rowind, colind, nzval, A.colptr, A.rowval, A.nzval; ndrange = (n,))

    return GenericSparseMatrixCOO(m, n, rowind, colind, nzval)
end

function GenericSparseMatrixCSC(A::GenericSparseMatrixCOO{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

    # Handle empty matrix case
    if nnz_count == 0
        colptr = similar(A.rowind, Ti, n + 1)
        fill!(colptr, one(Ti))
        rowind = similar(A.rowind, Ti, 0)
        nzval = similar(A.nzval, Tv, 0)
        return GenericSparseMatrixCSC(m, n, colptr, rowind, nzval)
    end

    # Create keys for sorting: column first, then row
    keys = similar(A.rowind, Ti, nnz_count)

    # Create keys on device
    kernel! = kernel_make_csc_keys!(backend)
    kernel!(keys, A.rowind, A.colind, m; ndrange = (nnz_count,))

    # Sort - use AcceleratedKernels
    perm = _sortperm_AK(keys)

    # Apply permutation to get sorted arrays
    rowind_sorted = A.rowind[perm]
    colind_sorted = A.colind[perm]
    nzval_sorted = A.nzval[perm]

    # Build colptr on device using searchsortedfirst approach
    # Since colind_sorted is sorted, find where each column starts
    col_indices = similar(A.colind, Ti, n)
    col_indices .= Ti(1):Ti(n)

    # Find start positions for each column
    colptr = similar(A.colind, Ti, n + 1)
    colptr[1:n] .= _searchsortedfirst_AK(colind_sorted, col_indices)
    @allowscalar colptr[n + 1] = Ti(nnz_count + 1)

    return GenericSparseMatrixCSC(m, n, colptr, rowind_sorted, nzval_sorted)
end

# Transpose and Adjoint conversions for COO to CSC
GenericSparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixCSC(
    GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        A.parent.colind,
        A.parent.rowind,
        A.parent.nzval,
    )
)

GenericSparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixCSC(
    GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        A.parent.colind,
        A.parent.rowind,
        conj.(A.parent.nzval),
    )
)

# Transpose and Adjoint conversions for CSC to COO
function GenericSparseMatrixCOO(A::Transpose{Tv, <:GenericSparseMatrixCSC}) where {Tv}
    parent_coo = GenericSparseMatrixCOO(A.parent)
    return GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        parent_coo.colind,
        parent_coo.rowind,
        parent_coo.nzval,
    )
end

function GenericSparseMatrixCOO(A::Adjoint{Tv, <:GenericSparseMatrixCSC}) where {Tv}
    parent_coo = GenericSparseMatrixCOO(A.parent)
    return GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        parent_coo.colind,
        parent_coo.rowind,
        conj.(parent_coo.nzval),
    )
end

# ============================================================================
# CSR ↔ COO Conversions
# ============================================================================

function GenericSparseMatrixCOO(A::GenericSparseMatrixCSR{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

    # Allocate output arrays on the same backend
    rowind = similar(A.colval, Ti, nnz_count)
    colind = similar(A.colval, Ti, nnz_count)
    nzval = similar(A.nzval, Tv, nnz_count)

    # Use kernel to convert CSR to COO
    kernel! = kernel_csr_to_coo!(backend)
    kernel!(rowind, colind, nzval, A.rowptr, A.colval, A.nzval; ndrange = (m,))

    return GenericSparseMatrixCOO(m, n, rowind, colind, nzval)
end

function GenericSparseMatrixCSR(A::GenericSparseMatrixCOO{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

    # Handle empty matrix case
    if nnz_count == 0
        rowptr = similar(A.rowind, Ti, m + 1)
        fill!(rowptr, one(Ti))
        colind = similar(A.rowind, Ti, 0)
        nzval = similar(A.nzval, Tv, 0)
        return GenericSparseMatrixCSR(m, n, rowptr, colind, nzval)
    end

    # Create keys for sorting: row first, then column
    keys = similar(A.rowind, Ti, nnz_count)

    # Create keys on device
    kernel! = kernel_make_csr_keys!(backend)
    kernel!(keys, A.rowind, A.colind, n; ndrange = (nnz_count,))

    # Sort - use AcceleratedKernels
    perm = _sortperm_AK(keys)

    # Apply permutation to get sorted arrays
    rowind_sorted = A.rowind[perm]
    colind_sorted = A.colind[perm]
    nzval_sorted = A.nzval[perm]

    # Build rowptr on device using searchsortedfirst approach
    # Since rowind_sorted is sorted, find where each row starts
    row_indices = similar(A.rowind, Ti, m)
    row_indices .= Ti(1):Ti(m)

    # Find start positions for each row
    rowptr = similar(A.rowind, Ti, m + 1)
    rowptr[1:m] .= _searchsortedfirst_AK(rowind_sorted, row_indices)
    @allowscalar rowptr[m + 1] = Ti(nnz_count + 1)

    return GenericSparseMatrixCSR(m, n, rowptr, colind_sorted, nzval_sorted)
end

# Transpose and Adjoint conversions for CSR to COO
function GenericSparseMatrixCOO(A::Transpose{Tv, <:GenericSparseMatrixCSR}) where {Tv}
    parent_coo = GenericSparseMatrixCOO(A.parent)
    return GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        parent_coo.colind,
        parent_coo.rowind,
        parent_coo.nzval,
    )
end

function GenericSparseMatrixCOO(A::Adjoint{Tv, <:GenericSparseMatrixCSR}) where {Tv}
    parent_coo = GenericSparseMatrixCOO(A.parent)
    return GenericSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        parent_coo.colind,
        parent_coo.rowind,
        conj.(parent_coo.nzval),
    )
end

# ============================================================================
# DIA ↔ COO Conversions
# ============================================================================

function GenericSparseMatrixCOO(A::GenericSparseMatrixDIA{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    nnz_count == 0 && return GenericSparseMatrixCOO(
        m,
        n,
        similar(A.offsets, Ti, 0),
        similar(A.offsets, Ti, 0),
        similar(A.data, Tv, 0),
    )

    backend = get_backend(A.data)

    rowind = similar(A.offsets, Ti, nnz_count)
    colind = similar(A.offsets, Ti, nnz_count)
    nzval = similar(A.data, Tv, nnz_count)

    ndiags = length(A.offsets)

    # Build coo_ptr: prefix sum of diagonal lengths for output offset
    # diagptr already gives us this info: diag d has length diagptr[d+1] - diagptr[d]
    # coo_ptr[d] = 1 + sum of lengths of diags 1..d-1 = diagptr[d] - diagptr[1] + 1
    # Since diagptr[1] = 1, coo_ptr[d] = diagptr[d]
    coo_ptr = A.diagptr

    kernel! = kernel_dia_to_coo!(backend)
    kernel!(rowind, colind, nzval, A.offsets, A.diagptr, A.data, coo_ptr, m; ndrange = (ndiags,))

    return GenericSparseMatrixCOO(m, n, rowind, colind, nzval)
end

function GenericSparseMatrixDIA(A::GenericSparseMatrixCOO{Tv, Ti}) where {Tv, Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    if nnz_count == 0
        offsets = similar(A.rowind, Ti, 0)
        diagptr = similar(A.rowind, Ti, 1)
        fill!(diagptr, one(Ti))
        data = similar(A.nzval, Tv, 0)
        return GenericSparseMatrixDIA(m, n, offsets, diagptr, data)
    end

    # Compute diagonal offset for each nonzero
    rowind_cpu = collect(A.rowind)
    colind_cpu = collect(A.colind)
    nzval_cpu = collect(A.nzval)

    diag_offsets = colind_cpu .- rowind_cpu

    # Find unique sorted offsets
    unique_offsets = sort(unique(diag_offsets))
    ndiags = length(unique_offsets)

    # Build diagptr and data
    offset_to_idx = Dict(k => i for (i, k) in enumerate(unique_offsets))

    # DIA stores full diagonals (including zeros), so use _diag_length
    diagptr = Vector{Ti}(undef, ndiags + 1)
    diagptr[1] = one(Ti)
    for i in 1:ndiags
        dlen = _diag_length(m, n, unique_offsets[i])
        diagptr[i + 1] = diagptr[i] + Ti(dlen)
    end

    total_nnz = diagptr[end] - one(Ti)
    data = zeros(Tv, total_nnz)

    # Fill data: for each diagonal, entries must be sorted by row
    # First, group entries by diagonal
    diag_entries = [Tuple{Ti, Tv}[] for _ in 1:ndiags]
    for (i, k) in enumerate(diag_offsets)
        idx = offset_to_idx[k]
        push!(diag_entries[idx], (rowind_cpu[i], nzval_cpu[i]))
    end

    for d in 1:ndiags
        sort!(diag_entries[d]; by = first)
        k = unique_offsets[d]
        row_start = max(1, 1 - k)

        # Accumulate values (COO can have duplicate entries)
        for (row, val) in diag_entries[d]
            pos = row - row_start + 1
            data[diagptr[d] + pos - 1] += val
        end
    end

    backend = get_backend(A.nzval)
    offsets_dev = Adapt.adapt_structure(backend, Vector{Ti}(unique_offsets))
    diagptr_dev = Adapt.adapt_structure(backend, diagptr)
    data_dev = Adapt.adapt_structure(backend, data)

    return GenericSparseMatrixDIA(m, n, offsets_dev, diagptr_dev, data_dev)
end

# ============================================================================
# DIA ↔ SparseMatrixCSC Conversions
# ============================================================================

function GenericSparseMatrixDIA(A::SparseMatrixCSC)
    coo = GenericSparseMatrixCOO(A)
    return GenericSparseMatrixDIA(coo)
end

function SparseMatrixCSC(A::GenericSparseMatrixDIA)
    coo = GenericSparseMatrixCOO(A)
    return SparseMatrixCSC(coo)
end

function SparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixDIA}) where {Tv}
    return SparseMatrixCSC(GenericSparseMatrixDIA(A))
end

function SparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixDIA}) where {Tv}
    return SparseMatrixCSC(GenericSparseMatrixDIA(A))
end

# ============================================================================
# DIA ↔ CSC/CSR Conversions (via COO)
# ============================================================================

GenericSparseMatrixDIA(A::GenericSparseMatrixCSC) =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::GenericSparseMatrixCSR) =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))

GenericSparseMatrixCSC(A::GenericSparseMatrixDIA) =
    GenericSparseMatrixCSC(GenericSparseMatrixCOO(A))
GenericSparseMatrixCSR(A::GenericSparseMatrixDIA) =
    GenericSparseMatrixCSR(GenericSparseMatrixCOO(A))

# ============================================================================
# Transpose and Adjoint conversions for DIA
# ============================================================================

function GenericSparseMatrixDIA(A::Transpose{Tv, <:GenericSparseMatrixDIA}) where {Tv}
    parent = A.parent
    m, n = size(A)

    offsets_cpu = collect(parent.offsets)
    diagptr_cpu = collect(parent.diagptr)

    # Transpose: offset k -> offset -k, and data needs reordering
    # For offset k in original: A[i, i+k] for i = max(1, 1-k)..
    # In transpose: A^T[j, i] = A[i, j], so A^T[j, j + (-k)] = A[j+(-k)+k, j] = A[j, j]... 
    # Actually: A[i, i+k] becomes A^T[i+k, i], which is on diagonal -(k) at row i+k.
    # For diagonal -k: entries are A^T[r, r + (-k)] = A^T[r, r-k] for r = max(1, 1+k)..
    # This equals A[r-k, r]. In original, this is diagonal k at position r-k.
    # So the values are the same but we need to reverse the offset.

    new_offsets_cpu = sort(-offsets_cpu)
    ndiags = length(new_offsets_cpu)

    # Build reverse mapping
    perm = sortperm(-offsets_cpu)

    new_diagptr = Vector{eltype(diagptr_cpu)}(undef, ndiags + 1)
    new_diagptr[1] = one(eltype(diagptr_cpu))
    for i in 1:ndiags
        old_d = perm[i]
        dlen = diagptr_cpu[old_d + 1] - diagptr_cpu[old_d]
        new_diagptr[i + 1] = new_diagptr[i] + dlen
    end

    total_nnz = new_diagptr[end] - one(eltype(diagptr_cpu))
    new_data = Vector{Tv}(undef, total_nnz)

    for i in 1:ndiags
        old_d = perm[i]
        old_range = diagptr_cpu[old_d]:(diagptr_cpu[old_d + 1] - 1)
        new_range = new_diagptr[i]:(new_diagptr[i + 1] - 1)
        new_data[new_range] .= collect(view(parent.data, old_range))
    end

    backend = get_backend(parent)
    return GenericSparseMatrixDIA(
        m,
        n,
        Adapt.adapt_structure(backend, new_offsets_cpu),
        Adapt.adapt_structure(backend, new_diagptr),
        Adapt.adapt_structure(backend, new_data),
    )
end

function GenericSparseMatrixDIA(A::Adjoint{Tv, <:GenericSparseMatrixDIA}) where {Tv}
    parent = A.parent
    m, n = size(A)

    offsets_cpu = collect(parent.offsets)
    diagptr_cpu = collect(parent.diagptr)

    new_offsets_cpu = sort(-offsets_cpu)
    ndiags = length(new_offsets_cpu)
    perm = sortperm(-offsets_cpu)

    new_diagptr = Vector{eltype(diagptr_cpu)}(undef, ndiags + 1)
    new_diagptr[1] = one(eltype(diagptr_cpu))
    for i in 1:ndiags
        old_d = perm[i]
        dlen = diagptr_cpu[old_d + 1] - diagptr_cpu[old_d]
        new_diagptr[i + 1] = new_diagptr[i] + dlen
    end

    total_nnz = new_diagptr[end] - one(eltype(diagptr_cpu))
    new_data = Vector{Tv}(undef, total_nnz)

    for i in 1:ndiags
        old_d = perm[i]
        old_range = diagptr_cpu[old_d]:(diagptr_cpu[old_d + 1] - 1)
        new_range = new_diagptr[i]:(new_diagptr[i + 1] - 1)
        new_data[new_range] .= conj.(collect(view(parent.data, old_range)))
    end

    backend = get_backend(parent)
    return GenericSparseMatrixDIA(
        m,
        n,
        Adapt.adapt_structure(backend, new_offsets_cpu),
        Adapt.adapt_structure(backend, new_diagptr),
        Adapt.adapt_structure(backend, new_data),
    )
end

# Cross-format transpose/adjoint DIA conversions
GenericSparseMatrixCOO(A::Transpose{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCOO(GenericSparseMatrixDIA(A))
GenericSparseMatrixCOO(A::Adjoint{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCOO(GenericSparseMatrixDIA(A))

GenericSparseMatrixCSC(A::Transpose{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCSC(GenericSparseMatrixCOO(GenericSparseMatrixDIA(A)))
GenericSparseMatrixCSC(A::Adjoint{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCSC(GenericSparseMatrixCOO(GenericSparseMatrixDIA(A)))

GenericSparseMatrixCSR(A::Transpose{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCSR(GenericSparseMatrixCOO(GenericSparseMatrixDIA(A)))
GenericSparseMatrixCSR(A::Adjoint{Tv, <:GenericSparseMatrixDIA}) where {Tv} =
    GenericSparseMatrixCSR(GenericSparseMatrixCOO(GenericSparseMatrixDIA(A)))

# DIA from other format transpose/adjoint
GenericSparseMatrixDIA(A::Transpose{Tv, <:GenericSparseMatrixCSC}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::Adjoint{Tv, <:GenericSparseMatrixCSC}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::Transpose{Tv, <:GenericSparseMatrixCSR}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::Adjoint{Tv, <:GenericSparseMatrixCSR}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::Transpose{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
GenericSparseMatrixDIA(A::Adjoint{Tv, <:GenericSparseMatrixCOO}) where {Tv} =
    GenericSparseMatrixDIA(GenericSparseMatrixCOO(A))
