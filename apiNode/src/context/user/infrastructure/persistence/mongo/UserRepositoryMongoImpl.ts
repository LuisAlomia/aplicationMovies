import { IUser } from "../../../domain/entities/IUserEntity";
import { UserResponseDTO } from "../../../domain/DTOs/UserResponseDTO";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { MongooseUserModel } from "./MongooseUserModel";
import { UserRequireDTO } from "../../../domain/DTOs/UserRequireDTO";

export class UserRepositoryMongoImpl implements IUserRepository {
  async findByEmail(email: string): Promise<UserResponseDTO | null> {
    const user = await MongooseUserModel.findOne({ email: email });

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
    const user = await MongooseUserModel.findOne({ id: userId });

    if (!user) return null;

    const { name, lastName, userName, email, dateOfBirth, rol, idLike } = user;

    return new UserResponseDTO(
      userId,
      name,
      lastName,
      userName,
      email,
      dateOfBirth,
      rol,
      idLike
    );
  }

  async findAll(): Promise<IUser[]> {
    const user = await MongooseUserModel.find();
    return user;
  }

  async create(user: UserRequireDTO): Promise<UserResponseDTO> {
    const saveUser = await MongooseUserModel.create(user);

    const { id, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      saveUser;

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

  async delete(userId: string): Promise<any> {
    return await MongooseUserModel.deleteOne({ id: userId });
  }

  async update(
    userId: string,
    user: Partial<UserRequireDTO>
  ): Promise<UserResponseDTO | null> {
    const updateUser = await MongooseUserModel.findOneAndUpdate(
      { id: userId },
      user,
      {
        new: true,
      }
    );

    if (!updateUser) return null;

    const { id, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      updateUser;

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
}
