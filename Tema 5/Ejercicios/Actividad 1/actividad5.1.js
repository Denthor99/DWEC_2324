/**
 * Funciones a realizar (Menú no es necesarios):
 * - Introducción de datos por parte del usuario
 * - Calcular la media
 * - Calcular el rango
 * - Calcular la moda
 * 
 */

function meterValores(){
    var numArrray = []; // Declaramos array vacío
    var numIntroducido = 0;
    var i = 0;
    do{ // El bucle se ejecutará hasta que el valor introducido sea no númerico. Se deberán controlar otras cosas dentro de la función
        numIntroducido = Number(prompt("Introduce el valor " + i + ": \nSi desea dejar de introducir valores escriba cualquier cáracter o cadena"));
        if (isNaN(numIntroducido) || (numIntroducido==null) || (numIntroducido=="")){
            break;
        }
        numArrray[i] = numIntroducido;
        i++;
    }while(true)
    return numArrray;
}

function mediaArreglo(valores) {
    var arrayAnterior = valores;
    var suma = 0;
    var media = 0;
    for (var i = 0; i < arrayAnterior.length; i++) {
        suma = suma + valores[i];
    } 
    media = suma / arrayAnterior.length;
    alert("La media del Array es " + media);
}

function rangoArreglo(valores){
    var arrayAnterior = valores;
    var minValor = arrayAnterior[0]; // Hacemos referencia al primer valor del array, para poder realizar las comparaciones
    var maxValor = arrayAnterior[0];
    for(var i=1;i<arrayAnterior.length;i++){
        if (arrayAnterior[i] > maxValor){
            maxValor = arrayAnterior[i];
        }
        if (arrayAnterior[i] < minValor){
            minValor = arrayAnterior[i];
        }
    }
    var rango = maxValor - minValor;
    alert("El rango del array es de "+ rango);
}

/**
 * Modas
 * 1. No tengo moda
 * 2. Solamente se repite un número con respecto a los demás valores
 * 3. Existen dos modas
 *      - si existe algún valor entre ellas: serían ambas las modas
 *      - si no existe ningún valor entre ellas: la moda sería la media de ámbos valores
 * 
 * indice 3 = 2;
 * s [1,3,4,10,2,1]
 * for (a=......){
 * if(..)
 *  x[s[a]]++;
 * }
*/

function modaArreglo(valores){
    var arrayAnterior = valores;
    var conjuntoModas = {} // Se almacenarán aquí los números que se repiten (las modas)
    var contador = {}; // Contamos cuantas veces se repiten los valores introducidos 
    var maxRepeticion = 0;
    for (var i = 0; i < arrayAnterior.length; i++) {
        var num = arrayAnterior[i]; // Valor de i actual
        if(contador[num]){
            contador[num]++;
        } else {
            contador[num] = 1;
        }

        // Comprobamos la frecuencia de los numeros
        if (contador[num] >= maxRepeticion){
            maxRepeticion = contador[num];
            conjuntoModas = [num];
        } else if (contador[num] === maxRepeticion){
            conjuntoModas.push(num);
        }
    }

    if (maxRepeticion === 1){
        alert("No hay moda en el arreglo");
    } else if (conjuntoModas.length === 1){
        alert("La moda del arreglo es: " + conjuntoModas[0]);
    } else if ((conjuntoModas.length === 2) && (conjuntoModas[0] == conjuntoModas[1])) {
        var mediaModas = (conjuntoModas[0] + conjuntoModas[1]) / 2;
        alert ("Hay dos modas adyacentes, la media es:" +  mediaModas);
    
    } else{ 
        alert("Las modas de la serie son: " + conjuntoModas);
    }

}

// Esta funciónn será la encargada de ejecutar el programa
function operaciones(){
    var valores = 0;
    if (valores == 0){
        valores=meterValores();
    } 
        mediaArreglo(valores);
        rangoArreglo(valores);
        modaArreglo(valores);
    
}