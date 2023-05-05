import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";
import { randomUUID } from "node:crypto"
import { resetPasswordTemplate, sendEmail } from "../../utils/sendEmail.utils";

export const sendEmailToResetService = async (email: string, protocol: string, host: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({ email: email });

    if (!findUser) {
        throw new AppError("User not found", 404)
    }
    const resetToken = randomUUID()

    const newUser = {
        ...findUser,
        reset_token: resetToken
    }
    userRepository.save(newUser)

    const resetPasswordTemp = resetPasswordTemplate(email, newUser.name, protocol, host, resetToken)

    await sendEmail(resetPasswordTemp)
}