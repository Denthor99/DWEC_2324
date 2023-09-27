function factorial() {
  // Declaración de variables
  var num = Number(prompt("Introduce un número"));
  var factorial = 1; // Debemos inicializarla para poder realizar la operación
  var resultado = "";

  // Controlamos si el valor introducido es un número (y que no sea negativo)
  if ( num == null || num == "" || isNaN(num) || num < 1) {
    resultado = "Introduce un valor valido";
  }else{
    // Usamos un bucle de iteracción para realizar el cálculo del factorial
  do {
    factorial = factorial * num; // Multiplicamos el valor de la variable factorial con el valor de num
    num = num - 1; // Por cada iteracción se resta uno al valor de la variable num
  } while (num >= 1); 
  resultado = "El valor del factorial es " + factorial; // Concatenación usada para mostrar el resultado
}
  alert(resultado);
}
