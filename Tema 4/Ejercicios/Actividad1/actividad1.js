// Función para menu, función para recoger la figura, función para recoger las variables, función para las variables, función para salir
// Las funciones

// Función selección de figura
function figura(){
  var fig=Number(prompt("Elegir entre:\n1. Cubo\n2. Esfera\n3. Cilindro"));
  return fig;
}

// Función variables
function variables(){
  if (figura() == null || figura() ==""){
    alert("Debes de seleccionar una figura.");
    figura();
  }else if (figura() == 1){
    var valor = Number(prompt("Introduce el lado del cubo (en cm)"));
    return valor;
  } else if (figura() == 2){
    var valor = Number(prompt("Introduce el radio de la esfera (en cm)"));
    return valor;
  } else{
    var v1 = Number(prompt("Introduzca la altura del cilindro (en cm)"));
    var v2 = Number(prompt("Introduzca el radio del cilindro (en cm)"));
    return [v1,v2];
  }
}

// Funcion area de la figura
function area(){
  
}

function volumen(){

}

function menu() {
  var opciones = Number(
    prompt(
      "Elige una opción:\n1. Elija entre cubo, esfera o cilindro.\n2. Introduzca los valores de las variables.\n3.Cálculo de volumen.\n4. Cálculo de área. \n5. Finalizar."
    )
  );
    while (opciones!=5 || opciones == "" || opciones == null) {
      switch (opciones) {
        case 1:
            figura();
            break
        case 2:
            variables();
            break;
        case 3:
            area();
        case 4:
            volumen();
        case 5:
          alert("Espero que le haya sido útil esta web!");
          break;
      }
    }
  
}


