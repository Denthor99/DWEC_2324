function ecuacionCuadratica() {
    // las variables de los coeficientes a introducir
    var a=Number(prompt("Introduce el coeficiente a"));
    var b=Number(prompt("Introduce el coeficiente b"));
    var c=Number(prompt("Introduce el coeficiente c"));

    //  Las variables de las distintas soluciones
    var x1;
    var x2;
    //var raiz;
    var resultado;

    // Hemos buscado la formula general para resolver el ejercicio
     raiz = Math.sqrt(Math.pow(b),2)-(4*a*c);
    var x1= -(b) + raiz/(2*a);
    var x2= -(b) - raiz/(2*a);
    resultado = x1 + ", " + x2;
    alert(raiz);

}