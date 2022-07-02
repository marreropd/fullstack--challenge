const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");
const movementController = require("../controllers/movementController");
const { getToken, verifyToken } = require("../controllers/tokenController");

// user
Router.post("/login", getToken);

Router.get("/users", verifyToken, userController.index);
Router.post("/users", userController.store);
Router.get("/users/:id", verifyToken, userController.show);
Router.delete("/users/:id", verifyToken, userController.destroy);

//movements
Router.get("/movements", movementController.index);
Router.get("/movementsbyquery", verifyToken, movementController.indexByQuery);
Router.post("/movements", verifyToken, movementController.store);
Router.get("/movements/:id", verifyToken, movementController.show);
Router.patch("/movements/:id", verifyToken, movementController.update);
Router.delete("/movements/:id", verifyToken, movementController.destroy);

module.exports = Router;
