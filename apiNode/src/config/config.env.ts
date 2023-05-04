import dotenv from "dotenv";
dotenv.config();

const { NODE_ENV, MONGO_URI, MONGO_URI_TEST } = process.env;

const enviroment = NODE_ENV === "test" ? MONGO_URI_TEST : MONGO_URI;

export const config = {
  port: process.env.PORT || 9001,
  db: {
    uri: enviroment || "mongodb://user_movies:27017",
  },
  jwt: process.env.JWT || "secrectJWT",
};
