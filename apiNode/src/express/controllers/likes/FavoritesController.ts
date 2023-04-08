import { Request, Response } from "express";
import { FavoritesUseCase } from "../../../context/likes/aplication/FavoritesUseCase";
import { ILikeRepository } from "../../../context/likes/domain/repositories/ILikeRepository";
import { LikeRepositoryMongoImpl } from "../../../context/likes/infrastructure/persistences/mongo/LikeRepositoryMongoImpl";

export class FavoritesController {
  private _likeRepository: ILikeRepository;
  private _favoritesUseCase: FavoritesUseCase;

  constructor() {
    this._likeRepository = new LikeRepositoryMongoImpl();
    this._favoritesUseCase = new FavoritesUseCase(this._likeRepository);
  }

  run = async (_req: Request, resp: Response): Promise<void> => {
    try {
      const data = await this._favoritesUseCase.run();
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
