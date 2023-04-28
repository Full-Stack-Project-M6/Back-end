import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

export const updateUserPasswordService = async (
  userData: IUserUpdate,
  idUser: string
) => {
  if (!userData) {
    throw new AppError("Missing Params", 401);
  }

  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: idUser });

  if (!findUser) {
    throw new AppError("user not found", 404);
  }

  if (userData?.password) {
    userData.password = hashSync(userData.password, 10);
  }

  const newObj = {
    ...findUser,
    ...userData,
  };

  await userRepository.save(newObj);

  const validatedUser = await userWithoutPasswordSerializer.validate(newObj, {
    stripUnknown: true,
  });
 
  return validatedUser;
}