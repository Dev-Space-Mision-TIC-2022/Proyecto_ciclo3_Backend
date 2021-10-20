import { getDB } from "../../db/db.js";
import { ObjectId } from "mongodb";

const collection = "venta";

const getAll = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection(collection).find({}).limit(50).toArray(callback);
};

const crear = async (datos, callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos.collection(collection).insertOne(datos, callback);
};

const consultar = async (id, callback) => {
  const baseDeDatos = getDB();
  console.log(id);
  await baseDeDatos
    .collection(collection)
    .find({ _id: new ObjectId(id) })
    .toArray(callback);
};

const edit = async (id, data, callback) => {
  const filtro = { _id: new ObjectId(id) };
  const operacion = {
    $set: data,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection(collection)
    .findOneAndUpdate(
      filtro,
      operacion,
      { upsert: true, returnOriginal: true },
      callback
    );
};

const deleteItem = async (id, callback) => {
  const filtro = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection(collection).deleteOne(filtro, callback);
};

export { getAll, crear, consultar, edit, deleteItem };
