---
layout: default
title: Product numerical shadow
parent: Restricted numerical shadow
nav_order: 2
permalink: /numerical-shadow/generalizations/restricted-numerical-shadow/product-numerical-shadow/
---
# Product numerical shadow

## Definition

Product numerical shadow of a matrix $A$ of dimension $d$ is defined as
a probability distribution $P_A(z)$ on the complex plane, supported on
the [product numerical
range]({{ "/numerical-range/generalizations/restricted-numerical-range/product-numerical-range" | relative_url }})
$W^\otimes(A)$. $P_A(z) := \int_{\Omega} {\rm d} \mu(\psi) \delta\Bigl(
z- \bra{\psi} A \ket{\psi} \Bigr),$ where $\mu(\psi)$ denotes the unique
local unitarily invariant (Fubini-Study) measure on the set $\Omega =
\\{ \ket{\psi} \in \mathbb{C} ^ d: \ket{\psi} = \bigotimes_{i=1}^d
\ket{\phi_i}, \text{ for } i=1,\ldots,d\\ \braket{\phi_i}{\phi_i}=1
\text{ and } \ket{\phi_i}\in\mathbb{C}^2 \\}$

## Examples

  - [Product shadow of 4x4 non-normal
    matrices]({{ "/numerical-shadow/examples/4x4#product_numerical_shadow" | relative_url }})
