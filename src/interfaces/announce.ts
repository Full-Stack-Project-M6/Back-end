import { IBrandResponce, IBrandUpdate } from "./brand";
import { IColorResponce, IColorUpdate } from "./color";
import { ICommentRequest, ICommentResponse } from "./comment";
import { IFuelResponce, IFuelUpdate } from "./fuel";
import { IModelResponce, IModelUpdate } from "./model";
import { IUserResponseWithoutPassword } from "./user";
import { IYearResponce, IYearUpdate } from "./year";

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

export interface IImagemUpdate {
  image1: string;
  image2: string;
  image3: string;
}

export interface IAnnounceRequest {
  kilometer: string;
  price_FIPE: string;
  price: string;
  description: string;
  image_cover: string;
  published: boolean;
  tag: boolean;
  brand: string;
  model: string;
  color: string;
  fuel: string;
  year: string;
  images?: IImagemRequest;
  user_id: string;
}

export interface IAnnounceUpdate {
  kilometer?: string;
  price_FIPE?: string;
  price?: string;
  description?: string;
  image_cover?: string;
  published?: boolean;
  brand?: string;
  fuel?: string;
  color?: string;
  year?: string;
  model?: string;
  images?: IImagemUpdate;
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
  comments: ICommentResponse[];
}
