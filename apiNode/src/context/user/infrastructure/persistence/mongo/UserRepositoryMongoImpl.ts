import { UserResponseDTO } from "../../../domain/DTOs/UserResponseDTO";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { MongooseUserEntity } from "./MongooseUserEntity";
import { UserRequireDTO } from "../../../domain/DTOs/UserRequireDTO";
import { MongooseLikeEntity } from "../../../../likes/infrastructure/persistences/mongo/MongooseLikeEntity";

export class UserRepositoryMongoImpl implements IUserRepository {
  async findByEmail(email: string): Promise<UserResponseDTO | null> {
    const user = await MongooseUserEntity.findOne({ email: email });

    if (!user) return null;

    const { id, name, lastName, userName, dateOfBirth, rol, idLike } = user;

    return new UserResponseDTO(
      id,
      name,
      lastName,
      userName,
      email,
      dateOfBirth,
      rol,
      idLike
    );
  }

  async findById(userId: string): Promise<UserResponseDTO | null> {
    const userFind = await MongooseUserEntity.findOne({ uuid: userId });

    if (!userFind) return null;

    const user = await MongooseUserEntity.aggregate([
      {
        $lookup: {
          from: "likes",
          localField: "idLike",
          foreignField: "uuid",
          as: "likes",
        },
      },
      { $match: { uuid: userFind.uuid } },
      { $project: { idLike: 0, likes: { _id: 0, __v: 0 } } },
    ]);

    return new UserResponseDTO(
      user[0].uuid,
      user[0].name,
      user[0].lastName,
      user[0].userName,
      user[0].email,
      user[0].dateOfBirth,
      user[0].rol,
      user[0].idLike,
      user[0].likes
    );
  }

  async findAll(): Promise<UserResponseDTO[]> {
    const user = await MongooseUserEntity.aggregate([
      {
        $lookup: {
          from: "likes",
          localField: "idLike",
          foreignField: "uuid",
          as: "likes",
        },
      },
      { $project: { idLike: 0, _id: 0, __v: 0, likes: { _id: 0, __v: 0 } } },
    ]);

    const userResponseDTO: UserResponseDTO[] = user.map((user) => {
      const users: UserResponseDTO = {
        uuid: user.uuid,
        name: user.name,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        rol: user.rol,
        idLike: user.idLike,
        likes: user.likes,
      };
      return users;
    });

    return userResponseDTO;
  }

  async create(user: UserRequireDTO): Promise<UserResponseDTO> {
    const saveUser = await MongooseUserEntity.create(user);

    const { uuid, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      saveUser;

    return new UserResponseDTO(
      uuid,
      name,
      lastName,
      userName,
      email,
      dateOfBirth,
      rol,
      idLike
    );
  }

  async delete(userId: string): Promise<void> {
    await MongooseUserEntity.deleteOne({ uuid: userId });

    await MongooseLikeEntity.deleteMany({ idUser: userId });
  }

  async update(
    userId: string,
    user: Partial<UserRequireDTO>
  ): Promise<UserResponseDTO | null> {
    const updateUser = await MongooseUserEntity.findOneAndUpdate(
      { uuid: userId },
      user,
      {
        new: true,
      }
    );

    if (!updateUser) return null;

    const { uuid, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      updateUser;

    return new UserResponseDTO(
      uuid,
      name,
      lastName,
      userName,
      email,
      dateOfBirth,
      rol,
      idLike
    );
  }
}
