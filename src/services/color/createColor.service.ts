import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { IColorRequest } from "../../interfaces/color";
import { Color } from "../../entities/color";

const createColorService = async (
  body: IColorRequest
): Promise<IColorRequest> => {
  const colorRepository: Repository<Color> = AppDataSource.getRepository(Color);

  const newColor: Color = colorRepository.create({
    ...body,
  });

  return await colorRepository.save(newColor);
};

export default createColorService;
