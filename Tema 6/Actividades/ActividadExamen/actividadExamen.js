// Funciones necesarias para la realización del ejercicio
// funcion introducir valores
// funcion calculoMedia

// Funcion introducir valores
function introduceValores(){
    var matrizZonas = []; // Array vacio, representa una matriz con todas las zonas
    var zonaActual = []; // Array vacio, representa la zona actual (donde estamos introduciendo los datos)
    var numPrompt = 0;
    var contadorZonas = 0;
    var contadorTemperaturas = 0;

    while (true){
        numPrompt = prompt("Introducir valores. Temperaturas introducidas: "+ contadorTemperaturas + ". Zona Actual: " + contadorZonas + ".\nPulsa n o N para introducir datos de otra zona.\nPulsa E u X para dejar de introducir valores");

        if((numPrompt === "E" || numPrompt === "X") && zonaActual.length > 0){ // Si se introducen algunos de los caracteres y el array actual tenga contenido
            matrizZonas.push(zonaActual);
            return matrizZonas;
        } else if (numPrompt === "N" || numPrompt === "n"){
            matrizZonas.push(zonaActual);
            zonaActual=[];
            contadorZonas++;
            contadorTemperaturas = 0;
        } else {
            numPrompt = Number(numPrompt);
            zonaActual.push(numPrompt);
            contadorTemperaturas++;
        }
    }
}

// Funcion con los diferentes calculos de las medias
function calculoMedias(valores){
    var matrizAnterior = valores; // Cargamos la matriz pasada por los argumentos
    var mediaZona = 0; // Variable usada para la media de la zona
    var mediaTotal = 0; // Variable usada para la media total de todas las temperaturas
    var valoresTotales = 0; // contador con el numero de elementos de la matriz

    if (matrizAnterior.length === 0){
        alert("No hay contenido en la matriz");
        return;
    }

    for (var i = 0; i < matrizAnterior.length; i++) {
        // Media de la zona
        mediaZona = matrizAnterior[i].reduce(function(a,b){return a+b;});

        // Mostramos la media de la zona
        alert("La media de la zona "+(i+1)+" es de unos "+(mediaZona/matrizAnterior[i].length).toFixed(2)+"º");
        for (var j = 0; j < matrizAnterior[i].length; j++) {
            // Calculo de la media total
            mediaTotal+=matrizAnterior[i][j];
            valoresTotales++;
        }
    }
    alert("La media total de todas las zonas es de unos "+(mediaTotal/valoresTotales).toFixed(2)+"º");
}

// Funcion con todas las operaciones
function ejecucion(){
    var valores = 0;
    if (valores === 0){
        valores = introduceValores();
    }
    calculoMedias(valores);
}