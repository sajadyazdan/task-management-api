import express from "express";

import userController from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.post("/", userController.createUser);

userRoutes.get("/", userController.getAllUsers);

userRoutes.get("/:id", userController.getUser);

userRoutes.put("/:id", userController.updateUser);

userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
