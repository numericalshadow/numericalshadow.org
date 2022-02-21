---
layout: default
parent: Generalizations of numerical range
grand_parent: Numerical range
nav_order: 20
title: $C$-numerical range

---
# `C`-numerical range

## Definition

Let `A` be an `d \times d` matrix and `(c_1, c_2, \ldots, c_d)` be a
real d-tuple. The `c`-numerical range of `A` is the set `W_c(A) =
\left\\{ \sum_{j=1}^d c_j \bra{x_j} A \ket{x_j}: \\{\ket{x_i}\\}_{i=1}^d
\mathrm{\\;forms\\; an\\; orthonormal\\; basis\\; of\\;} \mathbb{C}^d
\right\\}.` Let `C=\mathrm{\\;diag}(c_1, c_2, \ldots, c_d)`.
Then `\mu \in W_c(A) \iff \mu = \tr(CU^\dagger AU)` for some unitary
matrix `U`. This fact motivates to define `C`-numerical range by `W_C(A)
= \left\\{ \tr(CU^\dagger AU): \mathrm{ \\;U \\; unitary\\; }\right\\}`
for any square matrix `C`. For convenience one may define the unitary
similarity orbit of matrix `A` given by the formula `\mathcal{U}(A) =
\left\\{U^\dagger AU :\mathrm{\\;U \\; unitary\\; }\right\\}.`

## Properties

Properties of `W_C(A)` of a matrix `A` of dimension `d \times d`:

1.  `W_C(A)` is a compact set;
2.  Symmetry: `W_C(A) = W_A(C)`;
3.  For any matrices `A, B` of dimension `d \times d`, $W\_C(A+B)
    W\_C(A) + W\_C(B)$;
4.  For any `\mu, \eta \in \mathbb{C}`, then $W\_C(A +  \\1) = W\_C(A) +
    (C)$;
5.  `W_C(U^\dagger AU) = W_C(A)` for any unitary matrix `U`;
6.  `W_{V^\dagger CV}(A) = W_C(A)` for any unitary matrix `V`;
7.  `W_C(A) = W_C(A^\top) \iff C^\top \in \mathcal{U}(C)`
8.  $ = W\_C()   (C)$
9.  $ = W\_C(A^) C^ (C)$
10. If `c=\[1,0,\ldots,0\]`, then `W_c(A)` reduces to the classical
    numerical range of `A` and if `C=\mathrm{\\;diag}(1,0,\ldots,0)`,
    then `W_C(A)` reduces to the classical numerical range of `A`.

## Convexity

Convexity of `W_c(A)` and `W_C(A)` of a matrix `A` of dimension `d
\times d`:


 - $W_c(A)$ is a convex set (Westwick theorem):  [( :westwick1975theorem )]
 - $W_C(A)$ is a convex set if one of the following holds: [( :li1994c )]
   * there exist $\mu$, $\eta \in \mathbb{C}$ with $\mu \neq 0$ such that $\mu C + \eta \1$ is hermitian;
   * there exist $\mu \in \mathbb{C}$ such that $C - \mu \1$ is unitarity similar to $(C_{ij})_{1 \le i,j \le d}$ in block form, where $C_{ii}$ are square matrices and $C_{ij} = 0$ if $ i \neq j+1$;
   * there exist $\mu \in \mathbb{C}$ such that $C - \mu \1$ has rank one.

## Generalization

We can generalize the `C`-numerical range `W_C(A)` to Schatten-class
operators i.e. to `C\in\mathcal B^p(\mathcal H)` and `A\in\mathcal
B^q(\mathcal H)` with condition `1/p + 1/q = 1`, and show that its
closure is always star-shaped with respect to the origin
[zhang2019c](@cite).

Let `\mathcal{X}, \mathcal{Y}` denote an arbitrary infinite-dimensional
separable complex Hilbert space. Moreover, `\mathcal B(\mathcal
X,\mathcal Y)`, $K( X,Y)`and`B^p(X,Y)$ denote the set of all bounded,
compact and `p`-th Schatten-class operators between `\mathcal X` and
`\mathcal Y`, respectively. By `\mathcal B^p( \mathcal{X}, \mathcal{Y})`
we denote all `p`-Schatten-class operators defined by

for $p \[1,)`whereas the Schatten-`p`-norm of matrix`A$  where sequence
`(s_n)_{n=1}^{\infty}` comes from above well-know Schmidt decomposition
theorem.

#### Schmidt decomposition

For each `C \in \mathcal K(\mathcal X,\mathcal Y)`, there exists a
decreasing null sequence `(s_n(C))_{n\in\mathbb N}` in `\[0,\infty)` as
well as orthonormal systems $(f\_n)*{n N}`in`X`and`(g\_n)*{nN}`in` Y$
such that  where the series converges in the operator norm.

Moreover, the sequence `(s_n(C))_{n\in\mathbb N}` is uniquely determined
by `C`.

#### Definition

Let `p,q\in \[1,\infty\]` be conjugate. Then for $C
B<sup>p(H)`and`AB</sup>q(H)$, we define the  of `T` to be

The properties of `C`-numerical range in infinite-dimensional vector
space for Schatten-class operator we can find in [dirr2018c](@cite).
