import express, { Application, json } from "express";
import cors from "cors";
import { userRoute } from "./routers/UserRoute";
import { authRoute } from "./routers/AuthRoute";
import { likeRouter } from "./routers/LikeRoute";

const app: Application = express();

app.use(json());
app.use(cors());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/like", likeRouter);

export { app };
