import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";

const listAnnounceService = async (announceId) => {
    const announceRepository: Repository<Announce> =
      AppDataSource.getRepository(Announce);
  
      const listAnnounce: IAnnounceResponce = await announceRepository.findOneBy(
        {
          id: announceId,
        }
      );
  
    return listAnnounce;
  };

export default listAnnounceService;