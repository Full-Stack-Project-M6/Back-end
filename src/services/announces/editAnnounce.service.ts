import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Announce } from "../../entities/announce";
import { IAnnounceResponce, IAnnounceUpdate } from "../../interfaces/announce";
import { announceSerializer } from "../../serializers/announce.serializer";
import { Brand } from "../../entities/brand";
import { IBrandResponce } from "../../interfaces/brand";
import { Color } from "../../entities/color";
import { Fuel } from "../../entities/fuel";
import { Model } from "../../entities/model";
import { Year } from "../../entities/year";
import { IColorResponce } from "../../interfaces/color";
import { IFuelResponce } from "../../interfaces/fuel";
import { IModelResponce } from "../../interfaces/model";
import { IYearResponce } from "../../interfaces/year";
import AppError from "../../errors/AppError";

const updateAnnounceService = async (
  announceData: IAnnounceUpdate,
  announceId: string
): Promise<IAnnounceResponce> => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const brandRepository: Repository<Brand> = AppDataSource.getRepository(Brand);

  const fuelRepository: Repository<Fuel> = AppDataSource.getRepository(Fuel);

  const colorRepository: Repository<Color> = AppDataSource.getRepository(Color);

  const yearRepository: Repository<Year> = AppDataSource.getRepository(Year);

  const modelRepository: Repository<Model> = AppDataSource.getRepository(Model);

  const { brand, fuel, color, year, model, ...rest } = announceData;

  const announceFind: IAnnounceResponce = await announceRepository.findOne({
    where: { id: announceId },
    relations: {
      brand: true,
      color: true,
      fuel: true,
      year: true,
      model: true,
    },
  });

  if (!announceFind) {
    throw new AppError("announce not found", 404);
  }


  let getBrand: IBrandResponce = await brandRepository.findOneBy({
    brand: brand,
  });

  if (!getBrand) {
    const newBrand: Brand = brandRepository.create({
      brand,
    });
    await brandRepository.save(newBrand);
    getBrand = newBrand;
  }

  let getFuel: IFuelResponce = await fuelRepository.findOneBy({
    fuel: fuel,
  });

  if (!getFuel) {
    const newFuel: Fuel = fuelRepository.create({
      fuel,
    });
    await fuelRepository.save(newFuel);
    getFuel = newFuel;
  }

  let getColor: IColorResponce = await colorRepository.findOneBy({
    color: color,
  });

  if (!getColor) {
    const newColor: Color = colorRepository.create({
      color,
    });
    await colorRepository.save(newColor);
    getColor = newColor;
  }

  let getYear: IYearResponce = await yearRepository.findOneBy({
    year: year,
  });

  if (!getYear) {
    const newYear: Year = yearRepository.create({
      year,
    });
    await yearRepository.save(newYear);
    getYear = newYear;
  }

  let getModel: IModelResponce = await modelRepository.findOneBy({
    model: model,
  });

  if (!getModel) {
    const newModel: Model = modelRepository.create({
      model,
    });
    await modelRepository.save(newModel);
    getModel = newModel;
  }

  const updateAnnounce = await announceRepository.save({
    ...announceFind,
    brand: getBrand,
    fuel: getFuel,
    color: getColor,
    year: getYear,
    model: getModel,
    ...rest,
  });

  console.log(updateAnnounce);

  const validateAnnounce = await announceSerializer.validate(updateAnnounce, {
    stripUnknown: true,
  });

  return await validateAnnounce;
};

export default updateAnnounceService;
