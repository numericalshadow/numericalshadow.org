---
layout: default
parent: Generalizations of numerical range
nav_order: 3
title: $C$ numerical range
permalink: /numerical-range/generalizations/c-numerical-range/
---
# $C$-numerical range

## Definition

Let $A$ be an $d \times d$ matrix and $(c_1, c_2, \ldots, c_d)$ be a
real d-tuple. The $c$-numerical range of $A$ is the set
\begin{equation}
W_c(A) =
\\{ \sum_{j=1}^d c_j \bra{x_j} A \ket{x_j}: \\{\ket{x_i}\\}_{i=1}^d
\mathrm{\\;forms\\; an\\; orthonormal\\; basis\\; of\\;} \mathbb{C}^d
\\}.
\end{equation}

 Let $C=\mathrm{\\;diag}(c_1, c_2, \ldots, c_d)$.
Then $\mu \in W_c(A) \iff \mu = \tr(CU^\dagger AU)$ for some unitary
matrix $U$. This fact motivates to define $C$-numerical range by
\begin{equation}
W_C(A)
= \\{ \tr(CU^\dagger AU): \mathrm{ \\;U \\; unitary\\; }\\}
\end{equation}
for any square matrix $C$. For convenience one may define the unitary
similarity orbit of matrix $A$ given by the formula
\begin{equation}
\mathcal{U}(A) =
\\{U^\dagger AU :\mathrm{\\;U \\; unitary\\; }\\}.
\end{equation}

## Properties

Properties of $W_C(A)$ of a matrix $A$ of dimension $d \times d$:

1.  $W_C(A)$ is a compact set;
2.  Symmetry: $W_C(A) = W_A(C)$;
3.  For any matrices $A, B$ of dimension $d \times d$, $W\_C(A+B) \subseteq
    W\_C(A) + W\_C(B)$;
4.  For any $\mu, \eta \in \mathbb{C}$, then $W\_C(\mu A + \eta \\1) = \mu W\_C(A) +
    \eta \tr(C)$;
5.  $W_C(U^\dagger AU) = W_C(A)$ for any unitary matrix $U$;
6.  $W_{V^\dagger CV}(A) = W_C(A)$ for any unitary matrix $V$;
7.  $W_C(A) = W_C(A^\top) \iff C^\top \in \mathcal{U}(C)$
8.  $ \overline{W_C(A) }= W\_C(\overline{A}) \iff \overline{C} \in \mathcal{U}(C)$
9.  $  \overline{W_C(A) }= W\_C(A^\dagger) \iff C^\dagger \in \mathcal{U}(C)$
10. If $c=\[1,0,\ldots,0\]$, then $W_c(A)$ reduces to the classical
    numerical range of $A$ and if $C=\mathrm{\\;diag}(1,0,\ldots,0)$,
    then $W_C(A)$ reduces to the classical numerical range of $A$.

## Convexity

Convexity of $W_c(A)$ and $W_C(A)$ of a matrix $A$ of dimension $d
\times d$:


 - $W_c(A)$ is a convex set (Westwick theorem):  {%  cite westwick1975theorem %}
 - $W_C(A)$ is a convex set if one of the following holds:   {%  cite li1994c %}
   * there exist $\mu$, $\eta \in \mathbb{C}$ with $\mu \neq 0$ such that $\mu C+ \eta \1$ is hermitian;
   * there exist $\mu \in \mathbb{C}$ such that $C - \mu \1$ is unitarity
     similar to $(C\_{ij})\_{1 \le i,j \le d}$ in block form, where $C_{ii}$ are
     square matrices and $C_{ij} = 0$ if $ i \neq j+1$;
   * there exist $\mu \in \mathbb{C}$ such that $C - \mu \1$ has rank one.

## Generalization

We can generalize the $C$-numerical range $W_C(A)$ to Schatten-class
operators i.e. to $C\in\mathcal B^p(\mathcal H)$ and $A\in\mathcal
B^q(\mathcal H)$ with condition $1/p + 1/q = 1$, and show that its
closure is always star-shaped with respect to the origin
{% cite zhang2019c %}.

Let $\mathcal{X}, \mathcal{Y}$ denote an arbitrary infinite-dimensional
separable complex Hilbert space. Moreover, $\mathcal B(\mathcal
X,\mathcal Y)$, $K( \mathcal{X},\mathcal{Y})$ and $B^p(\mathcal{X},\mathcal{Y})$ denote the set of all bounded,
compact and $p$-th Schatten-class operators between $\mathcal X$ and
$\mathcal Y$, respectively. By $\mathcal B^p( \mathcal{X}, \mathcal{Y})$
we denote all $p$-Schatten-class operators defined by
\begin{equation}
\mathcal{B}^p(\mathcal{X}, \mathcal{Y}) \coloneqq \\{  C \in \mathcal{K}(\mathcal{X}, \mathcal{Y}) | \sum_{n=1}^\infty s_n(C) ^p < \infty \\}
\end{equation}

for $p \[1,\infty )$ whereas the Schatten-$p$-norm of matrix $A$
$$
\| A \|_p \coloneqq \left( \sum_{n=1}^\infty s_n(A)^p \right)^{1/p},
$$
where sequence
$(s_n)_{n=1}^{\infty}$ comes from above well-know Schmidt decomposition
theorem.

### Schmidt decomposition

For each $C \in \mathcal K(\mathcal X,\mathcal Y)$, there exists a
decreasing null sequence $(s_n(C))_{n\in\mathbb N}$ in $\[0,\infty)$ as
well as orthonormal systems $(f_n)_{n \in \mathbb{N}}$ in $ \mathcal{X}$ and $(g_n)_{n\in \mathbb{N}} $ in $ \mathcal{Y}$
such that  where the series converges in the operator norm.

Moreover, the sequence $(s_n(C))_{n\in\mathbb N}$ is uniquely determined
by $C$.

### Definition

Let $p,q\in [1,\infty]$ be conjugate. Then for $C\in\mathcal B^p(\mathcal H)$
and $A\in\mathcal B^q(\mathcal H)$, we define the $C$-numerical range of
$T$ to be

$$
W_C (A)\coloneqq \lbrace \operatorname{tr}(CU^\dagger
AU)\,|\,U\in\mathcal B(\mathcal H)\text{ unitary}\rbrace\,.
$$

The properties of $C$-numerical range in infinite-dimensional vector
space for Schatten-class operator we can find in {% cite dirr2018c %}.

# References

{% bibliography --cited %}
