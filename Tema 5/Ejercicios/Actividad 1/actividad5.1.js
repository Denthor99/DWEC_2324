/**
 * Funciones a realizar (Menú no es necesarios):
 * - Introducción de datos por parte del usuario
 * - Calcular la media
 * - Calcular el rango
 * - Calcular la moda
 * 
 */


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
 * 
*/
function meterValores(){
    var numArrray = []; // Declaramos array vacío
    var numIntroducido = 0;
    var i = 0;
    do{ // El bucle se ejecutará hasta que el valor introducido sea no númerico. Se deberán controlar otras cosas dentro de la función
        numIntroducido = Number(prompt("Introduce el valor " + i + ": \nSi desea dejar de introducir valores escriba cualquier cáracter o cadena"));
        if (isNaN(numIntroducido)==false){
            numArrray[i]=0;
            break;
        }
        numArrray[i] = numIntroducido;
        i++;
    }while(!isNaN(numIntroducido))
    return numArrray;
}

function mediaArreglo(valores) {
    var arrayAnterior = valores;
    var suma = 0;
    var media = 0;
    for (var i = 0; i < arrayAnterior.length-1; i++) {
        suma = suma + valores[i];
    } 
    media = suma / arrayAnterior.length;
    alert("La media del Array es " + media);
}

function rangoArreglo(valores){
    var arrayAnterior = valores;
    var arrayOrdenado = [];
    for(var i=1;i<arrayAnterior.length;i++){
        if (arrayAnterior[i-1]>arrayAnterior[i]){
            arrayOrdenado[i];
        }
    }
}

function modaArreglo(){

}

function operaciones(){
    var valores = 0;
    if (valores == 0){
        valores=meterValores();
    } 
        mediaArreglo(valores);
    
}