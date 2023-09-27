function menorMayorTres() {
  // Declaración de variables
  var num1 = Number(prompt("Inserte el primer número:"));
  var num2 = Number(prompt("Inserte el segundo número:"));
  var num3 = Number(prompt("Inserte el tercer número:"));
  var resultado = "";

  // Controlamos si se han introducido los tres numeros requeridos
  if (( num1 == null || num1 == "") || (num2 == null || num2 == "") || 
  (  num3 == null || num3 == "")) {
    resultado = "No se han introducido los tres valores necesarios";
  }

  // Este if "mastodontico" nos permite realizar la comparación de estos tres numeros a lo bruto
  else if (num1 < num2 && num2 < num3) {
    // uno menor que dos, dos menor que tres
    resultado = "Menor = " + num1 + ", Mediano = " + num2 + ", Mayor = " + num3;
  } else if (num1 < num3 && num3 < num2) {
    // uno menor que tres, tres menor que dos
    resultado = "Menor = " + num1 + ", Mediano = " + num3 + ", Mayor = " + num2;
  } else if (num2 < num1 && num1 < num3) {
    // dos menor que uno, uno menor que tres
    resultado = "Menor = " + num2 + ", Mediano = " + num1 + ", Mayor = " + num3;
  } else if (num2 < num3 && num3 < num1) {
    //dos menor que tres, tres menor que uno
    resultado = "Menor = " + num2 + ", Mediano = " + num3 + ", Mayor = " + num1;
  } else if (num3 < num2 && num2 < num1) {
    // tres menor que dos, dos menor que uno
    resultado = "Menor = " + num3 + ", Mediano = " + num2 + ", Mayor = " + num1;
  } else if (num3 < num1 && num1 < num2) {
    // tres menor que uno, uno menor que dos
    resultado = "Menor = " + num3 + ", Mediano = " + num1 + ", Mayor = " + num2;
  } else {
    // Todos iguales
    resultado = "Los tres números son iguales";
  }

  alert(resultado);
}
