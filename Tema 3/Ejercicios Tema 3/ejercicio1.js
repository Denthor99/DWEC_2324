function comparar() {
    var primerNum=Number(prompt("Introduce el primer número:"));
    var segundoNum=Number(prompt("Introduce el segundo número"));
    var resultado;
    if (primerNum == null ||
        primerNum == "" ||
        segundoNum == null ||
        segundoNum == "" ){
            resultado = "No has introducido valores";
    }
    else if (primerNum>segundoNum) {
        resultado=primerNum + " es el número mayor";
    } else{
        resultado=segundoNum + " es el número mayor"
    }
    alert(resultado);
    
}