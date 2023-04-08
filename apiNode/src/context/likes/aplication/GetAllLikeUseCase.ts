import { LikeDTO } from "../domain/DTOs/LikeDTO";
import { ILikeRepository } from "../domain/repositories/ILikeRepository";

export class GetAllLikeUseCase {
  private _likeRepository: ILikeRepository;

  constructor(likeRepository: ILikeRepository) {
    this._likeRepository = likeRepository;
  }

  async run(): Promise<LikeDTO[]> {
    const likes = await this._likeRepository.findAll();

    return likes;
  }
}
