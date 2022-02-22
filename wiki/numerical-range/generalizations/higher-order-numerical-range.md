---
layout: default
parent: Generalizations of numerical range
nav_order: 17
title: Higher order numerical range
permalink: /numerical-range/generalizations/higher-order-numerical-range/
---
# Higher rank numerical range

The rank--$k$ numerical ranges, denoted below by $\Lambda_k$, were
introduced c. 2006 by Choi, Kribs, and Życzkowski as a tool to handle
compression problems in quantum information theory. Since then their
theory and applications have been advanced with remarkable enthusiasm.
The sequence of papers {% cite choi2007higher %},
{% cite choi2008geometry %}, {% cite woerdeman2008higher %},
{% cite li2008canonical %}, for example, led to a striking extension of
the classical Toeplitz--Hausdorff theorem (convexity of $W(M)$): **all**
the $\Lambda_k(M)$ are convex (though some may be empty), and they are
intersections of conveniently computable half--planes in $\mathbb{C}$.
Among the many more recent papers concerning the $\Lambda_k(M)$, let us
mention {% cite li2009condition %} and {% cite gau2010higher %}.

Given a matrix $M\in M_N$ and $k\geq1$, Choi, Kribs, and Życzkowski (see {% cite
choi2006higher %}) defined the rank--$k$ numerical range of $M$ as

\\\[
\Lambda\_k(M)=\\{\lambda \in \mathbb{C} : \exists P \in P\_k \mathrm{such} \;
\mathrm{that} PMP= \lambda P\\},
\\\]

where $P_k$ denotes the set of rank--$k$ orthogonal projections in $M_N$. It is
not hard to verify that $\Lambda_K(M)$ can also be described as the set of
complex $\lambda$ such that there is some $k$--dimensional subspace $S$ of
$\mathbb{C}^N$ such that $(Mu,u)=\lambda$ for **all** unit vectors in $S$. In
particular, we see that \\\[ W(M)=\_1(M)\_2(M)\_3(M). \\\]

# References

{% bibliography --cited %}
