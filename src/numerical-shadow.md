# Numerical shadow


## Definition

For any square matrix ``A`` of dimension ``d``, one defines its
*numerical shadow* as a probability distribution ``P_A(z)`` on the
complex plane, supported in the numerical range ``W(A)``, 
```math
 P_A(z) :=
\int\_{\Omega_d} {\rm d} \mu(\psi) \delta\Bigl( z-\langle
\psi |A| \psi\rangle\Bigr).
```
Here ``\mu(\psi)`` denotes the
unique unitarily invariant (Fubini-Study) measure on the set
``\Omega_d`` of ``N``-dimensional pure quantum states. In other words
the shadow ``P`` of matrix ``A`` at a given point ``z`` characterizes
the likelihood that the expectation value of ``A`` among a random pure
state is equal to ``z``.

## Other names

Other names for numerical shadow found in literature:

* numerical measure of a complex matrix [gallay2010the](@cite)
* microcanonical distribution [brody1998the](@cite),
  [brody2005microcanonical](@cite), [brody2007on](@cite),
  [brody2007quantum](@cite)

## References

