// import parse from "date-fns/parse";
import { IUserRequest, IUserCreate } from "../interfaces/user";
import * as yup from "yup";

export const userSerializer: yup.ObjectSchema<IUserRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup
      .string()
      .matches(/^\d{3}\d{3}\d{3}\d{2}$/, "CPF inválido")
      .required(),
    cellphone: yup
      .string()
      .matches(/^(\+?\d{1,3}\s?)?(\d{2,3}){3,4}$/)
      .required(),
    date_birth: yup
      .string()
      .matches(
        /^(?:(?:0[1-9]|1\d|2[0-8])\/(?:0[1-9]|1[0-2])|(?:29|30)\/(?:0[13-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)\d{2}$/,
        "Data de nascimento inválida"
      )
      .required("Data de nascimento é obrigatória"),
    description: yup.string().required(),
    account_type: yup.boolean().required(),
    password: yup.string().required(),
  });

export const userWithoutPasswordSerializer: yup.ObjectSchema<IUserCreate> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().required(),
    cellphone: yup.string().required(),
    date_birth: yup.string().required(),
    description: yup.string().required(),
    account_type: yup.boolean().required(),
  });
export const allUsersWithoutPassword = yup.array(userWithoutPasswordSerializer);
