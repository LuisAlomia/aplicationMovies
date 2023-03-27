import { Request, Response } from "express";
import { CreateUserUseCase } from "../../context/user/aplication/CreateUserUseCase";
import { DeleteUserUseCase } from "../../context/user/aplication/DeleteUserUseCase";
import { GetAllUserUseCase } from "../../context/user/aplication/GetAllUserUseCase";
import { GetOneUserUseCase } from "../../context/user/aplication/GetOneUserUseCase";
import { UpdateUserUseCase } from "../../context/user/aplication/UpdateUserUseCase";
import { IUserRepository } from "../../context/user/domain/repositories/IUserRepository";
import { UserRepositoryMongoImpl } from "../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";

export class UserController {
  private readonly _userRepository: IUserRepository;
  private readonly _createUserUseCase: CreateUserUseCase;
  private readonly _deleteUserUseCase: DeleteUserUseCase;
  private readonly _getAllUserUseCase: GetAllUserUseCase;
  private readonly _getOneUserUseCase: GetOneUserUseCase;
  private readonly _updateUserUseCase: UpdateUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._createUserUseCase = new CreateUserUseCase(this._userRepository);
    this._deleteUserUseCase = new DeleteUserUseCase(this._userRepository);
    this._getAllUserUseCase = new GetAllUserUseCase(this._userRepository);
    this._getOneUserUseCase = new GetOneUserUseCase(this._userRepository);
    this._updateUserUseCase = new UpdateUserUseCase(this._userRepository);
  }

  createUserCtrl = async (req: Request, resp: Response) => {
    const { body } = req;
    try {
      const data = await this._createUserUseCase.run(body);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  deleteUserCtrl = async (req: Request, resp: Response) => {
    const { userId } = req.params;
    try {
      const data = await this._deleteUserUseCase.run(userId);
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  getAllUserCtrl = async (_req: Request, resp: Response) => {
    try {
      const data = await this._getAllUserUseCase.run();
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  getOneUserCtrl = async (req: Request, resp: Response) => {
    const { userId } = req.params;
    try {
      const data = await this._getOneUserUseCase.run(userId);
      resp.status(200).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };

  updateUserCtrl = async (req: Request, resp: Response) => {
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
