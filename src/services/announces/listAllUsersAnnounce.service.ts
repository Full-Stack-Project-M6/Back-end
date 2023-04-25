import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";

export const retrieveAllAnnouncesService = async (): Promise<Announce[]> => {
  const AnnounceRepository = AppDataSource.getRepository(Announce);
  const AllAnnounces = await AnnounceRepository.find({
    relations: { user: true },
  });

  return AllAnnounces;
};

export default retrieveAllAnnouncesService;
