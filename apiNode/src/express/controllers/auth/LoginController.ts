import { Request, Response } from "express";
import { LoginUseCase } from "../../../context/auth/apication/LoginUseCase";
import { IAuthRepository } from "../../../context/auth/domain/repositories/IAuthRepository";
import { AuthRepositoryMongoImpl } from "../../../context/auth/infraestructure/persistences/mongo/AuthRepositoryMongoImpl";
import { GenerateToken } from "../../../utils/GenerateToken";
import { AuthValueObject } from "../../../context/auth/domain/valueObjects/AuthValueObject";

export class LoginController {
  private _authRepository: IAuthRepository;
  private _loginUseCase: LoginUseCase;

  constructor() {
    this._authRepository = new AuthRepositoryMongoImpl();
    this._loginUseCase = new LoginUseCase(this._authRepository);
  }

  login = async (req: Request, resp: Response) => {
    const { username, password } = req.body;
    try {
      const auth = new AuthValueObject(username, password);

      const data = await this._loginUseCase.run(auth);

      const token = new GenerateToken().run(data.uuid, data.name, data.role);

      resp.status(200).json({ token, data });
    } catch (err: any) {
      resp.status(400).json({ message: err.message });
    }
  };
}
