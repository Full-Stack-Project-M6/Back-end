import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";

const listEspecificAnnounceService = async (announceId: string) => {
  const announceRepository = AppDataSource.getRepository(Announce);

  const listAnnounce = await announceRepository.findOne({
    where: { id: announceId },
    relations: {
      user: true,
      brand: true,
      color: true,
      fuel: true,
      image: true,
      model: true,
      year: true,
      comments: true,
    },
  });

  delete listAnnounce.user.password;
  return listAnnounce;
};

export default listEspecificAnnounceService;
