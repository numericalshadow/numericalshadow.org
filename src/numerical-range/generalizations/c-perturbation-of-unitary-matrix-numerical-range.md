Perturbation of unitary matrix numerical range
==============================================

In our setup we consider the space \$\\mathrm{L}(\\mathbb{C}^d)\$.
Imagine that the matrices are points in space
\$\\mathrm{L}(\\mathbb{C}^d)\$ and the distance between them is bounded
by small constant \$0 \< c \\ll 1\$. We will take two unitary matrices -
matrix \$U \\in \\mathrm{U}(\\mathbb{C}^d)\$ and its perturbation \$V
\\in \\mathrm{U}(\\mathbb{C}^d)\$ i.e. \$\|\|U-V\|\|\_\\infty \\le c\$
by using \$\\infty\$-Schatten norm. We want to determine the path
connecting these points given by smooth curve. To do so, we fix
continuous parametric (by parameter \$t\$) curve \$U(t) \\in
\\mathrm{U}(\\mathbb{C}^d)\$ for any \$t \\in \[0,1\]\$ with boundary
conditions \$U(0) := U\$ and \$U(1) := V \$. The most natural and also
the shortest curve connecting \$U\$ and \$V\$ is geodesic
[antezana2014optimal](@cite) given by\\begin{equation} t \\rightarrow U
\\exp\\left(t \\mathrm{Log} \\left(U^\\dagger V\\right)\\right),
\\end{equation} where \$\\mathrm{Log}\$ is the matrix function such that
it changes eigenvalues \$\\lambda \\in \\lambda(U)\$ into
\$\\log(\\lambda(U))\$, where \$-i\\log(\\lambda(U)) \\subset (-\\pi,
\\pi\]\$. We will study how the numerical range \$W(U(t))\$ will be
changed depending on parameter \$t\$. Let \$H := -i \\mathrm{Log}
\\left( U^\\dagger V \\right)\$. Let us see that \$H \\in
\\mathrm{Herm}(\\mathbb{C}^d)\$ and \$W(H) \\subset (-\\pi, \\pi\]\$
for any \$U,V \\in \\mathrm{U}(\\mathbb{C}^d)\$. We can also observe
that \\begin{equation} \\begin{split}

      W\left(U\exp\left(itH\right)\right) &= W\left( U \exp \left( it VDV^\dagger 
      \right) \right) = W\left( UV \exp \left( it D \right) V^\dagger 
      \right) \\& = W\left( V^\dagger U V \exp \left( it D \right) \right) = W\left( 
      \widetilde{U} \exp \left( it D\right) \right)
      \end{split}
      \end{equation} where $\widetilde{U} := V^\dagger U V \in \mathrm{U}(\mathbb{C}^d)$. 

Hence, without loss of generality we can assume that \$H\$ is a diagonal
matrix. Moreover, we can assume that \$D \\ge 0\$ which follows from
simple calculations \\begin{equation} \\begin{split} W \\left( U \\exp
\\left(it D \\right) \\right) &= W \\left( U \\exp \\left(it D\_{+}
\\right) \\left( \\exp \\left( it \\alpha \\1 \\right) \\right) \\right)
= W \\left( e^{it \\alpha} U \\exp \\left(it D\_{+} \\right) \\right)
\\\\&= W \\left( U \\exp \\left(it D\_{+} \\right) \\right).
\\end{split} \\end{equation} Let us see that the numerical range of
\$U(t)\$ for any \$t \\in \[0,1\]\$ is invariant to above calculations
although the trajectory of \$U(t)\$ is changed. Therefore, we will
consider the curve \\begin{equation} t \\rightarrow U \\exp \\left( it
D\_{+} \\right), \\end{equation} where \$t \\in \[0,1\]\$ and \$U \\in
\\mathrm{U}(\\mathbb{C}^d)\$, \$D\_+ \\in
\\mathrm{Diag}(\\mathbb{C}^d)\$ such that \$D\_+ \\ge 0\$. We will
focus on the behavior of the spectrum of the unitary matrices \$U(t)\$,
which will reveal the behavior of \$W(U(t))\$ for relatively small
parameter \$t\$. Without loss of generality we can assume that \$\\tr
\\left( D\_+ \\right)=1\$. Together with the fact that \$D\_+ \\in
\\mathrm{Diag}(\\mathbb{C}^d)\$ and \$D\_+ \\ge 0\$ we can note that
\$D\_+ = \\sum\_{i=1}^{d} p_i \\ket{i}\\bra{i}\$, where \$p \\in
\\mathbb{C}^d\$ is a probability vector. Let us also define the set
\\begin{equation} S\_\\lambda^M=\\left\\{\\ket{x} \\in \\mathbb{C}^d:
(\\lambda\\1_d-M)\\ket{x}=0, \\\|\\ket{x}\\\|\_2=1\\right\\}
\\end{equation} for some matrix \$M \\in \\mathrm{L}(\\mathbb{C}^d)\$
which consists of unit eigenvectors corresponding to the eigenvalue
\$\\lambda\$ of the matrix \$M\$. We denote by \$k=r(\\lambda)\$ the
multiplicity of eigenvalue \$\\lambda\$ whereas by \$I\_{M,\\lambda}
\\in U(\\mathbb{C}^k,\\mathbb{C}^d)\$ we denote the isometry which
columns are formed by eigenvectors corresponding to eigenvalue
\$\\lambda\$ of a such matrix \$M\$. Let \$\\lambda(t), \\beta(t) \\in
\\mathbb{C}\$ for \$t \\ge 0\$. We will write \$\\lambda(t) \\approx
\\beta(t)\$ for relatively small \$t \\geq 0\$, whenever
\$\\lambda(0)=\\beta(0)\$ and \$\\frac{\\partial}{\\partial
t}\\lambda(0)=\\frac{\\partial}{\\partial t}\\beta(0)\$.

Theorem
-------

Let \$U \\in \\mathrm{U}(\\mathbb{C}^d)\$ be a unitary matrix with
spectral decomposition \\begin{equation} U=\\sum\_{j=1}^d \\lambda_j
\\ket{x_j}\\bra{x_j}. \\end{equation} Assume that the eigenvalue
\$\\lambda \\in \\lambda(U)\$ is such that \$r(\\lambda) = k\$. Let us
define a matrix \$V(t)\$ given by \\begin{equation} V(t) =
\\exp(itD\_+)=\\sum\_{i=1}^{d} e^{i p_i t} \\ket{i}\\bra{i} \\in
\\mathrm{DU}(\\mathbb{C}^d), \\quad t \\geq 0. \\end{equation} Let
\$\\lambda(t):=\\lambda(UV(t)) \$ and let every \$\\lambda_j(t) \\in
\\lambda(t)\$ corresponds to eigenvector \$\\ket{x_j(t)} \$. Assume that
\$\\lambda\_{1}(t), \\ldots, \\lambda\_{k}(t)\$ are such eigenvalues
that \$\\lambda\_{j}(t) \\to \\lambda\$, as \$t \\to 0\$. Then:

1\. If \$\\min\\limits\_{\\ket{x} \\in S\_\\lambda^U}
\\sum\\limits\_{i=1}^d\\ p_i \|\\braket{i}{x}\|^2=0\$, then
\$\\lambda\$ is an eigenvalue of \$UV(t)\$;

2\. If \$\|\\{p_i: p_i\>0\\}\|=l\<k\$, then \$\\lambda\$ is an
eigenvalue of \$UV(t)\$ and \$r(\\lambda) \\ge k-l\$;

3\. Each eigenvalue of product \$UV(t)\$ moves counterclockwise or stays
in the initial position as parameter \$t\$ increases;

4\. If \$k=1\$, then \\begin{equation*}\\lambda\_{1}(t) \\approx
\\lambda \\exp\\left( i t \\sum\\limits\_{i=1}^d\\ p_i
\|\\braket{i}{x_1}\|^2 \\right) \\end{equation*} for small \$t \\geq
0\$;

5\. Let \$Q:=I\_{U,\\lambda}^\\dagger D\_+ I\_{U,\\lambda}\$ and
\$\\lambda_1(Q) \\le \\lambda_2(Q) \\le \\ldots \\le \\lambda_k(Q) \$.
Then we have \\begin{equation*} \\lambda\_{j}(t) \\approx \\lambda
\\exp\\left( i \\lambda\_{j}(Q) t \\right) \\end{equation*} for small
\$t \\geq 0\$ and eigenvector \$\\ket{ x_j}\$ corresponding to
\$\\lambda_j \\in \\lambda(U)\$ is given by \\begin{equation*}
\\ket{x_j}=I\_{U,\\lambda} \\ket{ v_j}, \\end{equation*} where \$\\ket{
v_j} \\in S^{Q}\_{\\lambda_j(Q)}\$;

6\. For each \$j=1,\\ldots,d\$ we have \\begin{equation*}
\\frac{\\partial}{\\partial t}\\lambda_j(t)=i
\\lambda_j(t)\\sum\_{i=1}^d p_i
\|\\braket{i}{x_j(t)}\|^2.\\end{equation*} Moreover,
\\begin{equation*} \\sum\_{j=1}^d \\left\|\\frac{\\partial}{\\partial
t}\\lambda_j(t)\\right\|=1. \\end{equation*}

Proof of this therorem you can see in [kukulski2020](@cite).

Intuitively speaking, this theorem gives us equations which one can use
to predict behaviour of \$W(UV(t))\$. Observe the postulate \$(6)\$
fully determines the movement of the spectrum. However, this is a
theoretical statement and in practice determining the function \$t
\\mapsto \\ket{x_j(t)}\$ is a numerically complex task. The postulates
\$(1)-(5)\$ play a key role in numerical calculations of \$W(UV(t))\$.
The most important fact comes from \$(3)\$ which says that all
eigenvalues move in the same direction or stay in the initial position.
The instantaneous velocity of a given eigenvalue in general case is
given in \$(5)\$, while in the case of eigenvalue with multiplicity
equal one, the instantaneous velocity is determined by \$(4)\$. We see
that whenever the spectrum of the matrix \$U\$ is not degenerated,
calculating these velocities is easy. What is more, when some eigenvalue
is degenerated, the postulate \$(5)\$ not only gives us method to
calculate the trajectory of this eigenvalue, but also determines the
form of corresponding eigenvector. It is worth noting that the
postulates \$(4),(5)\$ give us only an approximation of the velocities,
so despite being useful in numerical calculations, these expressions are
valid only in the neighbourhood of \$t=0\$. Moreover, sometimes we are
able to precisely specify this velocities. This happens in the cases
presented in \$(1),(2)\$. Whenever the calculated velocity is zero we
know for sure that this eigenvalue will stay in the initial position.
According to the postulate \$(2)\$ the same happens when the
multiplicity of the eigenvalue is greater than the number of positive
elements of vector \$p\$.

Illustration of above theorem
-----------------------------

For each eigenvalue \$\\lambda(t)\$ of matrix \$UV(t)\$ we mark its
instantaneous velocity given by formula \$\\sum\\limits\_{i=1}^d\\ p_i
\|\\braket{i}{x(t)}\|^2 \$, where \$\\ket{x(t)}\$ is corresponding
eigenvector. Red colour denotes instantaneous velocity equal to one and
blue colour corresponds to the instantaneous velocity equal to zero.

#### Example 1

Diagonal matrix \$\$U=\\begin{pmatrix} 1 & 0 & 0 & 0\
0 & \\ii & 0 & 0\
0 & 0 & -1 & 0\
0 & 0 & 0 & -\\ii \\end{pmatrix}.\$\$
![](/numerical-range/examples/diagonal_4_2.gif){.align-center} We act on
two subspaces with probability \$p_1 = 1/3\$ and \$p_2 = 2/3\$.
Eigenvalues \$-1\$ and \$-\\ii\$ stay in the initial position, because
they lie on the orthogonal subspace to subspace of which we acting on.

#### Example 2

Random matrix \$U\$ of dimension \$3 \\times 3\$.
![](/numerical-range/examples/casual_3_1.gif){.align-center} Vector of
probability is equal \$p = (1,0,0)\$. All eigenvalues have nonzero
velocity, so degeneration is impossible.

#### Example 3

Matrix \$U\$ of dimension \$5\\times 5\$ having eigenbasis given by the
Fourier matrix.
![](/numerical-range/examples/fourier_5_4.gif){.align-center} Vector of
probability is equal \$p = (3/8,1/4,1/4,1/8,0)\$. Because standard basis
and Fourier basis are mutually unbiased, velocities are similar, which
implies the shape changes slightly in time.

#### Example 4

Matrix \$U\$ with eigenvalues \$(1,e^{\\ii \\pi/6}, \\ii, \\ii, \\ii,
-1, -1)\$. ![](/numerical-range/examples/special_7_2.gif){.align-center}
We act on two subspaces with probability \$p_1 = 1/3\$ and \$p_2 =
2/3\$. In this case the eigenvalue \$\\ii\$ is three fold degenerated,
so it stays in the initial position.

More examples you can find in [kukulski2020](@cite).
