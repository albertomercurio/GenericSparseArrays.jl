module DeviceSparseArraysJLArraysExt

using JLArrays: JLArray
import DeviceSparseArrays

DeviceSparseArrays._sortperm_AK(x::JLArray) = JLArray(sortperm(collect(x)))
DeviceSparseArrays._cumsum_AK(x::JLArray) = JLArray(cumsum(collect(x)))
DeviceSparseArrays._searchsortedfirst_AK(v::JLArray, x::JLArray) =
    JLArray(searchsortedfirst.(Ref(collect(v)), collect(x)))

end
