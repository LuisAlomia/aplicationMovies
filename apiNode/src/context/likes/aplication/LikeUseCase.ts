import { LikeDTO } from "../domain/DTOs/LikeDTO";
import { ILikeRepository } from "../domain/repositories/ILikeRepository";

export class LikeUseCase {
  private _likeRepository: ILikeRepository;

  constructor(likeRepository: ILikeRepository) {
    this._likeRepository = likeRepository;
  }

  async run(like: LikeDTO): Promise<LikeDTO | void> {
    const findlike = await this._likeRepository.findUser(like.idUser);

    if (findlike?.idUser === like.idUser && like.idMovie === findlike.idMovie)
      return await this._likeRepository.delete(findlike.uuid);

    const newLike = await this._likeRepository.create(like);

    return newLike;
  }
}
