import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";

export const retrieveAllAnnouncesService = async (): Promise<Announce[]> => {
  const AnnounceRepository = await AppDataSource.getRepository(Announce)
    .createQueryBuilder("announce")
    .leftJoinAndSelect("announce.user", "user")
    .leftJoinAndSelect("announce.brand", "brand")
    .leftJoinAndSelect("announce.color", "color")
    .leftJoinAndSelect("announce.fuel", "fuel")
    .leftJoinAndSelect("announce.model", "model")
    .leftJoinAndSelect("announce.year", "year")
    .leftJoinAndSelect("announce.comments", "comments")
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
      "images",
      "model",
      "year",
      "comments",
    ])
    .getMany();

  return AnnounceRepository;
};

export default retrieveAllAnnouncesService;
