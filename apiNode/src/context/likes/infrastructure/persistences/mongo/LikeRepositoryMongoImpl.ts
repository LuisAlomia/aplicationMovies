import { MongooseUserEntity } from "../../../../user/infrastructure/persistence/mongo/MongooseUserEntity";
import { LikeDTO } from "../../../domain/DTOs/LikeDTO";
import { ILikeRepository } from "../../../domain/repositories/ILikeRepository";
import { MongooseLikeEntity } from "./MongooseLikeEntity";

export class LikeRepositoryMongoImpl implements ILikeRepository {
  async findUser(userId: string): Promise<LikeDTO | null> {
    const user = await MongooseLikeEntity.findOne({ idUser: userId });

    if (!user) return null;

    return user;
  }

  async findOne(likeId: string): Promise<LikeDTO | null> {
    const like = await MongooseLikeEntity.findOne({ uuid: likeId });

    if (!like) return null;

    return new LikeDTO(
      like.uuid,
      like.idMovie,
      like.idUser,
      like.nameMovie,
      like.dateMovie,
      like.image
    );
  }

  async favorites(): Promise<LikeDTO[]> {
    const favorites = await MongooseLikeEntity.aggregate([
      {
        $group: {
          _id: "$idMovie",
          count: { $count: {} },
        },
      },
    ]);

    return favorites;
  }

  async findAll(): Promise<LikeDTO[]> {
    const likes: LikeDTO[] = await MongooseLikeEntity.find({});

    const likeDTO = likes.map(
      (like) =>
        new LikeDTO(
          like.uuid,
          like.idMovie,
          like.idUser,
          like.nameMovie,
          like.dateMovie,
          like.image
        )
    );

    return likeDTO;
  }

  async create(like: LikeDTO): Promise<LikeDTO> {
    const createLike: LikeDTO = await MongooseLikeEntity.create(like);

    const { uuid, idMovie, idUser, nameMovie, dateMovie, image } = createLike;

    await MongooseUserEntity.updateOne(
      { uuid: idUser },
      { $push: { idLike: uuid } }
    );

    return new LikeDTO(uuid, idMovie, idUser, nameMovie, dateMovie, image);
  }

  async delete(likeId: string): Promise<void> {
    await MongooseLikeEntity.deleteOne({ uuid: likeId });
  }
}
