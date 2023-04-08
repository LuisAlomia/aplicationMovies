import { Router } from "express";
import { LoginController } from "../controllers/auth/LoginController";

export const authRoute = Router();

const authController = new LoginController();

authRoute.post("/login", authController.login);
