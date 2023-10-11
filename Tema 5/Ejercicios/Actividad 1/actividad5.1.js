/**
 * Funciones a realizar (Menú no es necesarios):
 * - Introducción de datos por parte del usuario
 * - Calcular la media
 * - Calcular el rango
 * - Calcular la moda
 * 
 */

function meterValores() {
    var numArray = []; // Declaramos un arreglo vacío
    var numIntroducido;
    var i = 0;

    while (true) {
        numIntroducido = Number(prompt("Introduce el valor " + i + ": \nSi desea dejar de introducir valores, escriba cualquier carácter o cadena"));

        if (isNaN(numIntroducido) || numIntroducido === null || numIntroducido === "") {
            break; // Salir del bucle si no se ingresó un número
        }

        numArray[i] = numIntroducido;
        i++;
    }

    return numArray;
}

function mediaArreglo(valores) {
    var arrayAnterior = valores;
    var suma = 0;
    var media = 0;

    if (arrayAnterior.length === 0){ // Si no hay valores en el array, salimos de la función
        alert("El arreglo está vacío, no se puede calcular la media");
        return;
    }

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

    if (arrayAnterior.length === 0) { // Si no hay valores en el array, salimos de la función
        alert("El arreglo está vacío, no se puede calcular el rango.");
        return;
    }

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
 * Apuntes de la pizarra
 * 
 * Escenarios para la moda
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

function modaArreglo(valores) {
    var arrayAnterior = valores;
    var conjuntoModas = {}; // Se almacenarán aquí los números que se repiten (las modas)
    var contador = {}; // Contamos cuantas veces se repiten los valores introducidos
    var maxRepeticion = 0; // Máximo de veces que se repiten

    if (arrayAnterior.length === 0) { // Si no hay valores en el array, salimos de la función
        alert("El arreglo está vacío, no se pueden calcular las modas.");
        return;
    }
   
    for (var i = 0; i < arrayAnterior.length; i++) {
        var num = arrayAnterior[i]; // Valor de i actual
        if (contador[num]) {
            contador[num]++;
        } else {
            contador[num] = 1;
        }

        // Comprobamos la frecuencia de los números
        if (contador[num] >= maxRepeticion) {
            if (contador[num] > maxRepeticion) {
                maxRepeticion = contador[num];
                conjuntoModas = [num];
            } else if (contador[num] === maxRepeticion) {
                conjuntoModas.push(num);
            }
        }
    }

    // 4 escenarios posibles
    if (maxRepeticion === 1) { // No hay moda
        alert("No hay moda en el arreglo");
    } else if (conjuntoModas.length === 1) { // Un solo valor será la moda
        alert("La moda del arreglo es: " + conjuntoModas[0]);
    } else { // Si existen dos modas, y son adyacentes, se hará la media de las modas
        if (conjuntoModas.length === 2 && conjuntoModas[0] == conjuntoModas[1]-1) { // La unica solución que he podido más o menos implementar es jugar con los indices para sacar el escenario de la "adyacencia"
            var mediaModas = (conjuntoModas[0] + conjuntoModas[1]) / 2;
            alert("Hay dos modas adyacentes, la media es: " + mediaModas);
        } else { // Muestra todas las modas si los valores no son adyacentes 
            alert("Las modas de la serie son: " + conjuntoModas);
        }
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