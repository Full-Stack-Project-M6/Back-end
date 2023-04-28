import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import "dotenv/config";
import { IUserLogin } from "../../interfaces/user";
import { User } from "../../entities/user";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

export const loginService = async (userData: IUserLogin) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    email: userData.email,
  });

  if (!user) {
    throw new AppError("Email or password invalid", 401);
  }

  const passMatch = await compare(userData.password, user.password);
  
  if (!passMatch) {
    throw new AppError("Email or password invalid", 401);
  }
 
 
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );
  return token;
};
