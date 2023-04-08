import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../context/user/aplication/UpdateUserUseCase";
import { IUserRepository } from "../../../context/user/domain/repositories/IUserRepository";
import { UserRepositoryMongoImpl } from "../../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";

export class UpdateUserController {
  private readonly _userRepository: IUserRepository;
  private readonly _updateUserUseCase: UpdateUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._updateUserUseCase = new UpdateUserUseCase(this._userRepository);
  }

  run = async (req: Request, resp: Response) => {
    const { userId } = req.params;
    const { body } = req;

    try {
      const data = await this._updateUserUseCase.run(userId, body);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
