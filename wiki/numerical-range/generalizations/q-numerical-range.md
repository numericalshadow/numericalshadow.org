# q-numerical range

## Definition

Let `A` be an `d \times d` matrix. The q-numerical range of `A` is the
set: \\\[ W\_q(A) = \\{ z : z = A,  = q,  ^d,  ^d,  = 1,  = 1 \\}. \\\]

## Properties

Properties of `W_q(A)` of a matrix `A` of dimension `d \times d`
[li1998q](@cite), [chien2006q](@cite),[chien2002davis](@cite):

 - Note that in the case $q=1$ we get back the [[:numerical-range|standard numerical range]];
 - $W_q(A)$ is a convex and bounded set (Tsing theorem) [( :tsing1984constrained )];
 - Unitarly invariant: $W_q(A) = W_q(UAU^\dagger)$ for any $U$ unitary matrix;
 - Transpose invariant: $W_q(A) = W_q(A^\top)$;
 - $W_{qz}(A) = zW_q(A)$ for any $z \in \mathbb{C}$, such that $|z|=1$;
 - For any $\mu, \eta \in \mathbb{C}$, we have $W_q(\mu A + \eta \1) = \mu W_q(A) + \eta q$.

## Example

The numerical aproximation of `W_{13/14}(A)`, where `A =
\begin{pmatrix} 0&1&1/2\ 0&0&1\ 0&0&0 \end{pmatrix}.`

![](/numerical-range/qnr1.png)

This example can be found in [koide2008q](@cite).
