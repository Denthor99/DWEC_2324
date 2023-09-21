function conversion() {
    var kilometros=prompt("Introduce el número de kilometros");
    var metros;
    if (kilometros==null|| kilometros==""){
        metros="Introduce correctamente los kilometros";
    } else{
        metros=kilometros+" kms serían "+(parseInt(kilometros)*5/18)+" metros por segundo";
    }
    alert(metros);
}