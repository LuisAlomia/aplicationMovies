import { Schema, model } from "mongoose";
import { ILike } from "../../../domain/models/ILikeModel";

const LikeEntitySchema = new Schema<ILike>({
  uuid: {
    type: String,
    required: true,
  },
  idMovie: {
    type: Number,
    required: true,
  },
  idUser: {
    type: String,
    required: true,
  },
  nameMovie: {
    type: String,
    required: true,
  },
  dateMovie: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const MongooseLikeEntity = model<ILike>("like", LikeEntitySchema);
