import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";

const listEspecificAnnounceService = async (announceId: string) => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const listAnnounce: IAnnounceResponce = await announceRepository.findOne({
    where: { id: announceId },
    // relations:{user:true}
  });

  return listAnnounce;
};

export default listEspecificAnnounceService;
