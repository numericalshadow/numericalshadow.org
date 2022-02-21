---
layout: default
title: Calculate numerical range
nav_order: 4
parent: Numerical range
---
# Calculate numerical range
THIS IS A MESS
\` if
(\!isset(\(_POST['calculate'])) {  echo '<span style="color: red">ATTENTION: The imaginary unit should be denoted by "j"!</span>';  }  echo '<form method="post" action="/numerical-range:calculate">';  echo '<label for="selectsize">Select size of the matrix: </label>';  echo '<select name="selectsize" id="selectsize">';  for (\)i=2;\(i<=4;\)i++)
{ if (isset($\_POST\[‘selectsize’\]) && \(_POST['selectsize']==\)i) {
echo ‘<option value="' . $i . '" selected>’ . $i . ‘</option>’; } else {
echo ‘<option value="' . $i . '">’ .
\(i . '</option>';  }  }  echo '</select>';  echo '<div id="matrix">';  echo '</div>';  echo '<label for="keep_aspect">Keep aspect ratio</label>';  if (isset(\)\_POST\[‘keep\_aspect’\])
&& $\_POST\[‘keep\_aspect’\]==‘true’) { echo
‘<input type="checkbox" name="keep_aspect" id="keep_aspect" value="true" checked/><br />’;
} else { echo
‘<input type="checkbox" name="keep_aspect" id="keep_aspect" value="true"/><br />’;
} echo
‘<input type="submit" value="Calculate" name="calculate" /><br />’;
echo ’

</form>

’;

if (isset($\_POST\[‘calculate’\]) &&
$\_POST\[‘calculate’\]==‘Calculate’) { $size = (int)
\(_POST['selectsize'];  if (\)size \!= 2 && $size \!=3 && $size \!= 4) {
echo “Wrong size of input matrix<br />”; } else {
\(keep = (\)\_POST\[‘keep\_aspect’\] === ‘true’)? ‘true’ : ‘false’;
$output = ’‘; $latex =’‘; \(success = 1;  echo '<form>';  for (\)i=0; $i
\< $size; \(i++) {  for (\)j=0; $j \< $size; $j++) {
echo’<input id="old_matrix_' . $i . '_' . $j . '" type="hidden" value="' . $_POST['matrix'][$i][$j] . '" />‘;
if (\!preg\_match(“/(-?)|(-??)/”, \(_POST['matrix'][\)i\]\[$j\]) ||
\(_POST['matrix'][\)i\]\[$j\]==’j’) { echo “Wrong value for element $i,
$j:” . \(_POST['matrix'][\)i\]\[$j\] . “<br />”; $success = 0; } else {
$output .= " " . preg\_replace(‘//’, ’‘, \(_POST['matrix'][\)i\]\[$j\]);
if (\(_POST['matrix'][\)i\]\[$j\] === ’0+0j’) {
\(latex_concat='0'; }  elseif (\)\_POST\[‘matrix’\]\[$i\]\[$j\] ===
‘0j’) {$latex\_concat=‘0’;} elseif (preg\_match(‘/0+/’,
\(_POST['matrix'][\)i\]\[$j\]))
{\(latex_concat = substr(\)\_POST\[‘matrix’\]\[$i\]\[$j\], 2);} elseif
(preg\_match(‘/0j/’, \(_POST['matrix'][\)i\]\[$j\]))
{\(latex_concat = substr(\)\_POST\[‘matrix’\]\[$i\]\[$j\], 0, -3);} else
{$latex\_concat = \(_POST['matrix'][\)i\]\[$j\];} $latex .=
$latex\_concat .’&‘; } } \(latex = rtrim(\)latex,’&‘) .’\\\\‘; $output
.= “;”; } echo’

</form>

’;

    if ($success){
      $matrix = $_POST['matrix'];
      $latex = str_replace('j', '\mathrm{i}', str_replace('1j', 'j', $latex));
      $output = ltrim(rtrim($output, ';'));
      $img = shell_exec('/usr/bin/python /home/ubuntu/numericalshadow/calc_range.py "' . $output . '" ' . $keep . ' 2>&1');
      if ($keep === 'false') {
        echo '<span style="color: red">WARNING: Aspect ration not maintained. Figure might be distorted</span>';
      }
      echo "<img src='/lib/exe/fetch.php?media=calculate:$img' /><br />";
      echo '<center>Figure: numerical range of matrix</center>';
      echo '\begin{pmatrix}';
      echo $latex;
      echo '\end{pmatrix}';
      echo '<br />';
    }

} } `{.php}`

<script type="text/javascript">

  jQuery("#selectsize").change(function() {
    var x = jQuery(this).val();
    jQuery("#matrix").html("");
    for (var i = 0; i < x; i ++) {
      for (var j=0; j<x; j++) {
        var val='0+0j';
        if (jQuery('#old_matrix_' + i + '_' + j).length){
          val = jQuery("#old_matrix_" + i + "_" + j).val();
        }
        jQuery('#matrix').append('<input value="' + val + '" style="width: 50px" type="text" name="matrix[' + i + '][' + j + ']\" />');
      }
      jQuery("#matrix").append("<br />");
    }
  }).change();
</script>

\`{=html}
