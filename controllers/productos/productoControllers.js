import { getDB } from "../../db/db.js";
import { ObjectId } from "mongodb";

const getAllProducts = async (callback) => {
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("productos")
    .find({})
    .limit(50)
    .toArray(callback);
};

const createProduct = async (datosProducto, callback) => {
  const baseDeDatos = getDB();
  console.log(datosProducto);
  await baseDeDatos.collection("productos").insertOne(datosProducto, callback);
};

const consultarProducto = async (id, callback) => {
  const baseDeDatos = getDB();
  console.log(id);
  await baseDeDatos
    .collection("productos")
    .find({ _id: new ObjectId(id) })
    .toArray(callback);
};

const editProduct = async (id, data, callback) => {
  const filtro = { _id: new ObjectId(id) };
  const operacion = {
    $set: data,
  };
  const baseDeDatos = getDB();
  await baseDeDatos
    .collection("productos")
    .findOneAndUpdate(
      filtro,
      operacion,
      { upsert: true, returnOriginal: true },
      callback
    );
};

const deleteProduct = async (id, callback) => {
  const filtro = { _id: new ObjectId(id) };
  const baseDeDatos = getDB();
  await baseDeDatos.collection("productos").deleteOne(filtro, callback);
};

export {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
  consultarProducto,
};
