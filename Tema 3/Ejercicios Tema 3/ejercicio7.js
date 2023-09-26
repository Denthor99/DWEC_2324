function factorial() {
  var num = Number(prompt("Introduce un número"));
  var factorial = 1;
  var resultado;
  do {
    factorial = factorial * num;
    num -= 1;
  } while (num >= 1);
  resultado = "El valor del factorial es " + factorial;
  alert(resultado);
}
