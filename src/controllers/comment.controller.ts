import { Request, Response } from "express";
import { createCommentService } from "../services/comment/createComment.service";
import { retrieveCommentsService } from "../services/comment/listComment.service";
import updateCommentService from "../services/comment/updateComment.service";
import deleteCommentService from "../services/comment/deleteComment.service";

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

export const updateCommentController = async (req: Request, res: Response) => {
  const updateComment = await updateCommentService(req.body, req.params.id);
  return res.status(200).json(updateComment);
};

export const deleteCommentController = async (req: Request, res: Response) => {
  await deleteCommentService(req.params.id);
  return res.status(204).json({});
};
