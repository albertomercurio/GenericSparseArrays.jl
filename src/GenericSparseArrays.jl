module GenericSparseArrays

using LinearAlgebra
import LinearAlgebra: wrap, copymutable_oftype, __normalize!, kron, Diagonal, issymmetric, ishermitian
using SparseArrays
import SparseArrays: SparseVector, SparseMatrixCSC
import SparseArrays: getcolptr, getrowval, getnzval, nonzeroinds
import SparseArrays: _show_with_braille_patterns

import GPUArraysCore: @allowscalar

import KernelAbstractions
import KernelAbstractions:
    @kernel,
    @atomic,
    @index,
    get_backend,
    synchronize,
    @ndrange,
    @groupsize,
    @localmem,
    @synchronize,
    @private,
    @uniform
using AcceleratedKernels

import Adapt

export AbstractGenericSparseArray,
    AbstractGenericSparseVector, AbstractGenericSparseMatrix, AbstractGenericSparseVecOrMat

export GenericSparseVector,
    GenericSparseMatrixCSC, GenericSparseMatrixCSR, GenericSparseMatrixCOO

include("core.jl")
include("helpers.jl")
include("vector/vector.jl")

include("matrix_csc/matrix_csc_kernels.jl")
include("matrix_csc/matrix_csc.jl")

include("matrix_csr/matrix_csr_kernels.jl")
include("matrix_csr/matrix_csr.jl")

include("matrix_coo/matrix_coo_kernels.jl")
include("matrix_coo/matrix_coo.jl")

include("conversions/conversion_kernels.jl")
include("conversions/conversions.jl")

end # module
