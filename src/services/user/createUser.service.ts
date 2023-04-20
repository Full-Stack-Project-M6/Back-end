import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

const createUserService = async (userData: IUserRequest) => {
  const { email } = userData;
  const userRep = AppDataSource.getRepository(User);
  const emailUser = await userRep.findOneBy({ email: email });

  if (emailUser) {
    throw new AppError("Email as already registered", 400);
  }

  const user = userRep.create(userData);

  await userRep.save(user);

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};

export default createUserService;
