import updateAddressService from "../services/address/editAddress.service";
import { Request, Response } from "express";

export const updateAddressController = async (req: Request, res: Response) => {
  const address = await updateAddressService(req.body, req.params.id);
  return res.status(200).json(address);
};
