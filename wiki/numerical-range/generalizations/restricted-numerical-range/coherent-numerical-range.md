---
layout: default
parent: Restricted numerical range
nav_order: 5
title: Coherent numerical range
permalink: /numerical-range/generalizations/restricted-numerical-range/coherent-numerical-range/
---
# Coherent numerical range

## Definition

Coherent numerical range $W_{\mathrm{CS}}(A)$ of a matrix $A$ is a
subset of the complex plane defined as
$W_\mathrm{CS}(A)=\\{z:z=\bra{\vartheta, \varphi}A\ket{\vartheta,
\varphi},\braket{\vartheta, \varphi}{\vartheta, \varphi}=1\\},$ where
$\ket{\vartheta, \varphi}$ is an SU(2) coherent state.

## Definition of $SU(2)$ coherent states

$SU(2)$ coherent states are related to the $SU(2)$ algebra of the
components of the angular momentum operator $J = \\{J\_x , J\_y , J\_z
\\}$. Let us choose a reference state $\ket{\kappa}$, usually taken as the maximal
eigenstate $\ket{j,j}$ of the component $J_z$ acting on $ \mathcal{H}\_d $,
$ d = 2j + 1 $, $ j = 1/2, 1/3, \ldots $. This state, pointing toward the
‘north pole’ of the sphere, enjoys the minimal uncertainty equal to
$j$ . Then, the vector coherent state is defined by the Wigner rotation
matrix $R\_{\vartheta, \varphi}$ 

$$
\ket{\vartheta,\varphi} =
R_{\vartheta,\varphi} \ket{\kappa} = (1 + \|\gamma\|^2)^{−j} \ee^{\gamma
J_-} \ket{j, j},
$$

where $R_{\vartheta, \varphi} = \exp[(\ii \vartheta( \cos\varphi J_x − \sin\varphi J_y)]$,
$J_- = J\_x - \ii J\_y$ and $\gamma=\tan(\vartheta/2) \ee^{\ii \varphi}$, for $(\vartheta, \varphi) \in S^2$ (we use the spherical coordinates).
