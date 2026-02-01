function shared_test_matrix_csr(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "GenericSparseMatrixCSR $array_type" verbose = true begin
        shared_test_conversion_matrix_csr(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
        shared_test_linearalgebra_matrix_csr(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
    end
end

function shared_test_conversion_matrix_csr(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "Conversion" begin
        A = spzeros(Float32, 0, 0)
        rows = int_types[end][1, 2, 1]
        cols = int_types[end][1, 1, 2]
        vals = float_types[end][1.0, 2.0, 3.0]
        B = sparse(rows, cols, vals, 2, 2)

        # test only conversion SparseMatrixCSC <-> GenericSparseMatrixCSR
        if op === Array
            dA = GenericSparseMatrixCSR(A)
            @test size(dA) == (0, 0)
            @test length(dA) == 0
            @test collect(nonzeros(dA)) == int_types[end][]
            @test SparseMatrixCSC(dA) == A
        end

        B_csr = SparseMatrixCSC(transpose(B))  # Get the CSR storage pattern
        dB = adapt(op, GenericSparseMatrixCSR(transpose(B_csr)))
        dB2 = adapt(op, GenericSparseMatrixCSR(B)) # Directly from CSC should also work
        @test size(dB) == (2, 2)
        @test length(dB) == 4
        @test nnz(dB) == 3
        @test collect(nonzeros(dB)) == B_csr.nzval
        @test collect(colvals(dB)) == B_csr.rowval
        @test collect(getrowptr(dB)) == B_csr.colptr
        @test SparseMatrixCSC(dB) == B
        @test SparseMatrixCSC(dB2) == B

        @test_throws ArgumentError GenericSparseMatrixCSR(
            2,
            2,
            op(int_types[end][1, 3]),
            op(int_types[end][1]),
            op(float_types[end][1.0]),
        )
    end
end

function shared_test_linearalgebra_matrix_csr(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    @testset "Sum and Trace" begin
        for T in (int_types..., float_types..., complex_types...)
            A = sprand(T, 1000, 1000, 0.01)
            # Convert to CSR storage pattern
            dA = adapt(op, GenericSparseMatrixCSR(A))

            @test sum(dA) ≈ sum(A)

            if T in (ComplexF32, ComplexF64)
                # The kernel functions use @atomic, which does not support Complex types
                continue
            end

            @test tr(dA) ≈ tr(A)
        end
    end

    @testset "issymmetric and ishermitian" begin
        for T in (complex_types...,)
            n = 50
            # Non-symmetric/non-hermitian matrix
            A_nonsym = sprand(T, n, n, 0.1)
            A_nonsym[1, 2] = 1.0 + 0.0im
            A_nonsym[2, 1] = 2.0 + 1.0im
            dA_nonsym = adapt(op, GenericSparseMatrixCSR(A_nonsym))
            @test issymmetric(dA_nonsym) == false
            @test ishermitian(dA_nonsym) == false
            @test issymmetric(transpose(dA_nonsym)) == false
            @test ishermitian(adjoint(dA_nonsym)) == false

            # Symmetric matrix (complex symmetric is NOT hermitian)
            A_sym = sparse(A_nonsym + transpose(A_nonsym))
            dA_sym = adapt(op, GenericSparseMatrixCSR(A_sym))
            @test issymmetric(dA_sym) == true
            @test issymmetric(transpose(dA_sym)) == true

            # Hermitian matrix (complex)
            A_herm = sparse(A_nonsym + adjoint(A_nonsym))
            dA_herm = adapt(op, GenericSparseMatrixCSR(A_herm))
            @test ishermitian(dA_herm) == true
            @test ishermitian(adjoint(dA_herm)) == true
        end
    end

    @testset "Three-argument dot" begin
        for T in (int_types..., float_types..., complex_types...)
            for op_A in (identity, transpose, adjoint)
                m, n = op_A === identity ? (100, 80) : (80, 100)
                A = sprand(T, m, n, 0.1)
                x = rand(T, size(op_A(A), 1))
                y = rand(T, size(op_A(A), 2))

                dA = adapt(op, GenericSparseMatrixCSR(A))
                dx = op(x)
                dy = op(y)

                result_device = dot(dx, op_A(dA), dy)
                result_expected = dot(x, op_A(A), y)

                @test result_device ≈ result_expected
            end
        end
    end

    @testset "Scalar Operations" begin
        for T in (int_types..., float_types..., complex_types...)
            A = sprand(T, 40, 30, 0.1)
            dA = adapt(op, GenericSparseMatrixCSR(A))

            α = T <: Complex ? T(1.0 + 2.0im) : (T <: Integer ? T(2) : T(1.5))

            # Test scalar multiplication
            scaled_left = α * dA
            scaled_right = dA * α
            @test nnz(scaled_left) == nnz(dA)
            @test nnz(scaled_right) == nnz(dA)
            @test collect(nonzeros(scaled_left)) ≈ α .* collect(nonzeros(dA))
            @test collect(nonzeros(scaled_right)) ≈ collect(nonzeros(dA)) .* α

            # Test scalar division
            if !(T <: Integer)  # Skip division for integer types
                divided = dA / α
                @test nnz(divided) == nnz(dA)
                @test collect(nonzeros(divided)) ≈ collect(nonzeros(dA)) ./ α
            end
        end
    end

    @testset "Unary Operations" begin
        for T in (float_types..., complex_types...)
            A = sprand(T, 25, 20, 0.15)
            dA = adapt(op, GenericSparseMatrixCSR(A))

            # Test unary plus
            pos_A = +dA
            @test nnz(pos_A) == nnz(dA)
            @test collect(nonzeros(pos_A)) ≈ collect(nonzeros(dA))

            # Test unary minus
            neg_A = -dA
            @test nnz(neg_A) == nnz(dA)
            @test collect(nonzeros(neg_A)) ≈ -collect(nonzeros(dA))

            # Test complex operations
            if T <: Complex
                conj_A = conj(dA)
                real_A = real(dA)
                imag_A = imag(dA)

                @test nnz(conj_A) == nnz(dA)
                @test eltype(conj_A) == T
                @test collect(nonzeros(conj_A)) ≈ conj.(collect(nonzeros(dA)))

                @test eltype(real_A) == real(T)
                @test collect(nonzeros(real_A)) ≈ real.(collect(nonzeros(dA)))

                @test eltype(imag_A) == real(T)
                @test collect(nonzeros(imag_A)) ≈ imag.(collect(nonzeros(dA)))
            else
                # For real types
                conj_A = conj(dA)
                real_A = real(dA)
                imag_A = imag(dA)

                @test conj_A === dA  # Should return same object for real types
                @test real_A === dA  # Should return same object for real types
                @test nnz(imag_A) == 0  # Imaginary part of real should be zero sparse
            end
        end
    end

    @testset "UniformScaling Multiplication" begin
        for T in (float_types..., complex_types...)
            A = sprand(T, 15, 15, 0.2)
            dA = adapt(op, GenericSparseMatrixCSR(A))

            # Test A * I (identity)
            result_I = dA * I
            @test nnz(result_I) == nnz(dA)
            @test collect(nonzeros(result_I)) ≈ collect(nonzeros(dA))

            # Test I * A (identity)
            result_I2 = I * dA
            @test nnz(result_I2) == nnz(dA)
            @test collect(nonzeros(result_I2)) ≈ collect(nonzeros(dA))

            # Test with scaled identity
            α = T <: Complex ? T(0.5 - 1.5im) : T(2.5)
            result_αI = dA * (α * I)
            @test nnz(result_αI) == nnz(dA)
            @test collect(nonzeros(result_αI)) ≈ α .* collect(nonzeros(dA))
        end
    end

    @testset "UniformScaling Addition" begin
        for T in (float_types..., complex_types...)
            # Test with square matrix
            A_sq = sprand(T, 20, 20, 0.2)
            dA_sq = adapt(op, GenericSparseMatrixCSR(A_sq))

            # Test A + I (identity)
            result_I = dA_sq + I
            expected_I = A_sq + I
            @test collect(SparseMatrixCSC(result_I)) ≈ collect(expected_I)

            # Test I + A (identity)
            result_I2 = I + dA_sq
            @test collect(SparseMatrixCSC(result_I2)) ≈ collect(expected_I)

            # Test with scaled identity
            α = T <: Complex ? T(2.0 + 1.0im) : T(3.0)
            result_αI = dA_sq + (α * I)
            expected_αI = A_sq + (α * I)
            @test collect(SparseMatrixCSC(result_αI)) ≈ collect(expected_αI)

            # Test subtraction
            result_sub = dA_sq - (α * I)
            expected_sub = A_sq - (α * I)
            @test collect(SparseMatrixCSC(result_sub)) ≈ collect(expected_sub)

            # Test J - A
            result_sub2 = (α * I) - dA_sq
            expected_sub2 = (α * I) - A_sq
            @test collect(SparseMatrixCSC(result_sub2)) ≈ collect(expected_sub2)

            # Test with non-square matrix throws DimensionMismatch
            A_nonsq = sprand(T, 30, 20, 0.2)
            dA_nonsq = adapt(op, GenericSparseMatrixCSR(A_nonsq))
            @test_throws DimensionMismatch dA_nonsq + I

            # Test with zero λ (should return copy)
            result_zero = dA_sq + (zero(T) * I)
            @test collect(SparseMatrixCSC(result_zero)) ≈ collect(A_sq)

            # Test with sparse matrix that has no diagonal entries
            A_nodiag = sparse([1, 2], [2, 1], T[1, 2], 3, 3)
            dA_nodiag = adapt(op, GenericSparseMatrixCSR(A_nodiag))
            result_nodiag = dA_nodiag + I
            expected_nodiag = A_nodiag + I
            @test collect(SparseMatrixCSC(result_nodiag)) ≈ collect(expected_nodiag)
        end
    end

    @testset "Matrix-Vector multiplication" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )
                if T in (ComplexF32, ComplexF64) && op_A !== identity
                    # The mul! function uses @atomic for CSR matrices, which does not support Complex types
                    continue
                end
                dims_A = op_A === identity ? (100, 80) : (80, 100)
                dims_B = op_B === identity ? (80, 50) : (50, 80)

                A = sprand(T, dims_A..., 0.1)
                B = rand(T, dims_B...)
                b = rand(T, 80)
                c = op_A(A) * b
                C = op_A(A) * op_B(B)

                # Convert to CSR storage pattern
                dA = adapt(op, GenericSparseMatrixCSR(A))

                # Matrix-Scalar multiplication
                if T != Int32
                    @test collect(2 * dA) ≈ 2 * collect(A)
                    @test collect(dA * 2) ≈ collect(A * 2)
                    @test collect(dA) / 2 ≈ collect(A) / 2
                end

                # Matrix-Vector multiplication
                db = op(b)
                dc = op_A(dA) * db
                @test collect(dc) ≈ c
                dc2 = similar(dc)
                mul!(dc2, op_A(dA), db)
                @test collect(dc2) ≈ c

                # Matrix-Matrix multiplication
                dB = op(B)
                dC = op_A(dA) * op_B(dB)
                @test collect(dC) ≈ C
                dC2 = similar(dB, size(C)...)
                mul!(dC2, op_A(dA), op_B(dB))
                @test collect(dC2) ≈ C
            end
        end
    end

    @testset "Sparse + Dense Matrix Addition" begin
        for T in (int_types..., float_types..., complex_types...)
            m, n = 50, 40
            A = sprand(T, m, n, 0.1)
            B = rand(T, m, n)

            dA = adapt(op, GenericSparseMatrixCSR(A))
            dB = op(B)

            # Test sparse + dense
            result = dA + dB
            expected = Matrix(A) + B
            @test collect(result) ≈ expected

            # Test dense + sparse (commutative)
            result2 = dB + dA
            @test collect(result2) ≈ expected

            # Test dimension mismatch
            B_wrong = rand(T, m + 1, n)
            dB_wrong = op(B_wrong)
            @test_throws DimensionMismatch dA + dB_wrong
        end
    end

    @testset "Sparse + Sparse Matrix Addition" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )

                # Use rectangular matrices for identity+identity, square for transpose/adjoint
                m, n = (op_A === identity && op_B === identity) ? (50, 40) : (30, 30)
                dims_A = op_A === identity ? (m, n) : (n, m)
                dims_B = op_B === identity ? (m, n) : (n, m)

                A = sprand(T, dims_A..., 0.1)
                B = sprand(T, dims_B..., 0.15)

                dA = adapt(op, GenericSparseMatrixCSR(A))
                dB = adapt(op, GenericSparseMatrixCSR(B))

                # Test sparse + sparse
                result = op_A(dA) + op_B(dB)
                expected = op_A(A) + op_B(B)
                @test collect(result) ≈ Matrix(expected)
                @test result isa GenericSparseMatrixCSR

                # Test op_A(A) - op_A(A) drops zeros (should have zero stored elements)
                result_sub = op_A(dA) - op_A(dA)
                @test nnz(result_sub) == 0
                @test collect(result_sub) ≈ zeros(T, size(op_A(A))...)

                # Additional tests only for identity + identity
                if op_A === identity && op_B === identity
                    # Test with overlapping entries
                    A_overlap = sparse([1, 2, 3], [1, 2, 3], T[1, 2, 3], m, n)
                    B_overlap = sparse([1, 2, 4], [1, 2, 4], T[4, 5, 6], m, n)
                    dA_overlap = adapt(op, GenericSparseMatrixCSR(A_overlap))
                    dB_overlap = adapt(op, GenericSparseMatrixCSR(B_overlap))
                    result_overlap = dA_overlap + dB_overlap
                    expected_overlap = A_overlap + B_overlap
                    @test collect(result_overlap) ≈ Matrix(expected_overlap)

                    # Test dimension mismatch
                    B_wrong = sprand(T, m + 1, n, 0.1)
                    dB_wrong = adapt(op, GenericSparseMatrixCSR(B_wrong))
                    @test_throws DimensionMismatch dA + dB_wrong
                end
            end
        end
    end

    @testset "Sparse * Sparse Matrix Multiplication" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )

                # Use rectangular matrices for identity*identity, square for transpose/adjoint
                m, k, n =
                    (op_A === identity && op_B === identity) ? (50, 40, 30) : (30, 30, 30)
                dims_A = op_A === identity ? (m, k) : (k, m)
                dims_B = op_B === identity ? (k, n) : (n, k)

                A = sprand(T, dims_A..., 0.1)
                B = sprand(T, dims_B..., 0.15)

                dA = adapt(op, GenericSparseMatrixCSR(A))
                dB = adapt(op, GenericSparseMatrixCSR(B))

                # Test sparse * sparse
                result = op_A(dA) * op_B(dB)
                expected = op_A(A) * op_B(B)
                @test collect(result) ≈ Matrix(expected)
                @test result isa GenericSparseMatrixCSR
            end
        end
    end

    return @testset "Kronecker Product" begin
        if array_type != "JLArray"
            for T in (int_types..., float_types..., complex_types...)
                # Test with rectangular matrices
                A_sparse = SparseMatrixCSC{T, int_types[end]}(sprand(T, 30, 25, 0.1))
                B_sparse = SparseMatrixCSC{T, int_types[end]}(sprand(T, 20, 15, 0.1))
                D_diag = Diagonal(rand(T, 4))

                A = adapt(op, GenericSparseMatrixCSR(A_sparse))
                B = adapt(op, GenericSparseMatrixCSR(B_sparse))
                D1 = adapt(op, D_diag)
                D2 = Diagonal(FillArrays.Fill(T(2), 4))

                for (op_A, op_B) in Iterators.product(
                        (identity, transpose, adjoint),
                        (identity, transpose, adjoint),
                    )

                    C = kron(op_A(A), op_B(B))
                    C_expected = kron(op_A(A_sparse), op_B(B_sparse))

                    @test size(C) == size(C_expected)
                    @test nnz(C) == nnz(C_expected)
                    @test Matrix(SparseMatrixCSC(C)) ≈ Matrix(C_expected)
                    @test C isa GenericSparseMatrixCSR

                    # Test with Diagonal matrix
                    C = kron(D1, op_B(B))
                    C_expected = kron(D_diag, op_B(B_sparse))
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixCSR

                    C = kron(op_A(A), D1)
                    C_expected = kron(op_A(A_sparse), D_diag)
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixCSR

                    # Test with FillArrays Diagonal matrix
                    C = kron(D2, op_B(B))
                    C_expected = kron(D2, op_B(B_sparse))
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixCSR

                    C = kron(op_A(A), D2)
                    C_expected = kron(op_A(A_sparse), D2)
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixCSR
                end
            end
        end
    end
end
