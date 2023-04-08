import { IUser } from "../../../../user/domain/models/IUserModel";
import { MongooseUserEntity } from "../../../../user/infrastructure/persistence/mongo/MongooseUserEntity";
import { IAuthRepository } from "../../../domain/repositories/IAuthRepository";

export class AuthRepositoryMongoImpl implements IAuthRepository {
  async login(auth: string): Promise<IUser | null> {
    let user: IUser | null;

    if (auth.includes("@")) {
      user = await MongooseUserEntity.findOne({ email: auth });
    } else {
      user = await MongooseUserEntity.findOne({ name: auth });
    }

    if (!user) return null;

    return user;
  }
}
