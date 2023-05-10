import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment";
import { ICommentResponse, ICommentUpdate } from "../../interfaces/comment";
import AppError from "../../errors/AppError";

const updateCommentService = async (
  commentData: ICommentUpdate,
  commentId: string
): Promise<ICommentResponse> => {
  const commentRep: Repository<Comment> = AppDataSource.getRepository(Comment);

  const commentFind: Comment = await commentRep.findOneBy({
    id: commentId,
  });
  if (!commentFind) {
    throw new AppError("comment not found", 404);
  }
  const comment: Comment = await commentRep.save({
    ...commentFind,
    ...commentData,
  });

  return comment;
};

export default updateCommentService;
