// Importamos el módulo de MongoDB
import { MongoClient } from "mongodb";

// Datos de la conexión a MongoDB
const uri ="mongodb+srv://Denthor99:5BbjUL2Vjwpn8uGb@atlascluster.5rucaax.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

/**
 * conectLectura(): 
 * Devuelve un array con todos los datos de la colección
 */
export async function conectLectura() {
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

/**
 * conectEscritura(req): 
 * Inserta un nuevo documento en la colección
 */
export async function conectEscritura(req) {
    try {
        await client.connect();
        const coleccion = client.db("instituto").collection("personas");
        const objeto = req;
        const result = await coleccion.insertOne(objeto);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

