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
form $q = q_{0}+q_{1}i+q_{2}j+q_{3}k$,  where $i,j,k$ are quaternion
units satisfying:
-  $ i \cdot j = - j \cdot i$
-  $ j \cdot k = - k \cdot j$
-  $ k \cdot i = - i \cdot k$
-  $ i \cdot j \cdot k = -1$.


For a given $q \in \mathbb{H}$, we define the real
part, $\Re (q):= q\_{0}$  and the imaginary part, $\Im (q)\coloneqq q\_{1}i+q\_{2}j+q\_{3}k$. The conjugate and the modulus of $q$ respectively given by
\begin{equation}
\overline{q} = q_0 - (q_1 i + q_2 j + q_3 k)
\end{equation}
and
\begin{equation}
|q| = \sqrt{ q_0^2 + q_1^2 + q_2^2 + q_3^2 }.
\end{equation}

Let us denote the class of all $n\times n$ matrices over $\mathbb{C}$
and $\mathbb{H}$ by $M_{n}(\mathbb{C})$ and $M_{n}(\mathbb{H})$
respectively.

Let $ A = \( q_{rs} \)\_{n \times n} \in M_n(\mathbb{H}) $.
Since
$q_{rs} = a_{rs} + b_{rs} \cdot j$  for some  $a_{rs}, b_{rs} \in \mathbb{C}$,
then
$A_1 \coloneqq \( a_{rs} \)\_{n \times n}, A_2 \coloneqq \( b_{rs} \)\_{n \times n} \in M_n({\mathbb{C}}) $ and $A = A_1 + A_2 \cdot j$. Define


\begin{equation}
\chi_A \coloneqq \begin{pmatrix} A_1 & A_2 \newline - \overline{A_2} & \overline{A_1} \end{pmatrix}\_{2x \times 2n} \in M_{2n}(\mathbb{C}),
\end{equation}

 then the map $\xi: M_n(\mathbb{H}) \mapsto M_{2n}(\mathbb{C})$
defined by $\xi(A) = \chi_A$, for all $A \in M_n(\mathbb{H})$ is an injective
real algebra homomorphism.
 It is clear that $ \\\| A \\\| = \\\| \chi_{A} \\\| $,
where $\\\| \cdot \\\|$ denotes operator norm in the respective algebra.

## Numerical range

Let $A \in M_{n}(\mathbb{H})$. Then:

\- The quaternionic numerical range of $A$, denoted by
$W_{\mathbb{H}}(A)$, defined as

$$
W_{\mathbb{H}}(A) \coloneqq \{  \braket{X}{AX}_{\mathbb{H}}: X \in S_{\mathbb{H}^n} \}
$$

 where $S_{\mathbb{H}^{n}}: = \\{X \in \mathbb{H}^{n}:
\\|X\\|=1\\}$.

\- The quaternionic numerical radius of $A$, denoted by
$w_{\mathbb{H}}(A)$, defined as

$$
w_{\mathbb{H}}(A) \coloneqq \sup \{ |q|: q \in W_{\mathbb{H}}(A) \}
$$

\- For each slice $ \mathbb{C_m} $ of  $ \mathbb{H} $ ($m \in \mathbb{S}$)
we call $W_{\mathbb{H}}(A) \cap \mathbb{C_m}^+$ -section of $W_{\mathbb{H}}(A)$.
In particular, we denote the complex section of $W_{\mathbb{H}}(A)$ by
$W_{\mathbb{H}}^{+}(A)$ i.e.,

$$
W_{\mathbb{H}}^{+}(A) \coloneqq W_{\mathbb{H}}(A) \cap \mathbb{C}^+,
$$

 where
 $$
 \mathbb{C}^{+} = \\{ \alpha + i\beta: \alpha \in \mathbb{R}, \beta \ge 0 \\}.
 $$



### Projection

Let $A \in M_{n}(\mathbb{H})$. Then the projection of
$W_{\mathbb{H}}(A)$ onto the complex plane is denoted by
$W_{\mathbb{H}}(A :\mathbb{C})$ and it is defined by
$$
W_{\mathbb{H}}(A :\mathbb{C}) \coloneqq \{  co(q): q \in W_{\mathbb{H}}(A) \},
$$
where $co(q) =
q\_{0}+q\_{1}i$, for$q = q\_{0}+q\_{1}i+q\_{2}j+q\_{3}k  \in \mathbb{H}$.

### Theorem

Let $A\in M_{n}(\mathbb{H})$. Then $W_{\mathbb{H}}(A:\mathbb{C}) =
W_{\mathbb{C}}(\chi_{A})$. Moreover, if $W_{\mathbb{C}}(\chi_{A})$ is
convex by Toeplitz-Housdroff theorem, then
$W_{\mathbb{H}}(A:\mathbb{C})$ is convex. In particular, for a
self-adjoint matrix $A \in   M\_{n}(\mathbb{H})$
$$
W_{\mathbb{H}}(A) = W_{\mathbb{H}}(A:\mathbb{C}) = W_{\mathbb{C}}(\chi_A)
$$
 is a convex subset of $\mathbb{R}$.

## Properties

Let $A \in M_{n}(\mathbb{H})$. The following properties hold true:

\- $W_{\mathbb{H}}(A)$ is compact in $\mathbb{H}$;

\- $W\_{}(\alpha I + \beta A) = \alpha + \beta W\_{\mathbb{H}}(A)$, for every $\alpha, \beta \in \mathbb{R} $.

\- If $B\in M_{n}(\mathbb{H})$, then $W\_{\mathbb{H}}(A+B) \subseteq W\_{\mathbb{H}}(A)+W\_{\mathbb{H}}(B)$.

\- $W_{\mathbb{H}}(U^{\ast}AU) = W_{\mathbb{H}}(A)$, for every unitary
$U \in M_{n}(\mathbb{H})$.

\- $W_{\mathbb{H}}(A^{\ast}) = W_{\mathbb{H}}(A)$.

## Convexity of numerical range

In general quaternionic numerical range of matrices over the ring of
quaternions is not necessarily convex. For example,


\begin{equation}
A \coloneqq \begin{pmatrix} k & 0 & 0 \newline 0 & 1 & 0 \newline 0 & 0 & 1 \end{pmatrix}\_{3 \times 3} \in M_{3}(\mathbb{H}),
\end{equation}



 has $k, -k \in
W_{\mathbb{H}}(A)$, but $0 = \frac{k}{2} - \frac{k}{2}  \not\in W_{\mathbb{H}}(A)$. To see this, assume that
there is a $X \coloneqq \begin{pmatrix} x & y & z  \end{pmatrix}^\top \in S_{\mathbb{H}^3}$
such that

$$
 0 = \braket{X}{AX}_{\mathbb{H}} = \overline{x} k x + |y|^2 +  | z|^2
$$

 i.e. $ \|y\|^2 + \|z\|^2 = -\overline{x} k x$. This is contradiction since $\overline{\overline{x}kx} = -
\overline{x}kx$ and $\|y\|^{2}+\|z\|^{2}$ is real. It shows that
$W_{\mathbb{H}}(A)$ is not convex.

Now we provide some additional equivalent conditions for the convexity
of quaternionic numerical range.

### Theorem

Let $A \in M_{n}(\mathbb{H})$. Then the following are equivalent
{% cite kumar2019note %}:

\- $W_{\mathbb{H}}(A)$ is convex.

\- $W\_{}(A:\mathbb{C}) = W_{\mathbb{H}}(A) \cap \mathbb{C} $.

\- For every $X \in S_{\mathbb{H}^{n}}$, there exists a $Y \in S\_{\mathbb{H}^{n}}$
such that
$$
2 |  \Im ( \braket{Y}{AY}_\mathbb{H}  ) | = |\braket{X}{AX}_\mathbb{H} i - i \overline{\braket{X}{AX}_{\mathbb{H}}}  |.
$$

### Theorem

Let $A=D+N \in M_n(\mathbb{H})$, with $D$ a diagonal matrix with real
entries, $N$ nilpotent and cycle-free matrix. Then, $W_{\mathbb{H}}(A)$
is convex. {% cite carvalho2019convexity %}

More theorems regarding the convexity of quaternionic numerical range we
can see in {% cite carvalho2019star %}.

# References

{% bibliography --cited %}
