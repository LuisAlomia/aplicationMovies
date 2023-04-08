import { hashSync } from "bcrypt";
import { Request, Response } from "express";
import { UserValueObject } from "../../../context/user/domain/valueObjects/UserValueObject";
import { IUserRepository } from "../../../context/user/domain/repositories/IUserRepository";
import { CreateUserUseCase } from "../../../context/user/aplication/CreateUserUseCase";
import { UserRepositoryMongoImpl } from "../../../context/user/infrastructure/persistence/mongo/UserRepositoryMongoImpl";
import { v4 } from "uuid";

export class RegisterUserController {
  private readonly _userRepository: IUserRepository;
  private readonly _registerUserUseCase: CreateUserUseCase;

  constructor() {
    this._userRepository = new UserRepositoryMongoImpl();
    this._registerUserUseCase = new CreateUserUseCase(this._userRepository);
  }

  run = async (req: Request, resp: Response) => {
    const { name, lastName, userName, email, password, dateOfBirth } = req.body;
    try {
      const uuid = v4();
      const hastPasword = hashSync(password, 10);

      const user = new UserValueObject(
        uuid,
        name,
        lastName,
        userName,
        email,
        hastPasword,
        dateOfBirth
      );

      const data = await this._registerUserUseCase.run(user);
      resp.status(201).json(data);
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
