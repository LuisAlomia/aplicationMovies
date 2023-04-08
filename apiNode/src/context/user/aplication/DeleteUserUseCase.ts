import { UserNotFount } from "../domain/errors/UserNotFount";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class DeleteUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run(userId: string): Promise<void> {
    const user = await this._userRepository.findById(userId);

    if (!user) throw new UserNotFount();

    await this._userRepository.delete(userId);
  }
}
