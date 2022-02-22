---
layout: default
title: W numerical shadow
parent: Restricted numerical shadow
nav_order: 5
permalink: /numerical-shadow/generalizations/restricted-numerical-shadow/w-numerical-shadow/
---
# W numerical shadow

W entangled numerical shadow of a matrix $A$ of dimension $d$ is defined
as a probability distribution $P_A(z)$ on the complex plane, supported
on the [maximally entangled numerical
range]({{ "/numerical-range/generalizations/restricted-numerical-range/maximally-entangled-numerical-range" | relative_url }})
$W^\mathrm{ent}(A)$. $P_A(z) := \int_{\Omega} {\rm d} \mu(\psi)
\delta\Bigl( z-\langle \psi\|A\|\psi\rangle\Bigr),$ where $\mu(\psi)$
denotes the unique unitarily invariant (Fubini-Study) measure on the set
$\Omega=\\{\ket{\psi} \in \mathbb{C}^{2^d}: \ket{\psi} =
\frac{1}{\sqrt{d}} \bigotimes_{i=1}^d U_i \left( \ket{10\ldots 0} +
\ket{01 \ldots 0} + \ldots + \ket{00 \ldots 1} \right)\\},$ where $U\_i
SU(2)$.

## Example

W entanglement numerical shadow of a unitary matrix
{% cite puchala2012restricted %} $U=\text{diag}\left( 1,e^{\frac{2 \ii \pi
}{3}}, e^{\frac{2 \ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, e^{\frac{2
\ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, 1
\right)$

![]({{ "/assets/numerical-shadow/w_shadow.png" | relative_url }})

# References

{% bibliography --cited %}
