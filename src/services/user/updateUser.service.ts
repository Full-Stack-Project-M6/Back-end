import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import { IUserResponse, IUserUpdate } from "../../interfaces/user";

export const updateUserService = async (
  body: IUserUpdate,
  user_id: string
): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: user_id });

  const updateUser = await userRepo.save({
    ...user,
    ...body,
  });

  return updateUser;
};
