import express, { Application } from "express";
import handleError from "./errors/handleError";
import cors from "cors";
import { userRoutes } from "./routers/user.routes";
import { loginRoutes } from "./routers/login.routes";

export const app: Application = express();
app.use(express.json());

app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleError);
