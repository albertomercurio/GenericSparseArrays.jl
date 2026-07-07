function shared_test_matrix_diag(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "GenericSparseDiagMatrix $array_type" verbose = true begin
        shared_test_conversion_matrix_diag(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
        shared_test_linearalgebra_matrix_diag(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
    end
end

function shared_test_conversion_matrix_diag(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "Conversion" begin
        A = spzeros(Float32, 0, 0)

        # Empty matrix
        dA = adapt(op, GenericSparseDiagMatrix(A))
        @test size(dA) == (0, 0)
        @test length(dA) == 0
        @test nnz(dA) == 0
        @test SparseMatrixCSC(dA) == A

        # Square matrix with diagonals
        B = sparse([1, 2, 1, 2, 3], [1, 2, 2, 3, 3], Float64[1, 2, 3, 4, 5], 3, 3)
        dB = adapt(op, GenericSparseDiagMatrix(B))
        @test size(dB) == (3, 3)
        @test SparseMatrixCSC(dB) ≈ B

        # Rectangular matrix
        C = sparse([1, 2, 1], [1, 2, 3], Float64[1, 2, 3], 3, 4)
        dC = adapt(op, GenericSparseDiagMatrix(C))
        @test size(dC) == (3, 4)
        @test SparseMatrixCSC(dC) ≈ C

        # Test conversion from COO
        B_coo = adapt(op, GenericSparseMatrixCOO(B))
        dB_from_coo = GenericSparseDiagMatrix(B_coo)
        @test SparseMatrixCSC(dB_from_coo) ≈ B

        # Test conversion from CSR
        B_csr = adapt(op, GenericSparseMatrixCSR(B))
        dB_from_csr = GenericSparseDiagMatrix(B_csr)
        @test SparseMatrixCSC(dB_from_csr) ≈ B

        # Test conversion to COO
        dB2 = adapt(op, GenericSparseDiagMatrix(B))
        B_coo2 = GenericSparseMatrixCOO(dB2)
        @test SparseMatrixCSC(B_coo2) ≈ B

        # Test conversion to CSC
        B_csc = GenericSparseMatrixCSC(dB2)
        @test SparseMatrixCSC(B_csc) ≈ B

        # Test conversion to CSR
        B_csr2 = GenericSparseMatrixCSR(dB2)
        @test SparseMatrixCSC(B_csr2) ≈ B

        # Test transpose/adjoint conversions
        dB3 = adapt(op, GenericSparseDiagMatrix(B))
        @test SparseMatrixCSC(transpose(dB3)) ≈ transpose(B)
        @test SparseMatrixCSC(adjoint(dB3)) ≈ adjoint(B)
    end
end

function shared_test_linearalgebra_matrix_diag(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    @testset "Sum and Trace" begin
        for T in (int_types..., float_types..., complex_types...)
            A = sprand(T, 100, 100, 0.05)
            dA = adapt(op, GenericSparseDiagMatrix(A))

            @test sum(dA) ≈ sum(A)
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
            dA_nonsym = adapt(op, GenericSparseDiagMatrix(A_nonsym))
            @test issymmetric(dA_nonsym) == false
            @test ishermitian(dA_nonsym) == false
            @test issymmetric(transpose(dA_nonsym)) == false
            @test ishermitian(adjoint(dA_nonsym)) == false

            # Symmetric matrix (complex symmetric is NOT hermitian)
            A_sym = sparse(A_nonsym + transpose(A_nonsym))
            dA_sym = adapt(op, GenericSparseDiagMatrix(A_sym))
            @test issymmetric(dA_sym) == true
            @test issymmetric(transpose(dA_sym)) == true

            # Hermitian matrix (complex)
            A_herm = sparse(A_nonsym + adjoint(A_nonsym))
            dA_herm = adapt(op, GenericSparseDiagMatrix(A_herm))
            @test ishermitian(dA_herm) == true
            @test ishermitian(adjoint(dA_herm)) == true
        end
    end

    @testset "Three-argument dot" begin
        for T in (int_types..., float_types..., complex_types...)
            if T in (Int32,)
                continue
            end
            for op_A in (identity, transpose, adjoint)
                m, n = op_A === identity ? (100, 80) : (80, 100)
                A = sprand(T, m, n, 0.1)
                x = rand(T, size(op_A(A), 1))
                y = rand(T, size(op_A(A), 2))

                dA = adapt(op, GenericSparseDiagMatrix(A))
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
            A = sprand(T, 45, 35, 0.1)
            dA = adapt(op, GenericSparseDiagMatrix(A))

            α = T <: Complex ? T(2.0 + 1.5im) : (T <: Integer ? T(2) : T(1.8))

            # Test scalar multiplication
            scaled_left = α * dA
            scaled_right = dA * α
            @test nnz(scaled_left) == nnz(dA)
            @test nnz(scaled_right) == nnz(dA)
            @test collect(nonzeros(scaled_left)) ≈ α .* collect(nonzeros(dA))
            @test collect(nonzeros(scaled_right)) ≈ collect(nonzeros(dA)) .* α

            # Test scalar division
            if !(T <: Integer)
                divided = dA / α
                @test nnz(divided) == nnz(dA)
                @test collect(nonzeros(divided)) ≈ collect(nonzeros(dA)) ./ α
            end
        end
    end

    @testset "Unary Operations" begin
        for T in (float_types..., complex_types...)
            A = sprand(T, 28, 22, 0.15)
            dA = adapt(op, GenericSparseDiagMatrix(A))

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

                @test conj_A === dA
                @test real_A === dA
                @test nnz(imag_A) == 0
            end
        end
    end

    @testset "UniformScaling Multiplication" begin
        for T in (float_types..., complex_types...)
            A = sprand(T, 18, 18, 0.2)
            dA = adapt(op, GenericSparseDiagMatrix(A))

            # Test A * I (identity)
            result_I = dA * I
            @test nnz(result_I) == nnz(dA)
            @test collect(nonzeros(result_I)) ≈ collect(nonzeros(dA))

            # Test I * A (identity)
            result_I2 = I * dA
            @test nnz(result_I2) == nnz(dA)
            @test collect(nonzeros(result_I2)) ≈ collect(nonzeros(dA))

            # Test with scaled identity
            α = T <: Complex ? T(1.5 - 0.8im) : T(2.2)
            result_αI = dA * (α * I)
            @test nnz(result_αI) == nnz(dA)
            @test collect(nonzeros(result_αI)) ≈ α .* collect(nonzeros(dA))
        end
    end

    @testset "UniformScaling Addition" begin
        for T in (float_types..., complex_types...)
            # Test with square matrix
            A_sq = sprand(T, 20, 20, 0.2)
            dA_sq = adapt(op, GenericSparseDiagMatrix(A_sq))

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
            dA_nonsq = adapt(op, GenericSparseDiagMatrix(A_nonsq))
            @test_throws DimensionMismatch dA_nonsq + I

            # Test with zero λ (should return copy)
            result_zero = dA_sq + (zero(T) * I)
            @test collect(SparseMatrixCSC(result_zero)) ≈ collect(A_sq)
        end
    end

    @testset "Matrix-Scalar, Matrix-Vector and Matrix-Matrix multiplication" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )
                dims_A = op_A === identity ? (100, 80) : (80, 100)
                dims_B = op_B === identity ? (80, 50) : (50, 80)

                A = sprand(T, dims_A..., 0.1)
                B = rand(T, dims_B...)
                b = rand(T, 80)
                c = op_A(A) * b
                C = op_A(A) * op_B(B)

                dA = adapt(op, GenericSparseDiagMatrix(A))

                # Matrix-Scalar multiplication
                if T != Int32
                    @test collect(SparseMatrixCSC(2 * dA)) ≈ 2 * collect(A)
                    @test collect(SparseMatrixCSC(dA * 2)) ≈ collect(A * 2)
                    @test collect(SparseMatrixCSC(dA / 2)) ≈ collect(A) / 2
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

            dA = adapt(op, GenericSparseDiagMatrix(A))
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

                m, n = (op_A === identity && op_B === identity) ? (50, 40) : (30, 30)
                dims_A = op_A === identity ? (m, n) : (n, m)
                dims_B = op_B === identity ? (m, n) : (n, m)

                A = sprand(T, dims_A..., 0.1)
                B = sprand(T, dims_B..., 0.15)

                dA = adapt(op, GenericSparseDiagMatrix(A))
                dB = adapt(op, GenericSparseDiagMatrix(B))

                # Test sparse + sparse
                result = op_A(dA) + op_B(dB)
                expected = op_A(A) + op_B(B)
                @test collect(SparseMatrixCSC(result)) ≈ Matrix(expected)
                @test result isa GenericSparseDiagMatrix
            end
        end
    end

    @testset "Sparse * Sparse Matrix Multiplication" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )

                m, k, n =
                    (op_A === identity && op_B === identity) ? (50, 40, 30) : (30, 30, 30)
                dims_A = op_A === identity ? (m, k) : (k, m)
                dims_B = op_B === identity ? (k, n) : (n, k)

                A = sprand(T, dims_A..., 0.1)
                B = sprand(T, dims_B..., 0.15)

                dA = adapt(op, GenericSparseDiagMatrix(A))
                dB = adapt(op, GenericSparseDiagMatrix(B))

                # Test sparse * sparse
                result = op_A(dA) * op_B(dB)
                expected = op_A(A) * op_B(B)
                @test collect(SparseMatrixCSC(result)) ≈ Matrix(expected)
                @test result isa GenericSparseDiagMatrix
            end
        end
    end

    return @testset "Kronecker Product" begin
        for T in (int_types..., float_types..., complex_types...)
            A_sparse = sprand(T, 30, 25, 0.1)
            B_sparse = sprand(T, 20, 15, 0.1)
            D_diag = Diagonal(rand(T, 4))

            A = adapt(op, GenericSparseDiagMatrix(A_sparse))
            B = adapt(op, GenericSparseDiagMatrix(B_sparse))
            D1 = adapt(op, D_diag)
            D2 = Diagonal(FillArrays.Fill(T(2), 4))

            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )

                result = kron(op_A(A), op_B(B))
                expected_A_csc = GenericSparseMatrixCSC(op_A(A))
                expected_B_csc = GenericSparseMatrixCSC(op_B(B))
                expected = kron(SparseMatrixCSC(expected_A_csc), SparseMatrixCSC(expected_B_csc))
                @test collect(SparseMatrixCSC(result)) ≈ collect(expected)
            end

            # Test kron(Diagonal, Sparse) and kron(Sparse, Diagonal)
            for op_A in (identity, transpose, adjoint)
                # kron(D, op(A))
                result1 = kron(D1, op_A(A))
                expected_A_csc = GenericSparseMatrixCSC(op_A(A))
                expected1 = kron(D_diag, SparseMatrixCSC(expected_A_csc))
                @test collect(SparseMatrixCSC(result1)) ≈ collect(expected1)

                # kron(op(A), D)
                result2 = kron(op_A(A), D1)
                expected2 = kron(SparseMatrixCSC(expected_A_csc), D_diag)
                @test collect(SparseMatrixCSC(result2)) ≈ collect(expected2)
            end
        end
    end
end
