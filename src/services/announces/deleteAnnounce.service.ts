import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import AppError from "../../errors/AppError";

const deleteAnonnouceService = async (announceId: string) => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const deletedAnnounce: any = await announceRepository.findOneBy({
    id: announceId,
  });
  if (!deletedAnnounce) {
    throw new AppError("announce not found", 404);
  }

  await announceRepository.delete(deletedAnnounce);
};

export default deleteAnonnouceService;
