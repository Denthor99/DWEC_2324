// Función para menu, función para recoger la figura, función para recoger las variables, función para las variables, función para salir
// Las funciones

// Función selección de figura. Deberemos controlar si devuelve un valor o no
function figura(){
  var fig;
  if (fig == null || fig == ""){
      fig=Number(prompt("Elegir entre:\n1. Cubo\n2. Esfera\n3. Cilindro"));
  }
    return fig;
}

// Función variables
function variables(){
  var laFigura;
  var valores;
  while (laFigura === null || laFigura ===""){
    alert("Debes de seleccionar una figura.");
    laFigura =figura();
  }
  if (laFigura == 1){
    valores = Number(prompt("Introduce el lado del cubo (en cm)"));
  } else if (laFigura == 2){
    valores = Number(prompt("Introduce el radio de la esfera (en cm)"));
  } else{
    var v1 = Number(prompt("Introduzca la altura del cilindro (en cm)"));
    var v2 = Number(prompt("Introduzca el radio del cilindro (en cm)"));
    valores = [v1,v2];
  }
  return valores;
}

// Funcion area de la figura
function area(){
  var laFigura = figura();
  var valores = variables();
  var calculo;

  if (laFigura === null || laFigura ===""){
    alert("Debes de seleccionar una figura.");
    return;
  }
  if(laFigura == 1){ // area del cubo
    calculo = 6 * Math.pow(valores,2);
  } else if (laFigura == 2){ // area de la esfera
    calculo = 4 * Math.PI * Math.pow(valores,2);
  } else if (laFigura == 3){ // area del circulo
    var altura = valores[0];
    var radio = valores[1];
    calculo = 2 * Math.PI * radio * (altura + radio);
  } else {
    alert("Figura no válida");
    return null;
  }
  alert("El área es: " + calculo + " cm2");
}

function volumen(laFigura,valores){
  var laFigura = figura();
  var valores = variables();
  var calculo;

  if (laFigura === null || laFigura ===""){
    alert("Debes de seleccionar una figura.");
    return;
  }
  if(laFigura == 1){ // volumen del cubo
    calculo = Math.pow(valores,3);
  } else if (laFigura == 2){ // volumen de la esfera
    calculo = (4 / 3) * Math.PI * Math.pow(valores, 3);;
  } else if (laFigura == 3){ // volumen del circulo
    var altura = valores[0];
    var radio = valores[1];
    calculo = Math.PI * Math.pow(radio,2) * altura;
  } else {
    alert("Figura no válida");
    return null;
  }
  alert("El volumen es: " + calculo + " cm2");
}

function menu() {
  var opciones; 
    while (opciones!==5) {
      opciones = Number(
        prompt(
          "Elige una opción:\n1. Elija entre cubo, esfera o cilindro.\n2. Introduzca los valores de las variables.\n3.Cálculo de volumen.\n4. Cálculo de área. \n5. Finalizar."
        )
      );
      switch (opciones) {
        case 1:
            figura();
            break
        case 2:
            variables();
            break;
        case 3:
            area();
            break
        case 4:
            volumen();
            break;
        case 5:
          alert("Espero que le haya sido útil esta web!");
          break;
      }
    }
}


