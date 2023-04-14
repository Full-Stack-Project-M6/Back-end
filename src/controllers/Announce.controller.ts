import { Request, Response } from "express";
import createAnnounceService from "../services/createAnnounce.service";
import deleteAnonnouceService from "../services/deleteAnnounce.service";
import updateAnnounceService from "../services/editAnnounce.service";
import createBrandService from "../services/createBrand.service";
import createColorService from "../services/createColor.service";
import createFuelService from "../services/createFuel.service";
import createModelService from "../services/createModel.service";
import createYearService from "../services/createYear.service";
import createImageService from "../services/createImages.service";

const createAnnounceController = async (req: Request, res: Response) => {
  const announce = await createAnnounceService(req.body);
  return res.status(201).json(announce);
};

const deleteAnnounceController = async (req: Request, res: Response) => {
  await deleteAnonnouceService(req.params.id);
  return res.status(204).json({});
};

const updateAnnounceController = async (req: Request, res: Response) => {
  const announce = await updateAnnounceService(req.body, req.params.id);
  return res.json(announce);
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




export  {
  createAnnounceController,
  deleteAnnounceController,
  updateAnnounceController,
  createBrandController,
  createColorController,
  createFuelController,
  createModalController,
  createYearController,
  createImageController
};