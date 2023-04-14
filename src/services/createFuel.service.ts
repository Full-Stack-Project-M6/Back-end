import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IFuelRequest } from "../interfaces/fuel";
import { Fuel } from "../entities/fuel";



const createFuelService = async (
  body: IFuelRequest,
  
): Promise<IFuelRequest> => {
  const fuelRepository: Repository<Fuel> =
    AppDataSource.getRepository(Fuel);

  const newFuel: Fuel = fuelRepository.create({
    ...body,
});

  

  return await fuelRepository.save(newFuel);
};

export default createFuelService;