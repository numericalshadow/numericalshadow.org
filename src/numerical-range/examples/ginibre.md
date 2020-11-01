Numerical range of random matrices
==================================

The figures below depict numerical range for large random matrices drawn
from different ensembles. Gray areas denote numerical ranges and red
dots denote spectra of matrices.

Matrices are normalized so that for every matrix ``A``
``\Tr(AA^\dagger)=\dim(A)``.

In the figures below

-   ``r(X)= {\rm max}\\{\|z\|: z \in W(X)\\}`` denotes the matrix
    **numerical radius**
-   ``\rho(X)= \|\lambda\_{\max}\|`` denotes the matrix **spectral
    radius**,

where ``\lambda\_{\rm max}`` is the leading eigenvalue of ``X`` with
the largest modulus.

Definitions
-----------

Complex Ginibre matrices ``G_d`` of dimention ``d`` with entries
``\xi\_{ij}``, where ``\mathbb{E} \|\xi \_{ij}\|^2 =1/d``. As we
mention in the introduction, by the circular law, the spectrum of
``G_N`` is asymptotically contained in the unit disk. Note \$\mathbb{E}
\\\|G_d\\\| \_{\rm HS}^2=d\$.

Upper triangular random matrices ``T_d`` of dimension ``d`` with entries
``T\_{ij}=\xi\_{ij}`` for ``i \<j`` and ``T\_{ij}=0`` elsewhere, where
``\mathbb{E} \|\xi \_{ij}\|^2 =2/(d-1)``. Clearly, all eigenvalues of
``T_N`` equal to zero. Note \$\mathbb{E} \\\|T_d\\\| \_{\rm
HS}^2=d\$.

Diagonalized Ginibre matrices, ``D_d = Z G_d Z^{-1}`` of dimension
``d``, so that ``D\_{kl}=\lambda_k \delta\_{kl}`` where
``\lambda_k``, ``k=1,\dots, d``, denote complex eigenvalues of
``G_d``. In order to ensure the uniqueness of the probability
distribution on diagonal matrices, we assume that it is invariant under
conjugation by permutations. Note that integrating over the Girko
circular law one gets the average squared eigenvalue of the complex
Ginibre matrix, \$\langle \|\lambda\|^2\rangle =\int\_{0}^1 2x^3
dx=1/2``. Thus, ``\mathbb{E} \\\|D_d\\\| \_{\rm HS}^2=d/2\$.

Diagonal unitary matrices ``U_d`` of order ``d`` with entries
``U\_{kl}=\exp(i \phi_k) \delta\_{kl}``, where ``\phi_k`` are
independent uniformly distributed on ``\[0, 2 \pi)`` real random
variables.

Examples: ```` G_4 = \left\[\begin{array}{cccc}

                    \xi  & \xi & \xi & \xi \\
                    \xi  & \xi & \xi & \xi \\
                    \xi  & \xi & \xi & \xi \\
                    \xi  & \xi & \xi & \xi \\

\end{array}\right\], \\ T_4 = \left\[\begin{array}{cccc}

                      0  & \xi & \xi &  \xi \\
                      0  &  0  & \xi &  \xi \\
                      0  &  0  &  0  &  \xi \\
                      0  &  0  &  0  &   0  \\

\end{array}\right\], \\ D_4 = \left\[\begin{array}{cccc}

                      \lambda_1 & 0  &   0  &   0 \\
                      0  & \lambda_2 &   0  &   0 \\
                      0  &  0  &  \lambda_3 &   0 \\
                      0  &  0  &   0  &  \lambda_4 \\

\end{array}\right\] . \label{struct} ````

### Matrices drawn from Ginibre ensemble

`<center>`{=html}

  A matrix ``G\_{10}``
  -----------------------------------------------
  ![](/numerical-range/g_10.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``G\_{100}``
  ------------------------------------------------
  ![](/numerical-range/g_100.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``G\_{1000}``
  -------------------------------------------------
  ![](/numerical-range/g_1000.png){.align-center}

`</center>`{=html}

Diagonal matrices
-----------------

`<center>`{=html}

  A matrix ``D\_{10}``
  -----------------------------------------------
  ![](/numerical-range/d_10.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``D\_{100}``
  ------------------------------------------------
  ![](/numerical-range/d_100.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``D\_{1000}``
  -------------------------------------------------
  ![](/numerical-range/d_1000.png){.align-center}

`</center>`{=html}

### Strictly upper triangular matrices

`<center>`{=html}

  A matrix ``T\_{10}``
  -----------------------------------------------
  ![](/numerical-range/t_10.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``T\_{100}``
  ------------------------------------------------
  ![](/numerical-range/t_100.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``T\_{1000}``
  -------------------------------------------------
  ![](/numerical-range/t_1000.png){.align-center}

`</center>`{=html}

### Combinations

`<center>`{=html}

  A matrix ``D\_{1000}+1/\sqrt{2}T\_{1000}``
  ------------------------------------------------------
  ![](/numerical-range/d_tsq2_1000.png){.align-center}

`</center>`{=html}

`<center>`{=html}

  A matrix ``U\_{1000}+T\_{1000}``
  ---------------------------------------------------
  ![](/numerical-range/u_t_1000.png){.align-center}

`</center>`{=html}
