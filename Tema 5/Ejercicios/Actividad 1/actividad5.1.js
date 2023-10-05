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
 * 
*/
function meterValores(){
    var numArrray = []; // Declaramos array vacío
    var numIntroducido = 0;
    for ( var i = 0; !isNaN(numIntroducido); i++){ // El bucle se ejecutará hasta que el valor introducido sea no númerico. Se deberán controlar otras cosas dentro de la función
        numIntroducido = Number(prompt("Introduce el valor " + i + ": \nSi desea dejar de introducir valores escriba cualquier cáracter o cadena"));
        numArrray[i]=numIntroducido;
        
    }
    return numArrray;
}
function mediaArreglo(){
    

}

function rangoArreglo(){

}

function modaArreglo(){

}