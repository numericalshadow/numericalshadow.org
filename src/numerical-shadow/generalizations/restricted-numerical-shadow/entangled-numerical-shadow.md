# Maximally entangled numerical shadow

## Definition

Maximally entangled numerical shadow of a matrix `A` of size
`d=d_1\times d_2` is defined as a probability distribution `P_A(z)` on
the complex plane, supported on the [maximally entangled numerical
range](/numerical-range/generalizations/restricted-numerical-range/maximally-entangled-numerical-range)
`W^\mathrm{ent}(A)`. `P_A(z) := \int_{\Omega} {\rm d} \mu(\psi)
\delta\Bigl( z-\langle \psi\|A\|\psi\rangle\Bigr),` where `\mu(\psi)`
denotes the unique unitarily invariant (Fubini-Study) measure on the set
`\Omega=\\{\ket{\psi} \in \mathbb{C}^{d_1\times d_2}:
\ket{\psi}=\frac{1}{\sqrt{d_\min}} (U_1\otimes U_2)\sum_{i=1}^{d_\min}
\ket{\psi_i^1}\otimes \ket{\psi_i^2} \\},` where

  - `d_\min={\min(d_1,d_2)}`,
  - `\ket{\psi_i^1}`, `\ket{\psi_i^2}` form orthonormal bases in
    `\mathbb{C}^{d_1}` and `\mathbb{C}^{d_2}` respectively,
  - `U_1\in SU(d_1)` and `U_2\in SU(d_2)`.

## Examples

  - [Entangled shadow of 4x4 non-normal
    matrices](/numerical-shadow/examples/4x4#entangled_numerical_shadow)
