const express = require("express");
const publicRouter = express.Router();
const userController = require("../controllers/userController");
const movementController = require("../controllers/movementController");
const { getToken } = require("../controllers/tokenController");
const userRouter = express.Router();
const checkJwt = require("express-jwt");
// user
publicRouter.post("/login", getToken);

publicRouter.get("/users", userController.index);
publicRouter.post("/users", userController.store);
publicRouter.get("/users/:id", userController.show);
publicRouter.delete("/users/:id", userController.destroy);

//movements
userRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
publicRouter.get("/movements", movementController.index);
publicRouter.get("/movementsbyquery", movementController.indexByQuery);
publicRouter.post("/movements", movementController.store);
publicRouter.get("/movements/:id", movementController.show);
publicRouter.patch("/movements/:id", movementController.update);
publicRouter.delete("/movements/:id", movementController.destroy);

module.exports = publicRouter;
