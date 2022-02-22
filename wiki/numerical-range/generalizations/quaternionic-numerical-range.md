---
layout: default
parent: Generalizations of numerical range
nav_order: 2
title: Quaternionic numerical range
permalink: /numerical-range/generalizations/quaternionic-numerical-range/
---
# Quaternionic numerical range

## Definitions

### Quaternions

Let $\mathbb{H}$ be the set of all elements, called quaternions, of the
form $q = q_{0}+q_{1}i+q_{2}j+q_{3}k$, where $i,j,k$ are quaternion
units satisfying:  For a given $q \in \mathbb{H}$, we define the real
part, re$(q):= q\_{0}$and the imaginary part, im $(q)\coloneqq
q\_{1}i+q\_{2}j+q\_{3}k$. The conjugate and the modulus of $q$
respectively given by

Let us denote the class of all $n\times n$ matrices over $\mathbb{C}$
and $\mathbb{H}$ by $M_{n}(\mathbb{C})$ and $M_{n}(\mathbb{H})$
respectively.

Let $A = \[\\;q_{rs}\\;\]_{n\times n}\in M_{n}(\mathbb{H})$. Since
$q_{rs} = a_{rs} + b_{rs}\cdot j$ for some $a\_{rs}, b\_{rs} $,
then$A\_{1}:= \[\\; a\_{rs}\\; \]*{nn},\\; A*{2}:= \[\\; b\_{rs}\\;
\]*{nn} M*{n}()$and$ A=A\_{1}+A\_{2}j$. Define  then the map $M\_{n}()
M\_{2n}()$defined by$ (A) = *{A}, \\; \\; A M*{n}()$ is an injective
real algebra homomorphism. It is clear that $\\|A\\| = \\|\_{A}\\|$,
where$\\|\\|$ denotes operator norm in the respective algebra.

## Numerical range

Let $A \in M_{n}(\mathbb{H})$. Then:

\- The quaternionic numerical range of $A$, denoted by
$W_{\mathbb{H}}(A)$, defined as  where $S\_{^{n}}: = \\{X ^{n}:
\\|X\\|=1\\}$.

\- The quaternionic numerical radius of $A$, denoted by
${\mathop{w}}_{\mathbb{H}}(A)$, defined as

\- For each slice $\mathbb{C}_{m}$ of $ \\; (m  )$, we call$W\_{}(A)
*{m}^{+}$as a$*{m}$- section of $W_{\mathbb{H}}(A)$. In particular, we
denote the complex section of $W_{\mathbb{H}}(A)$ by
$W_{\mathbb{H}}^{+}(A)$ i.e.,  where $^{+}= \\{+ i :\\; ,\\;  0\\}$.

### Projection of $W_{\mathbb{H}}(A)$

Let $A \in M_{n}(\mathbb{H})$. Then the projection of
$W_{\mathbb{H}}(A)$ onto the complex plane is denoted by
$W_{\mathbb{H}}(A :\mathbb{C})$ and it is defined by  where $co(q) =
q\_{0}+q\_{1}i$, for$q = q\_{0}+q\_{1}i+q\_{2}j+q\_{3}k  $.

### Theorem

Let $A\in M_{n}(\mathbb{H})$. Then $W_{\mathbb{H}}(A:\mathbb{C}) =
W_{\mathbb{C}}(\chi_{A})$. Moreover, if $W_{\mathbb{C}}(\chi_{A})$ is
convex by Toeplitz-Housdroff theorem, then
$W_{\mathbb{H}}(A:\mathbb{C})$ is convex. In particular, for a
self-adjoint matrix $A  M\_{n}()$,  is a convex subset of $\mathbb{R}$.

## Properties

Let $A \in M_{n}(\mathbb{H})$. The following properties hold true:

\- $W_{\mathbb{H}}(A)$ is compact in $\mathbb{H}$

\- $W\_{}(I + A) = +  W\_{}(A)$, for every$, $.

\- If $B\in M_{n}(\mathbb{H})$, then $W\_{}(A+B) W\_{}(A)+W\_{}(B)$.

\- $W_{\mathbb{H}}(U^{\ast}AU) = W_{\mathbb{H}}(A)$, for every unitary
$U \in M_{n}(\mathbb{H})$.

\- $W_{\mathbb{H}}(A^{\ast}) = W_{\mathbb{H}}(A)$.

## Convexity of numerical range

In general quaternionic numerical range of matrices over the ring of
quaternions is not necessarily convex. For example,  has $k, -k \in
W_{\mathbb{H}}(A)$, but $0 =  -  W\_{}(A)$. To see this, assume that
there is a $X: =

<sup>{T} S\_{</sup>{3}}$ such that  i.e., $|y|<sup>{2}+|z|</sup>{2} =
-kx $. This is contradiction since $\overline{\overline{x}kx} = -
\overline{x}kx$ and $\|y\|^{2}+\|z\|^{2}$ is real. It shows that
$W_{\mathbb{H}}(A)$ is not convex.

Now we provide some additional equivalent conditions for the convexity
of quaternionic numerical range.

### Theorem

Let $A \in M_{n}(\mathbb{H})$. Then the following are equivalent
{% cite kumar2019note %}:

\- $W_{\mathbb{H}}(A)$ is convex.

\- $W\_{}(A:) = W\_{}(A) $.

\- For every $X \in S_{\mathbb{H}^{n}}$, there exists a $Y S\_{^{n}}$
such that

### Theorem

Let $A=D+N \in M_n(\mathbb{H})$, with $D$ a diagonal matrix with real
entries, $N$ nilpotent and cycle-free matrix. Then, $W_{\mathbb{H}}(A)$
is convex. {% cite carvalho2019convexity %}

More theorems regarding the convexity of quaternionic numerical range we
can see in {% cite carvalho2019star %}.

# References

{% bibliography --cited %}
