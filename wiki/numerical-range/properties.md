---
layout: default
title: Properties of numerical range
nav_order: 1
parent: Numerical range
permalink: /numerical-range/properties/
---

# Properties of numerical range

Properties of [numerical range]({{ "/numerical-range/" | relative_url }}) $ W(A) $ of a matrix
$ A $ of dimension $ N $ {% cite horn1994topics %},
{% cite gustafson1997numerical %}:

1.  $ W(A) $ is a compact subset of $ \mathbb{C} $,
2.  $ W(A) $ is convex set (Hausdorff-Toeplitz theorem)
    {% cite toeplitz1918algebraische %}, {% cite hausdorff1919wertvorrat %},
3.  $ W(A) $ contains the spectrum of $ A $,
4.  if $ AA^\dagger=A^\dagger A $ ($ A $ is a normal matrix) then $ W(A) $ is
    convex hull of spectrum of $ A $,
5.  if $ A=A^\dagger $ then $ W(A)=\[\lambda_1, \lambda_N\] $ forms an
    interval in the real axis,
6.  if $ N=2 $ then $ W(A) $ forms an elliptic disk with eigenvalues
    $ \lambda_1 $ and $ \lambda_2 $ as focal points and the minor axis $d = $ {% cite murnaghan1932field %}.
7.  if $ N=3 $ we distinguish four cases (classification by Keeler,
    Rodman, Spitkovsky) {% cite keeler1997numerical %}:
    1.  $ W(A) $ is a compact set of an 'ovular' shape containing three
        eigenvalues (the generic case). In particular, we can consider
        elliptical shape (see {% cite rault20133 %}),
    2.  $ W(A) $ is a compact set with one flat part (e.g. convex hull of
        a cardioid),
    3.  $ W(A) $ is a compact set with two flat parts (e.g. convex hull of
        an ellipse and a point outside it),
    4.  $ W(A) $ if a triangle with eigenvalues in its corners (in the
        case of normal $ A $)
8.  if $ N=4 $:
    1.  for $$ A = \begin{pmatrix}
        \1 & C \\
        D & \1
        \end{pmatrix}
        $$
        the numerical range is the convex hull of two non-concentric ellipses {% cite arXiv200900272G %},

More interesting properties you can find in {% cite chien2019diameter %},
{% cite bourin2017positive %}, {% cite tsin1983diameter %},
{% cite geryba2020numerical %}, {% cite li2019numerical %},
{% cite fatehi2019numerical %}, {% cite kim2018jordan %},
{% cite bickel2018numerical %}, {% cite gau2007numerical %}. In the case of
tridiagonal matrices, the characteristic of the numerical range was
presented in {% cite spitkovsky2015line %}, {% cite chien2015numerical %}.
For properties of the numerical range in the infinite dimension see
{% cite lins2018inverse %}, {% cite birbonshi2018note %}.

## Application

An example application of numerical range can be found in
{% cite spitkovsky2018signatures %}.

## Examples

For a list of examples, see [examples of numerical
range](/numerical-range/examples).

## Gau–Wu numbers

#### Definition

We define the Gau–Wu number of a matrix $ A $, denoted $ k(A) $, to be the
maximum size of an orthonormal set $\\{x\_1,,x\_k\\}  \subset \mathcal{C}^n$ such that the
values $\bra{x_j} A \ket{x_j}$ lie on $ \partial W(A) $ {% cite gau2013numerical %}.

The properties of Gau-Wu number was widely studied in
{% cite camenga2019singularities %}, {% cite camenga2014gau %}.

## Rank-2 operators

Let $ W(A) $ will be the numerical range of matrix $A  \in M_n(\mathrm{C})$ and let \begin{equation}
\mathcal{F}_n = \\{ W(A): A \in M_n(\mathrm{C}) \\} \end{equation} be the set of all numerical ranges
arising in $n$ dimensions.

#### Theorem

Let $ A $ be such operator that $ \mathrm{rank}(A− \lambda \1)=2 $ for some $\lambda
\in \mathbb{C}$ . Then  $W(A)$  either is an element of  $\mathcal{F}_3$, or
the convex hull of two ellipses having a common focus, or has at most
one flat portion on its boundary.

More properties (with examples) about rank-two operators is studied in
{% cite rodman2013numerical %}.

### References
{% bibliography --cited %}
