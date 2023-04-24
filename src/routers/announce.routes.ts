import { Router } from "express";
import {
  createAnnounceController,
  createBrandController,
  createColorController,
  createFuelController,
  createModalController,
  createYearController,
  deleteAnnounceController,
  listAnnounceALLController,
  listEspecificAnnounceController,
  updateAnnounceController,
} from "../controllers/Announce.controller";
import { inspectTokenMiddlewares } from "../middleware/inspectToken";
import ensureDataIsValidMiddleware from "../middleware/ensureValidatedDate";

const announceRoutes: Router = Router();

announceRoutes.post("", inspectTokenMiddlewares, createAnnounceController);
announceRoutes.get("", ListAllAnnounceController);
announceRoutes.get(
  "/:id",
  inspectTokenMiddlewares,
  listEspecificAnnounceController
);
announceRoutes.get(
  "/all/:user_id",
  inspectTokenMiddlewares,
  listAnnounceALLController
);
announceRoutes.delete(
  "/:id",
  inspectTokenMiddlewares,
  deleteAnnounceController
);
announceRoutes.post("/brand", createBrandController);
announceRoutes.post("/color", createColorController);
announceRoutes.post("/fuel", createFuelController);
announceRoutes.post("/model", createModalController);
announceRoutes.post("/year", createYearController);

announceRoutes.patch(
  "/:id",
  inspectTokenMiddlewares,

  updateAnnounceController
);
export default announceRoutes;
