import { Router } from "express";
import { inspectTokenMiddlewares } from "../middleware/inspectToken";
import { updateAddressController } from "../controllers/address.controller";



export const addressRoutes: Router = Router();


addressRoutes.patch(
    "/:id",
    inspectTokenMiddlewares,
  
    updateAddressController
  );