// Importamos los módulos necesarios
import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
const __dirname = path.resolve();
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/pagAjax', (req, res) => {
// Creamos una cadena json
  let persona = {
    nombre: 'Daniel Alfonso',
    apellidos: 'Rodriguez'
  };

  // Devolvemos la cadena json creada anteriormente
  res.json(persona);
});

app.use('/', router);
app.use(express.static(__dirname));
app.listen(3000, () => {
  console.log('Escuchando en puerto 3000');
});