import { IUserRequest } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { Address } from "../../entities/address";
import { Repository } from "typeorm";
import { hashSync } from "bcryptjs";

const createUserService = async (userData: IUserRequest) => {
  const userRep = AppDataSource.getRepository(User);
  const addressRep: Repository<Address> = AppDataSource.getRepository(Address);
  const emailUser = await userRep.findOneBy({ email: userData.email });

  if (emailUser) {
    throw new AppError("Email as already registered", 400);
  }

  const { address, password, ...rest } = userData;
  const hashedPassword = hashSync(password, 10);

  const createaddress: Address = addressRep.create({
    ...address,
  });
  const saveaddress = await addressRep.save(createaddress);

  const createInstanceUser = userRep.create({ ...rest });

  createInstanceUser.password = hashedPassword;

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
