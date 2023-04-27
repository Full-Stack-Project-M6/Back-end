import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

export const retrieveAnnouncesService = async (
  userId: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const userAnnounces = await userRepository.findOne({
    select: {
      id: true,
      name: true,
      cellphone: true,
      email: true,
    },
    where: { id: userId },
    relations: {
      announce: {
        brand: true,
        color: true,
        fuel: true,
        image: true,
        model: true,
        year: true,
      },
    },
  });
  return userAnnounces;
};

export default retrieveAnnouncesService;
