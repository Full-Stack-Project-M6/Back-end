import { Router } from "express";
import { userSerializer } from "../serializers/user.serializer";
import ensureDataIsValidMiddleware from "../middleware/ensureValidatedDate";
import { createUserController } from "../controllers/user.controller";

export const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
