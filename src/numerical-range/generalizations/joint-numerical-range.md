Joint numerical range
=====================

### Definition

Consider \$k\$ Hermitian matrices \$A_1,\\ldots,A_k\$ of dimension \$d
\\times d\$. Their joint numerical range (JNR) \$L(A_1,\\ldots,A_k)\$ is
defined as \$\$ L(A_1,\\ldots,A_k) = \\left\\{ \\left( \\Tr \\rho
A_1,\\ldots, \\Tr \\rho A_k \\right): \\rho \\in \\Omega_d \\right\\}.
\$\$ Due to taking all mixed states the joint numerical range is a
convex body in a \$k\$-dimensional space. More information about
convexity of joint numerical range we can find in [li2020joint](@cite).

Kippenhahn Theorem\'s for joint numerical range
-----------------------------------------------

An algebraic curve has been associated with the numerical range and has
been studied from the 1930s on [plaumann2019kippenhahn](@cite). Let
\$\\1\$ denote the \$d\\times d\$ identity matrix, \\\[ p(x)=\\det( x_0
\\1 + x_1 A_1 + \\cdots + x_n A_n ), \\\] and consider the complex
projective hypersurface \\\[ \\mathcal{V}(p)=\\{x\\in\\mathbb{P}^n
\\mid p(x) = 0 \\}. \\\] It was shown that the eigenvalues of \$A_1+\\ii
A_2\$ are the foci of the affine curve of real points \\\[ T=\\{
y_1+\\ii y_2 \\mid y_1,y_2\\in\\mathbb{R},(1:y_1:y_2)\\in
\\mathcal{V}(p)^\\ast\\}\\subset\\mathbb{C}. \\\] Kippenhahn recognized
the meaning of the convex hull of \$T\$.

### Theorem

The numerical range of \$A_1+\\ii A_2\$ is the convex hull of \$T\$, in
other words, \$W(A_1+\\ii A_2)=\\text{conv}(T)\$.

Let we denote \$T_i\$ as the semi-algebraic set \\\[ T_i = \\left\\{
(y_1,\\dots,y_n) \\in (\\mathbb{R}^n)^\\ast \\mid
(1:y_1:\\dots:y_n)\\in (X_i^\\ast)\_\\text{reg} \\right\\}, \\qquad
i=1,\\dots,r \\\] and \$(X^{*}\_i)\_{\\text{reg}}\$ as the set of the
regular points of the dual variety \$X^*\$.

### Theorem

The joint numerical range \$W\$ is the convex hull of the Euclidean
closure of \$T_1\\cup\\cdots\\cup T_r\$, in other words, \$W =
\\text{conv}\\text{cl}(T_1\\cup\\cdots\\cup T_r)\$.

### Classification of JNRs

##### Two qutrit matrices

This classification comes from [keeler1997numerical](@cite). Consider
two Hermitian matrices \$A_1\$ and \$A_2\$ of size \$3 \\times 3\$. Then
there are four possible shapes of the JNRs

-   An oval\--object without any flat parts, the boundary is a sextic
    curve.

```{=html}
<!-- -->
```
-   Object with one flat part, a convex hull of a quatric curve.

```{=html}
<!-- -->
```
-   Convex hull of an ellipse and an outside point, which has two flat
    parts on the boundary.

```{=html}
<!-- -->
```
-   A triangle (when \$A_1\$ and \$A_2\$ commute). This can be further
    degenerated.

##### Three qutrit matrices

This classification is taken from [szymanski2017classification](@cite)
(see for details). Such JNRs must obey the following rules

1.  In this case we may restrict ourselves to only pure states.
2.  Any flat part in the boundary is the image of the Bloch sphere -
    two-dimensional subspace of a the sapce of \$3 \\times 3\$ Hermitian
    matrices without corner points for

all configurations of Figure 2. We are unaware of earli

1.  Two two-dimensional subspaces must share a common point, hence all
    flat parts are mutually connected.
2.  Convex geometry of a three-dimensional Euclidean space supports up
    to four mutually intersecting ellipses.
3.  If three ellipses are present in the boundary, the geometry does not
    allow for existence of any additional segment.
4.  If two segments are present in the boundary, there exist an infinite
    number o other segments.

All configurations permitted by these rules are realized. Let us denote
by \$e\$ the number of ellipses in the boundary and by \$s\$ the number
of segments. There exists object with [xie2019observing](@cite):

-   no flat parts in boundary at all \$e=0\$, \$s=0\$,
    ![](/numerical-range/generalizations/img_5903.png){.align-center
    width="200"}
-   one segment in the boundary \$e=0\$, \$s=1\$,
    ![](/numerical-range/generalizations/img_5935.png){.align-center
    width="200"}
-   one ellipse in the boundary \$e=1\$, \$s=0\$,
    ![](/numerical-range/generalizations/img_5907.png){.align-center
    width="200"}
-   one ellipse and a segment \$e=1\$, \$s=1\$,
    ![](/numerical-range/generalizations/img_5914.png){.align-center
    width="200"}
-   two ellipses in the boundry \$e=2\$, \$s=0\$,
-   two ellipses and a segment \$e=2\$, \$s=1\$,
    ![](/numerical-range/generalizations/img_5968.png){.align-center
    width="200"}
-   three ellipses \$e=3\$, \$s=0\$,
    ![](/numerical-range/generalizations/img_5886.png){.align-center
    width="200"}
-   four ellipses \$e=4\$, \$s=0\$,
    ![](/numerical-range/generalizations/img_5957.png){.align-center
    width="200"}

Additionally in the qutrit case, if there exist of the JNR, the
following configurations are possible:

-   JNR is the convex hull of an ellipsoid and a point outside the
    ellipsoid, \$e=0\$, \$s=\\infty\$,
    ![](/numerical-range/generalizations/img_5944.png){.align-center
    width="200"}
-   JNR is the convex hull of an ellipse and a point outside the affine
    hull of the ellipse, \$e=1\$, \$s=\\infty\$,
    ![](/numerical-range/generalizations/img_5944bis.png){.align-center
    width="200"}

### Application

An example application of numerical range can be found in [szymanski2019geometric](@cite), [czartowskiseparability](@cite), [plaumann2019kippenhahn](@cite).
