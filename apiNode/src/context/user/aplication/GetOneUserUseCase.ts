import { UserResponseDTO } from "../domain/DTOs/UserResponseDTO";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class GetOneUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(userId: string): Promise<UserResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) throw new Error(`User ${userId} not found`);

    return user;
  }
}
