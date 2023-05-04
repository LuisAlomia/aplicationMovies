import { IUser, Rol } from "../../../../user/domain/models/IUserModel";
import { IAuthRepository } from "../../../domain/repositories/IAuthRepository";

export class AuthRepositoryMemory implements IAuthRepository {
  private data: IUser = {
    uuid: "1516546846xxsjkbxksjx",
    name: "luis",
    lastName: "val",
    userName: "luis123",
    email: "luis@gmail.com",
    password: "$2b$10$QdhO7bfp8LYNiw43p9QmluLLcl8.H3zMlHTPUok0lLxtH2PJWAguS",
    dateOfBirth: new Date(21 - 5 - 1994),
    rol: Rol.admin,
    idLike: [],
  };

  async login(auth: string): Promise<IUser | null> {
    let user: IUser | null;

    if (auth.includes("@") && this.data.email === auth) {
      return (user = this.data);
    }

    if (this.data.userName === auth) {
      user = this.data;
    } else {
      return null;
    }

    return user;
  }
}
