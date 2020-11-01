Application of higher rank numerical range and ``(p,k)``- numerical range
=========================================================================

In this section we present the motivation behind introduce definitions
of higher rank numerical range and ``(p,k)``- numerical range. Let
``M_n`` will be the set of all matrices of dimension ``n``. We will
consider linear mapping transforming given matrix into another matrix.
Such mapping can be represented by operator sum representation (Kraus
representation) as \begin{equation} \Phi(X) = \sum\_{i} A_i X A_i
\end{equation} for some matrices ``A_i``. The special linear mapping
transforming state into another state is well-known as quantum channel.
One would like to consider a recovery channel ``R`` such that \$R \circ
\Phi(X) = X`` whenever ``PXP=X`` for some orthogonal projection ``P\$.
The range space of ``P`` is known as a quantum error correction code of
the channel ``\Phi``. The task is finding ``P`` with a maximum rank.
For a given quantum channel ``\Phi`` this problem is equivalent to
existing scalars ``\lambda\_{i,j} \in \mathbb{C}`` such that
\begin{equation} PA_i^\dagger A_i P = \lambda\_{i,j} P \text{ for
all } 1\le i,j\le r. \end{equation} This leads to the study [higher
rank numerical
range](/numerical-range/generalizations/higher-rank-numerical-range).

We can also naturally extend above error correction scheme [choi2009multiplicative](@cite). Now we consider that for a given quantum
channel ``\Psi`` we would like to find a recovery channel ``R`` such
that for each ``B \in M_k`` \begin{equation} R \circ \Psi \left(
\left( \1_p \otimes B \right) \oplus \mathbf{0}\_{n-pk} \right) =
\left( A_B \otimes B \right) \oplus \mathbf{0}\_{n-pk}
\end{equation} for some ``A_B \in M_p``. Analogously, his problem can
be is reduced to showing that such recovery channel ``R`` exists if and
only if there are scalars ``\lambda\_{ijrs} \in \mathbb{C}`` such
that \begin{equation} P\_{kk} A_i^\dagger A_j P\_{ll} =
\lambda\_{ijrs} P\_{kl} \text{ for all } 1\le i,j\le r \text{ and }
1\le k,l \le p \end{equation} where \$P\_{kl} = ( \ket{k}\bra{l}
\otimes \mathbf{1}\_k ) \oplus \mathbf{0}\_{n-pk} \$ with fixed an
arbitrary orthonormal basis `` \\{ e_1, \ldots, e_p \\} `` in
``\mathbb{C}^p``. This approach we can simplify to consideration
[``(p,k)`` numerical
range](/numerical-range/generalizations/p-k-numerical-range).

Application in Hybrid Quantum Error Correction
==============================================

The non-emptiness of ``(p,k)`` numerical range plays crucial role in
hybrid (classical and quantum) error correction code schemes
[cao2020higher](@cite). In this case we study ``m-``joint
``(p,k)-``diagonal numerical range \begin{equation}

          \widetilde{\Lambda}_{p,k}(A_1,\ldots,A_m) := \left\{ (D_1,\ldots,D_m) \subset D_p: \,  
      U^\dagger A_i U = D_i \otimes \mathbf{1}_k \text{ for some } U \in 
      \mathrm{U}\left(\mathbb{C}^{pk},\mathbb{C}^{n} \right) \right\},

\end{equation} where ``A_i \in M_n`` and ``D_p`` is a set of \$p
\times p\$ diagonal matrices.

The important property of ``\widetilde{\Lambda}\_{p,k}`` which is
studied is its non-emptiness. Here we present a sufficient condition in
the case, when ``A_i=A_i^\dagger`` [cao2020higher](@cite).

#### Theorem

Assume that ``k\>1``. ``(A_1,\ldots, A_m) \subset H_n`` and it holds
that 
```math 
 n\geq(m + 1)[^1].
 ```
 Then
``\widetilde{\Lambda}\_{p,k}(A_1,\ldots,A_m) \not= \emptyset. ``

This theorem provides simply check for given quantum channel whenever
there exists a hybrid error correcting code (for more details see
[cao2020higher](@cite)).

#### Theorem

Let ``\Phi`` be a quantum channel acting on the space of ``M_n``, which
Choi rank is equal to ``c``. Then ``\Phi`` has a hybrid error
correcting code of dimensions ``(p,k)`` if ```` n \geq c^2(c^2(k−1)
+k(p−1)).````

[^1]: m + 1)(k−1) +k(p−1
