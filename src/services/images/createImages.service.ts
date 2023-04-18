import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IImagemRequest } from "../../interfaces/announce";
import { Image } from "../../entities/images";

const createImageService = async (
  body: IImagemRequest
): Promise<IImagemRequest> => {
  const imageRepository: Repository<Image> = AppDataSource.getRepository(Image);

  const newImage: Image = imageRepository.create({
    ...body,
  });

  return await imageRepository.save(newImage);
};

export default createImageService;
