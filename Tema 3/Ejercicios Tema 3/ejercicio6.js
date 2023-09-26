function ecuacionCuadratica() {
    // las variables de los coeficientes a introducir
    var a=Number(prompt("Introduce el coeficiente a"));
    var b=Number(prompt("Introduce el coeficiente b"));
    var c=Number(prompt("Introduce el coeficiente c"));

    //  Las variables de las distintas soluciones a plantear
    var x;
    var x1;
    var x2;
    var resultado;

    // Hemos buscado la formula general para resolver el ejercicios

    var discriminante = b*b - 4*a*c;

    if (discriminante == 0){
        x=-(b)/(2*a);
        resultado="x= "+x;
    } else if (discriminante > 0){
        x1=(-b+Math.sqrt(discriminante))/(2*a);
        x2=(-b-Math.sqrt(discriminante))/(2*a);
        resultado= "x1="+x1+", x2= "+x2;
    }else{
        resultado="No existe una solución"; // Estariamos entrando en soluciones imaginarias
    }
    
   alert(resultado);
}