# Essential numerical range

The essential numerical range `W_e(T)` was introduced by Stampfli and
Williams in [stampfli1968growth](@cite) for a bounded linear operator
`T` in a Hilbert space `H` as the closure of the numerical range of the
image of `T` in the Calkin algebra. Various equivalent characterizations
were established, for example, in [fillmore1972essential](@cite), along
with applicatations, for example, in [bogli2019essential](@cite).

## Definition

For a linear operator T with domain `\mathcal{D}(T) \subset H` we define
the essential numerical range of `T` by `W_e(T ) = \\{\lambda \in
\mathbf{C} : \exists (x_n)_{n \in \mathbf{N} }\subset \mathcal{D}(T )
\\,\\,\\, \text{with} \\,\\,\\, \|\|x_n\|\| = 1, x_n \rightarrow 0,
\braket{Tx_n}{x_n} \rightarrow \lambda \\} .`

### Properties

For any `z \in \mathbb{C}` and let `\sigma_e(T) = \\{ \lambda \in
\mathrm{C} : \exists (x_n)_{n \in \mathbb{N}} \subset \mathcal{D}(T )
\\,\\,\\, \text{with} \\,\\,\\, \|\|xn\|\| = 1, (x_n) \rightarrow 0,
\|\|(T- \lambda)x_n \|\| \rightarrow 0 \\}` then we have
[bogli2020essential](@cite)

\- `W_e(zT) = zW_e(T)`

\- `W_e(T+z) = W_e(T) + z`

\- `W_e(T)` is closed and convex

\- `\text{conv} \\, \sigma_e(T) \subset W_e(T )`

### Relation between numerical range `W(T)` and essential numerical range `W_e(T)`

Let `W_e(T)` will be the essential numerical range of `T` whereas `W(T)`
will be the numerical range of `T` and `\overline{W(T)}` the closure of
`W(T)`. Then we have the following relations:

\- `W_e(T) \subset \overline{W(T)}`

\- If `\overline{W(T)}` is a line or a strip or $W(T) = `, when`W\_e(T)
$

\- If `W(T)` is a line, then so is `W_e(T)` and thus $ W\_e(T) = W(T)$

\- If `W(T) = \mathbb{C}` if and only if `W_e(T) = \mathbb{C}`

\- If `\overline{W(T)}` is a strip, then `W_e(T)` is a line or a strip

\- If `\overline{W(T)}` is a half-plane and $W\_e(T)  `, then`W\_e(T)$
is a half-plane

\- If `D` is a bounded open convex subset of `\mathbb{C}` with a regular
analytic boundary curve `\partial D`, $W(T)  `,`W\_e(T) D`and`$
intersects `\partial D` at infinitely many points, then $W(T) = $
[lins2020numerical](@cite).
