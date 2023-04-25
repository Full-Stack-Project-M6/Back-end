import { IBrandResponce } from "./brand";
import { IColorResponce } from "./color";
import { IFuelResponce } from "./fuel";
import { IModelResponce } from "./model";
import { IUserResponseWithoutPassword } from "./user";
import { IYearResponce } from "./year";

export interface IImagemRequest {
  image1?: string;
  image2?: string;
  image3?: string;
}

export interface IImagemResponse {
  id: string;
  image1?: string;
  image2?: string;
  image3?: string;
}

export interface IAnnounceRequest {
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
  tag: boolean;
  brand_id: string;
  model_id: string;
  color_id: string;
  fuel_id: string;
  year_id: string;
  images?: IImagemRequest;
  user_id: string;
}

export interface IAnnounceUpdate {
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
}

export interface IAnnounceCreateResponce {
  id: string;
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
  tag: boolean;
  brand: IBrandResponce;
  fuel: IFuelResponce;
  color: IColorResponce;
  year: IYearResponce;
  model: IModelResponce;
  image: IImagemResponse;
  user: IUserResponseWithoutPassword;
}

export interface IAnnounceResponce {
  id: string;
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
  tag: boolean;
  brand: IBrandResponce;
  fuel: IFuelResponce;
  color: IColorResponce;
  year: IYearResponce;
  model: IModelResponce;
  image: IImagemResponse;
}
