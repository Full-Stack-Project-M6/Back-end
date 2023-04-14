import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IBrandRequest } from "../interfaces/brand";
import { Brand } from "../entities/brand";

const createBrandService = async (
  body: IBrandRequest,
  
): Promise<IBrandRequest> => {
  const brandRepository: Repository<Brand> =
    AppDataSource.getRepository(Brand);

  const newBrand: Brand = brandRepository.create({
    ...body,
});

  

  return await brandRepository.save(newBrand);
};

export default createBrandService;