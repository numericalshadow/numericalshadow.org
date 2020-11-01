``p``-th matricial numerical range
==================================

Definition
----------

The ``p``-th matricial numerical range is the special case of
[``(p,k)``-numerical
range](/numerical-range/generalizations/p-k-numerical-range) for
``k=1``.

Let ``M_n`` will be the set of all matrices of dimension ``n`` and by
``\mathrm{U}\_n`` it will be denoted the set of all unitary matrices of
dimension ``n``. The ``p``-th numerical range (also known as matricial
numerical range [chuan1985unitary](@cite)) of the matrix ``A \in M_n``
is defined as [li1991k](@cite). \begin{equation}

          W(p:A) := \left\{ X^\dagger A X: X \in \mathbb{C}^{n \times p}, X^\dagger X = \mathbf{1}_p\right\}

\end{equation}

We can observe that \$W(n:A) = \left\\{ U^\dagger A U: X \in
\mathrm{U}\_n \right\\}`` and ``W(1:A) = W(A)\$ as [standard numerical
range](/numerical-range). In particular, many generalizations of
standard numerical range ``W(A)`` are actually the ranges of certain
scalar-valued functions on ``W(p:A)`` (see [li1988linear](@cite), [li1989numerical](@cite)) so it is worthwhile to study the properties of
``W(p:A)``.

Convexity of W(p:A)
-------------------

Let `` A \in M_n`` will be any matrix of dimension ``n``, then in
general case the set ``W(p:A)`` is non-convex [thompson1987research](@cite). The following theorems (see [li1991k](@cite)) give us the
conditions to matrix ``A`` and its eigenvalues so as to the set \$W(p:A)
will be convex.

### Theorem

Let ``A \in M_n`` will be Hermitian matrix with eigenvalues
``\lambda_1 \ge \ldots \ge \lambda_n``. The set ``W(p:A)`` is
convex if and only if ``\lambda_1 = \lambda_p`` and
``\lambda\_{n-p+1} = \lambda_n``.

We can see that if ``A \in M_n`` is Hermitian and ``p\>n/2``, when
``W(p:A)`` is convex if and only if ``A`` is a scalar matrix.

We can see other theorems involving convexity of ``W(p:A)`` in [lau2018convexity](@cite).

Properties
----------

Let ``1\<p\<n``.

\- If all ``X \in W(p:A) `` are scalar matrices, then ``A`` is a scalar
matrix. Opposite implication is obvious;

\- All ``X \in W(p:A) `` are Hermitian if and only if ``A`` is
Hermitian;

\- All ``X \in W(p:A) `` are normal if and only if ``A`` is essentially
Hermitian.

The example of application of ``p``-th matricial numerical range we can
see (for example) [kribs2019higher](cite).
