using GenericSparseArrays
using Documenter

DocMeta.setdocmeta!(
    GenericSparseArrays,
    :DocTestSetup,
    :(using GenericSparseArrays);
    recursive = true,
)

makedocs(;
    modules = [GenericSparseArrays],
    authors = "Alberto Mercurio <alberto.mercurio96@gmail.com> and contributors",
    sitename = "GenericSparseArrays.jl",
    format = Documenter.HTML(;
        canonical = "https://albertomercurio.github.io/GenericSparseArrays.jl",
        edit_link = "main",
        assets = String[],
    ),
    pages = ["Home" => "index.md", "API Reference" => "api.md"],
)

deploydocs(; repo = "github.com/albertomercurio/GenericSparseArrays.jl", devbranch = "main")
