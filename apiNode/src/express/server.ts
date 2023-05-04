import { ConnetMongoDB } from "../config/dbConnet";
import { config } from "../config/config.env";
import { app } from "./app";

const port = config.port;

ConnetMongoDB();

const server = app.listen(port, () => {
  console.log("RUN SERVER IN PORT: " + port);
});

export { server };
