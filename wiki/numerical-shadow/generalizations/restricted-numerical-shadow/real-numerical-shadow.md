---
layout: default
title: Real numerical shadow
parent: Restricted numerical shadow
nav_order: 1
permalink: /numerical-shadow/generalizations/restricted-numerical-shadow/real-numerical-shadow/
---
# Real numerical shadow

## Definition

Real numerical shadow of a matrix $A$ of dimension $d$ is defined as a
probability ditribution $P_A(z)$ on the complex plane, supported on the
[real numerical
range]({{ "numerical-range/generalizations/restricted-numerical-range/real-numerical-range" | relative_url }})
$W^\mathbb{R}(A)$. $P_A(z) := \int_{\Omega} {\rm d} \mu(\psi)
\delta\Bigl( z-\langle \psi\|A\|\psi\rangle\Bigr),$ where $\mu(\psi)$
denotes the unique unitarily invariant (Fubini-Study) measure on the set
$\Omega=\\{\ket{\psi} \in \mathbb{R}^d: \braket{\psi}{\psi}=1\\}.$

## Examples

  - [Real shadow of 2x2 Hermitian
    matrices]({{ "/numerical-shadow/examples/2x2#hermitian_matrices" | relative_url }})
  - [Real shadow of 3x3 Hermitian
    matrices]({{ "/numerical-shadow/examples/3x3#hermitian_matrices" | relative_url }})
  - [Real shadow of 4x4 Hermitian
    matrices]({{ "/numerical-shadow/examples/4x4#hermitian_matrices" | relative_url }})
  - [Real shadow of 4x4 non-normal
    matrices]({{ "/numerical-shadow/examples/4x4#non-normal_matrices" | relative_url }})
