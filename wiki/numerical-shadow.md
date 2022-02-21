---
layout: default
title: Numerical shadow
nav_order: 3
permalink: /numerical-shadow/
---
# Numerical shadow

## Definition

For any square matrix $1$ of dimension $1$, one defines its *numerical
shadow* as a probability distribution $1$ on the complex plane,
supported in the numerical range $1$,

$$
P_A(z) :=
\int_{\Omega_d} {\rm d} \mu(\psi) \delta\Bigl( z-\langle
\psi |A| \psi\rangle\Bigr).
$$

Here $\mu(\psi)$ denotes the unique unitarily invariant (Fubini-Study)
measure on the set $\Omega_d$ of $N$-dimensional pure quantum states. In
other words the shadow $P$ of matrix $A$ at a given point $z$
characterizes the likelihood that the expectation value of $A$ among a
random pure state is equal to $z$.

## Other names

Other names for numerical shadow found in literature:

  - numerical measure of a complex matrix {% cite gallay2010the %}
  - microcanonical distribution {% cite brody1998the %},
    {% cite brody2005microcanonical %}, {% cite brody2007on %},
    {% cite brody2007quantum %}

## References
{% bibliography --cited %}
