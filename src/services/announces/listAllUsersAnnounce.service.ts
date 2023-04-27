import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";

export const retrieveAllAnnouncesService = async (): Promise<Announce[]> => {
  const AnnounceRepository = await AppDataSource.getRepository(Announce)
    .createQueryBuilder("announce")
    .leftJoinAndSelect("announce.user", "user")
    .leftJoinAndSelect("announce.brand", "brand")
    .leftJoinAndSelect("announce.color", "color")
    .leftJoinAndSelect("announce.fuel", "fuel")
    .leftJoinAndSelect("announce.image", "image")
    .leftJoinAndSelect("announce.model", "model")
    .leftJoinAndSelect("announce.year", "year")
    .select([
      "announce",
      "announce.color",
      "user.email",
      "user.name",
      "user.cellphone",
      "user.id",
      "brand",
      "color",
      "fuel",
      "image",
      "model",
      "year",
    ])
    .getMany();

  return AnnounceRepository;
};

export default retrieveAllAnnouncesService;
