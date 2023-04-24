import { Request, Response } from "express";
import createAnnounceService from "../services/announces/createAnnounce.service";
import deleteAnonnouceService from "../services/announces/deleteAnnounce.service";
import updateAnnounceService from "../services/announces/editAnnounce.service";
import createBrandService from "../services/brand/createBrand.service";
import createColorService from "../services/color/createColor.service";
import createFuelService from "../services/fuel/createFuel.service";
import createModelService from "../services/model/createModel.service";
import createYearService from "../services/year/createYear.service";
import createImageService from "../services/images/createImages.service";
import listEspecificAnnounceService from "../services/announces/listAnnounce.service";
import retrieveAnnouncesService from "../services/announces/listAllAnnounces.service";
import listAllAnnounceService from "../services/announces/listAllAnnounce.service";

const createAnnounceController = async (req: Request, res: Response) => {
  const announce = await createAnnounceService(req.body, req.user.id);
  return res.status(201).json(announce);
};

const listAllAnnounceController = async (req: Request, res: Response) => {
  const listAnnounce = await listAllAnnounceService();
  return res.status(200).json(listAnnounce);
};

const deleteAnnounceController = async (req: Request, res: Response) => {
  await deleteAnonnouceService(req.params.id);
  return res.status(204).json({});
};

const updateAnnounceController = async (req: Request, res: Response) => {
  const announce = await updateAnnounceService(req.body, req.params.id);
  return res.json(announce);
};

const listEspecificAnnounceController = async (req: Request, res: Response) => {
  const listAnnounce = await listEspecificAnnounceService(req.params.id);
  return res.status(200).json(listAnnounce);
};

const listAnnounceALLController = async (req: Request, res: Response) => {
  const listAnnounce = await retrieveAnnouncesService(req.params.user_id);
  return res.status(200).json(listAnnounce);
};

const createBrandController = async (req: Request, res: Response) => {
  const announce = await createBrandService(req.body);
  return res.status(201).json(announce);
};

const createColorController = async (req: Request, res: Response) => {
  const announce = await createColorService(req.body);
  return res.status(201).json(announce);
};

const createFuelController = async (req: Request, res: Response) => {
  const announce = await createFuelService(req.body);
  return res.status(201).json(announce);
};

const createModalController = async (req: Request, res: Response) => {
  const announce = await createModelService(req.body);
  return res.status(201).json(announce);
};

const createYearController = async (req: Request, res: Response) => {
  const announce = await createYearService(req.body);
  return res.status(201).json(announce);
};

const createImageController = async (req: Request, res: Response) => {
  const announce = await createImageService(req.body);
  return res.status(201).json(announce);
};

export {
  createAnnounceController,
  deleteAnnounceController,
  updateAnnounceController,
  createBrandController,
  createColorController,
  createFuelController,
  createModalController,
  createYearController,
  createImageController,
  listEspecificAnnounceController,
  listAnnounceALLController,
  listAllAnnounceController,
};
