import { join } from "path";
import express from "express";
import morgan from "morgan";
import routes from "./routes";
import homeRouter from "./routers/homeRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "/views"));

app.use(express.static(__dirname + "/static"));

app.use(routes.home, homeRouter);

export default app;
