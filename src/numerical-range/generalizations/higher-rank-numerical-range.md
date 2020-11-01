Higher rank numerical range
===========================

Definition
----------

The rank-``k`` numerical ranges, denoted below by ``\Lambda_k``, were
introduced by Choi, Kribs, and Życzkowski as a tool to handle
compression problems in quantum information theory (See for details
[Application of higher rank numerical
range](/numerical-range/generalizations/application-of-higher-rank-and-p-k-numerical-range)).
Since then their theory and applications have been advanced with
remarkable enthusiasm. Among the many more recent papers concerning the
``\Lambda_k(M)``, let us mention [choi2007higher](@cite), [woerdeman2008higher](@cite), [li2009condition](@cite), [gau2010higher](@cite), [chien2020diameter](cite) and [holbrook2015bounds](@cite).

Given a matrix ``M`` of dimension ``d`` and ``k\geq1``, Choi, Kribs,
and Życzkowski (see [choi2006higher](@cite), [choi2008geometry](@cite))
defined the rank-``k`` numerical range of ``M`` as \\\[
\Lambda_k(M)=\\{\lambda\in\mathbb{C}:\exists P\in P_k\mbox{ such
that }PMP=\lambda P\\}, \\\] where ``P_k`` denotes the set of
rank-``k`` orthogonal projections in ``M_d``. This definition is natural
extention to [classical numerical range](/numerical-range). It is easy
to see that if we considek ``k=1``, then `` \Lambda_1(A) = W(A)`` for
any matrix ``A \in M_d``.

### Alternative definitions

Let ``M \in M_d``. Then higher rank-``k`` numerical range of ``M`` we
can alternatively define as \begin{equation} \Lambda_k(M) = \left\\{
\alpha \in \mathbb{C}: U^\dagger M U =
\left\[\begin{array}{cc}\alpha \1_k&*\
* &*\end{array}\right\] \text{for some unitary } U \right\\}.
\end{equation}

Equivalently [li2008canonical](@cite),

\begin{equation} \Lambda_k(M) = \left\\{\alpha \in \mathbb{C}:
e^{i \xi}\alpha + e^{-i\xi} \bar{\alpha} \le \lambda_k \left(
e^{i \xi}M + e^{-i\xi} M^\dagger \right) \text{for all } \xi
\in \[0,2\pi) \right\\} \end{equation} where ``\lambda_k(X)`` is
``k``-th eigenvalue of given matrix ``X``.

Properties
----------

If ``M`` is a normal matrix with eigenvalues ``m_1, \ldots, m_n``, then
\begin{equation} \Lambda_k(M) = \bigcap_{1 \le j_1 \< \ldots \<
j_{n-k+1} \le n } \mathrm{conv} \left\\{ m_{j_1}, \ldots ,
m_{j_{n-k+1}}\right\\}. \end{equation} It is not hard to verify that
``\Lambda_K(M)`` can also be described as the set of complex
``\lambda`` such that there is some ``k``-dimensional subspace ``S`` of
``\mathbb{C}^d`` such that ``(Mu,u)=\lambda`` for **all** unit
vectors in ``S``. In particular, we see that \\\[
W(M)=\Lambda_1(M)\supseteq\Lambda_2(M)\supseteq\Lambda_3(M)\supseteq\dots\quad.
\\\]

Note that, this numerical range is different from the [``k``-numerical
range](/numerical-range/generalizations/k-numerical-range) as for a
Hermitian matrix ``A``, we get \\\[ \Lambda_k(A) = \[\lambda_k,
\lambda_{N-k+1}\], \\\] where ``\lambda_k`` are the eigenvalues of
``A`` in an increasing order. On the other hand, the [``k``-numerical
range](/numerical-range/generalizations/k-numerical-range) is given by
\\\[ W_k = \left\[\frac{1}{k}\sum_{i=1}^k\lambda_i,
\frac{1}{k}\sum_{i=0}^{k-1} \lambda_{d-i} \right\]. \\\] Hence,
we get \\\[ \Lambda_k(A) \subset W_k(A). \\\]

Special cases
-------------

1\. For matrices of a block diagonal form: \\\[ J_n(\alpha)\oplus
\beta \1_m, \\\] where ``J_n(\alpha)`` is a Jordan matrix with
eigenvalue ``\alpha``, the full characterization of rank-``k``
numerical range was studied in [argerami2019higher](@cite).

2\. For some Toeplitz metrices the higher rank numerical range has an
elliptical shape. This case is studied in [adam2018elliptical](@cite).

#### Comparison between ``k``-numerical range and higher-rank numerical range

A comparison between the [``k``-numerical
range](/numerical-range/generalizations/k-numerical-range) and
higher-rank numerical range in the case ``k=2``. Note that \$\Lambda_2
\subset W_2``. The matrix used in this example is ``A =
\mathrm{diag}(1, 2, 4, 8)\$.
![](/numerical-range/examples/k-range.png){.align-center width="500"}

Examples
--------

Undermentioned examples are made by Raymond Nung-Sing Sze.

#### Unitary matrices

1\. Consider a diagonal unitary matrix \$U_5 =
\mathrm{diag}(\left\\{\ee^{2\pi \ii k/5}\right\\}_{k=1}^5)\$.
The blue line represents the numerical range \$\Lambda_1(U_5) =
W(U_5)`` and the grey figure the real numerical shadow of ``U_5\$. The
red polygon inside is ``\Lambda_2(U_5)``.
![](/numerical-range/generalizations/real_s3d5.png){.align-center
width="500"}

2\. Consider a diagonal unitary matrix \$U_7 =
\mathrm{diag}(\left\\{\ee^{2\pi \ii k/7}\right\\}_{k=1}^7)\$.
The blue line represents the numerical range \$\Lambda_1(U_7) =
W(U_7)`` and the grey figure the real numerical shadow of ``U_7\$. The
red polygon inside is higher ``2``-rank numerical range
``\Lambda_2(U_7)`` and the green polygon is higher ``3``-rank numerical
range ``\Lambda_3(U_7)``.
![](/numerical-range/generalizations/real_s3d7.png){.align-center
width="500"}

3\. Consider a diagonal unitary matrix \$A=
\mathrm{diag}(\left\\{\ee^{2\pi \ii k/9}\right\\}_{k=1}^9)\$.
The first picture represents ``\Lambda_1(A) = W(A) `` classical
numerical range of ``A`` whereas the second picture represents higher
``2``-rank numerical range ``\Lambda_2(A)``.
![](/numerical-range/generalizations/normal003.png){.align-center}
![](/numerical-range/generalizations/normal004.png){.align-center}

#### Non-normal matrices

Let ````A=\begin{pmatrix} \ii & 0 & 0 & 0 & 0\
0 & -\ii & 0 & 0 & 0\
0 & 0 & -1 & 0 & 0\
0 & 0 & 0 & -2 & 1\
0 & 0 & 0 & 0 & 0 \end{pmatrix}```` will be non-normal matrix. Its
numerical range is given by the first picture and higher ``2``-rank
numerical range is presented on the second picture.
![](/numerical-range/generalizations/example105.png){.align-center}
![](/numerical-range/generalizations/example106.png){.align-center}
