import { IUserResponse } from "./user";

export interface IImagemRequest{
  image1?:string;
  image2?:string;
  image3?:string

}


export interface IAnnounceRequest {
    kilometer:string;
    price_FIPE:string;
    price:string;
    description:string;
    image_cover:string;
    published:boolean;
    tag:boolean;
    brand:string;
    model:string;
    color:string;
    fuel:string;
    year:string;
    images?:IImagemRequest
    user_id:string;
  }

export interface IAnnounceUpdate{
    kilometer:string;
    price_FIPE:string;
    price:string;
    description:string;
    image_cover:string;
    published:boolean;

}  

export interface IAnnounceResponce{
  id:string
  kilometer:string;
  price_FIPE:string;
  price:string;
  description:string;
  image_cover:string;
  published:boolean;
  tag:boolean;
  user:IUserResponse
}  