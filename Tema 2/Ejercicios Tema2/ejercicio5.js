function laSuma(params) {
  var primerNum = prompt("Introduce un numero");
  var segundoNum = prompt("Introduce otro numero");
  var resultado;

  if (
    primerNum == null ||
    primerNum == "" ||
    segundoNum == null ||
    segundoNum == ""
  ) {
    resultado = "ERROR! Debes de introducir dos numeros";
  } else {
    // He tenido que usar parseInt porque si no se concatenaban los valores de las dos variables
    resultado =
      "El resultado de la suma es " +
      (parseInt(primerNum) + parseInt(segundoNum));
  }
  alert(resultado);
}