Quaternionic numerical range
============================

Definitions
-----------

### Quaternions

Let ``\mathbb{H}`` be the set of all elements, called quaternions, of
the form ``q = q\_{0}+q\_{1}i+q\_{2}j+q\_{3}k``, where ``i,j,k`` are
quaternion units satisfying:
\begin{equation}\label{Equation:multiplication} i\cdot j = -j \cdot
i, \\; \\; j\cdot k = -k \cdot j,\\; \\; k\cdot i = -i \cdot k \\;
\\; \text{and}\\;\\; i\cdot j \cdot k = -1. \end{equation} For a
given ``q \in \mathbb{H}``, we define the real part, re\$(q):=
q\_{0}`` and the imaginary part, im``(q):= q\_{1}i+q\_{2}j+q\_{3}k\$.
The conjugate and the modulus of ``q`` respectively given by
\begin{equation*} \overline{q}= q\_{0} - (
q\_{1}i+q\_{2}j+q\_{3}k)\\; , \\; \|q\|=
\sqrt{q\_{0}^{2}+q\_{1}^{2}+q\_{2}^{2}+q\_{3}^{2}}.
\end{equation*}

Let us denote the class of all ``n\times n `` matrices over
``\mathbb{C}`` and ``\mathbb{H}`` by ``M\_{n}(\mathbb{C})`` and
``M\_{n}(\mathbb{H})`` respectively.

Let ``A = \[\\;q\_{rs}\\;\]\_{n\times n}\in M\_{n}(\mathbb{H})``.
Since ``q\_{rs} = a\_{rs} + b\_{rs}\cdot j`` for some \$a\_{rs},
b\_{rs} \in \mathbb{C}``, then ``A\_{1}:= \[\\; a\_{rs}\\;
\]\_{n\times n},\\; A\_{2}:= \[\\; b\_{rs}\\; \]\_{n\times n}\in
M\_{n}(\mathbb{C})`` and `` A=A\_{1}+A\_{2}\cdot j\$. Define
\begin{equation*} \chi\_{A}:= \begin{bmatrix} A\_{1} &
A\_{2}\\\\-\overline{A}\_{2}& \overline{A}\_{1}
\end{bmatrix}\_{2n\times 2n} \in M\_{2n}(\mathbb{C}),
\end{equation*} then the map \$\xi \colon M\_{n}(\mathbb{H})\to
M\_{2n}(\mathbb{C})`` defined by `` \xi(A) = \chi\_{A}, \\;
\text{for all}\\; A \in M\_{n}(\mathbb{H})\$ is an injective real
algebra homomorphism. It is clear that \$\\\|A\\\| =
\\\|\chi\_{A}\\\|``, where ``\\\|\cdot \\\|\$ denotes operator norm in
the respective algebra.

Numerical range
---------------

Let ``A \in M\_{n}(\mathbb{H})``. Then:

\- The quaternionic numerical range of ``A``, denoted by
``W\_{\mathbb{H}}(A)``, defined as \begin{equation*}
W\_{\mathbb{H}}(A):= \big\\{\langle X, AX \rangle\_{\mathbb{H}}:
X\in S\_{\mathbb{H}^{n}} \big\\}, \end{equation*} where
\$S\_{\mathbb{H}^{n}}: = \big\\{X \in \mathbb{H}^{n}:
\\\|X\\\|=1\big\\}\$.

\- The quaternionic numerical radius of ``A``, denoted by
``{\mathop{w}}\_{\mathbb{H}}(A)``, defined as \begin{equation*}
{\mathop{w}}\_{\mathbb{H}}(A):= \sup\big\\{\|q\|: q \in
W\_{\mathbb{H}}(A)\big\\}. \end{equation*}

\- For each slice ``\mathbb{C}\_{m}`` of \$\mathbb{H} \\; (m \in
\mathbb{S})``, we call ``W\_{\mathbb{H}}(A)\cap
\mathbb{C}\_{m}^{+}`` as a ``\mathbb{C}\_{m}\$- section of
``W\_{\mathbb{H}}(A)``. In particular, we denote the complex section of
``W\_{\mathbb{H}}(A)`` by ``W\_{\mathbb{H}}^{+}(A)`` i.e.,
\begin{equation*} W\_{\mathbb{H}}^{+}(A):= W\_{\mathbb{H}}(A)\cap
\mathbb{C}^{+} , \end{equation*} where \$\mathbb{C}^{+}=
\\{\alpha + i \beta :\\; \alpha \in \mathbb{R},\\; \beta \geq
0\\}\$.

### Projection of ``W\_{\mathbb{H}}(A)``

Let ``A \in M\_{n}(\mathbb{H})``. Then the projection of
``W\_{\mathbb{H}}(A)`` onto the complex plane is denoted by
``W\_{\mathbb{H}}(A :\mathbb{C})`` and it is defined by
\begin{equation*} W\_{\mathbb{H}}(A :\mathbb{C}) = \\{co(q); \\; q
\in W\_{\mathbb{H}}(A)\\}, \end{equation*} where \$co(q) =
q\_{0}+q\_{1}i``, for ``q = q\_{0}+q\_{1}i+q\_{2}j+q\_{3}k \in
\mathbb{H}\$.

### Theorem

Let ``A\in M\_{n}(\mathbb{H})``. Then
``W\_{\mathbb{H}}(A:\mathbb{C}) = W\_{\mathbb{C}}(\chi\_{A})``.
Moreover, if ``W\_{\mathbb{C}}(\chi\_{A})`` is convex by
Toeplitz-Housdroff theorem, then ``W\_{\mathbb{H}}(A:\mathbb{C})`` is
convex. In particular, for a self-adjoint matrix \$A \in
M\_{n}(\mathbb{H})\$, \begin{equation*} W\_{\mathbb{H}}(A) =
W\_{\mathbb{H}}(A:\mathbb{C}) = W\_{\mathbb{C}}(\chi\_{A})
\end{equation*} is a convex subset of ``\mathbb{R}``.

Properties
----------

Let ``A \in M\_{n}(\mathbb{H})``. The following properties hold true:

\- ``W\_{\mathbb{H}}(A)`` is compact in ``\mathbb{H}``

\- \$W\_{\mathbb{H}}(\alpha I + \beta A) = \alpha + \beta
W\_{\mathbb{H}}(A)``, for every ``\alpha, \beta \in \mathbb{R}\$.

\- If ``B\in M\_{n}(\mathbb{H})``, then \$W\_{\mathbb{H}}(A+B)
\subseteq W\_{\mathbb{H}}(A)+W\_{\mathbb{H}}(B)\$.

\- ``W\_{\mathbb{H}}(U^{\ast}AU) = W\_{\mathbb{H}}(A)``, for every
unitary ``U \in M\_{n}(\mathbb{H})``.

\- ``W\_{\mathbb{H}}(A^{\ast}) = W\_{\mathbb{H}}(A)``.

Convexity of numerical range
----------------------------

In general quaternionic numerical range of matrices over the ring of
quaternions is not necessarily convex. For example, \begin{equation*}
A = \begin{bmatrix} k &0&0\
0&1&0\
0&0&1 \end{bmatrix}\_{3\times 3} \in M\_{3}(\mathbb{H})
\end{equation*} has ``k, -k \in W\_{\mathbb{H}}(A)``, but \$0 =
\frac{k}{2} - \frac{k}{2} \notin W\_{\mathbb{H}}(A)\$. To see this,
assume that there is a \$X: = \begin{bmatrix} x&y&z \end{bmatrix}^{T}
\in S\_{\mathbb{H}^{3}}\$ such that \begin{equation*} 0 =
\big\langle X , A X \big\rangle\_{\mathbb{H}} = \overline{x}kx+
\|y\|^{2}+\|z\|^{2} \end{equation*} i.e., \$\|y\|^{2}+\|z\|^{2} =
-\overline{x}kx \$. This is contradiction since
``\overline{\overline{x}kx} = - \overline{x}kx `` and
``\|y\|^{2}+\|z\|^{2}`` is real. It shows that ``W\_{\mathbb{H}}(A)``
is not convex.

Now we provide some additional equivalent conditions for the convexity
of quaternionic numerical range.

### Theorem

Let ``A \in M\_{n}(\mathbb{H})``. Then the following are equivalent
[kumar2019note](@cite):

\- ``W\_{\mathbb{H}}(A)`` is convex.

\- \$W\_{\mathbb{H}}(A:\mathbb{C}) = W\_{\mathbb{H}}(A)\cap
\mathbb{C}\$.

\- For every ``X \in S\_{\mathbb{H}^{n}}``, there exists a \$Y\in
S\_{\mathbb{H}^{n}}\$ such that \begin{equation*} 2\\; \|\text{im}
(\langle Y, AY\rangle\_{\mathbb{H}})\| = \|\langle X,
AX\rangle\_{\mathbb{H}}\\; i - i\\; \overline{\langle X,
AX\rangle}\_{\mathbb{H}}\|. \end{equation*}

### Theorem

Let ``A=D+N \in M_n(\mathbb{H})``, with ``D`` a diagonal matrix with
real entries, ``N`` nilpotent and cycle-free matrix. Then,
``W\_{\mathbb{H}}(A)`` is convex. [carvalho2019convexity](@cite)

More theorems regarding the convexity of quaternionic numerical range we
can see in [carvalho2019star](@cite).
