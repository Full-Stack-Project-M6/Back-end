import { Router } from "express";
import ensureDataIsValidMiddleware from "../middleware/ensureValidatedDate";
import {
  createUserController,
  deleteUserController,
  retrieveEspecificUserController,
  retrieveUserByEmailController,
  updateUserController,
  updateUserPasswordController,
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

userRoutes.get(
  "/:id",
  inspectTokenMiddlewares,
  retrieveEspecificUserController
);

userRoutes.get(
  "/recover_user/:email",
  retrieveUserByEmailController
);

userRoutes.patch(
  "/:id",
  inspectTokenMiddlewares,
  authIdMiddleware,
  updateUserController
);

userRoutes.patch(
  "/recover_password/:id",
  updateUserPasswordController
);

userRoutes.delete(
  "/:id",
  inspectTokenMiddlewares,
  authIdMiddleware,
  deleteUserController
);
