let fun1=function (a:number,b:string):number{return a}; // retorna el valor..
console.log(fun1(3,'tres')); // Escribe en consola el valor retornado ..
// Definida como función flecha ..
let fun2=(a:number,b:string):string=>`El número ${a}, ${b}`; // retorna la expresión
console.log(fun2(3,'tres')); // Escribe en consola la expresión retornada