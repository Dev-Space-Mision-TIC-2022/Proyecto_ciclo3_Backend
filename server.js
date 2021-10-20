import express, { json, urlencoded } from "express";
import rutasProducto from "./views/producto.js";
import rutasUsuario from "./views/usuario.js";
import { conectarBD } from "./db/db.js";
import rutasVentas from "./views/ventas.js";
import Cors from "cors";

const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(Cors());
app.use(rutasProducto);
app.use(rutasUsuario);
app.use(rutasVentas);

const main = () => {
  return app.listen(5000, () => {
    console.log("escuchando puerto 5000");
  });
};

conectarBD(main);
