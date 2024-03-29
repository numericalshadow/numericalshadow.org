---
layout: default
parent: Generalizations of numerical range
nav_order: 8
title: Application of higher rank numerical range and $(p,k)$ - numerical range
permalink: /numerical-range/generalizations/application-of-higher-rank-and-p-k-numerical-range/
---
# Application of higher rank numerical range and $(p,k)$- numerical range

In this section we present the motivation behind introduce definitions
of higher rank numerical range and $(p,k)$- numerical range. Let $M_n$
will be the set of all matrices of dimension $n$. We will consider
linear mapping transforming given matrix into another matrix. Such
mapping can be represented by operator sum representation (Kraus
representation) as  for some matrices $A_i$. The special linear mapping
transforming state into another state is well-known as quantum channel.
One would like to consider a recovery channel $R$ such that $R  (X) =
X$whenever$PXP=X$for some orthogonal projection$P$. The range space of
$P$ is known as a quantum error correction code of the channel $\Phi$.
The task is finding $P$ with a maximum rank. For a given quantum channel
$\Phi$ this problem is equivalent to existing scalars $\lambda_{i,j} \in
\mathbb{C}$ such that  This leads to the study [higher rank numerical
range]({{ "/numerical-range/generalizations/higher-rank-numerical-range" | relative_url }}).

We can also naturally extend above error correction scheme
{% cite choi2009multiplicative %}. Now we consider that for a given
quantum channel $\Psi$ we would like to find a recovery channel $R$ such
that for each $B \in M_k$  for some $A_B \in M_p$. Analogously, his
problem can be is reduced to showing that such recovery channel $R$
exists if and only if there are scalars $\lambda_{ijrs} \in \mathbb{C}$
such that  where $P\_{kl} = (  *k ) *{n-pk} $ with fixed an arbitrary
orthonormal basis $\\{ e_1, \ldots, e_p \\}$ in $\mathbb{C}^p$. This
approach we can simplify to consideration [$(p,k)$ numerical
range]({{ "/numerical-range/generalizations/p-k-numerical-range" | relative_url }}).

# Application in Hybrid Quantum Error Correction

The non-emptiness of $(p,k)$ numerical range plays crucial role in
hybrid (classical and quantum) error correction code schemes
{% cite cao2020higher %}. In this case we study $m-$joint $(p,k)-$diagonal
numerical range  where $A_i \in M_n$ and $D_p$ is a set of $p p$
diagonal matrices.

The important property of $\widetilde{\Lambda}_{p,k}$ which is studied
is its non-emptiness. Here we present a sufficient condition in the
case, when $A_i=A_i^\dagger$ {% cite cao2020higher %}.

#### Theorem

Assume that $k\>1$. $(A_1,\ldots, A_m) \subset H_n$ and it holds that

$$

 n\geq(m + 1)[^1].

 $$

Then $\widetilde{\Lambda}_{p,k}(A_1,\ldots,A_m) \not= \emptyset.$

This theorem provides simply check for given quantum channel whenever
there exists a hybrid error correcting code (for more details see
{% cite cao2020higher %}).

#### Theorem

Let $\Phi$ be a quantum channel acting on the space of $M_n$, which Choi
rank is equal to $c$. Then $\Phi$ has a hybrid error correcting code of
dimensions $(p,k)$ if $n \geq c^2(c^2(k−1) +k(p−1)).$

# References

{% bibliography --cited %}
