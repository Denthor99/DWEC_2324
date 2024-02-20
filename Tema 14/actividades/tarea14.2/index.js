// Importamos tanto mongoDB como express
import express from 'express';
import path from 'path';

// Importamos los métodos con las operaciones a realizar en MongoDB
import { conectLectura,conectEscritura } from './mongodb.js';

// Creamos la instancia de nuestro pequeño servidor express
const app = express();

const router = express.Router();
const __dirname = path.resolve();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
// Permite la vinculación estatica de estilos, imagenes,etc
app.use(express.static(__dirname));

// Nos permite parsear el json recibido
app.use(express.json())
app.post('/datos', async (req, res) => {
    try {
        // Comprobación si se está enviando algo
        if (req.body.nombre && req.body.nombre !=='') {
            // Pasamos como parametro el objeto req, para así insertar esos datos a MongoDB
            await conectEscritura(req.body)

            // Llamamos al método de lectura, para cargar de nuevo la tabla
            const datos = await conectLectura();

            // Enviamos el json
            res.json(datos);
        } else {
            // Si no estamos enviando nada por el método POST, cargamos los datos
            const datos = await conectLectura();
            // Enviamos el json
            res.json(datos);
        }
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Funciona correctamente")
    }
});

// Creamos la conexión
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

