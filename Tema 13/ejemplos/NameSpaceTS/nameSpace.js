"use strict";
var NombreEsp1;
(function (NombreEsp1) {
    let num1;
    function esp1() {
        console.log('Hola desde esp1');
    }
    NombreEsp1.esp1 = esp1;
    function esp2() {
        console.log('Hola desde esp2');
    }
    esp2(); // Imprime 'Hola desde esp2'
})(NombreEsp1 || (NombreEsp1 = {}));
// console.log(num1); // Error, no compila..
// NombreEsp1.esp2(); // Error, no compila..
NombreEsp1.esp1(); // Imprime 'Hola desde esp1'
