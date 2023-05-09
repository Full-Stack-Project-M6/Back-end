import { Repository } from "typeorm";
import { Comment } from "../../entities/comment";
import { AppDataSource } from "../../data-source";
import AppError from "../../errors/AppError";

const deleteCommentService = async (commentId: string) => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: any = await commentRepository.findOne({
    where: { id: commentId },
  });
  
  if (!comment) {
    throw new AppError("comment not found", 404);
  }
  await commentRepository.remove(comment);
};

export default deleteCommentService;
