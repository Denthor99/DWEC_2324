// Importamos tanto mongoDB como express
import express from 'express';
import path from 'path';
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
app.use(express.json())

// Creamos una ruta para obtener los datos
// app.get('/datos', async (req, res) =>{
//     const datos = await conectLectura();
//     res.json(datos);
// });

// Creamos otra ruta para enviar los datos
// app.post('/datos', async (req, res) =>{
//     //const subida = await conectEscritura();
//     const datos = await conectLectura();
// });
app.post('/datos', async (req, res) => {
    try {
        // Comprobación si se está enviando algo
        if (req.body.nombre !=='') {
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

// Prueba de  a MongoDB de un documento (funciona)
// async function pruebaSubida(){
//     try {
//         await client.connect();
//         const coleccion = client.db("instituto").collection("personas");
//         const datos = {
//             nombre:"Fede",
//             apellidos:"Lomera"
//         }
//         const result = await coleccion.insertOne(datos);
//     } catch (error) {
//         console.error(error);
//     } finally {
//         await client.close();
//     }
// }

// Creamos la conexión
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

