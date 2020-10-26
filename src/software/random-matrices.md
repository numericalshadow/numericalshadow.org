Generation of random unitary matrices
=====================================

``` {.python}
from scipy import *
def haar_measure(n):
  "A Random matrix distributed with Haar measure"
  z = (randn(n,n) + 1j*randn(n,n))/sqrt(2.0)
  q,r = linalg.qr(z)
  d = diagonal(r)
  ph = d/absolute(d)
  q = multiply(q,ph,q)
  return q
```

Generation of random quantum states
===================================
