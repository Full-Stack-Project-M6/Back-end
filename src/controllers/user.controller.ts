import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/user";
import createUserService from "../services/user/createUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";

export const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export const updateUserController = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const data = await updateUserService(userData, req.user.id);
  return res.status(200).send(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const softDeleteUser = await deleteUserService(req.params.id);
  return res.status(204).json(softDeleteUser);
};
