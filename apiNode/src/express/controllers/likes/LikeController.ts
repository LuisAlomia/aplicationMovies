import { Request, Response } from "express";
import { LikeUseCase } from "../../../context/likes/aplication/LikeUseCase";
import { ILikeRepository } from "../../../context/likes/domain/repositories/ILikeRepository";
import { LikeRepositoryMongoImpl } from "../../../context/likes/infrastructure/persistences/mongo/LikeRepositoryMongoImpl";
import { LikeValueObject } from "../../../context/likes/domain/valueObjects/LikeValueObject";
import { v4 } from "uuid";

export class LikeController {
  private _likeRepository: ILikeRepository;
  private _likeUseCase: LikeUseCase;

  constructor() {
    this._likeRepository = new LikeRepositoryMongoImpl();
    this._likeUseCase = new LikeUseCase(this._likeRepository);
  }

  run = async (req: Request, resp: Response): Promise<void> => {
    const { idMovie, idUser, nameMovie, dateMovie, image } = req.body;

    try {
      const uuid = v4();

      const like = new LikeValueObject(
        uuid,
        idMovie,
        idUser,
        nameMovie,
        dateMovie,
        image
      );

      const data = await this._likeUseCase.run(like);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
