function calcularPrimas() {
  var timeTrabajo = Number(
    prompt("Introduce los años que llevas en la empresa")
  );
  var sueldo = Number(prompt("Introduce tu sueldo actual"));
  var resultado;
  if (timeTrabajo >= 10 && sueldo < 750) {
    resultado = "El sueldo actual sería de unos " + sueldo * 1.1;
  } else if (timeTrabajo >= 10 && sueldo >= 750) {
    resultado = "El sueldo actual sería de unos " + sueldo * 1.05;
  } else {
    resultado =
      "No tienes derecho a una prima porque no cumples los requisitos";
  }
  alert(resultado);
}
