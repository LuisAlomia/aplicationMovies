import { Request, Response } from "express";
import { GetAllUserUseCase } from "../../../context/user/aplication/GetAllUserUseCase";
import { IUserRepository } from "../../../context/user/domain/repositories/IUserRepository";
import { UserRepositoryMongoImpl } from "../../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";

export class GetAllUserController {
  private readonly _userRepository: IUserRepository;
  private readonly _getAllUserUseCase: GetAllUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._getAllUserUseCase = new GetAllUserUseCase(this._userRepository);
  }

  run = async (_req: Request, resp: Response) => {
    try {
      const data = await this._getAllUserUseCase.run();
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
