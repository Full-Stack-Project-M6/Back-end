import { Router } from "express";
import {
  createAnnounceController,
  deleteAnnounceController,
  listAllUsersAnnoncesController,
  listAnnounceALLController,
  retrieveEspecificAnnounceController,
  updateAnnounceController,
} from "../controllers/announce.controller";
import { inspectTokenMiddlewares } from "../middleware/inspectToken";
import ensureDataIsValidMiddleware from "../middleware/ensureValidatedDate";
import {
  createCommentController,
  deleteCommentController,
  listCommentController,
  updateCommentController,
} from "../controllers/comment.controller";

const announceRoutes: Router = Router();

announceRoutes.post("", inspectTokenMiddlewares, createAnnounceController);

announceRoutes.get(
  "/:id",
  inspectTokenMiddlewares,
  retrieveEspecificAnnounceController
);

announceRoutes.get("/all/:user_id", listAnnounceALLController);

announceRoutes.get("", listAllUsersAnnoncesController);

announceRoutes.patch("/:id", inspectTokenMiddlewares, updateAnnounceController);

announceRoutes.delete(
  "/:id",
  inspectTokenMiddlewares,
  deleteAnnounceController
);

announceRoutes.post(
  "/comment/:id",
  inspectTokenMiddlewares,
  createCommentController
);
announceRoutes.get("/comment/:id", listCommentController);
announceRoutes.patch("/comment/:id", updateCommentController);
announceRoutes.delete("/comment/:id", deleteCommentController);

export default announceRoutes;
