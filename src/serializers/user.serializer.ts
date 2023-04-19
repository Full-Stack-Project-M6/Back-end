import { IUserRequest, IUserCreate } from "../interfaces/user";
import * as yup from "yup";

export const userSerializer: yup.ObjectSchema<IUserRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    cpf: yup.string().required(),
    cellphone: yup.string().required(),
    date_birth: yup.date().required(),
    description: yup.string().required(),
    account_type: yup.string().required(),
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
    date_birth: yup.date().required(),
    description: yup.string().required(),
    account_type: yup.string().required(),
    password: yup.string().required(),
  });
export const allUsersWithoutPassword = yup.array(userWithoutPasswordSerializer);
