# Normalized numerical range

## Definition

The classical numerical range `F(A)` of `A\in M_n(\mathbb{C})` is by
definition the set of values of the corresponding quadratic form `x^*Ax`
on the unit sphere $S^n := \\{x  ^n : \\|x \\|=1 \\}`of`^n$.
Equivalently, \\\[ F(A) =\\{(x^\*Ax)/||x||<sup>2 x</sup>n\\{0\\}\\}.
\\\] Various modifications and generalization of the numerical range
have been considered in the literature. Our paper is concerned with the
so called normalized numerical range. Defined as \\\[ F\_N(A) := \\{ x 
^n, Ax 0 \\},\\\] it was introduced in [auzinger2003sectorial](@cite),
and then further investigated in for example
[gevorgyan2009normalized](@cite).

## Properties

Suppose that `A \in M_n(\mathbb{C})`. Then:

  - For all `z \in F_N(A)`, `\|z\| \le 1`.

\*If `z \in F_N(A)`, then `\|z\| = 1` if and only if $z = /||`for
some`(A)$.

  - `F_N(A)` is unitarily invariant: `F_N(U^*AU)=F_N(A)` for any unitary
    `U\in M_n(\mathbb{C})`.

  - `F_N(e^{i\theta}A) = e^{i\theta} F_N(A)` for all $ \[0,2)$.

  - `F_N(cA) = F_N(A)` for all `c \> 0`.

  - If `A` is invertible, then `F_N(A)` is closed.

The following theorems and examples are taken from
[lins2018normalized](@cite).

## Theorem 1

Suppose that `A \in M_2(\mathbb{C})` has non-zero eigenvalues
`\lambda_1, \lambda_2` such that `\lambda_1/\lambda_2 \< 0`. Then
`F_N(A)` is a closed elliptical disk. In the case when $A \> 0$, the
ellipse is given by the equation 

## Theorem 2

For `A \in M_2 (\mathbb{C}) \backslash \\{0\\}` with eigenvalues
`\lambda_1` and `\lambda_2`, the boundary of `F_N(A)` is an ellipse if
and only if `\|\lambda_1\| = \|\lambda_2\|` or `\lambda_1/\lambda_2
\< 0`.

### Examples

1\. The normalized numerical range of $A =

$.

![](/numerical-range/generalizations/example1.png)

2\. The normalized numerical range of $B =

$.

![](/numerical-range/generalizations/example2.png)

3\. The normalized numerical range of $C =

$.

![](/numerical-range/generalizations/example3.png)

For matrix `A` is a typical example of convex normalized numerical range
that is not an ellipse. The normalized numerical range of matrix `B` is
not convex, but has a smooth boundary (boundary is differentiable).
Finally, the last example for matrix `C` has a boundary that is not
smooth at one point. All three of these examples have boundaries that
satisfy irreducible 8th degree polynomial equations.
