import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ICommentRequest, ICommentResponse } from "../../interfaces/comment";
import { Comment } from "../../entities/comment";
import { Announce } from "../../entities/announce";

export const createCommentService = async (
  body: ICommentRequest,
  announce_id: string
): Promise<ICommentResponse> => {
  console.log(announce_id);
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const announce = await announceRepository.findOne({
    where: { id: announce_id },
    relations: ["user"],
    loadEagerRelations: true,
    select: {
      id: true,
      comments: true,
      kilometer: true,
      price: true,
      price_FIPE: true,
      description: true,
      image_cover: true,
      published: true,
      tag: true,
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
      user: {
        id: true,
        name: true,
        cellphone: true,
        email: true,
        description: true,
      },
    },
  });

  const createComment: Comment = commentRepository.create({
    ...body,
  });

  const newComment: any = await commentRepository.save({
    ...createComment,
    announce,
  });

  return newComment;
};

export default createCommentService;
