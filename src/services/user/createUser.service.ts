import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { Address } from "../../entities/address";
import { Repository } from "typeorm";

const createUserService = async (userData: IUserRequest) => {
  const userRep = AppDataSource.getRepository(User);
  const addressRep: Repository<Address> = AppDataSource.getRepository(Address);
  const emailUser = await userRep.findOneBy({ email: userData.email });

  if (emailUser) {
    throw new AppError("Email as already registered", 400);
  }

  const { address, ...rest } = userData;

  const createaddress: Address = addressRep.create({
    ...address,
  });
  const saveaddress = await addressRep.save(createaddress);

  const createInstanceUser = userRep.create({ ...rest });

  const newUser = await userRep.save({
    ...createInstanceUser,
    address: saveaddress,
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
