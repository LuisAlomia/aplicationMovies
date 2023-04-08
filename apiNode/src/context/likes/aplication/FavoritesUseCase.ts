import { LikeDTO } from "../domain/DTOs/LikeDTO";
import { ILikeRepository } from "../domain/repositories/ILikeRepository";

export class FavoritesUseCase {
  private _likeRepository: ILikeRepository;

  constructor(likeRepository: ILikeRepository) {
    this._likeRepository = likeRepository;
  }

  async run(): Promise<LikeDTO[]> {
    const favorites = await this._likeRepository.favorites();

    return favorites;
  }
}
