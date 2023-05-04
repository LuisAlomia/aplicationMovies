import { UserRequireDTO } from "../../../domain/DTOs/UserRequireDTO";
import { UserResponseDTO } from "../../../domain/DTOs/UserResponseDTO";
import { Rol } from "../../../domain/models/IUserModel";
import { IUser } from "../../../domain/models/IUserModel";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";

export class UserRepositoryMemoryImpl implements IUserRepository {
  private data: IUser[] = [
    {
      uuid: "15xsljxsisjx454454sjkbxksjx",
      name: "diego",
      lastName: "val",
      userName: "diego123",
      email: "diego@gmail.com",
      password: "$2b$10$QdhO7bfp8LYNiw43p9QmluLLcl8.H3zMlHTPUok0lLxtH2PJWAguS",
      dateOfBirth: new Date(21 - 5 - 1994),
      rol: Rol.admin,
      idLike: [],
    },
  ];

  async findByEmail(email: string): Promise<UserResponseDTO | null> {
    const user = await this.data.find((user) => user.email === email);

    if (!user) {
      return null;
    }

    const { uuid, name, lastName, userName, dateOfBirth, rol, idLike } = user;

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

  async findById(userId: string): Promise<UserResponseDTO | null> {
    const user = await this.data.find((user) => user.uuid === userId);

    if (!user) {
      return null;
    }

    const { uuid, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      user;

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
  async findAll(): Promise<UserResponseDTO[]> {
    return await this.data;
  }

  async create(user: UserRequireDTO): Promise<UserResponseDTO> {
    await this.data.push(user);

    const findUser: any = await this.data.find(
      (users) => users.email === user.email
    );

    const { uuid, name, lastName, userName, email, dateOfBirth, rol, idLike } =
      findUser;

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
    throw new Error("Method not implemented." + userId);
  }

  update(
    userId: string,
    user: Partial<UserRequireDTO>
  ): Promise<UserResponseDTO | null> {
    throw new Error("Method not implemented." + userId + user);
  }
}
