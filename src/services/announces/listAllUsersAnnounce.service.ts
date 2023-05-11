import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponceAll } from "../../interfaces/announce";

export const listAllUsersAnnouncesService = async (
  limit: number,
  offset: number,
  currrentUrl: string
): Promise<IAnnounceResponceAll> => {
  limit = Number(limit);
  offset = Number(offset);

  if (!limit) {
    limit = 12;
  }

  if (!offset) {
    offset = 0;
  }

  const next = limit + offset;

  const countRepository = await AppDataSource.getRepository(Announce)
    .createQueryBuilder("announce")
    .getCount();

  const nextUrl =
    next < countRepository
      ? `${currrentUrl}?limit=${limit}&offset=${next}`
      : null;

  const previous = offset - limit < 0 ? null : offset - limit;

  const previousUrl =
    previous != null
      ? `${currrentUrl}?limit=${limit}&offset=${previous}`
      : null;

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
    .skip(offset)
    .take(limit)
    .getMany();

  return {
    nextUrl,
    previousUrl,
    limit,
    offset,
    total: countRepository,
    AnnounceRepository,
  };
};

export default listAllUsersAnnouncesService;
