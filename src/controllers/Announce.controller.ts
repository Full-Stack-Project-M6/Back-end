import { Request, Response, Locals } from "express";
import createAnnounceService from "../services/announces/createAnnounce.service";
import deleteAnonnouceService from "../services/announces/deleteAnnounce.service";
import updateAnnounceService from "../services/announces/editAnnounce.service";
import retrieveEspecificAnnounceService from "../services/announces/retrieveEspecificAnnounce.service";
import listAllAnnouncesService from "../services/announces/listAllAnnounces.service";
import listAllUsersAnnouncesService from "../services/announces/listAllUsersAnnounce.service";

const createAnnounceController = async (req: Request, res: Response) => {
  const announce = await createAnnounceService(req.body, req.user.id);
  return res.status(201).json(announce);
};

const retrieveEspecificAnnounceController = async (
  req: Request,
  res: Response
) => {
  const listAnnounce = await retrieveEspecificAnnounceService(req.params.id);
  return res.status(200).json(listAnnounce);
};

const listAnnounceALLController = async (req: Request, res: Response) => {
  const listAnnounce = await listAllAnnouncesService(req.params.user_id);
  return res.status(200).json(listAnnounce);
};

const listAllUsersAnnoncesController = async (req: Request, res: Response) => {
  const { limit, offset } = req.query;
  const currrentUrl = req.baseUrl;

  let NumberItems = Number(limit);
  let NumberPage = Number(offset);

  const listAnnounce = await listAllUsersAnnouncesService(
    NumberItems,
    NumberPage,
    currrentUrl
  );
  return res.status(200).json(listAnnounce);
};

const updateAnnounceController = async (req: Request, res: Response) => {
  const announce = await updateAnnounceService(req.body, req.params.id);
  return res.json(announce);
};

const deleteAnnounceController = async (req: Request, res: Response) => {
  await deleteAnonnouceService(req.params.id);
  return res.status(204).json({});
};

export {
  createAnnounceController,
  deleteAnnounceController,
  updateAnnounceController,
  retrieveEspecificAnnounceController,
  listAnnounceALLController,
  listAllUsersAnnoncesController,
};
