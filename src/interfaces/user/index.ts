export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  cellphone: string;
  date_birth: Date;
  description: string;
  account_type: string;
  password: string;
}

export interface IUserCreate {
  id?: string;
  name?: string;
  email?: string;
  cpf?: string;
  cellphone?: string;
  date_birth?: Date;
  description?: string;
  account_type?: string;
}
