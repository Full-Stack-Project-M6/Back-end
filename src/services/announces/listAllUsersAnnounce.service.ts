import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";

export const retrieveAllAnnouncesService = async (): Promise<Announce[]> => {
  const AnnounceRepository = AppDataSource.getRepository(Announce);
  const AllAnnounces = await AnnounceRepository.find();

  console.log(AllAnnounces);
  return AllAnnounces;
};

export default retrieveAllAnnouncesService;
