import { IUser } from "../../../user/domain/models/IUserModel";

export interface IAuthRepository {
  login(auth: string): Promise<IUser | null>;
}
