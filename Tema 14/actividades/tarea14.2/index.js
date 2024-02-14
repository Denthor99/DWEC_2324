// Importamos tanto mongoDB como express
import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import path from 'path';

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

// Ahora configuramos el propio mongoDB

const uri = "mongodb+srv://Denthor99:5BbjUL2Vjwpn8uGb@atlascluster.5rucaax.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology:true});

// Creamos una ruta para obtener los datos
app.get('/datos', async (req, res) =>{
    try {
        await client.connect();
        const coleccion = client.db("instituto").collection("personas");
        const datos = await coleccion.find().toArray();
        res.json(datos);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
});

