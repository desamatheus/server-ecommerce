const { Router } = require("express");
const UserController = require("../controllers/UserController/UserController.js");
const SessionController = require("../controllers/login/login.js");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Olá Mundo");
});

routes.post("/users", UserController.createUser);
routes.get("/users", UserController.getUsers);

routes.get("/users/:user_id", UserController.getUserById);

routes.post("/sessions", SessionController.createSession);

routes.post("/products/:user_id");
routes.get("/products/:user_id");
routes.patch("/products/:user_id/:product-id");
routes.delete("/products/:user_id/product_id");

routes.get("products");
routes.get("products/:product_id");

routes.post("cart/:user_id");
routes.get("cart/:user_id");

routes.get("cart/:user_id/:cart_id");

module.exports = routes;
