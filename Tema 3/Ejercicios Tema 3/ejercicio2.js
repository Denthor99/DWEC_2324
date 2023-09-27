function parImpar() {
    // Declaración de variables
    var numero = Number(prompt("Introduce un número"));
    var resultado = "";
    
    // Controlar si se ha introducido un número, además al ser 2 el primer par, deberemos comprobar si es menor a dos o no
    if(numero == null || numero == "" || numero < 2){
        resultado= "No has introducido un valor valido";
    }
    else if (numero%2==0){ // Si el resto es cero, es par
        resultado="Es un número par";
    }else{ // Si da otro resto, será impar
        resultado="Es un número impar";
    }
    alert(resultado);
}