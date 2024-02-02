namespace NombreEsp1{

    let num1:number;
    export function esp1 ():void {
        console.log('Hola desde esp1')
    }
    function esp2():void {
        console.log('Hola desde esp2')
    }
    esp2(); // Imprime 'Hola desde esp2'
}

// console.log(num1); // Error, no compila..
// NombreEsp1.esp2(); // Error, no compila..
NombreEsp1.esp1(); // Imprime 'Hola desde esp1'