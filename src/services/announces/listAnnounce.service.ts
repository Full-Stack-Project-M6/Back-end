import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { omit } from "lodash";

const listEspecificAnnounceService = async (announceId: string) => {
  const announceRepository = AppDataSource.getRepository(Announce);

  const listAnnounce = await announceRepository.findOne({
    where: { id: announceId },
    relations: {
      user: true,
      brand: true,
      color: true,
      fuel: true,
      model: true,
      year: true,
      comments: true,
    },
    loadEagerRelations: true,
    select: {
      comments: {
        id: true,
        comment: true,
        createdAt: true,
        user: { id: true, name: true },
      },
    },
  });

  const commentsWithoutUserPassword = listAnnounce.comments.map((comment) => {
    const userWithoutPassword = omit(comment.user, "password");
    return { ...comment, user: userWithoutPassword };
  });

  const userWithoutPassword = omit(listAnnounce.user, "password");
  const announceWithoutUserPassword = {
    ...listAnnounce,
    user: userWithoutPassword,
    comments: commentsWithoutUserPassword,
  };

  return announceWithoutUserPassword;
};

export default listEspecificAnnounceService;
