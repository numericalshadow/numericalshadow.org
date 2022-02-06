# Perturbation of unitary matrix numerical range

In our setup we consider the space `\mathrm{L}(\mathbb{C}^d)`. Imagine
that the matrices are points in space `\mathrm{L}(\mathbb{C}^d)` and the
distance between them is bounded by small constant `0 \< c \ll 1`. We
will take two unitary matrices - matrix `U \in \mathrm{U}(\mathbb{C}^d)`
and its perturbation $V (^d)`i.e.`||U-V||\_c$ by using `\infty`-Schatten
norm. We want to determine the path connecting these points given by
smooth curve. To do so, we fix continuous parametric (by parameter `t`)
curve $U(t)  (^d)`for any`t \[0,1\]$ with boundary conditions `U(0) :=
U` and `U(1) := V`. The most natural and also the shortest curve
connecting `U` and `V` is geodesic [antezana2014optimal](@cite) given by
where `\mathrm{Log}` is the matrix function such that it changes
eigenvalues `\lambda \in \lambda(U)` into `\log(\lambda(U))`, where
$-i((U)) (-, \]`. We will study how the numerical range`W(U(t))$ will be
changed depending on parameter `t`. Let $H := -i  ( U^V )`. Let us see
that`H  (^d)`and`W(H) (-, \]$ for any `U,V \in
\mathrm{U}(\mathbb{C}^d)`. We can also observe that  where
\(\widetilde{U} := V^\dagger U V \in \mathrm{U}(\mathbb{C}^d)\).

Hence, without loss of generality we can assume that `H` is a diagonal
matrix. Moreover, we can assume that `D \ge 0` which follows from simple
calculations  Let us see that the numerical range of `U(t)` for any `t
\in \[0,1\]` is invariant to above calculations although the trajectory
of `U(t)` is changed. Therefore, we will consider the curve  where `t
\in \[0,1\]` and $U  (^d)`,`D\_+  (^d)`such that`D\_+ 0$. We will focus
on the behavior of the spectrum of the unitary matrices `U(t)`, which
will reveal the behavior of `W(U(t))` for relatively small parameter
`t`. Without loss of generality we can assume that $ ( D\_+ )=1`.
Together with the fact that`D\_+  (^d)`and`D\_+ 0$ we can note that `D_+
= \sum_{i=1}^{d} p_i \ket{i}\bra{i}`, where $p  ^d$ is a probability
vector. Let us also define the set  for some matrix `M \in
\mathrm{L}(\mathbb{C}^d)` which consists of unit eigenvectors
corresponding to the eigenvalue `\lambda` of the matrix `M`. We denote
by `k=r(\lambda)` the multiplicity of eigenvalue `\lambda` whereas by
$I\_{M,} U(<sup>k,</sup>d)$ we denote the isometry which columns are
formed by eigenvectors corresponding to eigenvalue `\lambda` of a such
matrix `M`. Let $(t), (t)  `for`t 0`. We will write`(t)  (t)`for
relatively small`t 0$, whenever `\lambda(0)=\beta(0)` and $(0)=(0)$.

## Theorem

Let `U \in \mathrm{U}(\mathbb{C}^d)` be a unitary matrix with spectral
decomposition  Assume that the eigenvalue `\lambda \in \lambda(U)` is
such that `r(\lambda) = k`. Let us define a matrix `V(t)` given by  Let
`\lambda(t):=\lambda(UV(t))` and let every $\_j(t)  (t)`corresponds to
eigenvector` $. Assume that `\lambda_{1}(t), \ldots, \lambda_{k}(t)` are
such eigenvalues that `\lambda_{j}(t) \to \lambda`, as `t \to 0`. Then:

1\. If $*{ S*^U} \_{i=1}^d\\ p\_i ||^2=0$, then `\lambda` is an
eigenvalue of `UV(t)`;

2\. If `\|\\{p_i: p_i\>0\\}\|=l\<k`, then `\lambda` is an eigenvalue of
`UV(t)` and `r(\lambda) \ge k-l`;

3\. Each eigenvalue of product `UV(t)` moves counterclockwise or stays
in the initial position as parameter `t` increases;

4\. If `k=1`, then  for small $t  0$;

5\. Let `Q:=I_{U,\lambda}^\dagger D_+ I_{U,\lambda}` and `\lambda_1(Q)
\le \lambda_2(Q) \le \ldots \le \lambda_k(Q)`. Then we have  for small
`t \geq 0` and eigenvector `\ket{ x_j}` corresponding to `\lambda_j \in
\lambda(U)` is given by  where $ S^{Q}\_{\_j(Q)}$;

6\. For each `j=1,\ldots,d` we have  Moreover, 

Proof of this therorem you can see in [kukulski2020](@cite).

Intuitively speaking, this theorem gives us equations which one can use
to predict behaviour of `W(UV(t))`. Observe the postulate `(6)` fully
determines the movement of the spectrum. However, this is a theoretical
statement and in practice determining the function $t $ is a numerically
complex task. The postulates `(1)-(5)` play a key role in numerical
calculations of `W(UV(t))`. The most important fact comes from `(3)`
which says that all eigenvalues move in the same direction or stay in
the initial position. The instantaneous velocity of a given eigenvalue
in general case is given in `(5)`, while in the case of eigenvalue with
multiplicity equal one, the instantaneous velocity is determined by
`(4)`. We see that whenever the spectrum of the matrix `U` is not
degenerated, calculating these velocities is easy. What is more, when
some eigenvalue is degenerated, the postulate `(5)` not only gives us
method to calculate the trajectory of this eigenvalue, but also
determines the form of corresponding eigenvector. It is worth noting
that the postulates `(4),(5)` give us only an approximation of the
velocities, so despite being useful in numerical calculations, these
expressions are valid only in the neighbourhood of `t=0`. Moreover,
sometimes we are able to precisely specify this velocities. This happens
in the cases presented in `(1),(2)`. Whenever the calculated velocity is
zero we know for sure that this eigenvalue will stay in the initial
position. According to the postulate `(2)` the same happens when the
multiplicity of the eigenvalue is greater than the number of positive
elements of vector `p`.

## Illustration of above theorem

For each eigenvalue `\lambda(t)` of matrix `UV(t)` we mark its
instantaneous velocity given by formula $\_{i=1}^d\\ p\_i ||^2 `,
where`$ is corresponding eigenvector. Red colour denotes instantaneous
velocity equal to one and blue colour corresponds to the instantaneous
velocity equal to zero.

#### Example 1

Diagonal matrix `U=\begin{pmatrix} 1 & 0 & 0 & 0\ 0 & \ii & 0 & 0\ 0 & 0
& -1 & 0\ 0 & 0 & 0 & -\ii \end{pmatrix}.`
![](/numerical-range/examples/diagonal_4_2.gif) We act on two subspaces
with probability `p_1 = 1/3` and `p_2 = 2/3`. Eigenvalues `-1` and
`-\ii` stay in the initial position, because they lie on the orthogonal
subspace to subspace of which we acting on.

#### Example 2

Random matrix `U` of dimension `3 \times 3`.
![](/numerical-range/examples/casual_3_1.gif) Vector of probability is
equal `p = (1,0,0)`. All eigenvalues have nonzero velocity, so
degeneration is impossible.

#### Example 3

Matrix `U` of dimension `5\times 5` having eigenbasis given by the
Fourier matrix. ![](/numerical-range/examples/fourier_5_4.gif) Vector of
probability is equal `p = (3/8,1/4,1/4,1/8,0)`. Because standard basis
and Fourier basis are mutually unbiased, velocities are similar, which
implies the shape changes slightly in time.

#### Example 4

Matrix `U` with eigenvalues $(1,e^{/6}, , , , -1, -1)$.
![](/numerical-range/examples/special_7_2.gif) We act on two subspaces
with probability `p_1 = 1/3` and $p\_2 = 2/3`. In this case the
eigenvalue`$ is three fold degenerated, so it stays in the initial
position.

More examples you can find in [kukulski2020](@cite).
