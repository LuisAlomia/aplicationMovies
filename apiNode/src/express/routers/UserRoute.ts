import { Router } from "express";
import { UserController } from "../controllers/UserController";

export const userRoute = Router();

const userController = new UserController();

userRoute.get("/", userController.getAllUserCtrl);
userRoute.get("/:userId", userController.getOneUserCtrl);
userRoute.post("/", userController.createUserCtrl);
userRoute.patch("/:userId", userController.updateUserCtrl);
userRoute.delete("/:userId", userController.deleteUserCtrl);
