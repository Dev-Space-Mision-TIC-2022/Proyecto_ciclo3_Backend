import Express from "express";
import {
  getAll,
  crear,
  consultar,
  edit,
  deleteItem,
} from "../controllers/ventas/ventasController.js";

const rutasVentas = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.json(result);
  }
};

rutasVentas.route("/Ventas").get((req, res) => {
  getAll(genericCallback(res));
});

rutasVentas.route("/Ventas/:id").get((req, res) => {
  consultar(req.params.id, genericCallback(res));
});

rutasVentas.route("/Ventas").post((req, res) => {
  console.log(req.body);
  crear(req.body, genericCallback(res));
});

rutasVentas.route("/Ventas/:id").patch((req, res) => {
  edit(req.params.id, req.body, genericCallback(res));
});

rutasVentas.route("/Ventas/:id").delete((req, res) => {
  deleteItem(req.params.id, genericCallback(res));
});

export default rutasVentas;
