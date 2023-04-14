import { Router } from "express";
import {
  createAnnounceController,
  createBrandController,
  createColorController,
  createFuelController,
  createModalController,
  createYearController,
  deleteAnnounceController,
  updateAnnounceController,
} from "../controllers/Announce.controller";

const announceRoutes: Router = Router();

announceRoutes.post("", createAnnounceController);

announceRoutes.delete("/:id", deleteAnnounceController);

announceRoutes.post("/brand", createBrandController);
announceRoutes.post("/color", createColorController);
announceRoutes.post("/fuel", createFuelController);
announceRoutes.post("/model", createModalController);
announceRoutes.post("/year", createYearController);

announceRoutes.patch(
  "/:id",

  updateAnnounceController
);
export default announceRoutes;
