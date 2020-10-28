Normalized numerical range
==========================

Definition
----------

The classical numerical range \$F(A)\$ of \$A\\in M_n(\\mathbb{C})\$ is
by definition the set of values of the corresponding quadratic form
\$x\^\*Ax\$ on the unit sphere \$S\\mathbb{C}\^n := \\{x \\in
\\mathbb{C}\^n : \\\|x \\\|=1 \\}\$ of \$\\mathbb{C}\^n\$. Equivalently,
\\\[ F(A) =\\left\\{{(x\^\*Ax)}/{\|\|x\|\|\^2}\\colon
x\\in\\mathbb{C}\^n\\setminus\\{0\\}\\right\\}. \\\] Various
modifications and generalization of the numerical range have been
considered in the literature. Our paper is concerned with the so called
normalized numerical range. Defined as \\\[ F_N(A) :=
\\left\\{\\frac{x\^\*Ax}{\\\|x\\\|\\\|Ax\\\|} \\colon x \\in
\\mathbb{C}\^n, Ax \\ne 0 \\right\\},\\\] it was introduced in [auzinger2003sectorial](@cite), and then further investigated in for example
[gevorgyan2009normalized](@cite).

Properties
----------

Suppose that \$A \\in M_n(\\mathbb{C})\$. Then:

\* For all \$z \\in F_N(A)\$, \$\|z\| \\le 1\$.

\*If \$z \\in F_N(A)\$, then \$\|z\| = 1\$ if and only if \$z =
\\lambda/\|\\lambda\|\$ for some \$\\lambda \\in \\sigma(A)\$.

\* \$F_N(A)\$ is unitarily invariant: \$F_N(U\^\*AU)=F_N(A)\$ for any
unitary \$U\\in M_n(\\mathbb{C})\$.

\* \$F_N(e\^{i\\theta}A) = e\^{i\\theta} F_N(A)\$ for all \$\\theta \\in
\[0,2\\pi)\$.

\* \$F_N(cA) = F_N(A)\$ for all \$c \> 0\$.

\* If \$A\$ is invertible, then \$F_N(A)\$ is closed.

The following theorems and examples are taken from [lins2018normalized](@cite).

Theorem 1
---------

Suppose that \$A \\in M_2(\\mathbb{C})\$ has non-zero eigenvalues
\$\\lambda_1, \\lambda_2\$ such that \$\\lambda_1/\\lambda_2 \< 0\$.
Then \$F_N(A)\$ is a closed elliptical disk. In the case when \$\\det A
\> 0\$, the ellipse is given by the equation \\begin{equation}
\\label{eq:imagTrE1} \\left(\\frac{\\tr (A\^\*A) +2 \\det
A}{\\tr(A\^\*A)-2 \\det A - \|\\tr A\|\^2}\\right) x\^2 + y\^2 = 1.
\\end{equation}

Theorem 2
---------

For \$A \\in M_2 (\\mathbb{C}) \\backslash \\{0\\}\$ with eigenvalues
\$\\lambda_1\$ and \$\\lambda_2\$, the boundary of \$F_N(A)\$ is an
ellipse if and only if \$\|\\lambda_1\| = \|\\lambda_2\|\$ or
\$\\lambda_1/\\lambda_2 \< 0\$.

### Examples

1\. The normalized numerical range of \$A = \\begin{pmatrix} 4+3i & 3\
0 & 9/(4+3i) \\end{pmatrix} \$.

![](/numerical-range/generalizations/example1.png){.align-center}

2\. The normalized numerical range of \$B = \\begin{pmatrix} 2+2i & 1\
0 & 1/(2+2i) \\end{pmatrix} \$.

![](/numerical-range/generalizations/example2.png){.align-center}

3\. The normalized numerical range of \$C = \\begin{pmatrix} 4+i & 1\
0 & 1/(4+i) \\end{pmatrix} \$.

![](/numerical-range/generalizations/example3.png){.align-center}

For matrix \$A\$ is a typical example of convex normalized numerical
range that is not an ellipse. The normalized numerical range of matrix
\$B\$ is not convex, but has a smooth boundary (boundary is
differentiable). Finally, the last example for matrix \$C\$ has a
boundary that is not smooth at one point. All three of these examples
have boundaries that satisfy irreducible 8th degree polynomial
equations.
