# Kernel for converting CSC to COO format
@kernel inbounds = true function kernel_csc_to_coo!(
        rowind,
        colind,
        nzval_out,
        @Const(colptr),
        @Const(rowval),
        @Const(nzval_in),
    )
    col = @index(Global)

    @inbounds for j in colptr[col]:(colptr[col + 1] - 1)
        rowind[j] = rowval[j]
        colind[j] = col
        nzval_out[j] = nzval_in[j]
    end
end

# Kernel for converting CSR to COO format
@kernel inbounds = true function kernel_csr_to_coo!(
        rowind,
        colind,
        nzval_out,
        @Const(rowptr),
        @Const(colval),
        @Const(nzval_in),
    )
    row = @index(Global)

    @inbounds for j in rowptr[row]:(rowptr[row + 1] - 1)
        rowind[j] = row
        colind[j] = colval[j]
        nzval_out[j] = nzval_in[j]
    end
end

# Kernel for creating sort keys for COO → CSC conversion
@kernel inbounds = true function kernel_make_csc_keys!(
        keys,
        @Const(rowind),
        @Const(colind),
        @Const(m),  # Number of rows - needed for proper column-major lexicographic ordering
    )
    i = @index(Global)
    keys[i] = colind[i] * m + rowind[i]
end

# Kernel for creating sort keys for COO → CSR conversion
@kernel inbounds = true function kernel_make_csr_keys!(
        keys,
        @Const(rowind),
        @Const(colind),
        @Const(n),
    )
    i = @index(Global)
    keys[i] = rowind[i] * n + colind[i]
end

# Kernel for converting DIA to COO format
# Each thread handles one diagonal
@kernel inbounds = true function kernel_dia_to_coo!(
        rowind,
        colind,
        nzval_out,
        @Const(offsets),
        @Const(diagptr),
        @Const(data),
        @Const(coo_ptr),  # prefix sum of diagonal lengths, for output offset
        @Const(m),
    )
    d = @index(Global)

    k = offsets[d]
    row_start = max(1, 1 - k)
    dlen = diagptr[d + 1] - diagptr[d]
    out_start = coo_ptr[d]

    for idx in 0:(dlen - 1)
        i = row_start + idx
        rowind[out_start + idx] = i
        colind[out_start + idx] = i + k
        nzval_out[out_start + idx] = data[diagptr[d] + idx]
    end
end
