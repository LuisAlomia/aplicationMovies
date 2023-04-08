import { model, Schema } from "mongoose";
import { IUser as User } from "../../../domain/models/IUserModel";

const UserEntitySchema = new Schema<User>({
  uuid: {
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

export const MongooseUserEntity = model<User>("user", UserEntitySchema);
