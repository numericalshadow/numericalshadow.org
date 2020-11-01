``k``-numerical range
=====================

Definition
----------

Let ``A`` be an ``d \times d`` matrix and ``P_k`` be a projector of
rank ``k``. The ``k``-numerical range of ``A`` is the set \\\[ W_k(A) =
\left\\{ z \in \mathbb{C}: z=\frac{1}{k}\Tr P_k A \right\\} \\\]

Note that, this numerical range is different from the
[higher-rank-numerical-range](/numerical-range/generalizations/higher-rank-numerical-range)
as for a Hermitian matrix ``A``, we get \\\[ W_k =
\left\[\frac{1}{k}\sum_{i=1}^k\lambda_i,
\frac{1}{k}\sum_{i=0}^{k-1} \lambda_{d-i} \right\]. \\\] where
``\lambda_i`` are the eigenvalues of ``A`` in an increasing order. On
the other hand, the
[higher-rank-numerical-range](/numerical-range/generalizations/higher-rank-numerical-range)
is given by \\\[ \Lambda_k(A) = \[\lambda_k, \lambda_{d-k+1}\], \\\]
Hence, we get \\\[ \Lambda_k(A) \subset W_k(A). \\\] We should note
that in the case when ``k=1`` the ``k``-numerical range becomes the
standard numerical range \\\[ W_1(A) = W(A) = \Lambda_1(A). \\\]

Examples
--------

A comparison between the k-numerical range and [higher-rank numerical
range](/numerical-range/generalizations/higher-rank-numerical-range) in
the case ``k=2``. Note that ``\Lambda_2 \subset W_2``. The matrix used
in this example is ``A = \mathrm{diag}(1, 2, 4, 8)``.
![](/numerical-range/examples/k-range.png){.align-center width="500"}
