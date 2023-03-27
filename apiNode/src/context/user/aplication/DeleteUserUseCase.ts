import { IUserRepository } from "../domain/repositories/IUserRepository";

export class DeleteUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(userId: string): Promise<string> {
    const user = await this._userRepository.findById(userId);

    if (!user) throw new Error(`User ${userId} not found`);

    await this._userRepository.delete(userId);

    return `User ${userId} delete successfully`;
  }
}
