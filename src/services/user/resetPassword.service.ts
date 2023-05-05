import { hashSync } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";

export const resetPasswordService = async (password: string, resetToken: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ reset_token: resetToken });

    if(!findUser) {
        throw new AppError("Usuário não encontrado", 404)
    }

    await userRepository.save({
        ...findUser,
        password: hashSync(password, 10),
        reset_token: null
    })
}