import express from "express";
import { homeController } from "../controller/userController";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, homeController);

export default userRouter;
