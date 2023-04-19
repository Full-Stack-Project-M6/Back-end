export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: string;
  password: string;
}

export interface IUserCreate {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: string;
  description: string;
  account_type: string;
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
