import { IAnnounceResponce } from "./announce";
import { IaddressRequest, IaddressResponce } from "./address";

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: boolean;
  password: string;
  address: IaddressRequest;
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
  address: IaddressResponce;
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
