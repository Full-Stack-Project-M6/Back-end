import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce, IAnnounceUpdate } from "../../interfaces/announce";

const updateAnnounceService = async (
  announceData: IAnnounceUpdate,
  userToUpdateId: string
): Promise<IAnnounceResponce> => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const announceFind: IAnnounceResponce = await announceRepository.findOne({
    where: { id: userToUpdateId },
  });

  const announce: IAnnounceResponce = await announceRepository.save({
    ...announceFind,
    ...announceData,
  });

  return await announce;
};

export default updateAnnounceService;
