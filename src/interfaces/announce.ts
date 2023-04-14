export interface IImagemRequest{
  Imagem1?:string;
  Imagem2?:string;
  Imagem3?:string

}


export interface IAnnounceRequest {
    kilometer:string;
    price_FIPE:string;
    price:string;
    description:string;
    image_cover:string;
    published:boolean;
    tag:boolean;
    brand_id:string;
    model_id:string;
    color_id:string;
    fuel_id:string;
    year_id:string;
    image?:IImagemRequest
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
}  