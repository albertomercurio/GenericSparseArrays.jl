function _make_test_dia_matrix(T, Ti, m, n; density = 0.3)
    # Create a sparse matrix with a few diagonals for testing
    ndiags = max(1, round(Int, density * (m + n - 1)))
    max_offset = min(m, n) - 1
    offsets = sort(unique(rand(-max_offset:max_offset, ndiags)))
    diag_values = [rand(T, GenericSparseArrays._diag_length(m, n, k)) for k in offsets]
    return GenericSparseMatrixDIA(m, n, Ti.(offsets), diag_values)
end

function _make_test_dia_from_sparse(A_sparse::SparseMatrixCSC)
    return GenericSparseMatrixDIA(A_sparse)
end

function shared_test_matrix_dia(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "GenericSparseMatrixDIA $array_type" verbose = true begin
        shared_test_conversion_matrix_dia(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
        shared_test_linearalgebra_matrix_dia(
            op,
            array_type,
            int_types,
            float_types,
            complex_types,
        )
    end
end

function shared_test_conversion_matrix_dia(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    return @testset "Conversion" begin
        Ti = int_types[end]
        Tv = float_types[end]

        # Test empty matrix
        A_empty = GenericSparseMatrixDIA(5, 5, Ti[], Vector{Tv}[])
        dA_empty = adapt(op, A_empty)
        @test size(dA_empty) == (5, 5)
        @test nnz(dA_empty) == 0

        # Test basic DIA matrix
        offsets = Ti[-1, 0, 2]
        d_m1 = Tv[1, 2, 3, 4]  # offset -1, length 4 for 5x5
        d_0 = Tv[5, 6, 7, 8, 9]  # offset 0, length 5
        d_2 = Tv[10, 11, 12]  # offset 2, length 3
        A = GenericSparseMatrixDIA(5, 5, offsets, [d_m1, d_0, d_2])
        dA = adapt(op, A)
        @test size(dA) == (5, 5)
        @test nnz(dA) == 12  # 4 + 5 + 3

        # Round-trip DIA → SparseMatrixCSC → DIA
        A_sparse = SparseMatrixCSC(A)
        A_dia_back = GenericSparseMatrixDIA(A_sparse)
        @test collect(SparseMatrixCSC(A_dia_back)) ≈ collect(A_sparse)

        # Test DIA ↔ COO
        A_coo = GenericSparseMatrixCOO(dA)
        @test collect(SparseMatrixCSC(A_coo)) ≈ collect(SparseMatrixCSC(dA))

        A_dia_from_coo = GenericSparseMatrixDIA(A_coo)
        @test collect(SparseMatrixCSC(A_dia_from_coo)) ≈ collect(SparseMatrixCSC(dA))

        # Test DIA ↔ CSC
        A_csc = GenericSparseMatrixCSC(dA)
        @test collect(SparseMatrixCSC(A_csc)) ≈ collect(SparseMatrixCSC(dA))

        A_dia_from_csc = GenericSparseMatrixDIA(A_csc)
        @test collect(SparseMatrixCSC(A_dia_from_csc)) ≈ collect(SparseMatrixCSC(dA))

        # Test DIA ↔ CSR
        A_csr = GenericSparseMatrixCSR(dA)
        @test collect(SparseMatrixCSC(A_csr)) ≈ collect(SparseMatrixCSC(dA))

        A_dia_from_csr = GenericSparseMatrixDIA(A_csr)
        @test collect(SparseMatrixCSC(A_dia_from_csr)) ≈ collect(SparseMatrixCSC(dA))

        # Test non-square matrix
        offsets_rect = Ti[-1, 0, 1]
        d_m1r = Tv[1, 2, 3]  # 4x3, offset -1, length 3
        d_0r = Tv[4, 5, 6]   # offset 0, length 3
        d_1r = Tv[7, 8]      # offset 1, length 2
        A_rect = GenericSparseMatrixDIA(4, 3, offsets_rect, [d_m1r, d_0r, d_1r])
        dA_rect = adapt(op, A_rect)
        @test size(dA_rect) == (4, 3)
        A_rect_sparse = SparseMatrixCSC(A_rect)
        A_rect_back = GenericSparseMatrixDIA(A_rect_sparse)
        @test collect(SparseMatrixCSC(A_rect_back)) ≈ collect(A_rect_sparse)

        # Test Transpose/Adjoint conversions
        A_dia_t = GenericSparseMatrixDIA(transpose(dA))
        @test collect(SparseMatrixCSC(A_dia_t)) ≈ collect(transpose(SparseMatrixCSC(dA)))

        for Tc in complex_types
            A_complex = _make_test_dia_from_sparse(SparseMatrixCSC{Tc, Ti}(sprand(Tc, 20, 20, 0.1)))
            dA_complex = adapt(op, A_complex)
            A_dia_adj = GenericSparseMatrixDIA(adjoint(dA_complex))
            @test collect(SparseMatrixCSC(A_dia_adj)) ≈ collect(adjoint(SparseMatrixCSC(dA_complex)))
        end
    end
end

function shared_test_linearalgebra_matrix_dia(
        op,
        array_type::String,
        int_types::Tuple,
        float_types::Tuple,
        complex_types::Tuple,
    )
    @testset "Sum and Trace" begin
        for T in (int_types..., float_types..., complex_types...)
            A = SparseMatrixCSC{T, int_types[end]}(sprand(T, 50, 50, 0.1))
            dA = adapt(op, GenericSparseMatrixDIA(A))

            @test sum(dA) ≈ sum(A)
            @test tr(dA) ≈ tr(A)
        end
    end

    @testset "issymmetric and ishermitian" begin
        for T in (complex_types...,)
            Ti = int_types[end]
            n = 30
            A_nonsym = SparseMatrixCSC{T, Ti}(sprand(T, n, n, 0.1))
            A_nonsym[1, 2] = 1.0 + 0.0im
            A_nonsym[2, 1] = 2.0 + 1.0im
            dA_nonsym = adapt(op, GenericSparseMatrixDIA(A_nonsym))
            @test issymmetric(dA_nonsym) == false
            @test ishermitian(dA_nonsym) == false

            A_sym = sparse(A_nonsym + transpose(A_nonsym))
            dA_sym = adapt(op, GenericSparseMatrixDIA(A_sym))
            @test issymmetric(dA_sym) == true

            A_herm = sparse(A_nonsym + adjoint(A_nonsym))
            dA_herm = adapt(op, GenericSparseMatrixDIA(A_herm))
            @test ishermitian(dA_herm) == true
        end
    end

    @testset "Three-argument dot" begin
        for T in (int_types..., float_types..., complex_types...)
            for op_A in (identity, transpose, adjoint)
                m, n = op_A === identity ? (50, 40) : (40, 50)
                A = SparseMatrixCSC{T, int_types[end]}(sprand(T, m, n, 0.1))
                x = rand(T, size(op_A(A), 1))
                y = rand(T, size(op_A(A), 2))

                dA = adapt(op, GenericSparseMatrixDIA(A))
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
            A = SparseMatrixCSC{T, int_types[end]}(sprand(T, 50, 40, 0.1))
            dA = adapt(op, GenericSparseMatrixDIA(A))

            α = T <: Complex ? T(1.5 - 0.5im) : (T <: Integer ? T(2) : T(2.0))

            scaled_left = α * dA
            scaled_right = dA * α
            @test nnz(scaled_left) == nnz(dA)
            @test nnz(scaled_right) == nnz(dA)
            @test collect(nonzeros(scaled_left)) ≈ α .* collect(nonzeros(dA))
            @test collect(nonzeros(scaled_right)) ≈ collect(nonzeros(dA)) .* α

            if !(T <: Integer)
                divided = dA / α
                @test nnz(divided) == nnz(dA)
                @test collect(nonzeros(divided)) ≈ collect(nonzeros(dA)) ./ α
            end
        end
    end

    @testset "Unary Operations" begin
        for T in (float_types..., complex_types...)
            A = SparseMatrixCSC{T, int_types[end]}(sprand(T, 30, 25, 0.15))
            dA = adapt(op, GenericSparseMatrixDIA(A))

            pos_A = +dA
            @test nnz(pos_A) == nnz(dA)
            @test collect(nonzeros(pos_A)) ≈ collect(nonzeros(dA))

            neg_A = -dA
            @test nnz(neg_A) == nnz(dA)
            @test collect(nonzeros(neg_A)) ≈ -collect(nonzeros(dA))

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
            A = SparseMatrixCSC{T, int_types[end]}(sprand(T, 20, 20, 0.2))
            dA = adapt(op, GenericSparseMatrixDIA(A))

            result_I = dA * I
            @test nnz(result_I) == nnz(dA)
            @test collect(nonzeros(result_I)) ≈ collect(nonzeros(dA))

            result_I2 = I * dA
            @test nnz(result_I2) == nnz(dA)
            @test collect(nonzeros(result_I2)) ≈ collect(nonzeros(dA))

            α = T <: Complex ? T(2.0 + 1.0im) : T(3.0)
            result_αI = dA * (α * I)
            @test nnz(result_αI) == nnz(dA)
            @test collect(nonzeros(result_αI)) ≈ α .* collect(nonzeros(dA))
        end
    end

    @testset "UniformScaling Addition" begin
        for T in (float_types..., complex_types...)
            A_sq = SparseMatrixCSC{T, int_types[end]}(sprand(T, 20, 20, 0.2))
            dA_sq = adapt(op, GenericSparseMatrixDIA(A_sq))

            result_I = dA_sq + I
            expected_I = A_sq + I
            @test collect(SparseMatrixCSC(result_I)) ≈ collect(expected_I)

            result_I2 = I + dA_sq
            @test collect(SparseMatrixCSC(result_I2)) ≈ collect(expected_I)

            α = T <: Complex ? T(2.0 + 1.0im) : T(3.0)
            result_αI = dA_sq + (α * I)
            expected_αI = A_sq + (α * I)
            @test collect(SparseMatrixCSC(result_αI)) ≈ collect(expected_αI)

            result_sub = dA_sq - (α * I)
            expected_sub = A_sq - (α * I)
            @test collect(SparseMatrixCSC(result_sub)) ≈ collect(expected_sub)

            result_sub2 = (α * I) - dA_sq
            expected_sub2 = (α * I) - A_sq
            @test collect(SparseMatrixCSC(result_sub2)) ≈ collect(expected_sub2)

            A_nonsq = SparseMatrixCSC{T, int_types[end]}(sprand(T, 30, 20, 0.2))
            dA_nonsq = adapt(op, GenericSparseMatrixDIA(A_nonsq))
            @test_throws DimensionMismatch dA_nonsq + I

            result_zero = dA_sq + (zero(T) * I)
            @test collect(SparseMatrixCSC(result_zero)) ≈ collect(A_sq)

            # Test with no diagonal entries
            A_nodiag = SparseMatrixCSC{T, int_types[end]}(
                sparse(int_types[end][1, 2], int_types[end][2, 1], T[1, 2], 3, 3),
            )
            dA_nodiag = adapt(op, GenericSparseMatrixDIA(A_nodiag))
            result_nodiag = dA_nodiag + I
            expected_nodiag = A_nodiag + I
            @test collect(SparseMatrixCSC(result_nodiag)) ≈ collect(expected_nodiag)
        end
    end

    @testset "Matrix-Scalar, Matrix-Vector and Matrix-Matrix multiplication" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )
                dims_A = op_A === identity ? (50, 40) : (40, 50)
                dims_B = op_B === identity ? (40, 30) : (30, 40)

                A = SparseMatrixCSC{T, int_types[end]}(sprand(T, dims_A..., 0.1))
                B = rand(T, dims_B...)
                b = rand(T, 40)
                c = op_A(A) * b
                C = op_A(A) * op_B(B)

                dA = adapt(op, GenericSparseMatrixDIA(A))

                # Matrix-Scalar multiplication
                if T != Int32
                    @test collect(SparseMatrixCSC(2 * dA)) ≈ 2 * collect(A)
                    @test collect(SparseMatrixCSC(dA * 2)) ≈ collect(A) * 2
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
            A = SparseMatrixCSC{T, int_types[end]}(sprand(T, m, n, 0.1))
            B = rand(T, m, n)

            dA = adapt(op, GenericSparseMatrixDIA(A))
            dB = op(B)

            result = dA + dB
            expected = Matrix(A) + B
            @test collect(result) ≈ expected

            result2 = dB + dA
            @test collect(result2) ≈ expected

            B_wrong = rand(T, m + 1, n)
            dB_wrong = op(B_wrong)
            @test_throws DimensionMismatch dA + dB_wrong
        end
    end

    @testset "Sparse + Sparse Matrix Addition (DIA)" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )
                m, n = (op_A === identity && op_B === identity) ? (50, 40) : (30, 30)
                dims_A = op_A === identity ? (m, n) : (n, m)
                dims_B = op_B === identity ? (m, n) : (n, m)

                A = SparseMatrixCSC{T, int_types[end]}(sprand(T, dims_A..., 0.1))
                B = SparseMatrixCSC{T, int_types[end]}(sprand(T, dims_B..., 0.15))

                dA = adapt(op, GenericSparseMatrixDIA(A))
                dB = adapt(op, GenericSparseMatrixDIA(B))

                result = op_A(dA) + op_B(dB)
                expected = op_A(A) + op_B(B)
                @test collect(SparseMatrixCSC(result)) ≈ Matrix(expected)
                @test result isa GenericSparseMatrixDIA
            end
        end
    end

    @testset "Sparse * Sparse Matrix Multiplication (DIA)" begin
        for T in (int_types..., float_types..., complex_types...)
            for (op_A, op_B) in Iterators.product(
                    (identity, transpose, adjoint),
                    (identity, transpose, adjoint),
                )
                m, k, n =
                    (op_A === identity && op_B === identity) ? (30, 25, 20) : (20, 20, 20)
                dims_A = op_A === identity ? (m, k) : (k, m)
                dims_B = op_B === identity ? (k, n) : (n, k)

                A = SparseMatrixCSC{T, int_types[end]}(sprand(T, dims_A..., 0.1))
                B = SparseMatrixCSC{T, int_types[end]}(sprand(T, dims_B..., 0.15))

                dA = adapt(op, GenericSparseMatrixDIA(A))
                dB = adapt(op, GenericSparseMatrixDIA(B))

                result = op_A(dA) * op_B(dB)
                expected = op_A(A) * op_B(B)
                @test collect(SparseMatrixCSC(result)) ≈ Matrix(expected)
                @test result isa GenericSparseMatrixDIA
            end
        end
    end

    return @testset "Kronecker Product (DIA)" begin
        if array_type != "JLArray"
            for T in (int_types..., float_types..., complex_types...)
                A_sparse = SparseMatrixCSC{T, int_types[end]}(sprand(T, 15, 12, 0.1))
                B_sparse = SparseMatrixCSC{T, int_types[end]}(sprand(T, 10, 8, 0.1))
                D_diag = Diagonal(rand(T, 4))

                A = adapt(op, GenericSparseMatrixDIA(A_sparse))
                B = adapt(op, GenericSparseMatrixDIA(B_sparse))
                D1 = adapt(op, D_diag)

                for (op_A, op_B) in Iterators.product(
                        (identity, transpose, adjoint),
                        (identity, transpose, adjoint),
                    )
                    C = kron(op_A(A), op_B(B))
                    C_expected = kron(op_A(A_sparse), op_B(B_sparse))

                    @test size(C) == size(C_expected)
                    @test Matrix(SparseMatrixCSC(C)) ≈ Matrix(C_expected)
                    @test C isa GenericSparseMatrixDIA

                    C = kron(D1, op_B(B))
                    C_expected = kron(D_diag, op_B(B_sparse))
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixDIA

                    C = kron(op_A(A), D1)
                    C_expected = kron(op_A(A_sparse), D_diag)
                    @test SparseMatrixCSC(C) ≈ C_expected
                    @test C isa GenericSparseMatrixDIA
                end
            end
        end
    end
end
