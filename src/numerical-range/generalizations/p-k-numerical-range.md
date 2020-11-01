(p,k)-numerical range
=====================

Definition
----------

The ``(p,k)`` numerical range is useful term (similarly to [higher rank
numerical
range](/numerical-range/generalizations/higher-rank-numerical-range)) to
consideration some problems in quantum information theory (See for
details [Application of ``(p,k)`` numerical
range](/numerical-range/generalizations/application-of-higher-rank-and-p-k-numerical-range)).
The other useful application the ``(p,k)`` numerical range we can see in
[cao2020higher](@cite). In order to introduce the definition of
``(p,k)`` numerical range, let ``M_n`` will be the set of all matrices
of dimension ``n`` and by
``\mathrm{U}\left(\mathbb{C}^{k},\mathbb{C}^{l}\right)`` it will
be denoted the set of all isometries of dimension ``k \times l``. The
``(p,k)`` numerical range of the matrix ``A \in M_n`` is defined as [choi2009multiplicative](@cite) \begin{equation}

          \Lambda_{p,k}(A) := \left\{ B \in M_p: \,  
      U^\dagger A U = B \otimes \mathbf{1}_k \text{ for some } U \in 
      \mathrm{U}\left(\mathbb{C}^{pk},\mathbb{C}^{n} \right) \right\}

\end{equation}

Properties
----------

We have the following properties of ``\Lambda_{p,k}(A)`` for \$A \in
M_n\$:

* \$\Lambda_{p,k}(\alpha A + \beta \mathbf{1}_n) = \alpha
\Lambda_{p,k}(A) + \beta \mathbf{1}_p`` for ``\alpha, \beta \in
\mathbb{C}\$.

* ``\Lambda_{p,k}(U^\dagger A U) \subset \Lambda_{p,k}(A)`` for
any isometry \$U \in \mathrm{U}\left( \mathbb{C}^m, \mathbb{C}^n
\right)\$.

* ``\Lambda_{p,k}(U^\dagger A U) = \Lambda_{p,k}(A)`` for any
unitary matrix ``U \in \mathrm{U}\left( \mathbb{C}^n \right)``.

* `` B \in \Lambda_{p,k}(A)`` if and only if \$U^\dagger B U \in
\Lambda_{p,k}(A)`` for any ``U \in \mathrm{U}\left( \mathbb{C}^p
\right)\$.

* If `` B \in \Lambda_{p,k}(A)``, then \$\Lambda_{n-pk+1}(A)
\subset \Lambda_1(B) \subset \Lambda_k(A)\$.

We can observe that the ``(p,k)`` numerical range of some matrux ``A``
is the generalization of higher rank numerical range and ``p``-th
matricial range. To be precise, ``(1,k)`` numerical range is [higher
rank-k numerical
range](/numerical-range/generalizations/higher-rank-numerical-range)
``\Lambda_k(A)`` and ``(p,1)`` numerical range is [``p``-th matricial
numerical range](/numerical-range/generalizations/p-th-matricial-range)
``W(p:A)``. In the case when ``p=k=1`` we obtain the [standard numerical
range](/numerical-range).

In general case the study of ``(p,k)`` numerical range properties is
hard task for any matrices. One of the recent work shows the conditions
when ``\Lambda_{p,k}`` is non-empty set. Hence the following theorem
tells us some properties of ``(p,k)``- numerical range for Hermitian
matrices.

Theorem
-------

The ``(p,k)`` numerical range of given matrix ``A \in M_n`` is
non-empty set when:

* ``n \geq 2(p+1)k-3``.

* There exists ``U \in \mathrm{U}\left(\mathbb{C}^n\right)`` such
that ``U^\dagger A U=A_1 \oplus \ldots \oplus A_p``, where
``\Lambda_k(A_j) \not= \emptyset`` for all ``j=1,\ldots,p``.

* There exists ``U \in \mathrm{U}\left(\mathbb{C}^n\right)`` such
that ``U^\dagger A U=A_1 \oplus \ldots \oplus A_p``, where \$\dim
A_j \geq 3k-2`` for all ``j=1,\ldots,p\$.

* Matrix ``A`` is normal and ``n \geq (3k-2)p``.

Theorem for Hermitian matrices
------------------------------

Let ``A`` will be Hermitian matrix of dimenasion ``n`` and let \$pk
\leq n``. The set ``\Lambda_{p,k}(A) \not= \emptyset\$ if and only
if ```` \lambda_{jk}(A) \geq \lambda_{n-(p-j+1)k+1}(A) \quad
\text{for } j=1,\ldots,p.````

Furthermore, for a given matrix ``B \in M_n`` we can obtain \$B \in
\Lambda_{p,k}(A)`` if and only if: ``\$\lambda_{n-(p-j+1)k+1}(A)
\leq \lambda_j(B) \leq \lambda_{jk}(A) \quad \text{for }
j=1,\ldots, p,```` where ``\lambda_{k}(X)`` is ``k``-th eigenvalue of
``X``.

### Convexity of ``(p,k)`` numerical range for Hermitian matrices

In the case when ``n \geq (p+1)k`` the convexity of the set
``\Lambda_{p,k}(A)`` is equivalent to
````\lambda_k(A)=\lambda_{pk}(A) \\, \text{ and } \\,
\lambda_{n-pk+1}(A)=\lambda_{n-k+1}(A).````

Proofs of above theorem we can find in [li2012generalized](@cite).

Related open problems
---------------------

1\. Determine all possible ``k \times k`` principal submatrices of
``U^\dagger A U`` for \$U \in \mathrm{U}\left( \mathbb{C}^n
\right)\$.

2\. Determine the optimal ``n`` so that ``\Lambda_{p,k}(A)`` is
non-empty for any ``A \in M_n``.

3\. Find an example of normal matrix ``A \in M_n`` that
``\Lambda_{p,k}(A)`` is convex.
