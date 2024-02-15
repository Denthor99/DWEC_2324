// Importamos tanto mongoDB como express
import express from 'express';
import path from 'path';
import { conectLectura } from './mongodb.js';

// Creamos la instancia de nuestro pequeño servidor express
const app = express();

const router = express.Router();
const __dirname = path.resolve();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});
// Permite la vinculación estatica de estilos, imagenes,etc
app.use(express.static(__dirname));

// Creamos la conexión
app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

// Creamos una ruta para obtener los datos
app.get('/datos', async (req, res) =>{
    const datos = await conectLectura();
    res.json(datos);
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



