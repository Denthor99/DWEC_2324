// leeHtml.js
import { createServer } from 'http';
import * as fs from 'fs';
createServer(function (req, res) {
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // El console.log se ejecuta en el servidor (en su consola)
    console.log('hola');
    res.write(data);
    res.end();
  });
}).listen(8080);