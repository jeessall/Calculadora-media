
function calcular() {
  
  var primeiro = parseFloat(document.getElementById("not1").value);
  var segundo = parseFloat(document.getElementById("not2").value);
  var terceiro = parseFloat(document.getElementById("not3").value);
  var quarto = parseFloat(document.getElementById("not4").value);

  var notamedia = (primeiro + segundo + terceiro + quarto) / 4;
  if (notamedia >= 7)
    alert("Sua média é " + notamedia + ". Aprovado com Sucesso ");
  else alert("Reprovado!");
 
 
}






