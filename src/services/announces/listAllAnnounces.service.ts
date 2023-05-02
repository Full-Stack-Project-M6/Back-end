import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

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
      "announce.image",
      "announce.model",
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
        image: {
          id: true,
          image1: true,
          image2: true,
          image3: true,
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
    },
  });
  return userAnnounces;
};

export default retrieveAnnouncesService;

//   const userAnnounces = await userRepository.findOne({
//     select: {
//       id: true,
//       name: true,
//       cellphone: true,
//       email: true,
//       announce: true,
//     },
//     where: { id: userId },
//     relations: {
//       announce: {
//         brand: true,
//         color: true,
//         fuel: true,
//         image: true,
//         model: true,
//         year: true,
//         user: {
//           select: {
//             id: true,
//             name: true,
//             cellphone: true,
//             email: true,
//           },
//         },
//       },
//     },
//   });

//   return userAnnounces;
// };

// export default retrieveAnnouncesService;

// async (user_id: string) => {
//   const announceRepository = AppDataSource.getRepository(Announce);
//   console.log(announceRepository);
//   const listAnnounce = await announceRepository.findOne({
//     where: { id: user_id },
//     relations: {
//       user: true,
//       brand: true,
//       color: true,
//       fuel: true,
//       image: true,
//       model: true,
//       year: true,
//     },
//   });

//   delete listAnnounce.user.password;
//   return listAnnounce;
// };

// export default retrieveAnnouncesService;
