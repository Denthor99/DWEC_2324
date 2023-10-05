// Funciones del ejercicio 1, del Tema 4

// Función selección de figura.
function figuraSeleccionada() {
  var fig = Number(prompt("Elegir entre:\n1. Cubo\n2. Esfera\n3. Cilindro"));
  return fig;
}

// Función introducción de variables. El control de esta función la he introducido directamente en la función menú
// Pasaremos por parametro la variable figura, que almacenará la figura escogida de la función anterior
function variables(figura) {
  var valores = 0;
  if (figura == 1) {
    valores = Number(prompt("Introduce el lado del cubo (en cm)"));
  } else if (figura == 2) {
    valores = Number(prompt("Introduce el radio de la esfera (en cm)"));
  } else {
    var v1 = Number(prompt("Introduzca la altura del cilindro (en cm)"));
    var v2 = Number(prompt("Introduzca el radio del cilindro (en cm)"));
    valores = [v1, v2];
  }
  return valores;
}

// Función para calcular el volumen de la figura
function volumen(figura, vars) {
  var valores = vars;
  var calculo = 0;

  if (figura == 1) {
    // volumen del cubo
    calculo = Math.pow(valores, 3);
  } else if (figura == 2) {
    // volumen de la esfera
    calculo = ((4 / 3) * Math.PI) * Math.pow(valores, 3);
  } else if (figura == 3) {
    // volumen del cilindro
    var altura = valores[0];
    var radio = valores[1];
    calculo = Math.PI * Math.pow(radio, 2) * altura;
  } else {
    alert("No has introducido valores");
    return null;
  }
  alert("El volumen de la figura es: " + calculo.toFixed(2) + " cm2");
}

// Funcion para calcular el area de la figura
function area(figura, vars) {
  var valores = vars;
  var calculo = 0;

  if (figura == 1) {
    // area del cubo
    calculo = 6 * Math.pow(valores, 2);
  } else if (figura == 2) {
    // area de la esfera
    calculo = (4 * Math.PI) * Math.pow(valores, 2);
  } else if (figura == 3) {
    // area del cilindro
    var altura = valores[0];
    var radio = valores[1];
    calculo = 2 * Math.PI * radio * (altura + radio);
  } else {
    alert("No has introducido valores");
    return null;
  }
  alert("El área de la figura es: " + calculo.toFixed(2) + " cm2");
}

// Función del menú
function menu() {
  var opciones = 0; // variable que usara el switch para escoger que sentencia ejecutara
  var figura = 0; // variable que almacenará la figura
  var vars = 0; // variable que almacernará los valores necesarios para realizar las operaciones

  while (opciones!=5) {
    opciones = Number(
      prompt(
        "Elige una opción:\n1. Elija entre cubo, esfera o cilindro.\n2. Introduzca los valores de las variables.\n3. Cálculo de volumen.\n4. Cálculo de área. \n5. Finalizar."
      )
    );
    switch (opciones) {
      case 1: // Ejecuta la selección de la figura, almacenando el return correspondiente a la figura escogida
        figura = figuraSeleccionada();
        debugger;
        break;
      case 2: // Si no se introduce una figura, nos pedirá introducirla, y acto seguido nos pedirá introducir los valores.
        if (figura == 0 || figura == null || figura == "") {
          figura = figuraSeleccionada();
        }
        vars = variables(figura);
        break;
      case 3: // Si no se introducen ni la figura ni los valores, lo inrtoducimos y se realizarán los correspondientes calculos
        if (figura == 0 || figura == null || figura == "") {
          figura = figuraSeleccionada();
        }
        if (vars == 0 || vars == null || vars == "") {
          vars = variables(figura);
        } 
        volumen(figura, vars);
        break;
      case 4: // Si no se introducen ni la figura ni los valores, lo inrtoducimos y se realizarán los correspondientes calculos
        if (figura == 0 || figura == null || figura == "") {
          figura = figuraSeleccionada();
        } 
        if (vars == 0 || vars == null || vars == "") {
          vars = variables(figura);
        } 
        area(figura, vars);
        break;
      case 5: // Salida del programa
        alert("Espero que le haya sido útil esta web!");
        break;
    }
  }
}
