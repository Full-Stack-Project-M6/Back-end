import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";

export const deleteUserService = async (user_id: string) => {
  const usersRepo = AppDataSource.getRepository(User);
  const user = await usersRepo.findOneBy({ id: user_id });

  if (!user.id) {
    throw new AppError("Invalid id", 404);
  }

  if (!user.isActive) {
    throw new AppError("User is not active", 400);
  }

  user.isActive = false;
  await usersRepo.save(user);
  return {};
};
