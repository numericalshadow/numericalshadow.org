Quaternionic numerical range
============================

Definitions
-----------

### Quaternions

Let ``\mathbb{H}`` be the set of all elements, called quaternions, of
the form ``q = q_{0}+q_{1}i+q_{2}j+q_{3}k``, where ``i,j,k`` are
quaternion units satisfying:
\begin{equation}\label{Equation:multiplication} i\cdot j = -j \cdot
i, \\; \\; j\cdot k = -k \cdot j,\\; \\; k\cdot i = -i \cdot k \\;
\\; \text{and}\\;\\; i\cdot j \cdot k = -1. \end{equation} For a
given ``q \in \mathbb{H}``, we define the real part, re\$(q):=
q_{0}`` and the imaginary part, im``(q):= q_{1}i+q_{2}j+q_{3}k\$.
The conjugate and the modulus of ``q`` respectively given by
\begin{equation*} \overline{q}= q_{0} - (
q_{1}i+q_{2}j+q_{3}k)\\; , \\; \|q\|=
\sqrt{q_{0}^{2}+q_{1}^{2}+q_{2}^{2}+q_{3}^{2}}.
\end{equation*}

Let us denote the class of all ``n\times n `` matrices over
``\mathbb{C}`` and ``\mathbb{H}`` by ``M_{n}(\mathbb{C})`` and
``M_{n}(\mathbb{H})`` respectively.

Let ``A = \[\\;q_{rs}\\;\]_{n\times n}\in M_{n}(\mathbb{H})``.
Since ``q_{rs} = a_{rs} + b_{rs}\cdot j`` for some \$a_{rs},
b_{rs} \in \mathbb{C}``, then ``A_{1}:= \[\\; a_{rs}\\;
\]_{n\times n},\\; A_{2}:= \[\\; b_{rs}\\; \]_{n\times n}\in
M_{n}(\mathbb{C})`` and `` A=A_{1}+A_{2}\cdot j\$. Define
\begin{equation*} \chi_{A}:= \begin{bmatrix} A_{1} &
A_{2}\\\\-\overline{A}_{2}& \overline{A}_{1}
\end{bmatrix}_{2n\times 2n} \in M_{2n}(\mathbb{C}),
\end{equation*} then the map \$\xi \colon M_{n}(\mathbb{H})\to
M_{2n}(\mathbb{C})`` defined by `` \xi(A) = \chi_{A}, \\;
\text{for all}\\; A \in M_{n}(\mathbb{H})\$ is an injective real
algebra homomorphism. It is clear that \$\\\|A\\\| =
\\\|\chi_{A}\\\|``, where ``\\\|\cdot \\\|\$ denotes operator norm in
the respective algebra.

Numerical range
---------------

Let ``A \in M_{n}(\mathbb{H})``. Then:

\- The quaternionic numerical range of ``A``, denoted by
``W_{\mathbb{H}}(A)``, defined as \begin{equation*}
W_{\mathbb{H}}(A):= \big\\{\langle X, AX \rangle_{\mathbb{H}}:
X\in S_{\mathbb{H}^{n}} \big\\}, \end{equation*} where
\$S_{\mathbb{H}^{n}}: = \big\\{X \in \mathbb{H}^{n}:
\\\|X\\\|=1\big\\}\$.

\- The quaternionic numerical radius of ``A``, denoted by
``{\mathop{w}}_{\mathbb{H}}(A)``, defined as \begin{equation*}
{\mathop{w}}_{\mathbb{H}}(A):= \sup\big\\{\|q\|: q \in
W_{\mathbb{H}}(A)\big\\}. \end{equation*}

\- For each slice ``\mathbb{C}_{m}`` of \$\mathbb{H} \\; (m \in
\mathbb{S})``, we call ``W_{\mathbb{H}}(A)\cap
\mathbb{C}_{m}^{+}`` as a ``\mathbb{C}_{m}\$- section of
``W_{\mathbb{H}}(A)``. In particular, we denote the complex section of
``W_{\mathbb{H}}(A)`` by ``W_{\mathbb{H}}^{+}(A)`` i.e.,
\begin{equation*} W_{\mathbb{H}}^{+}(A):= W_{\mathbb{H}}(A)\cap
\mathbb{C}^{+} , \end{equation*} where \$\mathbb{C}^{+}=
\\{\alpha + i \beta :\\; \alpha \in \mathbb{R},\\; \beta \geq
0\\}\$.

### Projection of ``W_{\mathbb{H}}(A)``

Let ``A \in M_{n}(\mathbb{H})``. Then the projection of
``W_{\mathbb{H}}(A)`` onto the complex plane is denoted by
``W_{\mathbb{H}}(A :\mathbb{C})`` and it is defined by
\begin{equation*} W_{\mathbb{H}}(A :\mathbb{C}) = \\{co(q); \\; q
\in W_{\mathbb{H}}(A)\\}, \end{equation*} where \$co(q) =
q_{0}+q_{1}i``, for ``q = q_{0}+q_{1}i+q_{2}j+q_{3}k \in
\mathbb{H}\$.

### Theorem

Let ``A\in M_{n}(\mathbb{H})``. Then
``W_{\mathbb{H}}(A:\mathbb{C}) = W_{\mathbb{C}}(\chi_{A})``.
Moreover, if ``W_{\mathbb{C}}(\chi_{A})`` is convex by
Toeplitz-Housdroff theorem, then ``W_{\mathbb{H}}(A:\mathbb{C})`` is
convex. In particular, for a self-adjoint matrix \$A \in
M_{n}(\mathbb{H})\$, \begin{equation*} W_{\mathbb{H}}(A) =
W_{\mathbb{H}}(A:\mathbb{C}) = W_{\mathbb{C}}(\chi_{A})
\end{equation*} is a convex subset of ``\mathbb{R}``.

Properties
----------

Let ``A \in M_{n}(\mathbb{H})``. The following properties hold true:

\- ``W_{\mathbb{H}}(A)`` is compact in ``\mathbb{H}``

\- \$W_{\mathbb{H}}(\alpha I + \beta A) = \alpha + \beta
W_{\mathbb{H}}(A)``, for every ``\alpha, \beta \in \mathbb{R}\$.

\- If ``B\in M_{n}(\mathbb{H})``, then \$W_{\mathbb{H}}(A+B)
\subseteq W_{\mathbb{H}}(A)+W_{\mathbb{H}}(B)\$.

\- ``W_{\mathbb{H}}(U^{\ast}AU) = W_{\mathbb{H}}(A)``, for every
unitary ``U \in M_{n}(\mathbb{H})``.

\- ``W_{\mathbb{H}}(A^{\ast}) = W_{\mathbb{H}}(A)``.

Convexity of numerical range
----------------------------

In general quaternionic numerical range of matrices over the ring of
quaternions is not necessarily convex. For example, \begin{equation*}
A = \begin{bmatrix} k &0&0\
0&1&0\
0&0&1 \end{bmatrix}_{3\times 3} \in M_{3}(\mathbb{H})
\end{equation*} has ``k, -k \in W_{\mathbb{H}}(A)``, but \$0 =
\frac{k}{2} - \frac{k}{2} \notin W_{\mathbb{H}}(A)\$. To see this,
assume that there is a \$X: = \begin{bmatrix} x&y&z \end{bmatrix}^{T}
\in S_{\mathbb{H}^{3}}\$ such that \begin{equation*} 0 =
\big\langle X , A X \big\rangle_{\mathbb{H}} = \overline{x}kx+
\|y\|^{2}+\|z\|^{2} \end{equation*} i.e., \$\|y\|^{2}+\|z\|^{2} =
-\overline{x}kx \$. This is contradiction since
``\overline{\overline{x}kx} = - \overline{x}kx `` and
``\|y\|^{2}+\|z\|^{2}`` is real. It shows that ``W_{\mathbb{H}}(A)``
is not convex.

Now we provide some additional equivalent conditions for the convexity
of quaternionic numerical range.

### Theorem

Let ``A \in M_{n}(\mathbb{H})``. Then the following are equivalent
[kumar2019note](@cite):

\- ``W_{\mathbb{H}}(A)`` is convex.

\- \$W_{\mathbb{H}}(A:\mathbb{C}) = W_{\mathbb{H}}(A)\cap
\mathbb{C}\$.

\- For every ``X \in S_{\mathbb{H}^{n}}``, there exists a \$Y\in
S_{\mathbb{H}^{n}}\$ such that \begin{equation*} 2\\; \|\text{im}
(\langle Y, AY\rangle_{\mathbb{H}})\| = \|\langle X,
AX\rangle_{\mathbb{H}}\\; i - i\\; \overline{\langle X,
AX\rangle}_{\mathbb{H}}\|. \end{equation*}

### Theorem

Let ``A=D+N \in M_n(\mathbb{H})``, with ``D`` a diagonal matrix with
real entries, ``N`` nilpotent and cycle-free matrix. Then,
``W_{\mathbb{H}}(A)`` is convex. [carvalho2019convexity](@cite)

More theorems regarding the convexity of quaternionic numerical range we
can see in [carvalho2019star](@cite).
