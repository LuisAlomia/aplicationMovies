import { model, Schema } from "mongoose";
import { IUser as User } from "../../../domain/entities/IUserEntity";

const UserModelSchema = new Schema<User>({
  id: {
    type: String,
    required: true,
  },
  name: String,
  lastName: String,
  userName: String,
  email: String,
  password: String,
  dateOfBirth: {
    type: Date,
  },
  idLike: [],
  rol: {
    type: String,
    enum: ["ADMIN", "USER"],
  },
});

export const MongooseUserModel = model<User>("user", UserModelSchema);
