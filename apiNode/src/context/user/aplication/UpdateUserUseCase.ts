import { UserRequireDTO } from "../domain/DTOs/UserRequireDTO";
import { UserResponseDTO } from "../domain/DTOs/UserResponseDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class UpdateUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(
    userId: string,
    user: Partial<UserRequireDTO>
  ): Promise<UserResponseDTO | null> {
    const findUser = await this._userRepository.findById(userId);

    if (!findUser) throw new Error(`User ${userId} not found`);

    const updateUser = await this._userRepository.update(userId, user);

    return updateUser;
  }
}
