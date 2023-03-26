import express, { Application, json } from "express";
import cors from "cors";
import { ConnetMongoDB } from "../config/dbConnet";

import { config } from "../config/config.env";

export class Server {
  private app: Application;
  private port: string | number;

  constructor() {
    this.app = express();
    this.port = config.port;

    this.middleware();
    this.run();

    this.connectDB();
  }

  connectDB(): void {
    ConnetMongoDB();
  }

  middleware(): void {
    this.app.use(json());
    this.app.use(cors());
  }

  run(): void {
    this.app.listen(this.port, () => {
      console.log("RUN SERVER IN PORT: " + this.port);
    });
  }
}

new Server();
