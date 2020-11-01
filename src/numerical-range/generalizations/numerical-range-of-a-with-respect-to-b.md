Numerical range of rectangular matrix ``A`` with respect to ``B``
=================================================================

Definition
----------

Let ``A`` and ``B`` be ``N \times M`` matrices and let \$\\\| \cdot
\\\|`` be any matrix norm. We define the numerical range of ``A\$ with
respect to ``B``, as the compact and convex set [chorianopoulos2009definition](@cite) \\\[ w_{\\\| \cdot \\\|}(A; B) =
\left\\{ \mu \in \mathbb{C}: \\\| A - \lambda B \\\| \geq \|\mu -
\lambda\|, \forall \lambda \in \mathbb{C} \right\\} =
\bigcap_{\lambda \in \mathbb{C}} \mathcal{D}(\lambda,\\\| A -
\lambda B \\\|), \\\] where ``\mathcal{D}(a,r)`` denotes a closed disc
on the complex plane with center ``a`` and radius ``r``.

For a square matrix ``C \in \mathbb{1}^{N \times N}``, we get \\\[
w_{\\\|\cdot\\\|_\infty}(A; \1_N) = W(A), \\\] where ``W(A)``
denotes the standard numerical range.

Properties
----------

For any ``A, B`` of dimension `` n \times m``, the following hold:

-   If the norm ``\|\| \cdot \|\|`` is unitarily invariant, then for
    any unitary matrices ``U`` of dimension ``n \times n`` and ``V`` of
    dimension ``m \times m`` we have


```math 
  w_{\|\|\cdot\|\|}(UAV,UBV) = w_{\|\|\cdot\|\|}(A,B). 
 ```


-   If the norm ``\|\| \cdot \|\|`` is invariant under the conjugate
    transpose operation, then


```math 
  w_{\|\|\cdot\|\|}(A^*,B^*) = w_{\|\|\cdot\|\|}(A,B). 
 ```


-   For any ``A, B`` of dimension `` n \times m`` with ``\|\|B\|\|=1``,
    it holds that

```` w_{\|\|\cdot\|\|}(A,B) = \\{ \mu \in \mathbb{C}: B \perp (A -
\mu B) \\}. ````

-   For any ``A, B`` of dimension `` n \times m`` with \$\|\|B\|\|_2
    \ge 1`` and the matrix norm ``\|\| \cdot \|\|_2\$ is induced by
    the inner product (called Hilbert-Schmidt norm), it holds that

```` w_{\|\|\cdot\|\|_2}(A,B) = \mathcal{D} \left(
\frac{\braket{A}{B}}{\|\|B\|\|_2^2}, \left\|\left\| A -
\frac{\braket{A}{B}}{\|\|B\|\|_2^2}B \right\|\right\|_2
\frac{\sqrt{\|\|B\|\|_2^2-1}}{\|\|B\|\|_2}\right). ````

Special case for square matrices
--------------------------------

Let ``A`` be an ``N \times M`` matrix, with ``N \> M`` given by
\$A=\begin{pmatrix}A_1\
A_2 \end{pmatrix}`` and let ``\1_{N,M} = \begin{pmatrix}\1_M\
0\end{pmatrix}``, where ``\1_M`` denotes an ``M \times M\$ identity
matrix. The numerical range of ``A`` is given by \\\[
w_{\\\|\cdot\\\|_\infty}(A; \mathbb{1}_{N,M}) = W(A_1), \\\] where
``W(A_1)`` denotes the standard numerical range.

Alternative definitions
-----------------------

Assume that ``m \ge n``. Let ``A`` be a ``m\times n `` matrix and let
``H`` be ``m\times n `` isometry matrix. We present three definitions
[aretaki2009investigating](@cite) of numerical ranges for rectangular
matrices. \begin{equation} \begin{split} w(A)&=\\{ \bra{y}A \ket{x}
: \ket{x} \in \mathbb{C}^{n}, \ket{y} \in \mathbb{C}^{m}, \Vert
x \Vert_{2} = \Vert y \Vert_{2} = 1 \\},\
w_{l}(A)&=W(H^{*}A),\
w_{h}(A)&=W(AH^{*}). \end{split} \end{equation}

Properties
----------

Let ``A`` be a ``m \times n`` matrix. Then, the following hold

-   ````w(A)=\\{z \in\mathbb{C} : \|z\| \leq \Vert A \Vert_{2}
    \\}````
-   ````w(A)=\\{ z\in\mathbb{C} : PAQ = zS, P=\ket{y}\bra{y},
    Q=\ket{x}\bra{x}, S=\ket{y}\bra{x},\
    \ket{x} \in \mathbb{C}^{n}, \ket{y} \in \mathbb{C}^{m},
    \Vert x \Vert_{2} = \Vert y \Vert_{2} = 1 \\}````
-   ````w(A)=\mathcal{D}\left(0,\max_{

\substack{\ket{\xi}_{1},\ldots,\ket{\xi}_{l}\in\mathbb{C}^{m}\
\ket{\eta}_{1},\ldots,\ket{\eta}_{k}\in\mathbb{C}^{n}}}
\left\Vert \begin{bmatrix} \bra{\xi}_{i}A\ket{\eta}_{j}\
\end{bmatrix}_{i,j=1}^{l,k} \right\Vert_{2}\right),```` where
``l, k`` are integers less than ``m, n``, respectively and \$\\{
\ket{\xi}_{1},\dots,\ket{\xi}_{l} \\}`` and ``\\{
\ket{\eta}_{1},\ldots, \ket{\eta}_{k}\\}\$ are orthonormal
vectors of ``\mathbb{C}^{m}`` and ``\mathbb{C}^{n}``, respectively.

-   ````w(A)= \\{ \braket{A}{B} : B\in M_{m,n},\\,\\, \text{rank}
    (B)=1,\\,\\, \Vert B \Vert_{F}=1 \\}````
-   ````w_{l}(A)\subseteq w_{h}(A) \mbox{ for every isometry } H\in
    M_{m,n}````
-   
```math 
 w(A)=\bigcup_{H}{w_{l}(A)}=\bigcup_{H}{w_{h}(A)}
 ```

-   ````\sigma(A_{1})\subseteq w_{h}(A)\subseteq w(A) \mbox{ for }
    H=\begin{bmatrix}

```{=html}
<!-- -->
```
                                 I_{n} \\
                                 0 \\
                               \end{bmatrix}$$

#### Proposition

Let ``A\in M_{m,n}``, ``m\>n`` and ``\lambda_{0} (\neq 0)`` be
sharp point of ``w_{h}(A)=F(AH^{*})`` for ``H\in M_{m,n}``,
``H^{*}H=I_{n}``. Then ``\lambda_{0}\in \sigma(H^{*}A)`` and is
also sharp point of ``w_{l}(A)=F(H^{*}A)``.

#### Futher Generalizations

-   [Higher rank numerical range for rectangular
    matrices](/numerical-range/generalizations/numerical-range-of-a-with-respect-to-b/higher-rank-numerical-range-for-rectangular)

#### Examples

-   [Examples](/numerical-range/generalizations/numerical-range-of-a-with-respect-to-b/examples)
