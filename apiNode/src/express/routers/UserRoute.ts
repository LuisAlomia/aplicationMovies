import { Router } from "express";
import { RegisterUserController } from "../controllers/user/RegisterUserController";
import { GetAllUserController } from "../controllers/user/GetAllUserController";
import { GetOneUserController } from "../controllers/user/GetOneUserController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";

export const userRoute = Router();

const registerUserController = new RegisterUserController();
const getAllUserController = new GetAllUserController();
const getOneUserController = new GetOneUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

userRoute.get("/", getAllUserController.run);
userRoute.get("/:userId", getOneUserController.run);
userRoute.post("/", registerUserController.run);
userRoute.patch("/:userId", updateUserController.run);
userRoute.delete("/:userId", deleteUserController.run);
