export interface IaddressRequest {
  cep: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IaddressResponce {
  id: string;
  cep: string;
  estate: string;
  city: string;
  street: string;
  number: string;
  complement: string;
}

export interface IaddressUpdate {
  cep?: string;
  estate?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}
