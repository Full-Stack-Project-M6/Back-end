import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IYearRequest } from "../interfaces/year";
import { Year } from "../entities/year";



const createYearService = async (
  body: IYearRequest,
  
): Promise<IYearRequest> => {
  const yearRepository: Repository<Year> =
    AppDataSource.getRepository(Year);

  const newYear: Year = yearRepository.create({
    ...body,
});

  

  return await yearRepository.save(newYear);
};

export default createYearService;