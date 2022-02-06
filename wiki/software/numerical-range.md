# Software

## Numerical range

### Matlab / Octave

  - [An Effective Algorithm for Computing the Numerical Range by Carl C.
    Cowen and Elad
    Harel](http://www.math.iupui.edu/~ccowen/Downloads/33NumRange.html)
  - [Field of values and numerical abscissa by Nick Trefethen,
    November](http://www2.maths.ox.ac.uk/chebfun/examples/linalg/html/FieldOfValues.shtml)

### Mathematica

  - [kalvotom user from stackexchange
    mathematica](https://mathematica.stackexchange.com/questions/144041/how-to-plot-the-field-of-values-numerical-range-of-a-matrix)

### Python / Numpy

``` python
import numpy as np
import matplotlib.mlab as mlab


def numerical_range(A,resolution=0.01):
    """
    Function implements algorithm for calculation of numerical range
    http://www.math.iupui.edu/~ccowen/Downloads/33NumRange.html
    """
    A=np.asmatrix(A)
    th=np.arange(0,2*np.pi+resolution,resolution)
    k=0
    w=[]
    for j in th:
        Ath=np.exp(1j*-j)*A
        Hth=(Ath+Ath.H)/2
        e,r=np.linalg.eigh(Hth)
        r=np.matrix(r)
        e=np.real(e)
        m=e.max()
        s=mlab.find(e==m)
        if np.size(s)==1:
            w.append(np.matrix.item(r[:,s].H*A*r[:,s]))
        else:
            Kth=1j*(Hth-Ath)
            pKp=r[:,s].H*Kth*r[:,s]
            ee,rr=np.linalg.eigh(pKp)
            rr=np.matrix(rr)
            ee=np.real(ee)
            mm=ee.min()
            sm=mlab.find(ee==mm)
            temp=rr[:,sm[0]].H*r[:,s].H*A*r[:,s]*rr[:,sm[0]]
            w.append(temp[0,0])
            k+=1
            mM=ee.max()
            sM=mlab.find(ee==mM)
            temp=rr[:,sM[0]].H*r[:,s].H*A*r[:,s]*rr[:,sM[0]]
            w.append(temp[0,0])
        k+=1
    return w
```

### Julia

``` julia
using LinearAlgebra
##
function numericalrange(A,resolution=0.01)
    th = (0:resolution:2π)
    k = 0
    w = ComplexF64[]
    for i in th
        ath = exp(-i*1im)*A
        hth = (ath + ath')/2
        f = eigen(Hermitian(hth))
        r = f.values
        e = f.vectors
        m = maximum(r)
        s = findall(x ->x == m,r)
        if length(s)==1
            push!(w,(e[:,s]'*A*e[:,s])[1,1])
        else 
            kth = 1im*(hth-ath)
            pkp = e[:,s]'*kth*e[:,s]
            ff = eigen(Hermitian(pkp))
            rr = ff.values
            ee = ff.vectors
            mm = minimum(rr)
            ss = findall(x ->x == mm,rr)
            temp = ee[:,ss[1]]'*e[:,s]'*A*e[:,s]*ee[:,ss[1]]
            push!(w,temp[1,1])
            k+=1
            mM = maximum(rr)
            sM = findall(x ->x == mM,rr)
            temp = ee[:,sM[1]]'*e[:,s]*A*e[:,s]*ee[:,sM[1]]
            push!(w,temp[1,1])
        k+=1
        end
    end
    return w
end
```
