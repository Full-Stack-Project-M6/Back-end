import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { ICommentRequest, ICommentResponse } from "../../interfaces/comment";
import { Comment } from "../../entities/comment";
import { Announce } from "../../entities/announce";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";
import AppError from "../../errors/AppError";

export const createCommentService = async (
  body: ICommentRequest,
  user_id: string,
  announce_id: string
): Promise<ICommentResponse> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const getUser = await userRepository.findOneBy({
    id: user_id,
  });

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    getUser,
    {
      stripUnknown: true,
    }
  );

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

  if (!announce) {
    throw new AppError("announce not found", 404);
  }

  const createComment: Comment = commentRepository.create({
    ...body,
  });

  const newComment: any = await commentRepository.save({
    ...createComment,
    announce: announce,
    user: userWithoutPassword,
  });

  return newComment;
};

// export const createCommentService = async (
//   body: ICommentRequest,
//   user_id: string
// ): Promise<ICommentResponse> => {
//   const commentRepository: Repository<Comment> =
//     AppDataSource.getRepository(Comment);

//   const userRepository: Repository<User> = AppDataSource.getRepository(User);

//   const announceRepository: Repository<Announce> =
//     AppDataSource.getRepository(Announce);

//   const getUser = await userRepository.findOneBy({
//     id: user_id,
//   });

//   const userWithoutPassword = await userWithoutPasswordSerializer.validate(
//     getUser,
//     {
//       stripUnknown: true,
//     }
//   );

//   const announce = await announceRepository.findOne({
//     where: { id: user_id },
//     relations: ["user"],
//     loadEagerRelations: true,
//     select: {
//       id: true,
//       comments: true,
//       kilometer: true,
//       price: true,
//       price_FIPE: true,
//       description: true,
//       image_cover: true,
//       published: true,
//       tag: true,
//       brand: {
//         id: true,
//         brand: true,
//       },
//       color: {
//         id: true,
//         color: true,
//       },
//       fuel: {
//         id: true,
//         fuel: true,
//       },
//       image: {
//         id: true,
//         image1: true,
//         image2: true,
//         image3: true,
//       },
//       model: {
//         id: true,
//         model: true,
//       },
//       year: {
//         id: true,
//         year: true,
//       },
//       user: {
//         id: true,
//         name: true,
//         cellphone: true,
//         email: true,
//         description: true,
//       },
//     },
//   });

//   const createComment: Comment = commentRepository.create({
//     ...body,
//   });

//   const newComment: any = await commentRepository.save({
//     ...createComment,
//     announce,
//     user: userWithoutPassword,
//   });

//   console.log(createComment);

//   return newComment;
// };

// export default createCommentService;
