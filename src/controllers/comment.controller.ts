import { Request, Response } from "express";
import { createCommentService } from "../services/comment/createComment.service";
import { retrieveCommentsService } from "../services/comment/listComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = await createCommentService(
    req.body,
    req.user.id,
    req.params.id
  );
  return res.status(201).json(comment);
};

export const listCommentController = async (req: Request, res: Response) => {
  const listComments = await retrieveCommentsService(req.params.id);
  return res.status(200).json(listComments);
};
