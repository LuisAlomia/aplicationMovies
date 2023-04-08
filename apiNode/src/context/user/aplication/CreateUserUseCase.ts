import { IUserRepository } from "../domain/repositories/IUserRepository";
import { UserRequireDTO } from "../domain/DTOs/UserRequireDTO";
import { UserResponseDTO } from "../domain/DTOs/UserResponseDTO";
import { UserAlreadyExists } from "../domain/errors/UserAlreadyExists";

export class CreateUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(user: UserRequireDTO): Promise<UserResponseDTO> {
    const findUser = await this._userRepository.findByEmail(user.email);

    if (findUser) throw new UserAlreadyExists();

    const newUser = await this._userRepository.create(user);

    return newUser;
  }
}
