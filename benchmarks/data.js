window.BENCHMARK_DATA = {
  "lastUpdate": 1769988689713,
  "repoUrl": "https://github.com/albertomercurio/GenericSparseArrays.jl",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "alberto.mercurio96@gmail.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "alberto.mercurio96@gmail.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "distinct": true,
          "id": "c92197bc4ebf648dc55615b6548dffce4f51df50",
          "message": "Reorganize benchmark plot structure",
          "timestamp": "2025-10-12T00:45:43+02:00",
          "tree_id": "72acd4095860660697031a7bb15889f8d4dadd67",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/c92197bc4ebf648dc55615b6548dffce4f51df50"
        },
        "date": 1760223000253,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3686286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5790724,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 428305,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3676733,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5785273,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 429046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.368368368368369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 117.55349344978166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":916,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 16.9749498997996,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 134.06514285714286,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":875,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 279585532.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 258420302,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 45608215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 278488650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 259216261,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 47762314,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 438114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 5019491,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3672\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 489048,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 437272,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5046019,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3672\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 490280.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alberto.mercurio96@gmail.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "alberto.mercurio96@gmail.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "distinct": true,
          "id": "e69e015cf23382aa0bc2c73269e9827c43b6e4e6",
          "message": "Use 2 threads in benchmarks",
          "timestamp": "2025-10-12T00:54:42+02:00",
          "tree_id": "3fde7360e4d1beb3394c5a11ef10f0cd15d894b2",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/e69e015cf23382aa0bc2c73269e9827c43b6e4e6"
        },
        "date": 1760223532840,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3651601.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5660420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 427010,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3667913,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5675950,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 427285.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 10.66066066066066,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 156.7945205479452,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":803,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 15.439879759519037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 132.42792281498296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":881,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 279366383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 255943928.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 47663118,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 278657171.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 257588860.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=34\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 47782524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1792\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 436437,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 4959822,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3672\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 489096.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 437770.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5166140,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3672\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 488715,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1952\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f48e5e61eb5a30b42817944af97863ca0ee2b5b2",
          "message": "Define kernels globally (#14)\n\n* Separate kernels for CSC mul!\n\n* Use conj method propagation\n\n* Move kernels into a separate file\n\n* Move all the other kernels\n\n* Don't run quality tests on 1.12 version",
          "timestamp": "2025-11-11T21:23:45+01:00",
          "tree_id": "f460ad85a9e7c6f333b90fa2669647e38588e59b",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/f48e5e61eb5a30b42817944af97863ca0ee2b5b2"
        },
        "date": 1762892904800,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3643791,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5319758,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 428879.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3635223,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5329012,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 430337,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.225225225225225,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 105.30949839914621,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":937,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 14.455911823647295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 111.96871628910463,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":927,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 277846381.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 247876389,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48739631.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 278267624.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 254158913.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 49517003,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 436353,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 6147460.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 492254,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 437651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5315799.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 493315,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe56588fa2f882e9dd0c4b9285bb772bee906bbf",
          "message": "Merge pull request #15 from albertomercurio:patch-1\n\nReorganize folders",
          "timestamp": "2025-11-11T23:03:07+01:00",
          "tree_id": "3b262c2423ed5f5907e7304f2083004616779925",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/fe56588fa2f882e9dd0c4b9285bb772bee906bbf"
        },
        "date": 1762898846130,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3705982,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5450479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 427631,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3711918.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5452851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 425528,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.285285285285285,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 141.36013986013987,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":858,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 13.633266533066132,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 137.28143021914647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":867,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 284336292.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 256879509,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48804737,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 286071038.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 256319835.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 49521962,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 442119,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 5089512,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 492333,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 440495,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5059124.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 491992,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3344d6f031bcf6cf8f997ed4708f52de54f250f4",
          "message": "Implement addition between AbstractDeviceSparseMatrix and DenseMatrix (#21)\n\n* Initial plan\n\n* Implement addition between AbstractDeviceSparseMatrix and DenseMatrix\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Apply code formatting\n\n* Add benchmarks for sparse + dense matrix addition\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>",
          "timestamp": "2025-11-12T09:05:49+01:00",
          "tree_id": "9b9c4d37dc6cb446f0a046d0cade2221cb4babb3",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/3344d6f031bcf6cf8f997ed4708f52de54f250f4"
        },
        "date": 1762935073981,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3699241.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5435053,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 426404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3724078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5544788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 425522,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.612224448897795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 136.80622837370242,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":867,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 10.991991991991991,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 109.75268817204301,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":930,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 108409250,
            "unit": "ns",
            "extra": "gctime=3905370\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 111329757,
            "unit": "ns",
            "extra": "gctime=4023800\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 110370259,
            "unit": "ns",
            "extra": "gctime=3961319.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 112190367,
            "unit": "ns",
            "extra": "gctime=3956095\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 114404144,
            "unit": "ns",
            "extra": "gctime=3959100.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 110499242,
            "unit": "ns",
            "extra": "gctime=3974760\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 281856909.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 246808006,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48088256,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 278898017,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 256402775,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 49307242,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 439228,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 5213987,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 489100.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 439218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5062342,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 487448,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17d03ca147e2ebe5bac2674063554c06fc602d89",
          "message": "Implement device-native conversions between CSR/CSC and COO sparse matrix formats (#22)\n\n* Initial plan\n\n* Implement direct conversions between CSR/CSC and COO formats\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Format code with JuliaFormatter\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Add comprehensive docstrings to conversion functions\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Reimplement conversions without CPU transfers using kernels and AcceleratedKernels\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Move conversion functions to separate conversions/ folder with tests and benchmarks\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix conversions to work with all backends by using CPU sorting and cumsum\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Move kernels outside functions and use AcceleratedKernels with JLBackend fallback\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Remove JLArray dispatch and fix scalar indexing issue\n\n* Fix errors in Metal\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2025-11-13T09:49:11+01:00",
          "tree_id": "b7ba2fd48b012a214114b97e743835f1bd73b9dd",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/17d03ca147e2ebe5bac2674063554c06fc602d89"
        },
        "date": 1763024173980,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3647224,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5295668,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 427988,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3638572,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5289549,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 422542.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 18.170340681362724,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 123.45293466223698,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":903,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 10.88088088088088,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 120.92061742006615,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":907,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 1046220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24000904\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 9703357,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48248744\nallocs=194\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 1056344,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24000904\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 50771395,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56248888\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 1044076,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23987656\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 9816292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48222248\nallocs=194\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 1049575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23987656\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 53503550,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56217976\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 118473674.5,
            "unit": "ns",
            "extra": "gctime=4174866.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 114732764,
            "unit": "ns",
            "extra": "gctime=4119217\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 114087974,
            "unit": "ns",
            "extra": "gctime=4100130.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 113744347,
            "unit": "ns",
            "extra": "gctime=4105566\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 115158101,
            "unit": "ns",
            "extra": "gctime=4249189\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 117307302,
            "unit": "ns",
            "extra": "gctime=4217650\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 284077640.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 256817669.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 49574433,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 281439332.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 257043570.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 49417778.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 448276,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 5084888,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 494031,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 439369,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5043762,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 491812,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bb13501ce273a7487cab799493789e3f4e6dded",
          "message": "Add GPU backend synchronization to benchmarks for accurate timing (#24)",
          "timestamp": "2025-11-13T18:44:08+01:00",
          "tree_id": "16c7307259f62fdd0b875511234d105fee0fe33e",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/9bb13501ce273a7487cab799493789e3f4e6dded"
        },
        "date": 1763056269850,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3740108,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5499732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 429388,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 3724192,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 5502059,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 434221.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 11.863863863863864,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 145.52375296912115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":842,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 13.568568568568569,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 144.75177304964538,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":846,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 1250310.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24001864\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10507861,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48250664\nallocs=194\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 1097548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24001864\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 59696802.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56251192\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 1270557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24005896\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 10392607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48258728\nallocs=194\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 1262157.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24005896\nallocs=41\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 49298924.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=56260536\nallocs=202\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 112601941,
            "unit": "ns",
            "extra": "gctime=4128530\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 112042008,
            "unit": "ns",
            "extra": "gctime=4186189\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 110483888,
            "unit": "ns",
            "extra": "gctime=4059075\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 109740055,
            "unit": "ns",
            "extra": "gctime=4025686.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 112372637,
            "unit": "ns",
            "extra": "gctime=4107089\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 112373013,
            "unit": "ns",
            "extra": "gctime=4045483\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 286513854,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 258015612.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 50276153,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 288180622.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 258752421,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 49680007.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 445758,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 4947033,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 497545,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 448753.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 5080108,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 492330.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59526b2bc4d440f91d7707fd0b664a65b4c57f22",
          "message": "Implement display and other format conversions (#26)\n\n* Implement display and other format conversions\n\n* Fix benchmarks\n\n* Fix benchmarks typo\n\n* Comment out benchmark conversions for JLArray\n\n* Add JLArrays support and enable conversion benchmarks\n\n- Introduced JLArrays as a weak dependency in Project.toml.\n- Enabled benchmark conversions for JLArray in runbenchmarks.jl.\n- Added helper functions for sorting and cumulative sum using AcceleratedKernels in helpers.jl.\n- Updated conversion tests to include JLArray support in shared test conversions.\n- Created DeviceSparseArraysJLArraysExt.jl for JLArray specific operations.\n\n* Fix Metal errors",
          "timestamp": "2025-11-16T11:59:12+01:00",
          "tree_id": "47a5e3c67a91bc3238c784ad585307c216618fbb",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/59526b2bc4d440f91d7707fd0b664a65b4c57f22"
        },
        "date": 1763291436510,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3690643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5415008,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 423790,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 89431642.5,
            "unit": "ns",
            "extra": "gctime=24605818\nmemory=163283056\nallocs=6123003\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 165816944,
            "unit": "ns",
            "extra": "gctime=49485517\nmemory=320960016\nallocs=12035889\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 130316208,
            "unit": "ns",
            "extra": "gctime=44837839\nmemory=244121536\nallocs=9154446\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 16.46392785571142,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 99.25554382259767,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":947,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 14838,
            "unit": "ns",
            "extra": "gctime=0\nmemory=21808\nallocs=738\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=27840\nallocs=1024\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2966257,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48030112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 11515380.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64368320\nallocs=203\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 2967284,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48030112\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 49609295,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72373520\nallocs=211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 205161905,
            "unit": "ns",
            "extra": "gctime=69685083.5\nmemory=449783072\nallocs=15066080\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1148868472,
            "unit": "ns",
            "extra": "gctime=378011213\nmemory=2283513528\nallocs=81183298\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 201603356.5,
            "unit": "ns",
            "extra": "gctime=69540185\nmemory=449783072\nallocs=15066080\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1245923234.5,
            "unit": "ns",
            "extra": "gctime=385852072\nmemory=2291516800\nallocs=81183301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 114059854,
            "unit": "ns",
            "extra": "gctime=4969191.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 114712651,
            "unit": "ns",
            "extra": "gctime=5001156.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 114571955,
            "unit": "ns",
            "extra": "gctime=4951264\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 386426986,
            "unit": "ns",
            "extra": "gctime=96676361\nmemory=1185343632\nallocs=12051892\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 436705691.5,
            "unit": "ns",
            "extra": "gctime=120097054.5\nmemory=1263689152\nallocs=14989849\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 389144395,
            "unit": "ns",
            "extra": "gctime=98194382\nmemory=1185343632\nallocs=12051892\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 496996,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1680416\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 55453,
            "unit": "ns",
            "extra": "gctime=0\nmemory=536432\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 510562,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1680480\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 11985322,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24734112\nallocs=862602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2325817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5038720\nallocs=177035\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 11986403,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24734112\nallocs=862602\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 284584415.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 255885872.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48705911.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10631249806,
            "unit": "ns",
            "extra": "gctime=3084019882\nmemory=16372918368\nallocs=611584317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 17833523021,
            "unit": "ns",
            "extra": "gctime=6436576479\nmemory=35287612784\nallocs=1202168518\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 16689830764,
            "unit": "ns",
            "extra": "gctime=5140635477\nmemory=27677156768\nallocs=914376417\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 438718,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2282927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 489678.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 162404932,
            "unit": "ns",
            "extra": "gctime=51082583.5\nmemory=321085984\nallocs=12040584\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 208084979.5,
            "unit": "ns",
            "extra": "gctime=72997213\nmemory=399421568\nallocs=14977955\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 164735886,
            "unit": "ns",
            "extra": "gctime=52179490\nmemory=321085984\nallocs=12040584\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "862b4d58793115091b6069cdba6b0c2add35e200",
          "message": "Update auto-push condition for benchmarks workflow",
          "timestamp": "2025-11-16T23:33:49+01:00",
          "tree_id": "97a23336e08b5d0e2a264df035a7c93d6bd83e6f",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/862b4d58793115091b6069cdba6b0c2add35e200"
        },
        "date": 1763333115707,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3643034,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5298126,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 425771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 90212153,
            "unit": "ns",
            "extra": "gctime=24753467\nmemory=163400336\nallocs=6127401\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 169573957,
            "unit": "ns",
            "extra": "gctime=51867143\nmemory=321194576\nallocs=12044685\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 129469126.5,
            "unit": "ns",
            "extra": "gctime=45534160.5\nmemory=244297456\nallocs=9161043\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.666666666666666,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 121.48511576626241,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":907,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 24846.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26512\nallocs=898\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24486,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28800\nallocs=1060\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3443599.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48004384\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 12580988,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64334016\nallocs=203\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3248684,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48004384\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 53468591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72334928\nallocs=211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 203886538.5,
            "unit": "ns",
            "extra": "gctime=70661600\nmemory=449297632\nallocs=15049820\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1120729699,
            "unit": "ns",
            "extra": "gctime=378145572\nmemory=2281044472\nallocs=81095494\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 203913426,
            "unit": "ns",
            "extra": "gctime=69612704.5\nmemory=449297632\nallocs=15049820\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1224175327,
            "unit": "ns",
            "extra": "gctime=372101361\nmemory=2289039104\nallocs=81095497\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 114762098,
            "unit": "ns",
            "extra": "gctime=5126865\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 115406004.5,
            "unit": "ns",
            "extra": "gctime=5159621.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 114475535,
            "unit": "ns",
            "extra": "gctime=5063034\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 389128889,
            "unit": "ns",
            "extra": "gctime=98852409\nmemory=1185556752\nallocs=12058552\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 438290052,
            "unit": "ns",
            "extra": "gctime=118270051.5\nmemory=1263946672\nallocs=14998174\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 389446012,
            "unit": "ns",
            "extra": "gctime=101021807\nmemory=1185556752\nallocs=12058552\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 432882.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1474016\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 51366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=454256\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 430143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1474016\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 12002090.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29188496\nallocs=1020105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2334051,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6156928\nallocs=216347\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 11984809,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29188496\nallocs=1020105\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 281897475.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 256550017,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48689024,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10362318867,
            "unit": "ns",
            "extra": "gctime=3026142330\nmemory=16372902368\nallocs=611583717\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 17863950215,
            "unit": "ns",
            "extra": "gctime=6469860290\nmemory=35287577584\nallocs=1202167318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 16729950291,
            "unit": "ns",
            "extra": "gctime=5153942921\nmemory=27677129568\nallocs=914375517\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 440907,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2277798,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 492013.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 160638159.5,
            "unit": "ns",
            "extra": "gctime=51646697.5\nmemory=322053984\nallocs=12076884\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 205567897,
            "unit": "ns",
            "extra": "gctime=72084219\nmemory=400631568\nallocs=15023330\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 160904179,
            "unit": "ns",
            "extra": "gctime=50757474\nmemory=322053984\nallocs=12076884\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c26f8a5def648a1a6ef5abbcd38291f0c3d42e40",
          "message": "Bump actions/checkout from 5.0.0 to 5.0.1 (#30)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 5.0.0 to 5.0.1.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Commits](https://github.com/actions/checkout/compare/v5...v5.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: 5.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-18T00:59:55+01:00",
          "tree_id": "7691837afe523203aa075d4e3588af8397cdec02",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/c26f8a5def648a1a6ef5abbcd38291f0c3d42e40"
        },
        "date": 1763424669388,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3632901,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5344970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 425233.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 88407979,
            "unit": "ns",
            "extra": "gctime=24251646\nmemory=163141776\nallocs=6117705\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 172621755,
            "unit": "ns",
            "extra": "gctime=56410669\nmemory=320677456\nallocs=12025293\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 128073184,
            "unit": "ns",
            "extra": "gctime=46837381\nmemory=243909616\nallocs=9146499\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 15.308617234468938,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 118.14847161572052,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":916,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 16145.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23968\nallocs=810\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28560\nallocs=1051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3282786.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48000928\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 11372116,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64329408\nallocs=203\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3296111,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48000928\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 51026485.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72329680\nallocs=211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 205907502.5,
            "unit": "ns",
            "extra": "gctime=72538812.5\nmemory=449420688\nallocs=15053945\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1106252498,
            "unit": "ns",
            "extra": "gctime=390654846\nmemory=2281670568\nallocs=81117769\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 210563099,
            "unit": "ns",
            "extra": "gctime=73800696\nmemory=449420688\nallocs=15053945\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1220257125.5,
            "unit": "ns",
            "extra": "gctime=383913298.5\nmemory=2289667376\nallocs=81117772\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 114155029,
            "unit": "ns",
            "extra": "gctime=5091944\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 111505379,
            "unit": "ns",
            "extra": "gctime=4954527\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 110853573,
            "unit": "ns",
            "extra": "gctime=5008934\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 380181645,
            "unit": "ns",
            "extra": "gctime=95561707\nmemory=1185179664\nallocs=12046768\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 426218995,
            "unit": "ns",
            "extra": "gctime=112325109\nmemory=1263491024\nallocs=14983444\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 387774376,
            "unit": "ns",
            "extra": "gctime=104758762\nmemory=1185179664\nallocs=12046768\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 407425,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1348256\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 58139,
            "unit": "ns",
            "extra": "gctime=0\nmemory=403952\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 409319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1348256\nallocs=302\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 14176740.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31661856\nallocs=1107564\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2875500,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6777472\nallocs=238163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 14207788,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31661856\nallocs=1107564\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 280260208.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 253272924,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 46751110,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 9546107986,
            "unit": "ns",
            "extra": "gctime=3105226387\nmemory=16391014368\nallocs=612262917\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 17928547747,
            "unit": "ns",
            "extra": "gctime=6599832910\nmemory=35327423984\nallocs=1203525718\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 16364866090,
            "unit": "ns",
            "extra": "gctime=5155756690\nmemory=27707919968\nallocs=915394317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 442862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2287972.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 488367.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 162933283,
            "unit": "ns",
            "extra": "gctime=52021831\nmemory=321521824\nallocs=12056928\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 205650567,
            "unit": "ns",
            "extra": "gctime=71674549\nmemory=399966368\nallocs=14998385\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 165188750,
            "unit": "ns",
            "extra": "gctime=51200348\nmemory=321521824\nallocs=12056928\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "131b789161bc420eed2bc2794bcb793f1b600e25",
          "message": "Force fields to have same eltype (#28)\n\n* Force fields to have same eltype\n\n* Relax types\n\n* Update src/matrix_csc/matrix_csc.jl\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\n\n* Update src/matrix_csr/matrix_csr.jl\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>\n\n* Copy arrays in COO format\n\n* Fix errors in docstring\n\n* Fix error on `tr` function\n\n* Refactor to replace `allowed_getindex` with `@allowscalar` for improved scalar handling in matrix operations\n\n---------\n\nCo-authored-by: github-actions[bot] <41898282+github-actions[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-26T01:51:24+01:00",
          "tree_id": "fa3808d290ae1bf3b31db2b17552d01d80c7da60",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/131b789161bc420eed2bc2794bcb793f1b600e25"
        },
        "date": 1769389398983,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3620795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5304623,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 425466,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 90733668,
            "unit": "ns",
            "extra": "gctime=24767612\nmemory=163584544\nallocs=6134309\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 286508266,
            "unit": "ns",
            "extra": "gctime=57528829.5\nmemory=321562944\nallocs=12058499\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 131964136.5,
            "unit": "ns",
            "extra": "gctime=47439051.5\nmemory=244573744\nallocs=9171404\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.094094094094094,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 92.47643979057591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":955,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 26259,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26352\nallocs=892\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24806,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28144\nallocs=1035\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2891169.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47996704\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 11433945,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64323792\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 2955961,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47996704\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 48379687,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72323360\nallocs=212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 223253769,
            "unit": "ns",
            "extra": "gctime=71284918\nmemory=450148272\nallocs=15078306\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1114932918,
            "unit": "ns",
            "extra": "gctime=374200891\nmemory=2285370600\nallocs=81249340\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 221106720.5,
            "unit": "ns",
            "extra": "gctime=73404242.5\nmemory=450148272\nallocs=15078306\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1248886438,
            "unit": "ns",
            "extra": "gctime=397888944\nmemory=2293380400\nallocs=81249343\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 111357185.5,
            "unit": "ns",
            "extra": "gctime=5187475\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 112242171.5,
            "unit": "ns",
            "extra": "gctime=5246390.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 114318126.5,
            "unit": "ns",
            "extra": "gctime=5229093.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 382849591,
            "unit": "ns",
            "extra": "gctime=93057393\nmemory=1186009520\nallocs=12072701\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 432824004.5,
            "unit": "ns",
            "extra": "gctime=115503452\nmemory=1264493776\nallocs=15015861\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 415525145.5,
            "unit": "ns",
            "extra": "gctime=92844314\nmemory=1186009520\nallocs=12072701\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 436527,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1457744\nallocs=305\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 51316,
            "unit": "ns",
            "extra": "gctime=0\nmemory=447344\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 446575,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1457424\nallocs=303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 15932931.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37750144\nallocs=1322850\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 3239571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8306624\nallocs=291920\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 15669538.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=37750144\nallocs=1322850\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 279202344.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 255186084.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 47161273.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10310922914,
            "unit": "ns",
            "extra": "gctime=3052724978\nmemory=16411846432\nallocs=613044120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18138655638,
            "unit": "ns",
            "extra": "gctime=6528484952\nmemory=35373254432\nallocs=1205088120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 16091787670,
            "unit": "ns",
            "extra": "gctime=5135304995\nmemory=27743334432\nallocs=916566120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 441647,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2395181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 490307,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 159910389,
            "unit": "ns",
            "extra": "gctime=48418284.5\nmemory=321892128\nallocs=12070814\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 203956086.5,
            "unit": "ns",
            "extra": "gctime=70625122\nmemory=400429232\nallocs=15015742\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 167660572,
            "unit": "ns",
            "extra": "gctime=49710971.5\nmemory=321892128\nallocs=12070814\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5352275b69477d0b6dbdf43f4bae6ab13470b32c",
          "message": "Implement sparse + sparse matrix addition with transpose/adjoint support for CSC, CSR, and COO formats (#27)\n\n* Initial plan\n\n* Add sparse + sparse matrix addition for CSC, CSR, and COO formats\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix scalar indexing issue and add sparse+sparse benchmarks\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix COO addition to merge duplicates and remove unnecessary test dependency\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Add transpose/adjoint support for sparse matrix addition\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Simplify transpose/adjoint addition by using existing conversion methods\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Consolidate transpose/adjoint tests into main addition testset using iterator pattern\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Replace allowed_getindex with only() for GPU compatibility\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Simplify test structure by merging conditionals\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix allowscalar issue\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2026-01-26T03:37:20+01:00",
          "tree_id": "1b61572fc7d0e8823a4a3995123834ceff4f31c7",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/5352275b69477d0b6dbdf43f4bae6ab13470b32c"
        },
        "date": 1769395836276,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3644550.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5277971,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 423502,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 117454236,
            "unit": "ns",
            "extra": "gctime=26299836\nmemory=163344704\nallocs=6125315\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 289738446,
            "unit": "ns",
            "extra": "gctime=55367079\nmemory=321083264\nallocs=12040511\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 167227358,
            "unit": "ns",
            "extra": "gctime=49188963\nmemory=244213984\nallocs=9157913\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.78878878878879,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 142.58245614035087,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":855,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 24556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26800\nallocs=908\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 15939.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=23824\nallocs=873\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2762571,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48060064\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10899213,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64408272\nallocs=204\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 2775169.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48060064\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 51651607,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72418400\nallocs=212\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 222101944,
            "unit": "ns",
            "extra": "gctime=72982059.5\nmemory=449848016\nallocs=15068256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1142516783,
            "unit": "ns",
            "extra": "gctime=396254042\nmemory=2283844360\nallocs=81195070\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 235384763,
            "unit": "ns",
            "extra": "gctime=73779493\nmemory=449848016\nallocs=15068256\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1253554204,
            "unit": "ns",
            "extra": "gctime=382654899.5\nmemory=2291848784\nallocs=81195073\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 110646850,
            "unit": "ns",
            "extra": "gctime=5272368\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 110831752.5,
            "unit": "ns",
            "extra": "gctime=5308928.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 110713489,
            "unit": "ns",
            "extra": "gctime=5202490\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 381582370,
            "unit": "ns",
            "extra": "gctime=96967327\nmemory=1185393968\nallocs=12053465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 430188748.5,
            "unit": "ns",
            "extra": "gctime=112909959.5\nmemory=1263749984\nallocs=14991816\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 395770943,
            "unit": "ns",
            "extra": "gctime=97604032\nmemory=1185393968\nallocs=12053465\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 491158,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1766064\nallocs=303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 57548,
            "unit": "ns",
            "extra": "gctime=0\nmemory=570608\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 502520,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1766064\nallocs=303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 15719434,
            "unit": "ns",
            "extra": "gctime=0\nmemory=38413760\nallocs=1346316\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 3233218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8473232\nallocs=297779\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 15764601,
            "unit": "ns",
            "extra": "gctime=0\nmemory=38413760\nallocs=1346316\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 281223451,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 252411426,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 45842073,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 13875432785,
            "unit": "ns",
            "extra": "gctime=3235819727\nmemory=16400806432\nallocs=612630120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 23992155347,
            "unit": "ns",
            "extra": "gctime=6919193680\nmemory=35348966432\nallocs=1204260120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 18716728063,
            "unit": "ns",
            "extra": "gctime=5328817818\nmemory=27724566432\nallocs=915945120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 11782879.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64106824\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 85171216,
            "unit": "ns",
            "extra": "gctime=3259753\nmemory=273619608\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11740842,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64106824\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 595990476,
            "unit": "ns",
            "extra": "gctime=209731357\nmemory=1187959904\nallocs=42136985\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4132176842.5,
            "unit": "ns",
            "extra": "gctime=1400658806\nmemory=7760003448\nallocs=275946933\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 600864115,
            "unit": "ns",
            "extra": "gctime=201189993\nmemory=1188040784\nallocs=42140018\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 439863,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2470970,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 488237.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 162208900,
            "unit": "ns",
            "extra": "gctime=53719538.5\nmemory=322113568\nallocs=12079118\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 213762367,
            "unit": "ns",
            "extra": "gctime=77571289\nmemory=400706032\nallocs=15026122\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 161441372,
            "unit": "ns",
            "extra": "gctime=52380727\nmemory=322113568\nallocs=12079118\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "198982749+Copilot@users.noreply.github.com",
            "name": "Copilot",
            "username": "Copilot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd4d10696a03384b784db398299d6b740c428a93",
          "message": "Implement sparse-sparse matrix multiplication with GPU-compatible kernels (#36)\n\n* Initial plan\n\n* Implement sparse-sparse matrix multiplication for all formats\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Add comprehensive tests for sparse-sparse multiplication\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix code review comments - improve docstrings and remove misleading comment\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Implement proper GPU-compatible SpGEMM kernels for CSC and CSR formats\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Simplify COO multiplication and remove redundant tests\n\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\n\n* Fix Metal errors\n\n---------\n\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>\nCo-authored-by: albertomercurio <61953577+albertomercurio@users.noreply.github.com>\nCo-authored-by: Alberto Mercurio <alberto.mercurio96@gmail.com>",
          "timestamp": "2026-01-26T19:04:15+01:00",
          "tree_id": "b008b236dc382877585ff1aa59679c08eb0f68c1",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/dd4d10696a03384b784db398299d6b740c428a93"
        },
        "date": 1769451439905,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3635477,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5344519,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 427508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 90429593,
            "unit": "ns",
            "extra": "gctime=25289425.5\nmemory=163420864\nallocs=6128171\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 266282340,
            "unit": "ns",
            "extra": "gctime=55608946\nmemory=321235584\nallocs=12046223\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 135860219,
            "unit": "ns",
            "extra": "gctime=50284932\nmemory=244328224\nallocs=9162197\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 26.361723446893787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 128.4769921436588,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":891,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 16651,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24032\nallocs=812\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 23374,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26224\nallocs=963\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2920249,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48014752\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10285846.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64345488\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3011143,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48014752\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 47032925.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72348064\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 211729920,
            "unit": "ns",
            "extra": "gctime=75502738\nmemory=449592352\nallocs=15059691\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1117427324,
            "unit": "ns",
            "extra": "gctime=364721208\nmemory=2216941112\nallocs=78088801\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 212992265,
            "unit": "ns",
            "extra": "gctime=77343793\nmemory=449592352\nallocs=15059691\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1209557497,
            "unit": "ns",
            "extra": "gctime=389399035\nmemory=2224940992\nallocs=78088804\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 116195618,
            "unit": "ns",
            "extra": "gctime=5224760\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 129232110,
            "unit": "ns",
            "extra": "gctime=5368317\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 139292889,
            "unit": "ns",
            "extra": "gctime=5504120\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 428485592,
            "unit": "ns",
            "extra": "gctime=101264214.5\nmemory=1186024112\nallocs=12073157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 482937314,
            "unit": "ns",
            "extra": "gctime=106433732\nmemory=1264511408\nallocs=15016431\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 457326862.5,
            "unit": "ns",
            "extra": "gctime=116771195.5\nmemory=1186024112\nallocs=12073157\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 619986,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1492304\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 53319,
            "unit": "ns",
            "extra": "gctime=0\nmemory=462320\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 614235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1492304\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 11093009,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25130992\nallocs=867853\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2250310,
            "unit": "ns",
            "extra": "gctime=0\nmemory=5659280\nallocs=198851\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 11055922,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25130992\nallocs=867853\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 279934263.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 255645181,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 49501352,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 9573430422,
            "unit": "ns",
            "extra": "gctime=3068435698\nmemory=16377462432\nallocs=611754720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18304488671,
            "unit": "ns",
            "extra": "gctime=6707515103\nmemory=35297609632\nallocs=1202509320\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 18946257685,
            "unit": "ns",
            "extra": "gctime=5495154583\nmemory=27684881632\nallocs=914632020\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 12001860,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64104008\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 87350389,
            "unit": "ns",
            "extra": "gctime=4046524\nmemory=273622552\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11997778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64104008\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 629619084.5,
            "unit": "ns",
            "extra": "gctime=220425937.5\nmemory=1188105008\nallocs=42142148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4152487074.5,
            "unit": "ns",
            "extra": "gctime=1400241760.5\nmemory=7759874232\nallocs=275941863\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 641829116,
            "unit": "ns",
            "extra": "gctime=229102068\nmemory=1188119648\nallocs=42142697\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 441573.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2284629.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 490795,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 169878985,
            "unit": "ns",
            "extra": "gctime=58452491\nmemory=321637728\nallocs=12061274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 219858565,
            "unit": "ns",
            "extra": "gctime=79650898\nmemory=400111232\nallocs=15003817\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 164407054,
            "unit": "ns",
            "extra": "gctime=56315886\nmemory=321637728\nallocs=12061274\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22d416d613571f15a37c98e6afe1c15f91f053d0",
          "message": "Add FormatCheck with Runic (#37)",
          "timestamp": "2026-01-26T19:17:09+01:00",
          "tree_id": "27c7718069433a4dd6459c531948464f473c3f3a",
          "url": "https://github.com/albertomercurio/DeviceSparseArrays.jl/commit/22d416d613571f15a37c98e6afe1c15f91f053d0"
        },
        "date": 1769452223170,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3683511.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5385669.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 429471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 91613814,
            "unit": "ns",
            "extra": "gctime=28716480\nmemory=163296224\nallocs=6123497\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 267006756.5,
            "unit": "ns",
            "extra": "gctime=58156578.5\nmemory=320986304\nallocs=12036875\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 138521105,
            "unit": "ns",
            "extra": "gctime=56332238\nmemory=244141264\nallocs=9155186\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 15.20941883767535,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 90.93207941483803,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":957,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 28093,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30272\nallocs=1028\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=27424\nallocs=1008\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3044476,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47941792\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10500179,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64248208\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3124984,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47941792\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 52038407,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72238624\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 218808276,
            "unit": "ns",
            "extra": "gctime=80511110\nmemory=448801488\nallocs=15033216\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1137209282,
            "unit": "ns",
            "extra": "gctime=413399542\nmemory=2213032952\nallocs=77951131\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 212552755,
            "unit": "ns",
            "extra": "gctime=77091589\nmemory=448801488\nallocs=15033216\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1255203003.5,
            "unit": "ns",
            "extra": "gctime=391745264.5\nmemory=2221018688\nallocs=77951134\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 113009369,
            "unit": "ns",
            "extra": "gctime=5265367\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 114934174,
            "unit": "ns",
            "extra": "gctime=5287677.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 113078713.5,
            "unit": "ns",
            "extra": "gctime=5331377\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 394364878,
            "unit": "ns",
            "extra": "gctime=103144140\nmemory=1184967344\nallocs=12040133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 431174342,
            "unit": "ns",
            "extra": "gctime=114712888\nmemory=1263234480\nallocs=14975151\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 383923557,
            "unit": "ns",
            "extra": "gctime=92578561\nmemory=1184967344\nallocs=12040133\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 593366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1423728\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 50534,
            "unit": "ns",
            "extra": "gctime=0\nmemory=435056\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 608725,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1423728\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 12813296,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29310144\nallocs=1014568\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2649420,
            "unit": "ns",
            "extra": "gctime=0\nmemory=6730880\nallocs=236516\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 12828343.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=29310144\nallocs=1014568\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 285287618.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 250164390,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 51718185,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 12239446519,
            "unit": "ns",
            "extra": "gctime=3246037287\nmemory=16379110432\nallocs=611816520\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18710455064,
            "unit": "ns",
            "extra": "gctime=6995256088\nmemory=35301235232\nallocs=1202632920\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 18247946163,
            "unit": "ns",
            "extra": "gctime=5479013816\nmemory=27687683232\nallocs=914724720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 11869841.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64088648\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 85099027,
            "unit": "ns",
            "extra": "gctime=3969446\nmemory=273558936\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11918086,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64088648\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 619889210.5,
            "unit": "ns",
            "extra": "gctime=225332464.5\nmemory=1188012896\nallocs=42138953\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4185608109.5,
            "unit": "ns",
            "extra": "gctime=1458881216.5\nmemory=7758977800\nallocs=275909952\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 632989195,
            "unit": "ns",
            "extra": "gctime=230107631.5\nmemory=1187911856\nallocs=42135164\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 444128.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2315479,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 496276,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 170089494,
            "unit": "ns",
            "extra": "gctime=58196658\nmemory=321844128\nallocs=12069014\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 232116472,
            "unit": "ns",
            "extra": "gctime=83952236\nmemory=400369232\nallocs=15013492\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 170751855.5,
            "unit": "ns",
            "extra": "gctime=57658564.5\nmemory=321844128\nallocs=12069014\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69c7e1d9a6e85e74de2cc9d7c243e5e949ef7241",
          "message": "Rename to GenericSparseArrays (#38)",
          "timestamp": "2026-01-26T20:10:20+01:00",
          "tree_id": "4c13d2fbb103cac3d299a1cbac29f29826ab9757",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/69c7e1d9a6e85e74de2cc9d7c243e5e949ef7241"
        },
        "date": 1769455417229,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 6127231.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 7557709,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 519354,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 91364712,
            "unit": "ns",
            "extra": "gctime=24832454\nmemory=162704384\nallocs=6101303\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 248627335,
            "unit": "ns",
            "extra": "gctime=48809835.5\nmemory=319802624\nallocs=11992487\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 118661979,
            "unit": "ns",
            "extra": "gctime=46647115\nmemory=243253504\nallocs=9121895\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.447895791583166,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 137.1539351851852,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":864,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 21408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26576\nallocs=900\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 20632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26464\nallocs=972\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 4727840,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47969824\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 13086858,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64285584\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 4702591.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47969824\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 45463118.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72280736\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 195685863,
            "unit": "ns",
            "extra": "gctime=71463165\nmemory=449216032\nallocs=15047091\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1010630169,
            "unit": "ns",
            "extra": "gctime=343416917\nmemory=2215081400\nallocs=78023281\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 193065566,
            "unit": "ns",
            "extra": "gctime=67727850\nmemory=449216032\nallocs=15047091\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1097169478,
            "unit": "ns",
            "extra": "gctime=328637429\nmemory=2223074560\nallocs=78023284\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 231482925.5,
            "unit": "ns",
            "extra": "gctime=4099956.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 239631478,
            "unit": "ns",
            "extra": "gctime=4109276\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 233094410.5,
            "unit": "ns",
            "extra": "gctime=4074410\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 492582412,
            "unit": "ns",
            "extra": "gctime=104610134\nmemory=1185859760\nallocs=12068021\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 499109911.5,
            "unit": "ns",
            "extra": "gctime=94460052\nmemory=1264312816\nallocs=15010011\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 475474623,
            "unit": "ns",
            "extra": "gctime=85613181\nmemory=1185859760\nallocs=12068021\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 681777,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1585488\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 121074.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=499568\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 663316.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1585424\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 11772188,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30385056\nallocs=1052308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2406594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7006640\nallocs=246209\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 11663810,
            "unit": "ns",
            "extra": "gctime=0\nmemory=30385056\nallocs=1052308\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 478119219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 530221392,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 99738643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 9052442474,
            "unit": "ns",
            "extra": "gctime=2764283861\nmemory=16390070432\nallocs=612227520\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18954897079,
            "unit": "ns",
            "extra": "gctime=5893210961\nmemory=35325347232\nallocs=1203454920\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 13887699651,
            "unit": "ns",
            "extra": "gctime=4636220035\nmemory=27706315232\nallocs=915341220\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 14243156,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64063816\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 90317936,
            "unit": "ns",
            "extra": "gctime=2403559.5\nmemory=273442584\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 14204458,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64063816\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 543886281.5,
            "unit": "ns",
            "extra": "gctime=186754222.5\nmemory=1188587328\nallocs=42159227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 3723025841.5,
            "unit": "ns",
            "extra": "gctime=1254060001.5\nmemory=7763847080\nallocs=276083460\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 544882205,
            "unit": "ns",
            "extra": "gctime=182928491\nmemory=1188609408\nallocs=42160055\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 571366,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 1038576,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 576217,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 146282583,
            "unit": "ns",
            "extra": "gctime=48458985\nmemory=322042528\nallocs=12076454\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 185854272,
            "unit": "ns",
            "extra": "gctime=64990920\nmemory=400617232\nallocs=15022792\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 144993407,
            "unit": "ns",
            "extra": "gctime=47532501\nmemory=322042528\nallocs=12076454\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c161bbb10a0d21cca98513aa846ab97f0d1902b9",
          "message": "Add methods of kron with `Diagonal` (#40)\n\n* Add methods of kron with `Diagonal`\n\n* Add FillArrays in staledeps",
          "timestamp": "2026-02-01T00:57:19+01:00",
          "tree_id": "e612947a2a04cc713ed37d5d1752792ae87ad268",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/c161bbb10a0d21cca98513aa846ab97f0d1902b9"
        },
        "date": 1769904642574,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3712722,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5468471,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 430383,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 95012931,
            "unit": "ns",
            "extra": "gctime=29081348\nmemory=163182784\nallocs=6119243\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 272656654,
            "unit": "ns",
            "extra": "gctime=59988700.5\nmemory=320759424\nallocs=12028367\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 138940252,
            "unit": "ns",
            "extra": "gctime=54540062\nmemory=243971104\nallocs=9148805\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.041082164328657,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 103.93936170212766,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":940,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 15950,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24256\nallocs=820\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24906,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28384\nallocs=1044\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2933508,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48011680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10517212,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64341392\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 2970230.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48011680\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 56548899,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72343456\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 220593109.5,
            "unit": "ns",
            "extra": "gctime=81865758.5\nmemory=449667616\nallocs=15062211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1146634882,
            "unit": "ns",
            "extra": "gctime=390527676\nmemory=2217313208\nallocs=78101905\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 217645854,
            "unit": "ns",
            "extra": "gctime=78395688\nmemory=449667616\nallocs=15062211\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1254394488.5,
            "unit": "ns",
            "extra": "gctime=401173563.5\nmemory=2225314432\nallocs=78101908\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 117358079,
            "unit": "ns",
            "extra": "gctime=5397526\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 117942001,
            "unit": "ns",
            "extra": "gctime=5268375\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 118489279,
            "unit": "ns",
            "extra": "gctime=5386517\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 398308483,
            "unit": "ns",
            "extra": "gctime=99185553\nmemory=1184877104\nallocs=12037313\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 449038661.5,
            "unit": "ns",
            "extra": "gctime=119765056\nmemory=1263125440\nallocs=14971626\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 399422787,
            "unit": "ns",
            "extra": "gctime=101088443\nmemory=1184877104\nallocs=12037313\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 692323,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1701360\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 61194,
            "unit": "ns",
            "extra": "gctime=0\nmemory=545648\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 685349,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1701360\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 17389046,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40662112\nallocs=1413178\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 3726738,
            "unit": "ns",
            "extra": "gctime=0\nmemory=9642416\nallocs=338873\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 17446353,
            "unit": "ns",
            "extra": "gctime=0\nmemory=40662112\nallocs=1413178\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 284679361,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 255099624,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 49237529,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10599398685,
            "unit": "ns",
            "extra": "gctime=3281955987\nmemory=16382262432\nallocs=611934720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18734022219,
            "unit": "ns",
            "extra": "gctime=6904837385\nmemory=35308169632\nallocs=1202869320\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 17339064774,
            "unit": "ns",
            "extra": "gctime=5472134200\nmemory=27693041632\nallocs=914902020\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 11914556,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64033096\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 86443165.5,
            "unit": "ns",
            "extra": "gctime=3195892\nmemory=273301080\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11934534.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64033096\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 618846262.5,
            "unit": "ns",
            "extra": "gctime=223949232.5\nmemory=1188799152\nallocs=42166748\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4257583617.5,
            "unit": "ns",
            "extra": "gctime=1457463383\nmemory=7764758776\nallocs=276115671\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 632522467.5,
            "unit": "ns",
            "extra": "gctime=221355193\nmemory=1188893472\nallocs=42170285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 441554.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2362305,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 488873,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 170370723,
            "unit": "ns",
            "extra": "gctime=56830793\nmemory=322005088\nallocs=12075050\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 217827797,
            "unit": "ns",
            "extra": "gctime=82870400\nmemory=400570432\nallocs=15021037\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 172627122.5,
            "unit": "ns",
            "extra": "gctime=58549961\nmemory=322005088\nallocs=12075050\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01614988c84262c3fc2775d94ce94863e5cabd02",
          "message": "Add `ishermitian` and `issymmetric` (#41)",
          "timestamp": "2026-02-01T02:41:55+01:00",
          "tree_id": "a91434afdec8108ca766fcf0ac015de475ea333b",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/01614988c84262c3fc2775d94ce94863e5cabd02"
        },
        "date": 1769910923407,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3642805.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5337103,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 429527,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 92589904,
            "unit": "ns",
            "extra": "gctime=27961755\nmemory=163309184\nallocs=6123983\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 263399093,
            "unit": "ns",
            "extra": "gctime=57921831\nmemory=321012224\nallocs=12037847\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 134992471.5,
            "unit": "ns",
            "extra": "gctime=50620412.5\nmemory=244160704\nallocs=9155915\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.816816816816816,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 113.73347778981582,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":923,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 16330,
            "unit": "ns",
            "extra": "gctime=0\nmemory=24704\nallocs=836\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 23123,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26224\nallocs=963\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3210453.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48013600\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10287195,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64343952\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3196732,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48013600\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 54719890,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72346336\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 219813977,
            "unit": "ns",
            "extra": "gctime=81555857\nmemory=450850336\nallocs=15101811\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1098785531,
            "unit": "ns",
            "extra": "gctime=387006371\nmemory=2223158072\nallocs=78307825\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 217456079,
            "unit": "ns",
            "extra": "gctime=78826276\nmemory=450850336\nallocs=15101811\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1220374701,
            "unit": "ns",
            "extra": "gctime=381434030\nmemory=2231180416\nallocs=78307828\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 112533779,
            "unit": "ns",
            "extra": "gctime=5226527\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 110517767,
            "unit": "ns",
            "extra": "gctime=5206869\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 110539413,
            "unit": "ns",
            "extra": "gctime=5156299\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 367649987.5,
            "unit": "ns",
            "extra": "gctime=80616974.5\nmemory=1185901232\nallocs=12069317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 430023717,
            "unit": "ns",
            "extra": "gctime=118239766\nmemory=1264362928\nallocs=15011631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 392161304,
            "unit": "ns",
            "extra": "gctime=97706388\nmemory=1185901232\nallocs=12069317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 613616,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1540368\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 51210.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=481520\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 617313,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1540368\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 13143596.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31255680\nallocs=1082908\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2758864.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7229984\nallocs=254066\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 13152362,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31255680\nallocs=1082908\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 279883114,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 247699865,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 49404039,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10733191953,
            "unit": "ns",
            "extra": "gctime=3180584755\nmemory=16389078432\nallocs=612190320\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18235636003,
            "unit": "ns",
            "extra": "gctime=6769473494\nmemory=35323164832\nallocs=1203380520\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 17008385750,
            "unit": "ns",
            "extra": "gctime=5261942921\nmemory=27704628832\nallocs=915285420\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 12065172,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64133192\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 87207244,
            "unit": "ns",
            "extra": "gctime=2781091.5\nmemory=273752408\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11982638,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64133192\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 622119550,
            "unit": "ns",
            "extra": "gctime=229312435\nmemory=1186475424\nallocs=42084389\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4162300453,
            "unit": "ns",
            "extra": "gctime=1412515770.5\nmemory=7749801992\nallocs=275584080\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 604832665,
            "unit": "ns",
            "extra": "gctime=212272142\nmemory=1186509504\nallocs=42085667\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 445222,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2307707.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 494813,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 165502647,
            "unit": "ns",
            "extra": "gctime=57689881\nmemory=321964768\nallocs=12073538\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 216130025,
            "unit": "ns",
            "extra": "gctime=80607581\nmemory=400520032\nallocs=15019147\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 167939035,
            "unit": "ns",
            "extra": "gctime=57143561\nmemory=321964768\nallocs=12073538\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f68c3c0684b15327b6bf0ada14dc4f31566150a",
          "message": "Bump to v0.1.1",
          "timestamp": "2026-02-01T02:42:58+01:00",
          "tree_id": "869d9a549124045ae60445bb2a77eb964250adc1",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/7f68c3c0684b15327b6bf0ada14dc4f31566150a"
        },
        "date": 1769910973736,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3646599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5304178.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 426714,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 93019776,
            "unit": "ns",
            "extra": "gctime=27499778.5\nmemory=162915744\nallocs=6109229\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 269442545,
            "unit": "ns",
            "extra": "gctime=58112800\nmemory=320225344\nallocs=12008339\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 144765293.5,
            "unit": "ns",
            "extra": "gctime=55381280.5\nmemory=243570544\nallocs=9133784\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 12.769539078156313,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 104.8817891373802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":939,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 22817,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25824\nallocs=876\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 24746,
            "unit": "ns",
            "extra": "gctime=0\nmemory=28144\nallocs=1035\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3185176,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47975584\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10625875,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64293264\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3117591,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47975584\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 50542705.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72289312\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 217449180,
            "unit": "ns",
            "extra": "gctime=78633690\nmemory=449918096\nallocs=15070596\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1148374001,
            "unit": "ns",
            "extra": "gctime=405274657\nmemory=2218550648\nallocs=78145507\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 216873753,
            "unit": "ns",
            "extra": "gctime=78019523\nmemory=449918096\nallocs=15070596\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1249305893,
            "unit": "ns",
            "extra": "gctime=378583516\nmemory=2226556352\nallocs=78145510\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 112358841,
            "unit": "ns",
            "extra": "gctime=5342830\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 119452873.5,
            "unit": "ns",
            "extra": "gctime=5573109\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 116325260,
            "unit": "ns",
            "extra": "gctime=5386601.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 386240178,
            "unit": "ns",
            "extra": "gctime=92944420\nmemory=1184788016\nallocs=12034529\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 436123254.5,
            "unit": "ns",
            "extra": "gctime=113170738\nmemory=1263017792\nallocs=14968146\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 417915009,
            "unit": "ns",
            "extra": "gctime=125333557\nmemory=1184788016\nallocs=12034529\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 703078,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1742160\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 61705,
            "unit": "ns",
            "extra": "gctime=0\nmemory=561776\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 668965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1742096\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 14117235,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33026096\nallocs=1145053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2962576.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7683920\nallocs=270023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 13987212.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=33026096\nallocs=1145053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 276582326,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 253868127.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 48808790.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 9745000692,
            "unit": "ns",
            "extra": "gctime=3123653820\nmemory=16389526432\nallocs=612207120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18353681047,
            "unit": "ns",
            "extra": "gctime=6611264022\nmemory=35324150432\nallocs=1203414120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 15799710782,
            "unit": "ns",
            "extra": "gctime=5280362131\nmemory=27705390432\nallocs=915310620\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 12234182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64111432\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 85729431,
            "unit": "ns",
            "extra": "gctime=4509630\nmemory=273646488\nallocs=285\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 11886900.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64111432\nallocs=120\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 595895985,
            "unit": "ns",
            "extra": "gctime=204557541\nmemory=1188051536\nallocs=42140306\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4128739244.5,
            "unit": "ns",
            "extra": "gctime=1398279676\nmemory=7761056408\nallocs=275984727\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 592865805,
            "unit": "ns",
            "extra": "gctime=199530254\nmemory=1188100016\nallocs=42142124\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 447492,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2276215,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 493528,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 162675726,
            "unit": "ns",
            "extra": "gctime=53666265\nmemory=321247648\nallocs=12046646\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 216362430,
            "unit": "ns",
            "extra": "gctime=78361421\nmemory=399623632\nallocs=14985532\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 166195665,
            "unit": "ns",
            "extra": "gctime=56187796\nmemory=321247648\nallocs=12046646\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfa1d29376b218454efa7885751725835eb0cf0b",
          "message": "Introduce `droptzeros!` and apply it at the end of + methods (#42)",
          "timestamp": "2026-02-01T13:39:20+01:00",
          "tree_id": "5be19553913bcfcb7cf628e8561fd020c8d627fa",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/cfa1d29376b218454efa7885751725835eb0cf0b"
        },
        "date": 1769950377905,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3613303.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5258204,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 426115,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 93892019.5,
            "unit": "ns",
            "extra": "gctime=29242012.5\nmemory=163191264\nallocs=6119561\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 263588892,
            "unit": "ns",
            "extra": "gctime=57831711\nmemory=320776384\nallocs=12029003\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 137814287,
            "unit": "ns",
            "extra": "gctime=54345056\nmemory=243983824\nallocs=9149282\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 13.662324649298597,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 123.18715393133998,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":903,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 18229,
            "unit": "ns",
            "extra": "gctime=0\nmemory=27920\nallocs=948\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 14988,
            "unit": "ns",
            "extra": "gctime=0\nmemory=25504\nallocs=936\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 3079158,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48015904\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 10616308,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64347024\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 3129711,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48015904\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 48003400,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72349856\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 217903611,
            "unit": "ns",
            "extra": "gctime=82082184\nmemory=449844032\nallocs=15068121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1108791249,
            "unit": "ns",
            "extra": "gctime=393912290\nmemory=2218185272\nallocs=78132637\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 217702956,
            "unit": "ns",
            "extra": "gctime=80833764\nmemory=449844032\nallocs=15068121\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1217781433,
            "unit": "ns",
            "extra": "gctime=386055701\nmemory=2226189632\nallocs=78132640\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 118208074,
            "unit": "ns",
            "extra": "gctime=5463437\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 113969710.5,
            "unit": "ns",
            "extra": "gctime=5495621.5\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 115983867,
            "unit": "ns",
            "extra": "gctime=5521430\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 387926685,
            "unit": "ns",
            "extra": "gctime=101240034\nmemory=1185988784\nallocs=12072053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 425440417,
            "unit": "ns",
            "extra": "gctime=107776355.5\nmemory=1264468720\nallocs=15015051\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 412066187,
            "unit": "ns",
            "extra": "gctime=125094044\nmemory=1185988784\nallocs=12072053\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 596228,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1458000\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 52928.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=448496\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 594219.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1458256\nallocs=262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 15018219,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35480656\nallocs=1231273\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 3241740,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8313488\nallocs=292163\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 14929194,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35480656\nallocs=1231273\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 276439884,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 254344342,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 47755054,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10042297508,
            "unit": "ns",
            "extra": "gctime=3198430445\nmemory=16373654432\nallocs=611611920\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 18208953870,
            "unit": "ns",
            "extra": "gctime=6684256290\nmemory=35289232032\nallocs=1202223720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 15840518632,
            "unit": "ns",
            "extra": "gctime=5359313750\nmemory=27678408032\nallocs=914417820\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 18945484.5,
            "unit": "ns",
            "extra": "gctime=2357193.5\nmemory=96377104\nallocs=295\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 85837529,
            "unit": "ns",
            "extra": "gctime=4076299.5\nmemory=273907840\nallocs=289\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 18795613,
            "unit": "ns",
            "extra": "gctime=2358767\nmemory=96377104\nallocs=295\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 1259832467,
            "unit": "ns",
            "extra": "gctime=427240555.5\nmemory=2373738904\nallocs=84186560\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4602208291,
            "unit": "ns",
            "extra": "gctime=1528139037\nmemory=8522189336\nallocs=303594598\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 1248892968,
            "unit": "ns",
            "extra": "gctime=445131759\nmemory=2373710584\nallocs=84185498\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 438914.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2205379,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 486449,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 164777578,
            "unit": "ns",
            "extra": "gctime=56152485\nmemory=321789728\nallocs=12066974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 223428108,
            "unit": "ns",
            "extra": "gctime=85154072\nmemory=400301232\nallocs=15010942\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 165359609,
            "unit": "ns",
            "extra": "gctime=57609542\nmemory=321789728\nallocs=12066974\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "42972057de84639ef4c4f7e8c7403883552db7ae",
          "message": "Use generic methods for `*` and `/` with a scalar (#43)\n\n* Use generic methods for `*` and `/` with a scalar\n\n* Fix errors with Metal",
          "timestamp": "2026-02-01T17:07:32+01:00",
          "tree_id": "9ab8d470859fe24a88589458d8cc4232e6f6560a",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/42972057de84639ef4c4f7e8c7403883552db7ae"
        },
        "date": 1769962893234,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 6392220.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 7918500.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 553848.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 95424285,
            "unit": "ns",
            "extra": "gctime=25444392\nmemory=163283584\nallocs=6123023\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 261239908,
            "unit": "ns",
            "extra": "gctime=52878037\nmemory=320961024\nallocs=12035927\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 124852232,
            "unit": "ns",
            "extra": "gctime=47092075\nmemory=244122304\nallocs=9154475\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 17.218436873747496,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":998,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 144.83372921615202,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":842,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 21817.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=27024\nallocs=916\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 20965,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26944\nallocs=990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 5257629.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48002848\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 14495650,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64329616\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 5219697,
            "unit": "ns",
            "extra": "gctime=0\nmemory=48002848\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 50330220,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72330208\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 197161616,
            "unit": "ns",
            "extra": "gctime=71145544\nmemory=448822192\nallocs=15033906\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1025230458,
            "unit": "ns",
            "extra": "gctime=351906038\nmemory=2213135096\nallocs=77954719\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 198723461,
            "unit": "ns",
            "extra": "gctime=68407595\nmemory=448822192\nallocs=15033906\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1163640621,
            "unit": "ns",
            "extra": "gctime=356878740\nmemory=2221121216\nallocs=77954722\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 255419003.5,
            "unit": "ns",
            "extra": "gctime=4514208\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 261332771,
            "unit": "ns",
            "extra": "gctime=4654579\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 256472923,
            "unit": "ns",
            "extra": "gctime=4510045\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 510662949.5,
            "unit": "ns",
            "extra": "gctime=101639071.5\nmemory=1185517232\nallocs=12057317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 535124732,
            "unit": "ns",
            "extra": "gctime=113657999\nmemory=1263898928\nallocs=14996631\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 500878024.5,
            "unit": "ns",
            "extra": "gctime=86462194.5\nmemory=1185517232\nallocs=12057317\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 692037,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614224\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 123256.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=511088\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 662524,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1614224\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 14227218,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35334784\nallocs=1226128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2972635,
            "unit": "ns",
            "extra": "gctime=0\nmemory=8275904\nallocs=290840\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 14199854.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=35334784\nallocs=1226128\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 516386404,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 549505637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 126896513,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 10134874914,
            "unit": "ns",
            "extra": "gctime=2843297879\nmemory=16372582432\nallocs=611571720\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 21719901178,
            "unit": "ns",
            "extra": "gctime=6252179509\nmemory=35286873632\nallocs=1202143320\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 15359009869,
            "unit": "ns",
            "extra": "gctime=4853435357\nmemory=27676585632\nallocs=914357520\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 25811721,
            "unit": "ns",
            "extra": "gctime=2633390.5\nmemory=128307240\nallocs=304\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 107412184.5,
            "unit": "ns",
            "extra": "gctime=5200314.5\nmemory=369462640\nallocs=307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 25935551.5,
            "unit": "ns",
            "extra": "gctime=2623799\nmemory=128307240\nallocs=304\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 1123548032,
            "unit": "ns",
            "extra": "gctime=389629606\nmemory=2374807840\nallocs=84221666\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4163868154.5,
            "unit": "ns",
            "extra": "gctime=1369952782.5\nmemory=8620021080\nallocs=303678559\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 1109913432,
            "unit": "ns",
            "extra": "gctime=378556038\nmemory=2374770400\nallocs=84220262\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 589162,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 1071458.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 594671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 151954452.5,
            "unit": "ns",
            "extra": "gctime=51382433.5\nmemory=322067808\nallocs=12077402\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 197922024,
            "unit": "ns",
            "extra": "gctime=70337226.5\nmemory=400648832\nallocs=15023977\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 152222779,
            "unit": "ns",
            "extra": "gctime=51952091.5\nmemory=322067808\nallocs=12077402\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "61953577+albertomercurio@users.noreply.github.com",
            "name": "Alberto Mercurio",
            "username": "albertomercurio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "151e8a6ce4cbe00059395c806aeb72f765284b0b",
          "message": "Implement addition with UniformScaling (#44)",
          "timestamp": "2026-02-02T00:18:14+01:00",
          "tree_id": "cccefb7e7e0919dedcbb6c8529b8c3f1bd8fcb6d",
          "url": "https://github.com/albertomercurio/GenericSparseArrays.jl/commit/151e8a6ce4cbe00059395c806aeb72f765284b0b"
        },
        "date": 1769988689201,
        "tool": "julia",
        "benches": [
          {
            "name": "Matrix-Vector Multiplication/Array/CSC",
            "value": 3668774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/COO",
            "value": 5377927,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/Array/CSR",
            "value": 427559,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSC",
            "value": 91700143,
            "unit": "ns",
            "extra": "gctime=27052993\nmemory=163465984\nallocs=6129863\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/COO",
            "value": 259110816,
            "unit": "ns",
            "extra": "gctime=54752175\nmemory=321325824\nallocs=12049607\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Vector Multiplication/JLArray/CSR",
            "value": 132703041,
            "unit": "ns",
            "extra": "gctime=47984760.5\nmemory=244395904\nallocs=9164735\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sum",
            "value": 9.987987987987989,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":999,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/Array/Sparse-Dense dot",
            "value": 138.1273148148148,
            "unit": "ns",
            "extra": "gctime=0\nmemory=0\nallocs=0\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":864,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sum",
            "value": 18510,
            "unit": "ns",
            "extra": "gctime=0\nmemory=26576\nallocs=900\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse Vector/JLArray/Sparse-Dense dot",
            "value": 27411,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31504\nallocs=1161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSC → COO",
            "value": 2926708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47886880\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSC",
            "value": 9863847,
            "unit": "ns",
            "extra": "gctime=0\nmemory=64174992\nallocs=161\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/CSR → COO",
            "value": 2820343.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=47886880\nallocs=50\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/Array/COO → CSR",
            "value": 46774065,
            "unit": "ns",
            "extra": "gctime=0\nmemory=72156256\nallocs=169\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSC → COO",
            "value": 208416906.5,
            "unit": "ns",
            "extra": "gctime=74018319.5\nmemory=449787088\nallocs=15066216\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSC",
            "value": 1094521573,
            "unit": "ns",
            "extra": "gctime=377255956\nmemory=2217903992\nallocs=78122731\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/CSR → COO",
            "value": 209021163,
            "unit": "ns",
            "extra": "gctime=74073087\nmemory=449787088\nallocs=15066216\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Format Conversions/JLArray/COO → CSR",
            "value": 1191727854,
            "unit": "ns",
            "extra": "gctime=376050208\nmemory=2225907328\nallocs=78122734\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSC",
            "value": 116352409,
            "unit": "ns",
            "extra": "gctime=5478235\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/COO",
            "value": 115949976,
            "unit": "ns",
            "extra": "gctime=5488334\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/Array/CSR",
            "value": 113090202,
            "unit": "ns",
            "extra": "gctime=5321843\nmemory=800003632\nallocs=35\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSC",
            "value": 385207131.5,
            "unit": "ns",
            "extra": "gctime=98865018\nmemory=1185983792\nallocs=12071897\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/COO",
            "value": 433190364.5,
            "unit": "ns",
            "extra": "gctime=119519208.5\nmemory=1264462688\nallocs=15014856\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Dense Addition/JLArray/CSR",
            "value": 386519719,
            "unit": "ns",
            "extra": "gctime=100756651\nmemory=1185983792\nallocs=12071897\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSC",
            "value": 612064,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1542768\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/COO",
            "value": 55794,
            "unit": "ns",
            "extra": "gctime=0\nmemory=482288\nallocs=51\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/Array/CSR",
            "value": 618736,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1542768\nallocs=260\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSC",
            "value": 13317802,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31025072\nallocs=1074823\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/COO",
            "value": 2793639,
            "unit": "ns",
            "extra": "gctime=0\nmemory=7170704\nallocs=251987\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Kronecker Product/JLArray/CSR",
            "value": 13269380,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31025072\nallocs=1074823\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSC",
            "value": 280794665.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/COO",
            "value": 248405976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1824\nallocs=33\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/Array/CSR",
            "value": 47754408,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1808\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSC",
            "value": 9404810020,
            "unit": "ns",
            "extra": "gctime=3060501429\nmemory=16382710432\nallocs=611951520\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/COO",
            "value": 17884747719,
            "unit": "ns",
            "extra": "gctime=6432600880\nmemory=35309155232\nallocs=1202902920\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Matrix-Matrix Multiplication/JLArray/CSR",
            "value": 14817168897,
            "unit": "ns",
            "extra": "gctime=5059977174\nmemory=27693803232\nallocs=914927220\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSC",
            "value": 18865756,
            "unit": "ns",
            "extra": "gctime=2308743\nmemory=128271400\nallocs=304\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/COO",
            "value": 93502993,
            "unit": "ns",
            "extra": "gctime=4583083\nmemory=369342512\nallocs=307\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/Array/CSR",
            "value": 18835271.5,
            "unit": "ns",
            "extra": "gctime=2292218\nmemory=128271400\nallocs=304\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSC",
            "value": 1208510583,
            "unit": "ns",
            "extra": "gctime=400741173\nmemory=2375660608\nallocs=84251936\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/COO",
            "value": 4454415598,
            "unit": "ns",
            "extra": "gctime=1496770985\nmemory=8624299960\nallocs=303830277\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Sparse + Sparse Addition/JLArray/CSR",
            "value": 1193069855,
            "unit": "ns",
            "extra": "gctime=420227416\nmemory=2375629888\nallocs=84250784\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSC",
            "value": 441154,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/COO",
            "value": 2267637,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3624\nallocs=32\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/Array/CSR",
            "value": 491268,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1904\nallocs=31\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSC",
            "value": 165449364,
            "unit": "ns",
            "extra": "gctime=55907303\nmemory=321453408\nallocs=12054362\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/COO",
            "value": 218794066,
            "unit": "ns",
            "extra": "gctime=81393264\nmemory=399880832\nallocs=14995177\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "Three-argument dot/JLArray/CSR",
            "value": 165242099,
            "unit": "ns",
            "extra": "gctime=55200562\nmemory=321453408\nallocs=12054362\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}