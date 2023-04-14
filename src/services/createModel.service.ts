import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { IModelRequest } from "../interfaces/model";
import { Model } from "../entities/model";



const createModelService = async (
  body: IModelRequest,
  
): Promise<IModelRequest> => {
  const modelRepository: Repository<Model> =
    AppDataSource.getRepository(Model);

  const newModel: Model = modelRepository.create({
    ...body,
});

  

  return await modelRepository.save(newModel);
};

export default createModelService;