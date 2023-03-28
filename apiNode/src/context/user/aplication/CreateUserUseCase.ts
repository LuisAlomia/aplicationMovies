import { hashSync } from "bcrypt";
import { v4 } from "uuid";
import { IUserRepository } from "../domain/repositories/IUserRepository";
import { UserRequireDTO } from "../domain/DTOs/UserRequireDTO";
import { UserResponseDTO } from "../domain/DTOs/UserResponseDTO";
import { UserValueObject } from "../domain/valueObjects/UserValueObject";

export class CreateUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(user: UserRequireDTO): Promise<UserResponseDTO> {
    const findUser = await this._userRepository.findByEmail(user.email);

    if (findUser) throw new Error(`User with ${user.email} exist`);

    const {
      name,
      lastName,
      userName,
      email,
      password,
      dateOfBirth,
      rol,
      idLike,
    } = user;

    const uuid = v4();
    const hastPasword = hashSync(password, 10);

    const newUser = new UserValueObject(
      uuid,
      name,
      lastName,
      userName,
      email,
      hastPasword,
      dateOfBirth,
      rol,
      idLike
    );

    return await this._userRepository.create(newUser);
  }
}
