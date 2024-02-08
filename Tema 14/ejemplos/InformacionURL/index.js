import * as url from 'url';
var adr = 'http://localhost:8080/index.html?nombre=Juan&apellido=Gallego';
var q = url.parse(adr, true);
console.log(q.host); //devuelve 'localhost:8080'
console.log(q.pathname); //devuelve '/index.html'
console.log(q.search); //devuelve '?nombre=Juan&apellido=Gallego'
var qdata = q.query; //devuelve: { nombre: 'Juan', apellido: 'Gallego' }
console.log(qdata.apellido); //devuelve 'Gallego'
// Como forma más actualizada se puede usar la nueva API -----------:
var url1=new URL("http://localhost:8080/index.html?nombre=Juan&apellido=Gallego");
console.log(url1.pathname); //devuelve '/index.html'