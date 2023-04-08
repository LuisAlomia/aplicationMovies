import { Router } from "express";
import { LikeController } from "../controllers/likes/LikeController";
import { GetAllLikeController } from "../controllers/likes/GetAllLikeController";
import { FavoritesController } from "../controllers/likes/FavoritesController";

export const likeRouter = Router();

const likeController = new LikeController();
const getAllLikeController = new GetAllLikeController();
const favoritesController = new FavoritesController();

likeRouter.get("/", getAllLikeController.run);
likeRouter.post("/", likeController.run);
likeRouter.get("/favorites", favoritesController.run);
