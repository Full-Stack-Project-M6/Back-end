import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import AppError from "../../errors/AppError";
export const retrieveCommentsService = async (
  announceID: string
): Promise<IAnnounceResponce> => {
  const announceRepository = AppDataSource.getRepository(Announce);

  const commentAnnounces = await announceRepository.findOne({
    where: { id: announceID },
    relations: { comments: { user: true } },
    loadEagerRelations: true,
    select: {
      comments: {
        comment: true,
        id: true,
        createdAt: true,
        user: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!commentAnnounces) {
    throw new AppError("comment not found", 404);
  }

  return commentAnnounces;
};
