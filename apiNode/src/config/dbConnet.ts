import mongoose, { set } from "mongoose";
import { config } from "./config.env";

export const ConnetMongoDB = async (): Promise<void> => {
  try {
    set("strictQuery", false);
    await mongoose.connect(config.db.uri);
    console.log("DB CONNECT");
  } catch (err) {
    console.log(err);
  }
};
