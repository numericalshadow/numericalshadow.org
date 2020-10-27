# GHZ state

A *Greenberger-Horne-Zeilinger* state is an entangled quantum state
having extremely non-classical properties.

## Definition

For a system of ``d`` qubits the *GHZ state* can be written as
```math
\ket{\mathrm{GHZ}} = \frac{\ket{0}\^{\otimes d} +
\ket{1}\^{\otimes d}}{\sqrt{2}}.
```

The simplest one is the 3-qubit GHZ state is: 
```math
\ket{\mathrm{GHZ}} = \frac{1}{\sqrt{2}}\left( \ket{000}+\ket{111}\right).
```

## Properties

Apparently there is no standard measure of multi-partite entanglement,
but many measures define the GHZ to be *maximally entangled*.

Important property of the GHZ state is that when we trace over one of
the three systems we get
```math
Tr_3\left((\ket{000}+\ket{111})(\bra{000}+\bra{111}) \right) =
\ket{00}\bra{00} + \ket{11}\bra{11}
```
which is an unentangled mixed state. It has certain two-particle (qubit)
correlations, but these are of a classical nature.

On the other hand, if we were to measure one of subsystems, in such a
way that the measurement distinguishes between the states 0 and 1, we
will leave behind either ``\ket{00}`` or ``\ket{11}`` which are
unentangled pure states. This is unlike the [W
state](aux-definitions/w-state) which leaves bipartite entanglements
even when we measure one of its subsystems.
