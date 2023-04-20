import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce } from "../../interfaces/announce";
import { User } from "../../entities/user";

export const retrieveAnnouncesService = async (userId:string): Promise<Announce[]> => {
  const announceRepository = AppDataSource.getRepository(Announce);
  const allAnnounces = await announceRepository.find({
    where:{id:userId},
    relations:{
      user:userId,
      
    }
  });
  
  return allAnnounces;
};

export default retrieveAnnouncesService;