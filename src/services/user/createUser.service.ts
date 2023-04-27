import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { Adress } from "../../entities/adress";
import { IAdressResponce } from "../../interfaces/adress";

const createUserService = async (userData: IUserRequest) => {
  const { email } = userData;
  const userRep = AppDataSource.getRepository(User);
  const adressRep = AppDataSource.getRepository(Adress);
  const emailUser = await userRep.findOneBy({ email: email });

  if (emailUser) {
    throw new AppError("Email as already registered", 400);
  }

  const { adress, ...rest } = userData;

  const createAdress: Adress = adressRep.create({
    ...adress,
  });
  console.log(createAdress);
  const saveAdress = await adressRep.save(createAdress);

  const createInstanceUser = userRep.create({ ...rest });

  const newUser: any = userRep.save({
    ...createInstanceUser,
    address: saveAdress,
  });

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    newUser,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPassword;
};

export default createUserService;
