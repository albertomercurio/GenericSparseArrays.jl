function shared_test_conversions(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "Format Conversions $array_type" verbose = true begin
        Tv = float_types[end]
        Ti = int_types[end]
        A = SparseMatrixCSC{Tv, Ti}(sprand(100, 200, 0.05))

        # Test CSC ↔ COO conversions
        @testset "CSC ↔ COO" begin
            # CSC → COO
            A_csc = adapt(op, GenericSparseMatrixCSC(A))
            A_coo_from_csc = GenericSparseMatrixCOO(A_csc)
            @test collect(SparseMatrixCSC(A_coo_from_csc)) ≈ collect(A)

            # COO → CSC
            A_coo = adapt(op, GenericSparseMatrixCOO(A))
            A_csc_from_coo = GenericSparseMatrixCSC(A_coo)
            @test collect(SparseMatrixCSC(A_csc_from_coo)) ≈ collect(A)

            # Round-trip
            A_csc_roundtrip = GenericSparseMatrixCSC(GenericSparseMatrixCOO(A_csc))
            @test collect(SparseMatrixCSC(A_csc_roundtrip)) ≈ collect(A)
        end

        # Test CSR ↔ COO conversions
        @testset "CSR ↔ COO" begin
            # CSR → COO
            A_csr = adapt(op, GenericSparseMatrixCSR(A))
            A_coo_from_csr = GenericSparseMatrixCOO(A_csr)
            @test collect(SparseMatrixCSC(A_coo_from_csr)) ≈ collect(A)

            # COO → CSR
            A_coo = adapt(op, GenericSparseMatrixCOO(A))
            A_csr_from_coo = GenericSparseMatrixCSR(A_coo)
            @test collect(SparseMatrixCSC(A_csr_from_coo)) ≈ collect(A)

            # Round-trip
            A_csr_roundtrip = GenericSparseMatrixCSR(GenericSparseMatrixCOO(A_csr))
            @test collect(SparseMatrixCSC(A_csr_roundtrip)) ≈ collect(A)
        end

        # Test CSC ↔ CSR conversions (through COO internally)
        @testset "CSC ↔ CSR" begin
            # CSC → CSR
            A_csc = adapt(op, GenericSparseMatrixCSC(A))
            A_csr_from_csc = GenericSparseMatrixCSR(A_csc)
            @test collect(SparseMatrixCSC(A_csr_from_csc)) ≈ collect(A)

            # CSR → CSC
            A_csr = adapt(op, GenericSparseMatrixCSR(A))
            A_csc_from_csr = GenericSparseMatrixCSC(A_csr)
            @test collect(SparseMatrixCSC(A_csc_from_csr)) ≈ collect(A)

            # Round-trip
            A_csc_roundtrip = GenericSparseMatrixCSC(GenericSparseMatrixCSR(A_csc))
            @test collect(SparseMatrixCSC(A_csc_roundtrip)) ≈ collect(A)
        end

        # Test conversions from/to SparseMatrixCSC
        @testset "SparseMatrixCSC Conversions" begin
            # SparseMatrixCSC → GenericSparseMatrixCSC → SparseMatrixCSC
            A_csc = GenericSparseMatrixCSC(A)
            A_csc_device = adapt(op, A_csc)
            @test collect(SparseMatrixCSC(A_csc_device)) ≈ collect(A)

            # SparseMatrixCSC → GenericSparseMatrixCSR → SparseMatrixCSC
            A_csr = GenericSparseMatrixCSR(A)
            A_csr_device = adapt(op, A_csr)
            @test collect(SparseMatrixCSC(A_csr_device)) ≈ collect(A)

            # SparseMatrixCSC → GenericSparseMatrixCOO → SparseMatrixCSC
            A_coo = GenericSparseMatrixCOO(A)
            A_coo_device = adapt(op, A_coo)
            @test collect(SparseMatrixCSC(A_coo_device)) ≈ collect(A)
        end

        # Test transpose conversions
        @testset "Transpose Conversions" begin
            # CSC transpose
            A_csc = adapt(op, GenericSparseMatrixCSC(A))
            A_csc_t = transpose(A_csc)
            @test collect(SparseMatrixCSC(A_csc_t)) ≈ collect(transpose(A))

            # CSR transpose
            A_csr = adapt(op, GenericSparseMatrixCSR(A))
            A_csr_t = transpose(A_csr)
            @test collect(SparseMatrixCSC(A_csr_t)) ≈ collect(transpose(A))

            # CSR transpose → CSC conversion (direct path)
            A_csc_from_csr_t = GenericSparseMatrixCSC(A_csr_t)
            @test collect(SparseMatrixCSC(A_csc_from_csr_t)) ≈ collect(transpose(A))

            # CSC transpose → CSR conversion
            A_csr_from_csc_t = GenericSparseMatrixCSR(A_csc_t)
            @test collect(SparseMatrixCSC(A_csr_from_csc_t)) ≈ collect(transpose(A))
        end

        # Test adjoint conversions with complex matrices
        @testset "Adjoint Conversions" begin
            Tvc = complex_types[end]
            A_complex = SparseMatrixCSC{Tvc, Ti}(sprand(ComplexF64, 100, 200, 0.05))

            # CSC adjoint
            A_csc = adapt(op, GenericSparseMatrixCSC(A_complex))
            A_csc_adj = adjoint(A_csc)
            @test collect(SparseMatrixCSC(A_csc_adj)) ≈ collect(adjoint(A_complex))

            # CSR adjoint
            A_csr = adapt(op, GenericSparseMatrixCSR(A_complex))
            A_csr_adj = adjoint(A_csr)
            @test collect(SparseMatrixCSC(A_csr_adj)) ≈ collect(adjoint(A_complex))

            # CSR adjoint → CSC conversion (direct path)
            A_csc_from_csr_adj = GenericSparseMatrixCSC(A_csr_adj)
            @test collect(SparseMatrixCSC(A_csc_from_csr_adj)) ≈ collect(adjoint(A_complex))

            # CSC adjoint → CSR conversion
            A_csr_from_csc_adj = GenericSparseMatrixCSR(A_csc_adj)
            @test collect(SparseMatrixCSC(A_csr_from_csc_adj)) ≈ collect(adjoint(A_complex))
        end

        # Test edge cases
        @testset "Edge Cases" begin
            # Single element matrix
            A_single = sparse(Ti[1], Ti[2], [Tv(5.0)], 3, 4)
            A_csc_single = adapt(op, GenericSparseMatrixCSC(A_single))
            A_coo_single = GenericSparseMatrixCOO(A_csc_single)
            @test nnz(A_coo_single) == 1
            @test collect(SparseMatrixCSC(A_coo_single)) ≈ collect(A_single)

            # Single element CSR conversion
            A_csr_single = GenericSparseMatrixCSR(A_csc_single)
            @test nnz(A_csr_single) == 1
            @test collect(SparseMatrixCSC(A_csr_single)) ≈ collect(A_single)

            # Full row matrix
            A_row = sparse(Ti[1, 1, 1, 1], Ti[1, 2, 3, 4], Tv[1, 2, 3, 4], 3, 4)
            A_csc_row = adapt(op, GenericSparseMatrixCSC(A_row))
            A_csr_row = GenericSparseMatrixCSR(A_csc_row)
            @test collect(SparseMatrixCSC(A_csr_row)) ≈ collect(A_row)

            # Full column matrix
            A_col = sparse(Ti[1, 2, 3], Ti[2, 2, 2], Tv[1, 2, 3], 3, 4)
            A_csc_col = adapt(op, GenericSparseMatrixCSC(A_col))
            A_csr_col = GenericSparseMatrixCSR(A_csc_col)
            @test collect(SparseMatrixCSC(A_csr_col)) ≈ collect(A_col)
        end
    end
end
