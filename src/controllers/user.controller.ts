import { Request, Response } from "express";
import { IUserLogin, IUserUpdate } from "../interfaces/user";
import createUserService from "../services/user/createUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { loginService } from "../services/user/login.service";
import { retrieveEspecificUserService } from "../services/user/retrieveEspecificUser.service";
import {  sendEmailToResetService } from "../services/user/sendEmailReset.service";
import { resetPasswordService } from "../services/user/resetPassword.service";

export const createUserController = async (req: Request, res: Response) => {
    const userData = req.body;

    const newUser = await createUserService(userData);
        
    return res.status(201).json(newUser);
};

export const loginController = async (req: Request, res: Response) => {
    const sessionData: IUserLogin = req.body;

    const data = await loginService(sessionData);

    return res.status(200).json({ ...data });
};

export const retrieveEspecificUserController = async (req: Request,res: Response) => {
    const userId = req.params.id;

    const user = await retrieveEspecificUserService(userId);

    return res.status(200).json(user);
};

export const sendEmailToResetController = async (req: Request, res: Response) => {
    const { email } = req.body
    const { protocol } = req
    const host = 'localhost:3000'
    
    const token  = await sendEmailToResetService(email, protocol, host!)

    return res.json({ token: token })
};

export const resetPasswordController = async (req: Request, res: Response) => {
    const { password } = req.body
    const { token } = req.params
    
    await resetPasswordService(password, token)

    return res.json({ message: "Senha atualizada com sucesso!" })
}

export const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body;

    const data = await updateUserService(userData, req.params.id);

    return res.status(200).send(data);
};

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.id);

    return res.status(204).json();
};
