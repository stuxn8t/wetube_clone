import { join } from "path";
import express from "express";
import morgan from "morgan";
import userRouter from "./routers/userRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "./views"));

app.use("/", userRouter);

export default app;
