import { Repository } from 'typeorm';
import { AppDataSource } from "../data-source";
import { Announce } from "../entities/announce";
import { IAnnounceResponce } from '../interfaces/announce';

const deleteAnonnouceService = async (announceId: string): Promise<void> => {
  const announceRepository: Repository<Announce> = AppDataSource.getRepository(Announce);

  const deletedAnnounce: IAnnounceResponce = await announceRepository.findOneBy({
    id: announceId,
  });
 console.log(deletedAnnounce)
  
  await announceRepository.delete(deletedAnnounce);
};

export default deleteAnonnouceService;