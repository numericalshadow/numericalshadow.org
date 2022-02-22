---
layout: default
title: GHZ numerical shadow
parent: Restricted numerical shadow
nav_order: 4
permalink: /numerical-shadow/generalizations/restricted-numerical-shadow/ghz-numerical-shadow/
---
# GHZ numerical shadow

GHZ entangled numerical shadow of a matrix $A$ of dimension $d$ is
defined as a probability ditribution $P_A(z)$ on the complex plane,
supported on the [maximally entangled numerical
range]({{ "/numerical-shadow/generalizations/restricted-numerical-shadow/entangled-numerical-shadow" | relative_url }})
$W^\mathrm{ent}(A)$. $P_A(z) := \int_{\Omega} {\rm d} \mu(\psi)
\delta\Bigl( z-\langle \psi\|A\|\psi\rangle\Bigr),$ where $\mu(\psi)$
denotes the unique unitarily invariant (Fubini-Study) measure on the set
$\Omega=\\{\ket{\psi} \in \mathbb{C}^{2^d}: \ket{\psi} =
\frac{1}{\sqrt{2}} \bigotimes_{i=1}^d U_i \left( \ket{0}^{\otimes d} +
\ket{1}^{\otimes d} \right)\\},$ where $U_i \in SU(2)$

## Example

GHZ entangled numerical shadow of a unitary matrix
{% cite puchala2012restricted %} $U=\text{diag}\left( 1,e^{\frac{2 \ii \pi
}{3}}, e^{\frac{2 \ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, e^{\frac{2
\ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, e^{-\frac{2 \ii \pi }{3}}, 1
\right)$

![]({{ "/assets/numerical-shadow/ghz_shadow.png" | relative_url }})

# References
{% bibliography --cited %}
