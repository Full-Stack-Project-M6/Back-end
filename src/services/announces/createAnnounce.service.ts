import { Repository } from "typeorm";
import { IAnnounceRequest, IImagemRequest } from "../../interfaces/announce";
import { Announce } from "../../entities/announce";
import { Image } from "../../entities/images";
import { AppDataSource } from "../../data-source";
import { Brand } from "../../entities/brand";
import { Fuel } from "../../entities/fuel";
import { Color } from "../../entities/color";
import { Year } from "../../entities/year";
import { Model } from "../../entities/model";
import { IBrandResponce } from "../../interfaces/brand";
import { IColorResponce } from "../../interfaces/color";
import { IFuelResponce } from "../../interfaces/fuel";
import { IModelResponce } from "../../interfaces/model";
import { IYearResponce } from "../../interfaces/year";
import { User } from "../../entities/user";
import { IUserReturn, IUserResponse } from "../../interfaces/user";
import AppError from "../../errors/AppError";
import { userWithoutPasswordSerializer } from "../../serializers/user.serializer";

const createAnnounceService = async (
  body: IAnnounceRequest,
  user_id: string
) => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const userRepository = AppDataSource.getRepository(User);

  const brandRepository: Repository<Brand> = AppDataSource.getRepository(Brand);

  const fuelRepository: Repository<Fuel> = AppDataSource.getRepository(Fuel);

  const colorRepository: Repository<Color> = AppDataSource.getRepository(Color);

  const yearRepository: Repository<Year> = AppDataSource.getRepository(Year);

  const modelRepository: Repository<Model> = AppDataSource.getRepository(Model);

  const imageRepository: Repository<Image> = AppDataSource.getRepository(Image);

  const { brand_id, fuel_id, color_id, year_id, model_id, images, ...rest } =
    body;

  const getUser: IUserReturn = await userRepository.findOneBy({
    id: user_id,
  });

  const userWithoutPassword = await userWithoutPasswordSerializer.validate(
    getUser,
    {
      stripUnknown: true,
    }
  );

  const getBrand: IBrandResponce = await brandRepository.findOneBy({
    id: brand_id,
  });
  const getFuel: IFuelResponce = await fuelRepository.findOneBy({
    id: fuel_id,
  });
  const getColor: IColorResponce = await colorRepository.findOneBy({
    id: color_id,
  });
  const getYear: IYearResponce = await yearRepository.findOneBy({
    id: year_id,
  });
  const getModel: IModelResponce = await modelRepository.findOneBy({
    id: model_id,
  });

  const createImage: Image = imageRepository.create({
    ...images,
  });

  const saveImage = await imageRepository.save(createImage);

  const createInstanceAnnounce = announceRepository.create({ ...rest });

  const newAnnounce: any = announceRepository.save({
    ...createInstanceAnnounce,
    brand: getBrand,
    fuel: getFuel,
    color: getColor,
    year: getYear,
    model: getModel,
    image: saveImage,
    user: userWithoutPassword,
  });

  return newAnnounce;
};

export default createAnnounceService;
