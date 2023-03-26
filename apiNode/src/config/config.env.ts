import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 9001,
  db: {
    uri: process.env.MONGO_URI || "mongodb://user_movies:27017",
  },
};
