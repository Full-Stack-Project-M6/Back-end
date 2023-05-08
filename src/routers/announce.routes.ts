import { Router } from "express";
import {
  createAnnounceController,
  createBrandController,
  createColorController,
  createFuelController,
  createModalController,
  createYearController,
  deleteAnnounceController,
  listAllUsersAnnoncesController,
  listAnnounceALLController,
  listEspecificAnnounceController,
  updateAnnounceController,
} from "../controllers/Announce.controller";
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
  listEspecificAnnounceController
);

announceRoutes.get("/all/:user_id", listAnnounceALLController);

announceRoutes.get("", listAllUsersAnnoncesController);

announceRoutes.delete(
  "/:id",
  inspectTokenMiddlewares,
  deleteAnnounceController
);

announceRoutes.patch("/:id", inspectTokenMiddlewares, updateAnnounceController);

announceRoutes.post("/brand", createBrandController);
announceRoutes.post("/color", createColorController);
announceRoutes.post("/fuel", createFuelController);
announceRoutes.post("/model", createModalController);
announceRoutes.post("/year", createYearController);
announceRoutes.post(
  "/comment/:id",
  inspectTokenMiddlewares,
  createCommentController
);

announceRoutes.get("/comment/:id", listCommentController);
announceRoutes.patch("/comment/:id", updateCommentController);
announceRoutes.delete("/comment/:id", deleteCommentController);

export default announceRoutes;
