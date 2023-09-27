function factoresPrimos() {
  var num = Number(prompt("Introduce un número entero: "));
  var divisor = 2; // Asignamos el valor del primer número primo
  var resultado = num + "= "; // Asignamos un valor de String generico

  //Controlamos si el número introducido es inferior al primer número primo (2)
  if (num == null || num == "" || num <= 1 ) {
    resultado = "Introduce un valor válido";
  } else { 
    while (num >= 2) { 
      if (num % divisor == 0) { // El resto debe dar cero
          resultado = resultado + divisor; // añade el divisor al "string" de la variable resultado
          num = num / divisor; // Se divide el numéro introducido y se guarda en la variable num
        if (num >= 2) { // Condción para añadir la "x" entre los divisores
          resultado = resultado + " x ";
        }
      } else {
        divisor++; // Si el resto no da cero, se incrementa el valor del divisisor
      }
    }
  }
  alert(resultado);
}
