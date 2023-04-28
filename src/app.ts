import express, { Application } from "express";
import handleError from "./errors/handleError";
import announceRoutes from "./routers/announce.routes";
import cors from "cors";
import { userRoutes } from "./routers/user.routes";
import { loginRoutes } from "./routers/login.routes";
import { addressRoutes } from "./routers/address.routes";

export const app: Application = express();
app.use(express.json());

app.use(cors());
app.use(handleError);
app.use("/announce", announceRoutes);
app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/address", addressRoutes);
