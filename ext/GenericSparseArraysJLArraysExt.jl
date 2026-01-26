module GenericSparseArraysJLArraysExt

using JLArrays: JLArray
import GenericSparseArrays

GenericSparseArrays._sortperm_AK(x::JLArray) = JLArray(sortperm(collect(x)))
GenericSparseArrays._cumsum_AK(x::JLArray) = JLArray(cumsum(collect(x)))
GenericSparseArrays._searchsortedfirst_AK(v::JLArray, x::JLArray) =
    JLArray(searchsortedfirst.(Ref(collect(v)), collect(x)))

end
