import { IUserRepository } from "../domain/repositories/IUserRepository";

export class GetAllUserUseCase {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async run() {
    return this._userRepository.findAll();
  }
}
