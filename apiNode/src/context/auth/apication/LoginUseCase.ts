import { compareSync } from "bcrypt";
import { IAuthModel } from "../domain/models/IAuthModel";
import { IAuthRepository } from "../domain/repositories/IAuthRepository";
import { AuthDTO } from "../domain/DTOs/AuthDTO";
import { PasswordNotValid } from "../domain/errors/PasswordNotValid";
import { UserNotFound } from "../domain/errors/UserNotFound";
import { IUser } from "../../user/domain/models/IUserModel";

export class LoginUseCase {
  private _authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this._authRepository = authRepository;
  }

  async run(auth: IAuthModel): Promise<AuthDTO> {
    const user: IUser | null = await this._authRepository.login(auth.username);

    if (!user) throw new UserNotFound();

    const userValidate: boolean = compareSync(auth.password, user.password);

    if (userValidate === false) throw new PasswordNotValid();

    const { uuid, name, email, rol } = user;

    return new AuthDTO(uuid, name, email, rol);
  }
}
