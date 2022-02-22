---
layout: default
parent: Generalizations of numerical range
nav_order: 5
title: Higher rank numerical range
permalink: /numerical-range/generalizations/higher-rank-numerical-range/
---
# Higher rank numerical range

## Definition

The rank-$k$ numerical ranges, denoted below by $\Lambda_k$, were
introduced by Choi, Kribs, and Życzkowski as a tool to handle
compression problems in quantum information theory (See for details
[Application of higher rank numerical
range]({{ "/numerical-range/generalizations/application-of-higher-rank-and-p-k-numerical-range" | relative_url }})).
Since then their theory and applications have been advanced with
remarkable enthusiasm. Among the many more recent papers concerning the
$\Lambda_k(M)$, let us mention {% cite choi2007higher %},
{% cite woerdeman2008higher %}, {% cite li2009condition %},
{% cite gau2010higher %}, {% cite chien2020diameter %} and
{% cite holbrook2015bounds %}.

Given a matrix $M$ of dimension $d$ and $k\geq1$, Choi, Kribs, and
Życzkowski (see {% cite choi2006higher %}, {% cite choi2008geometry %})
defined the rank-$k$ numerical range of $M$ as \\\[
\_k(M)=\\{:PP\_kPMP=P\\}, \\\] where $P_k$ denotes the set of rank-$k$
orthogonal projections in $M_d$. This definition is natural extention to
[classical numerical range]({{ "/numerical-range" | relative_url }}). It is easy to see that if
we considek $k=1$, then $\Lambda_1(A) = W(A)$ for any matrix $A \in
M_d$.

### Alternative definitions

Let $M \in M_d$. Then higher rank-$k$ numerical range of $M$ we can
alternatively define as 

Equivalently {% cite li2008canonical %},

where $\lambda_k(X)$ is $k$-th eigenvalue of given matrix $X$.

## Properties

If $M$ is a normal matrix with eigenvalues $m_1, \ldots, m_n$, then  It
is not hard to verify that $\Lambda_K(M)$ can also be described as the
set of complex $\lambda$ such that there is some $k$-dimensional
subspace $S$ of $\mathbb{C}^d$ such that $(Mu,u)=\lambda$ for **all**
unit vectors in $S$. In particular, we see that \\\[
W(M)=\_1(M)\_2(M)\_3(M). \\\]

Note that, this numerical range is different from the [$k$-numerical
range]({{ "/numerical-range/generalizations/k-numerical-range" | relative_url }}) as for a
Hermitian matrix $A$, we get \\\[ *k(A) = \[*k, *{N-k+1}\], \\\] where
$\lambda_k$ are the eigenvalues of $A$ in an increasing order. On the
other hand, the [$k$-numerical
range]({{ "/numerical-range/generalizations/k-numerical-range" | relative_url }}) is given by
\\\[ W\_k = \[*{i=1}<sup>k*i, *{i=0}</sup>{k-1} \_{d-i} \]. \\\] Hence,
we get \\\[ \_k(A) W\_k(A). \\\]

## Special cases

1. For matrices of a block diagonal form: \\\[ J\_n() \\1\_m, \\\]
where $J_n(\alpha)$ is a Jordan matrix with eigenvalue $\alpha$, the
full characterization of rank-$k$ numerical range was studied in
{% cite argerami2019higher %}.

2. For some Toeplitz metrices the higher rank numerical range has an
elliptical shape. This case is studied in {% cite adam2018elliptical %}.

#### Comparison between $k$-numerical range and higher-rank numerical range

A comparison between the [$k$-numerical
range]({{ "/numerical-range/generalizations/k-numerical-range" | relative_url }}) and
higher-rank numerical range in the case $k=2$. Note that $\_2 W\_2$. The
matrix used in this example is$A = (1, 2, 4, 8)$.
![]({{ "/assets/numerical-range/examples/k-range.png" | relative_url }})

## Examples

Undermentioned examples are made by Raymond Nung-Sing Sze.

#### Unitary matrices

1\. Consider a diagonal unitary matrix $U\_5 =
(\\{^{2k/5}\\}\_{k=1}^5)$. The blue line represents the numerical range
$\_1(U\_5) = W(U\_5)$and the grey figure the real numerical shadow
of$U\_5$. The red polygon inside is $\Lambda_2(U_5)$.
![]({{ "/assets/numerical-range/generalizations/real_s3d5.png" | relative_url }})

2\. Consider a diagonal unitary matrix $U\_7 =
(\\{^{2k/7}\\}\_{k=1}^7)$. The blue line represents the numerical range
$\_1(U\_7) = W(U\_7)$and the grey figure the real numerical shadow
of$U\_7$. The red polygon inside is higher $2$-rank numerical range
$\Lambda_2(U_7)$ and the green polygon is higher $3$-rank numerical
range $\Lambda_3(U_7)$.
![]({{ "/assets/numerical-range/generalizations/real_s3d7.png" | relative_url }})

3\. Consider a diagonal unitary matrix $A= (\\{^{2k/9}\\}\_{k=1}^9)$.
The first picture represents $\Lambda_1(A) = W(A)$ classical numerical
range of $A$ whereas the second picture represents higher $2$-rank
numerical range $\Lambda_2(A)$.
![]({{ "/assets/numerical-range/generalizations/normal003.png" | relative_url }})
![]({{ "/assets/numerical-range/generalizations/normal004.png" | relative_url }})

#### Non-normal matrices

Let $A=\begin{pmatrix} \ii & 0 & 0 & 0 & 0\ 0 & -\ii & 0 & 0 & 0\ 0 & 0
& -1 & 0 & 0\ 0 & 0 & 0 & -2 & 1\ 0 & 0 & 0 & 0 & 0 \end{pmatrix}$ will
be non-normal matrix. Its numerical range is given by the first picture
and higher $2$-rank numerical range is presented on the second picture.
![]({{ "/assets/numerical-range/generalizations/example105.png" | relative_url }})
![]({{ "/assets/numerical-range/generalizations/example106.png" | relative_url }})

# References

{% bibliography --cited %}
