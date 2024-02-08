import { createServer } from 'http';
import {suma} from './miModulo.mjs';
import {Saludo}  from './miClase.mjs';
var saluda = new Saludo();
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>La suma es: " + suma(8,4)+"</h1>");
    res.write("<h2>"+saluda.hi()+"</h2>");
    res.end();
}).listen(8080);