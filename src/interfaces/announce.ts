import { IBrandResponce } from "./brand";
import { IColorResponce } from "./color";
import { ICommentResponse } from "./comment";
import { IFuelResponce } from "./fuel";
import { IModelResponce } from "./model";
import { IUserResponseWithoutPassword } from "./user";
import { IYearResponce } from "./year";

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
  images?: string[];
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
  images?: string[];
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
  images: string[];
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
  images: string[];
  comments: ICommentResponse[];
}
