function factoresPrimos() {
  var num = Number(prompt("Introduce un número entero: "));
  var num2 = 2;
  var resultado = num + "= ";
  if (num == null || num == "" || num <= 1) {
    resultado = "Introduce un valor válido";
  } else {
    while (num >= 2) {
      if (num % num2 == 0) {
        resultado += num2;
        num /= num2;
        if (num >= 2) {
          resultado += " x ";
        }
      } else {
        num2++;
      }
    }
  }
  alert(resultado);
}
