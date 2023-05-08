import { Repository } from "typeorm";
import { Comment } from "../../entities/comment";
import { AppDataSource } from "../../data-source";

const deleteCommentService = async (commentId: string) => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: any = await commentRepository.findOne({
    where: { id: commentId },
  });

  await commentRepository.remove(comment);
};

export default deleteCommentService;
