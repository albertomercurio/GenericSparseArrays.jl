# Conversions between CSC, CSR, and COO sparse matrix formats

# ============================================================================
# SparseMatrixCSC ↔ DeviceSparseMatrix (CSC-CSR-COO) Conversions
# ============================================================================

DeviceSparseMatrixCSC(A::SparseMatrixCSC) =
    DeviceSparseMatrixCSC(size(A, 1), size(A, 2), A.colptr, A.rowval, A.nzval)

SparseMatrixCSC(A::DeviceSparseMatrixCSC) = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.colptr),
    collect(A.rowval),
    collect(A.nzval),
)
function SparseMatrixCSC(A::Transpose{Tv,<:DeviceSparseMatrixCSC}) where {Tv}
    SparseMatrixCSC(DeviceSparseMatrixCSR(A))
end
function SparseMatrixCSC(A::Adjoint{Tv,<:DeviceSparseMatrixCSC}) where {Tv}
    SparseMatrixCSC(DeviceSparseMatrixCSR(A))
end

function DeviceSparseMatrixCSR(A::SparseMatrixCSC)
    # TODO: Implement a direct CSC to CSR conversion without going through transposition
    At = transpose(A)
    At_sparse = transpose(SparseMatrixCSC(At))
    return DeviceSparseMatrixCSR(At_sparse)
end

function SparseMatrixCSC(A::DeviceSparseMatrixCSR)
    # Convert CSR to CSC by creating transposed CSC and then transposing back
    At_csc =
        SparseMatrixCSC(A.n, A.m, collect(A.rowptr), collect(A.colval), collect(A.nzval))
    return SparseMatrixCSC(transpose(At_csc))
end
function SparseMatrixCSC(A::Transpose{Tv,<:DeviceSparseMatrixCSR}) where {Tv}
    At = A.parent
    SparseMatrixCSC(At.n, At.m, collect(At.rowptr), collect(At.colval), collect(At.nzval))
end
function SparseMatrixCSC(A::Adjoint{Tv,<:DeviceSparseMatrixCSR}) where {Tv}
    At = A.parent
    SparseMatrixCSC(
        size(A, 1),
        size(A, 2),
        collect(At.rowptr),
        collect(At.colval),
        collect(conj.(At.nzval)),
    )
end

function DeviceSparseMatrixCOO(A::SparseMatrixCSC)
    m, n = size(A)
    rows, cols, vals = findnz(A)
    return DeviceSparseMatrixCOO(m, n, rows, cols, vals)
end

function SparseMatrixCSC(A::DeviceSparseMatrixCOO)
    m, n = size(A)
    rowind = collect(A.rowind)
    colind = collect(A.colind)
    nzval = collect(A.nzval)

    return sparse(rowind, colind, nzval, m, n)
end
SparseMatrixCSC(A::Transpose{Tv,<:DeviceSparseMatrixCOO}) where {Tv} = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.parent.colind),
    collect(A.parent.rowind),
    collect(A.parent.nzval),
)
SparseMatrixCSC(A::Adjoint{Tv,<:DeviceSparseMatrixCOO}) where {Tv} = SparseMatrixCSC(
    size(A, 1),
    size(A, 2),
    collect(A.parent.colind),
    collect(A.parent.rowind),
    collect(conj.(A.parent.nzval)),
)

# ============================================================================
# CSC ↔ CSR Conversions
# ============================================================================

DeviceSparseMatrixCSC(A::DeviceSparseMatrixCSR) =
    DeviceSparseMatrixCSC(DeviceSparseMatrixCOO(A))
DeviceSparseMatrixCSC(A::Transpose{Tv,<:DeviceSparseMatrixCSR}) where {Tv} =
    DeviceSparseMatrixCSC(
        size(A, 1),
        size(A, 2),
        A.parent.rowptr,
        A.parent.colval,
        A.parent.nzval,
    )
DeviceSparseMatrixCSC(A::Adjoint{Tv,<:DeviceSparseMatrixCSR}) where {Tv} =
    DeviceSparseMatrixCSC(
        size(A, 1),
        size(A, 2),
        A.parent.rowptr,
        A.parent.colval,
        conj.(A.parent.nzval),
    )

DeviceSparseMatrixCSR(A::DeviceSparseMatrixCSC) =
    DeviceSparseMatrixCSR(DeviceSparseMatrixCOO(A))
function DeviceSparseMatrixCSR(
    A::Transpose{Tv,<:Union{<:SparseMatrixCSC,<:DeviceSparseMatrixCSC}},
) where {Tv}
    At = A.parent
    DeviceSparseMatrixCSR(size(A, 1), size(A, 2), At.colptr, rowvals(At), nonzeros(At))
end
function DeviceSparseMatrixCSR(
    A::Adjoint{Tv,<:Union{<:SparseMatrixCSC,<:DeviceSparseMatrixCSC}},
) where {Tv}
    At = A.parent
    DeviceSparseMatrixCSR(
        size(A, 1),
        size(A, 2),
        At.colptr,
        rowvals(At),
        conj.(nonzeros(At)),
    )
end

# ============================================================================
# CSC ↔ COO Conversions
# ============================================================================

function DeviceSparseMatrixCOO(A::DeviceSparseMatrixCSC{Tv,Ti}) where {Tv,Ti}
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

    return DeviceSparseMatrixCOO(m, n, rowind, colind, nzval)
end

function DeviceSparseMatrixCSC(A::DeviceSparseMatrixCOO{Tv,Ti}) where {Tv,Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

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
    @allowscalar colptr[n+1] = Ti(nnz_count + 1)

    return DeviceSparseMatrixCSC(m, n, colptr, rowind_sorted, nzval_sorted)
end

# Transpose and Adjoint conversions for COO to CSC
DeviceSparseMatrixCSC(A::Transpose{Tv,<:DeviceSparseMatrixCOO}) where {Tv} =
    DeviceSparseMatrixCSC(DeviceSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        A.parent.colind,
        A.parent.rowind,
        A.parent.nzval,
    ))

DeviceSparseMatrixCSC(A::Adjoint{Tv,<:DeviceSparseMatrixCOO}) where {Tv} =
    DeviceSparseMatrixCSC(DeviceSparseMatrixCOO(
        size(A, 1),
        size(A, 2),
        A.parent.colind,
        A.parent.rowind,
        conj.(A.parent.nzval),
    ))

# ============================================================================
# CSR ↔ COO Conversions
# ============================================================================

function DeviceSparseMatrixCOO(A::DeviceSparseMatrixCSR{Tv,Ti}) where {Tv,Ti}
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

    return DeviceSparseMatrixCOO(m, n, rowind, colind, nzval)
end

function DeviceSparseMatrixCSR(A::DeviceSparseMatrixCOO{Tv,Ti}) where {Tv,Ti}
    m, n = size(A)
    nnz_count = nnz(A)

    backend = get_backend(A.nzval)

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
    @allowscalar rowptr[m+1] = Ti(nnz_count + 1)

    return DeviceSparseMatrixCSR(m, n, rowptr, colind_sorted, nzval_sorted)
end
