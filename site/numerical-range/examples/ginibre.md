# Numerical range of random matrices

The figures below depict numerical range for large random matrices drawn
from different ensembles. Gray areas denote numerical ranges and red
dots denote spectra of matrices.

Matrices are normalized so that for every matrix `A`
`\Tr(AA^\dagger)=\dim(A)`.

In the figures below

  - `r(X)= {\rm max}\\{\|z\|: z \in W(X)\\}` denotes the matrix
    **numerical radius**
  - `\rho(X)= \|\lambda_{\max}\|` denotes the matrix **spectral
    radius**,

where `\lambda_{\rm max}` is the leading eigenvalue of `X` with the
largest modulus.

## Definitions

Complex Ginibre matrices `G_d` of dimention `d` with entries `\xi_{ij}`,
where `\mathbb{E} \|\xi _{ij}\|^2 =1/d`. As we mention in the
introduction, by the circular law, the spectrum of `G_N` is
asymptotically contained in the unit disk. Note $ \\|G\_d\\| \_{}^2=d$.

Upper triangular random matrices `T_d` of dimension `d` with entries
`T_{ij}=\xi_{ij}` for `i \<j` and `T_{ij}=0` elsewhere, where
`\mathbb{E} \|\xi _{ij}\|^2 =2/(d-1)`. Clearly, all eigenvalues of `T_N`
equal to zero. Note $ \\|T\_d\\| \_{}^2=d$.

Diagonalized Ginibre matrices, `D_d = Z G_d Z^{-1}` of dimension `d`, so
that `D_{kl}=\lambda_k \delta_{kl}` where `\lambda_k`, `k=1,\dots, d`,
denote complex eigenvalues of `G_d`. In order to ensure the uniqueness
of the probability distribution on diagonal matrices, we assume that it
is invariant under conjugation by permutations. Note that integrating
over the Girko circular law one gets the average squared eigenvalue of
the complex Ginibre matrix, $||<sup>2=*{0}^1 2x^3 dx=1/2`. Thus,`
\\|D\_d\\| *{}</sup>2=d/2$.

Diagonal unitary matrices `U_d` of order `d` with entries `U_{kl}=\exp(i
\phi_k) \delta_{kl}`, where `\phi_k` are independent uniformly
distributed on `\[0, 2 \pi)` real random variables.

Examples: $$ G\_4 = \[

\], \\ T\_4 = \[

\], \\ D\_4 = \[\\begin{array}{cccc}

                  \lambda_1 & 0  &   0  &   0 \\
                  0  & \lambda_2 &   0  &   0 \\
                  0  &  0  &  \lambda_3 &   0 \\
                  0  &  0  &   0  &  \lambda_4 \\

\\end{array}\] .  $$

### Matrices drawn from Ginibre ensemble

<center>

| A matrix `G_{10}`              |
| :----------------------------- |
| ![](/numerical-range/g_10.png) |

</center>

<center>

| A matrix `G_{100}`              |
| :------------------------------ |
| ![](/numerical-range/g_100.png) |

</center>

<center>

| A matrix `G_{1000}`              |
| :------------------------------- |
| ![](/numerical-range/g_1000.png) |

</center>

## Diagonal matrices

<center>

| A matrix `D_{10}`              |
| :----------------------------- |
| ![](/numerical-range/d_10.png) |

</center>

<center>

| A matrix `D_{100}`              |
| :------------------------------ |
| ![](/numerical-range/d_100.png) |

</center>

<center>

| A matrix `D_{1000}`              |
| :------------------------------- |
| ![](/numerical-range/d_1000.png) |

</center>

### Strictly upper triangular matrices

<center>

| A matrix `T_{10}`              |
| :----------------------------- |
| ![](/numerical-range/t_10.png) |

</center>

<center>

| A matrix `T_{100}`              |
| :------------------------------ |
| ![](/numerical-range/t_100.png) |

</center>

<center>

| A matrix `T_{1000}`              |
| :------------------------------- |
| ![](/numerical-range/t_1000.png) |

</center>

### Combinations

<center>

| A matrix `D_{1000}+1/\sqrt{2}T_{1000}` |
| :------------------------------------- |
| ![](/numerical-range/d_tsq2_1000.png)  |

</center>

<center>

| A matrix `U_{1000}+T_{1000}`       |
| :--------------------------------- |
| ![](/numerical-range/u_t_1000.png) |

</center>
