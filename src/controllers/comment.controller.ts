import { Request, Response } from "express";
import createCommentService from "../services/comment/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createCommentService(req.body, req.params.id);
  return res.status(201).json(comment);
};

export const listCommentController = async (req: Request, res: Response) => {
  const listComments = await listCommentAnnounceService(req.params.id);
  return res.status(200).json(listComments);
};
