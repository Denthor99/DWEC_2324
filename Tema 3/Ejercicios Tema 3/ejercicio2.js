function parImpar() {
    var numero = Number(prompt("Introduce un número"));
    var resultado;
    
    if(numero == null || numero == ""){
        resultado= "No has introducido un valor";
    }
    else if (numero%2==0){
        resultado="Es un número par";
    }else{
        resultado="Es un número impar";
    }
    alert(resultado);
}