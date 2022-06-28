---
layout: default
title: Calculate numerical range
nav_order: 4
parent: Numerical range
permalink: /numerical-range/calculate/
custom_js: true
---

# Calculate numerical range

<div id="wykres"></div>
<div id="leftPanel">
  <div id="aspectSwitch">
      Fix aspect ratio:
      <input type="checkbox" id="aspect" name="aspect">
  </div>
  <div id="wprSwitch">
      Inpu method:
      <input type="radio" id="wprT" name="wpr" value="text" onclick="onWpr(true)"><label for="wprT">Text</label>
      <input type="radio" id="wprM" name="wpr" value="matrix" onclick="onWpr(false)"><label for="wprM">Matrix</label>
  </div>
  <div class="wejscie" id="tInput">
      Text format: [[a, b, c], [d, e, f], [g, h, i]]<br>
      <textarea id="we2" cols="50">[[1 + 5i, 2, 3], [2, 4 - i, 0], [3, 0, 1 - 2i]]</textarea><br>
      <input type="button" value="przelicz" id="przelicz2" onclick="onPrzelicz2()"/>
  </div>
  <div class="wejscie" id="mInput">
      Inpu matrix:<br>
      Matrix size: <input type="radio" id="radio2" name="radio" value="2" onclick="onRadio(2)"><label for="radio2">2x2</label><input type="radio" id="radio3" name="radio" value="3" onclick="onRadio(3)"><label for="radio3">3x3</label><input type="radio" id="radio4" name="radio" value="4" onclick="onRadio(4)"><label for="radio3">4x4</label>
      <div class="matrix"><input class="cell" type="text" id="a00" value="1+5i"><input class="cell" type="text" id="a10" value="2"><input class="cell" type="text" id="a20" value="3"><input class="cell" type="text" id="a30" value="3">
      <br><input class="cell" type="text" id="a01" value="2"><input class="cell" type="text" id="a11" value="4-i"><input class="cell" type="text" id="a21" value="0"><input class="cell" type="text" id="a31" value="7">
      <br><input class="cell" type="text" id="a02" value="3"><input class="cell" type="text" id="a12" value="0"><input class="cell" type="text" id="a22" value="1-2i"><input class="cell" type="text" id="a32" value="1">macierzy
      <br><input class="cell" type="text" id="a03" value="3"><input class="cell" type="text" id="a13" value="7"><input class="cell" type="text" id="a23" value="1"><input class="cell" type="text" id="a33" value="3+2i"> 
      </div>
      <input type="button" value="Calculate" id="przelicz" onclick="onPrzelicz()"/>
  </div>
  <div id="results" style="display: none;"></div>
</div>

<script>
    document.getElementById('radio3').checked = true;
    onRadio(3);
    document.getElementById('wprT').checked = true;
    onWpr(true);   
</script>