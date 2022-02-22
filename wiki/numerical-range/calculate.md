---
layout: default
title: Calculate numerical range
nav_order: 4
parent: Numerical range
permalink: /numerical-range/calculate/
---
  <script src="https://unpkg.com/mathjs@10.1.1/lib/browser/math.js"></script>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

<h1>
  Expression evaluation with math.js, pretty printing with MathJax
</h1>

<table>
  <tr>
    <th>Expression</th>
    <td><input type="text" id="expr"/></td>
  </tr>
  <tr>
    <th>Result</th>
    <td><div id="result"></div></td>
  </tr>
</table>
<b>Parenthesis option:</b>
<input type="radio" name="parenthesis" value="keep" onclick="parenthesis = 'keep'; expr.oninput();" checked>keep
<input type="radio" name="parenthesis" value="auto" onclick="parenthesis = 'auto'; expr.oninput();">auto
<input type="radio" name="parenthesis" value="all" onclick="parenthesis = 'all'; expr.oninput();">all
<br/>
<b>Implicit multiplication:</b>
<input type="radio" name="implicit" value="hide" onclick="implicit = 'hide'; expr.oninput();" checked>hide
<input type="radio" name="implicit" value="show" onclick="implicit = 'show'; expr.oninput();">show


<script type="text/javascript">
console.log(math.eigs([[1, 2], [3, 4]]));
console.log(math.eigs([[3, -2], [4, -1]]));
console.log(math.eigs([[3, -2], [math.complex(4, 2), -1]]));
</script>
# Calculate numerical range
