import { Request, Response } from "express";
import { GetAllLikeUseCase } from "../../../context/likes/aplication/GetAllLikeUseCase";
import { ILikeRepository } from "../../../context/likes/domain/repositories/ILikeRepository";
import { LikeRepositoryMongoImpl } from "../../../context/likes/infrastructure/persistences/mongo/LikeRepositoryMongoImpl";

export class GetAllLikeController {
  private _likeRepository: ILikeRepository;
  private _getAllLikeUseCase: GetAllLikeUseCase;

  constructor() {
    this._likeRepository = new LikeRepositoryMongoImpl();
    this._getAllLikeUseCase = new GetAllLikeUseCase(this._likeRepository);
  }

  run = async (_req: Request, resp: Response): Promise<void> => {
    try {
      const data = await this._getAllLikeUseCase.run();
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
