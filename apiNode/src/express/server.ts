import express, { Application, json, Request, Response } from "express";
import cors from "cors";
import { ConnetMongoDB } from "../config/dbConnet";

import { config } from "../config/config.env";
import { userRoute } from "./routers/UserRoute";
import { authRoute } from "./routers/AuthRoute";
import { likeRouter } from "./routers/LikeRoute";

export class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = config.port;

    this.middleware();
    this.run();

    this.connectDB();
    this.init();
  }

  connectDB(): void {
    ConnetMongoDB();
  }

  middleware(): void {
    this.app.use(json());
    this.app.use(cors());
    this.app.use("/api/v1/users", userRoute);
    this.app.use("/api/v1/auth", authRoute);
    this.app.use("/api/v1/like", likeRouter);
  }

  init(): void {
    this.app.get("/", (_req: Request, resp: Response) => {
      resp.send("<h1>THIS SERVER IS CREATOR BY LUIS </h1>");
    });
  }

  run(): void {
    this.app.listen(this.port, () => {
      console.log("RUN SERVER IN PORT: " + this.port);
    });
  }
}

new Server();
