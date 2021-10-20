import Express from "express";
import {
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
  consultarProducto,
} from "../controllers/productos/productoControllers.js";

const rutasProducto = Express.Router();

const genericCallback = (res) => (err, result) => {
  if (err) {
    res.status(500).send(err);
  } else {
    res.json(result);
  }
};

rutasProducto.route("/Productos").get((req, res) => {
  getAllProducts(genericCallback(res));
});

rutasProducto.route("/Productos/:id").get((req, res) => {
  consultarProducto(req.params.id, genericCallback(res));
});

rutasProducto.route("/Productos").post((req, res) => {
  console.log(req.body);
  createProduct(req.body, genericCallback(res));
});

rutasProducto.route("/Productos/:id").patch((req, res) => {
  editProduct(req.params.id, req.body, genericCallback(res));
});

rutasProducto.route("/Productos/:id").delete((req, res) => {
  deleteProduct(req.params.id, genericCallback(res));
});

export default rutasProducto;
