import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

export const retrieveUserByEmailService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({ email: email });

  if (!findUser) {
    throw new AppError("user not found", 404);
  }
  const validatedUser = await userWithoutPasswordSerializer.validate(
    findUser,
    {
      stripUnknown: true,
    }
  );
  
  return validatedUser;
}