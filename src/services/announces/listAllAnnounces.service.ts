import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";

export const retrieveAnnouncesService = async (
  userId: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const userAnnounces = await userRepository.findOne({
    where: { id: userId },
    relations: [
      "announce",
      "announce.brand",
      "announce.color",
      "announce.fuel",
      "announce.model",
      "announce.comments",
      "announce.year",
      "announce.user",
    ],
    loadEagerRelations: true,
    select: {
      id: true,
      name: true,
      cellphone: true,
      email: true,
      announce: {
        id: true,
        kilometer: true,
        price: true,
        price_FIPE: true,
        description: true,
        image_cover: true,
        published: true,
        tag: true,
        images: true,
        brand: {
          id: true,
          brand: true,
        },
        color: {
          id: true,
          color: true,
        },
        fuel: {
          id: true,
          fuel: true,
        },
        model: {
          id: true,
          model: true,
        },
        year: {
          id: true,
          year: true,
        },
        comments: {
          id: true,
          comment: true,
          createdAt: true,
          user: {
            id: true,
            name: true,
            cellphone: true,
            email: true,
            description: true,
          },
        },
        user: {
          id: true,
          name: true,
          cellphone: true,
          email: true,
          description: true,
        },
      },
    },
  });
  if (!userAnnounces) {
    throw new AppError("announce not found", 404);
  }
  return userAnnounces;
};

export default retrieveAnnouncesService;
