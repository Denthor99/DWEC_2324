function compararTresNum() {
    var num1 = Number(prompt("Introduce el primer valor"));
    var num2 = Number(prompt("Introduce el segundo valor"));
    var num3 = Number(prompt("Introduce el tercer valor: "));
    var resultado;

    if (num1==null||num1==""||num2==null||num2==""||num3==null||num3=="") {
        resultado = "No se han introducido los tres valores necesarios";
    
    } else if (num1 >= 10 && num1 <= 100 && num2 >= 10 && num2 <= 100 && num3 >= 10 && num3 <= 100 ){
        resultado = "OK";
    }else{
        resultado = "No cumple";
    }
    alert(resultado);
}