import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";

const deleteAnonnouceService = async (announceId: string) => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const deletedAnnounce: any = await announceRepository.findOneBy({
    id: announceId,
  });

  await announceRepository.delete(deletedAnnounce);
};

export default deleteAnonnouceService;
