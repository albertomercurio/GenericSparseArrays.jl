# Helper functions to call AcceleratedKernels methods
_sortperm_AK(x) = AcceleratedKernels.sortperm(x)
_cumsum_AK(x) = AcceleratedKernels.cumsum(x)
_searchsortedfirst_AK(v, x) = AcceleratedKernels.searchsortedfirst(v, x)
