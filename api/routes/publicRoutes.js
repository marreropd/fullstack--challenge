const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const movementController = require("../controllers/movementController");

// user
publicRouter.get("/users", userController.index);
publicRouter.post("/users", userController.store);
publicRouter.get("/users/:id", userController.show);
publicRouter.delete("/users/:id", userController.destroy);

//movements
publicRouter.get("/movements", movementController.index);
publicRouter.get("/movementsbyquery", movementController.indexByQuery);
publicRouter.post("/movements", movementController.store);
publicRouter.get("/movements/:id", movementController.show);
publicRouter.patch("/movements/:id", movementController.update);
publicRouter.delete("/movements/:id", movementController.destroy);

module.exports = publicRouter;
