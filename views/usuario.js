import Express from "express";
import {
  getAll,
  crear,
  consultar,
  edit,
  deleteItem,
} from "../controllers/usuarios/usuariosController.js";

const rutasUsuario = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.json(result);
  }
};

rutasUsuario.route("/Usuarios").get((req, res) => {
  getAll(genericCallback(res));
});

rutasUsuario.route("/Usuarios/:id").get((req, res) => {
  consultar(req.params.id, genericCallback(res));
});

rutasUsuario.route("/Usuarios").post((req, res) => {
  console.log(req.body);
  crear(req.body, genericCallback(res));
});

rutasUsuario.route("/Usuarios/:id").patch((req, res) => {
  edit(req.params.id, req.body, genericCallback(res));
});

rutasUsuario.route("/Usuarios/:id").delete((req, res) => {
  deleteItem(req.params.id, genericCallback(res));
});

export default rutasUsuario;
