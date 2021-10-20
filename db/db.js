import { MongoClient } from "mongodb";

const stringConexion =
  "mongodb+srv://storo16:Erensnk2.021@cluster0.d8h0c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(stringConexion, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let baseDeDatos;

const conectarBD = (callback) => {
  client.connect((err, db) => {
    if (err) {
      console.error("Error conectando a la base de datos");
      return "error";
    }
    baseDeDatos = db.db("logitech");
    console.log("baseDeDatos exitosa");
    return callback();
  });
};

const getDB = () => {
  return baseDeDatos;
};

export { conectarBD, getDB };
