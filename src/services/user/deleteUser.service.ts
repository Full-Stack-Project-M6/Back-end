import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";

export const deleteUserService = async (user_id: string) => {
  if (!user_id) {
    throw new AppError("Invalid id", 404);
  }

  const usersRepo = AppDataSource.getRepository(User);
  const user = await usersRepo.findOneBy({ id: user_id });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await usersRepo
    .createQueryBuilder()
    .softDelete()
    .where("id = :id", { id: user_id })
    .execute();

  const userReturn = await usersRepo.findOne({
    where: { id: user_id },
    withDeleted: true,
  });

  return userReturn;
};
