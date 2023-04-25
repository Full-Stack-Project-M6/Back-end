import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";

export const retrieveAnnouncesService = async (
  userId: string
): Promise<Announce[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const userAnnounces = await userRepository.findOne({
    where: { id: userId },
    relations: { announce: true },
  });

  return userAnnounces.announce;
};

export default retrieveAnnouncesService;
