import { LikeDTO } from "../DTOs/LikeDTO";

export interface ILikeRepository {
  findAll(): Promise<LikeDTO[]>;
  findOne(likeId: string): Promise<LikeDTO | null>;
  findUser(likeId: string): Promise<LikeDTO | null>;
  create(like: LikeDTO): Promise<LikeDTO>;
  delete(likeId: string): Promise<void>;
  favorites(): Promise<LikeDTO[]>;
}
