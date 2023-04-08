import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../../context/user/aplication/DeleteUserUseCase";
import { IUserRepository } from "../../../context/user/domain/repositories/IUserRepository";
import { UserRepositoryMongoImpl } from "../../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";

export class DeleteUserController {
  private readonly _userRepository: IUserRepository;
  private readonly _deleteUserUseCase: DeleteUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._deleteUserUseCase = new DeleteUserUseCase(this._userRepository);
  }

  run = async (req: Request, resp: Response) => {
    const { userId } = req.params;

    try {
      const data = await this._deleteUserUseCase.run(userId);
      resp.status(204).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
