Separable numerical range
=========================

Definition
----------

Separable numerical range \$W\^{\\mathrm{sep}}(A)\$ of a square matrix
\$A\$ of size \$d = \\prod\_{i=1}\^K d_i\$ is a subset of the complex
plane defined as

\$\$ W\^{\\mathrm{sep}}(A)=\\{z \\in \\mathbb{C}:\\ z= \\Tr{ \\rho A,\\
\\rho \\in \\Omega\_{\\mathrm{sep}} }\\}, \$\$ where
\$\\Omega\_{\\mathrm{sep}}\$ is a convex hull of rank one projectors on
product vectors *i.e.* \$\\rho \\in \\Omega\_{\\mathrm{sep}}\$ *iff*:

-   \$\\rho = \\sum_j p_j \\ket{\\psi_j}\\bra{\\psi_j},\\ \$ \$p_j\\geq
    0 \\text{ and } \\sum_j p_j=1\$,
-   \$\\ket{\\psi_j}=\\bigotimes\_{i=1}\^K\\ket{\\psi\^i_j}\$,
-   for \$i=1,\\ldots,K\$ and all \$j\$ we have
    \$\\ket{\\psi\^i_j}\\in\\mathbb{C}\^{d_i}\$ and
    \$\\braket{\\psi\^i_j}{\\psi\^i_j}=1\$.

### Fact

The separable numerical range of a matrix \$A\$
\$W\^{\\mathrm{sep}}(A)\$ is the convex hull of the product numerical
range \$W\^\\otimes(A)\$ of this matrix \$\$W\^{\\mathrm{sep}}(A) =
\\mathrm{conv}\\left(W\^\\otimes(A)\\right)\$\$

### Example

Consider family of unitary matrices

\$\$ U_d(\\alpha_1, \\alpha_2, \\alpha_3)= \\exp(\\ii \\sum\_{k=1}\^3
\\alpha_k \\sigma_k \\otimes \\sigma_k). \$\$

Numerical range (light gray), separable numerical range (dark gray) and
product numerical range (black dots) obtained by random sampling of
family of matrices \$U_d(\\alpha, 0, 0) \\text{diag}(\\ii, −1, −\\ii, 1)
U_d (\\alpha, 0, 0)\^\\dagger\$ for \$\\alpha = 0, \\pi/8, 3 \\pi /16,
\\pi /4\$ \[( :gawron2010restricted )\].

![](/numerical-range/separable_range.png)
