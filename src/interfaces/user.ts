import { IAnnounceResponce } from "./announce";
import { IAdressRequest } from "./adress";

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  password: string;
  adress?: IAdressRequest;
}

export interface IUserReturn {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  // adress:string
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cellphone?: string;
  date_birth?: string;
  description?: string;
  password?: string;
  adress?: IAdressRequest;
}

export interface IUserResponse {
  id: string;
}

export interface IUserResponseWithoutPassword {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  announce: IAnnounceResponce[];
}
