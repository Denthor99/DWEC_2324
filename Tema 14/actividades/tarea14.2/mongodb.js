import { MongoClient } from 'mongodb';
// Datos de conexión

const uri = "mongodb+srv://Denthor99:5BbjUL2Vjwpn8uGb@atlascluster.5rucaax.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

export async function conectLectura(){
    try {
        await client.connect();
        const coleccion = client.db("instituto").collection("personas");
        const datos = await coleccion.find().toArray();
        return datos;
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}