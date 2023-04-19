import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user";
import AppError from "../errors/AppError";

export const authIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo = AppDataSource.getRepository(User);

  const userId = await userRepo.findOneBy({ id: req.params.id });

  if (!userId) {
    throw new AppError("Invalid ID", 404);
  }

  return next();
};
