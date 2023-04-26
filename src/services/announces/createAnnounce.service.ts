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
import { IUserCreate, IUserResponse } from "../../interfaces/user";
import AppError from "../../errors/AppError";

const createAnnounceService = async (
  body: IAnnounceRequest,
  user_id: string
) => {
  const announceRepository: Repository<Announce> =
    AppDataSource.getRepository(Announce);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const brandRepository: Repository<Brand> = AppDataSource.getRepository(Brand);

  const fuelRepository: Repository<Fuel> = AppDataSource.getRepository(Fuel);

  const colorRepository: Repository<Color> = AppDataSource.getRepository(Color);

  const yearRepository: Repository<Year> = AppDataSource.getRepository(Year);

  const modelRepository: Repository<Model> = AppDataSource.getRepository(Model);

  const imageRepository: Repository<Image> = AppDataSource.getRepository(Image);

  const { brand, fuel, color, year, model, images, ...rest } =
    body;

  const getUser: IUserCreate = await userRepository.findOneBy({
    id: user_id,
  });
   
  let getBrand: IBrandResponce = await brandRepository.findOneBy({
    brand: brand,
  });
   
  if(!getBrand){
    const newBrand: Brand = brandRepository.create({
      brand,
    });
     await brandRepository.save(newBrand);
     getBrand = newBrand
  }

  let getFuel: IFuelResponce = await fuelRepository.findOneBy({
    fuel: fuel,
  });
   
  if(!getFuel){
    const newFuel: Fuel = fuelRepository.create({
      fuel,
    });
     await fuelRepository.save(newFuel);
     getFuel = newFuel
  }
 


  let getColor: IColorResponce = await colorRepository.findOneBy({
    color: color,
  });

  if(!getColor){
    const newColor: Color = colorRepository.create({
      color,
    });
     await colorRepository.save(newColor);
     getColor = newColor
  }



  let getYear: IYearResponce = await yearRepository.findOneBy({
    year: year,
  });
   
  if(!getYear){
    const newYear: Year = yearRepository.create({
      year,
    });
     await yearRepository.save(newYear);
     getYear = newYear
  }

  let getModel: IModelResponce = await modelRepository.findOneBy({
    model: model,
  });

  if(!getModel){
    const newModel: Model = modelRepository.create({
      model,
    });
     await modelRepository.save(newModel);
     getModel = newModel
  }

  
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
    user: getUser,
  });

  return newAnnounce;
};

export default createAnnounceService;
