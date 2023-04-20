import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

export const retrieveEspecificUserService = async (idUser: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const allUsers = await userRepository.findOneBy({ id: idUser });

  if (!allUsers) {
    throw new AppError("user not found", 404);
  }
  const validatedUser = await userWithoutPasswordSerializer.validate(allUsers, {
    stripUnknown: true,
  });

  return validatedUser;
};
