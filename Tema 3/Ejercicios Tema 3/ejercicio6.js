function ecuacionCuadratica() {
    // las variables de los coeficientes a introducir
    var a=Number(prompt("Introduce el coeficiente a"));
    var b=Number(prompt("Introduce el coeficiente b"));
    var c=Number(prompt("Introduce el coeficiente c"));

    //  Las variables de las distintas soluciones a plantear
    var x = "";
    var x1 = "";
    var x2 = "";
    var resultado = "";

    // Controlamos si introducimos un valor númerico o no
    if ((a == null || a == "" || isNaN(a)) || ( b == null || b == "" || isNaN(b)) || 
    (c == null || c == "" || isNaN(c))){
        resultado = "Vuelve a introducir los valores correctamente"
    } else {
    
    // La primera operación será calcular el discriminante, por lo que usaremos la formula general(b^2-4*a*c)
    var discriminante = Math.pow(b,2) - 4*a*c;

    // Según el valor de discriminante, deberemos manejar tres posibles escenarios:
    if (discriminante == 0){ // Una solución
        x=-(b)/(2*a);
        resultado="x= "+x;
    } else if (discriminante > 0 && a!=0){ // Dos soluciones posibles
        x1=(-b+Math.sqrt(discriminante))/(2*a);
        x2=(-b-Math.sqrt(discriminante))/(2*a);
        resultado= "x1=" + x1 + ", x2= " + x2;
    }else{
        resultado="No existe una solución"; // Estariamos entrando en números complejos, por lo que no habría una solución
    }
}
   alert(resultado);
}