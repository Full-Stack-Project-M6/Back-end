import { Router } from "express";
import ensureDataIsValidMiddleware from "../middleware/ensureValidatedDate";
import {
  createUserController,
  deleteUserController,
  resetPasswordController,
  retrieveEspecificUserController,
  sendEmailToResetController,
  updateUserController,
} from "../controllers/user.controller";
import { inspectTokenMiddlewares } from "../middleware/inspectToken";
import { authIdMiddleware } from "../middleware/authId.middleware";
import { userSerializer } from "../serializers/user.serializer";

export const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);

userRoutes.post("/sendReset", sendEmailToResetController)

userRoutes.get(
  "/:id",
  inspectTokenMiddlewares,
  retrieveEspecificUserController
);

userRoutes.patch(
  "/:id",
  inspectTokenMiddlewares,
  authIdMiddleware,
  updateUserController
);

userRoutes.patch(
  "/reset_password/:token",
  resetPasswordController
);

userRoutes.delete(
  "/:id",
  inspectTokenMiddlewares,
  authIdMiddleware,
  deleteUserController
);
