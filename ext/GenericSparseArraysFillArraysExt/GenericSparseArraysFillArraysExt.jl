module GenericSparseArraysFillArraysExt

using GenericSparseArrays: GenericSparseMatrixCOO, GenericSparseMatrixCSC, GenericSparseMatrixCSR
using LinearAlgebra: Diagonal, Transpose, Adjoint, kron

import FillArrays: AbstractFill, getindex_value
import KernelAbstractions: @kernel, @index, get_backend, synchronize
import LinearAlgebra: kron
import SparseArrays: nnz

include("kernels.jl")
include("kron_coo.jl")
include("kron_csc.jl")
include("kron_csr.jl")

end # module
