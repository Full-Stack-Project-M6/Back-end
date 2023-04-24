import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";

export const listAllAnnounceService = async (): Promise<Announce[]> => {
  const annouceRepository = AppDataSource.getRepository(Announce);

  const listAnnounce = await annouceRepository.find()

  return listAnnounce;
};

export default listAllAnnounceService;