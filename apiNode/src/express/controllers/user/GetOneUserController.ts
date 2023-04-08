import { Request, Response } from "express";
import { GetOneUserUseCase } from "../../../context/user/aplication/GetOneUserUseCase";
import { IUserRepository } from "../../../context/user/domain/repositories/IUserRepository";
import { UserRepositoryMongoImpl } from "../../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";

export class GetOneUserController {
  private readonly _userRepository: IUserRepository;
  private readonly _getOneUserUseCase: GetOneUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._getOneUserUseCase = new GetOneUserUseCase(this._userRepository);
  }

  run = async (req: Request, resp: Response) => {
    const { userId } = req.params;

    try {
      const data = await this._getOneUserUseCase.run(userId);
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
