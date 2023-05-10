import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address";
import { IaddressResponce, IaddressUpdate } from "../../interfaces/address";
import AppError from "../../errors/AppError";

const updateAddressService = async (
  addresData: IaddressUpdate,
  addressId: string
): Promise<IaddressResponce> => {
  const adressRep: Repository<Address> = AppDataSource.getRepository(Address);

  const addressFind: Address = await adressRep.findOneBy({
    id: addressId,
  });

  if (!addressFind) {
    throw new AppError("address not found", 404);
  }
  console.log(addressFind);

  const adress: Address = await adressRep.save({
    ...addressFind,
    ...addresData,
  });

  return adress;
};

export default updateAddressService;
