export interface IAdressRequest{
    cep?:string
    estate?:string
    city?:string
    street?:string
    number?:string
    complement?:string
}


export interface IAdressResponce{
    adress_id?:string
    cep?:string
    estate?:string
    city?:string
    street?:string
    number?:string
    complement?:string
}


export interface IAdressUpdate{
    cep?:string
    estate?:string
    city?:string
    street?:string
    number?:string
    complement?:string
}