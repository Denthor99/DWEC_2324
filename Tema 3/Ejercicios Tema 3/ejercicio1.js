function comparar() {
    // Declaración de variables
    var primerNum=Number(prompt("Introduce el primer número:"));
    var segundoNum=Number(prompt("Introduce el segundo número"));
    var resultado = "";

    // Controlamos si se han introducido valores
    if (primerNum == null ||
        primerNum == "" ||
        segundoNum == null ||
        segundoNum == "" ){
            resultado = "No has introducido valores";
    }
    else if (primerNum>segundoNum) { // Si el primer valor es mayor al segundo
        resultado=primerNum + " es el número mayor";
    } else if (segundoNum>primerNum){ // Si el segundo valor es mayor al primero
        resultado=segundoNum + " es el número mayor"
    } else{ // Si son iguale se ejecuta esta
        resultado = "Son iguales"
    }
    alert(resultado);
    
}