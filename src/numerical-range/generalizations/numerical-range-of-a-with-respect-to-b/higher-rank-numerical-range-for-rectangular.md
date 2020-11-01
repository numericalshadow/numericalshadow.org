Higher rank numerical range of rectangular matrices
===================================================

The notion of higher rank numerical ranges of rectangular matrices were
first introduced by Mohsen Zahraei and Gholamreza Aghamollaei in their
work [zahraei2015higher](@cite). They showed that, the proposed
definition is a generalization of well-known [higher numerical range of
square
matrices](/numerical-range/generalizations/higher-rank-numerical-range)
and [numerical range of rectangular
matrices](/numerical-range/generalizations/numerical-range-of-a-with-respect-to-b).

Let ``M,N`` be positive integers, that satisfy ``M \geq N``. For every
``k \in \\{1,\ldots,N\\}`` define the following set: ````\mathcal{X}=
\left\\{ (X,Y): X \mbox{ is } N \times (N-k+1) \mbox{ isometry
matrix }, Y=\left\[ \begin{array}{c\|c} X & 0\
\hline 0 & U \end{array} \right\],U \in \mathcal{U}_{M-N}
\right\\}.````

Definition
----------

Let ``A`` and ``B`` be ``N \times M`` matrices and let \$\\\| \cdot
\\\|`` be any matrix norm. The rank-k numerical range of ``A\$ with
respect to ``B`` is defined as \\\[ \Lambda_{k,\\\| \cdot \\\|}(A; B)
= \left\\{ \mu \in \mathbb{C}: \\\|X^\dagger(A- \lambda B)Y \\\|
\geq \|\mu - \lambda\|, \forall \lambda \in \mathbb{C}, \forall
(X,Y) \in \mathcal{X} \right\\}. \\\] If ``N \geq M``, then we use
redifned set ``\mathcal{X}``, namely ````\mathcal{X}= \left\\{ (X,Y):
Y \mbox{ is } M \times (M-k+1) \mbox{ isometry matrix }, X=\left\[
\begin{array}{c\|c} Y & 0\
\hline 0 & U \end{array} \right\],U \in \mathcal{U}_{N-M}
\right\\}```` in the previous definition. First of all, if ``k=1`` and
the norm ``\\\|\cdot \\\|`` is unitarily invariant, then \\\[
\Lambda_{1,\\\|\cdot \\\|}(A;B)=w_{\\\| \cdot \\\|}(A; B), \\\]
which is the numerical range of rectangular matrices. Moreover, if ``A``
is ``N \times N`` square matrices, then for \$\\\| \cdot \\\|=\\\|
\cdot \\\|_\infty\$ we have \\\[ \Lambda_{k,\\\|\cdot
\\\|}(A;\1_N)=\Lambda_{k}(A), \\\] which is the higher rank numerical
range.

Properties
----------

The most important one is the representation form: \\\[
\Lambda_{k,\\\|\cdot \\\|}(A;B)= \bigcap_{(X,Y) \in \mathcal{X}}
w_{\\\| \cdot \\\|}(X^\dagger A Y; X^\dagger B Y). \\\] This leads
to conclusion, that as requested, ``\Lambda_{k,\\\|\cdot \\\|}(A;B)``
is a compact and convex set in ``\mathbb{C}``.

Assume now ``N \geq M``. The casual numerical range cointains convex
hull of eigenvalues, so it would be delightfull if it was true for
introduced numerical range ``\Lambda_{k,\\\|\cdot \\\|}(A;B)``.
Spectrum of rectangular matrix ``A`` with respect to ``B`` is defined as
\\\[\sigma(A;B)=\\{ \mu \in \mathbb{C}: \dim \ker (A-\mu B) \geq
1\\}. \\\] For more details of this set see [chorianopoulos2009definition](@cite). The proposed generalization of
``\sigma(A;B)`` is ``k-``spectrum of ``A`` with respect to ``B``
defined and denoted by \\\[ \sigma_k(A;B)=\\{\mu \in \mathbb{C}:
\dim \ker (X^\dagger (A - \mu B) Y) \geq k, \forall (X,Y) \in
\mathcal{X} \\},\\\] for ``k \leq \[(M+1)/2\]``. Under this
assumptions, if ``\\\| \cdot \\\|`` is induced matrix norm and for
every unit vector ``z`` and for all ``(X,Y) \in \mathcal{X}`` we have
``\\\| X^\dagger B Y z \\\| \geq 1``, then \\\[ \sigma_k(A;B)
\subset \Lambda_{k,\\\| \cdot \\\|} (A;B).\\\]

Example 1
---------

Diagonal matrix ````A=\begin{pmatrix} 1 & 0 & 0 & 0\
0 & 1+2\ii & 0 & 0\
0 & 0 & 3\ii & 0\
0 & 0 & 0 & 0 \end{pmatrix}```` with respect to matrix ``B =\1_4 ``
with ``\|\|\cdot\|\| = \|\|\cdot\|\|_\infty``. Then,
``\Lambda_{k,\|\|\cdot\|\|}(A;B) = \Lambda_k(A) `` is
``k``\--numerical range of ``A``. In this case, ``k=2``.

![](/numerical-range/generalizations/2k_nr_diagonal.png){.align-center}

Example 2
---------

Matrix ````A=\begin{pmatrix} 6+\ii & 0.4 & 0 & -0.1\
0.1 & 1-3\ii & -0.3\ii & 0\
0 & 0 & 0.5 & 0 \end{pmatrix}```` with respect to matrix
````B=\begin{pmatrix} 1.2 & 0 & 0 & 0\
0 & \ii & 0 & 0\
0 & 0 & -1 & 0 \end{pmatrix}```` with \$\|\|\cdot\|\| =
\|\|\cdot\|\|_\infty`` and ``k=1\$. Then,
``\Lambda_{1,\|\|\cdot\|\|}(A;B) = w_{\\\| \cdot \\\|}(A; B) ``.
![](/numerical-range/generalizations/1k_nr_rectangular.png){.align-center}

Example 3
---------

Two random Ginibre matrices ``A`` and ``B`` of dimension ``5 \times 4``
with ``\|\|\cdot\|\| = \|\|\cdot\|\|_\infty`` and ``k=3``.

![](/numerical-range/generalizations/3k_nr_random.png){.align-center}
