function calcularPrimas() {
  // Declaración de variables
  var timeTrabajo = Number(prompt("Introduce los años que llevas en la empresa"));
  var sueldo = Number(prompt("Introduce tu sueldo actual"));
  var resultado = "";

   // Controlamos si los valores introducidos son correctos
  if ((timeTrabajo == null || timeTrabajo == "") || (sueldo == null || sueldo == "")){
    resultado = "Introduce valores validos";
  } else if (timeTrabajo >= 10 && sueldo < 750) { // Se calcula la prima (10%) si cumple la condición 
    resultado = "El sueldo actual sería de unos " + sueldo * 1.1;
  } else if (timeTrabajo >= 10 && sueldo >= 750) { // Se calcula la prima (5%) si cumple la condición
    resultado = "El sueldo actual sería de unos " + sueldo * 1.05;
  } else { // No cumple ninguna de las anteriores
    resultado =
      "No tienes derecho a una prima porque no cumples los requisitos";
  }
  alert(resultado);
}
