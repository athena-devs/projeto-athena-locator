import { IRentalPlace } from "@models/rental-place";
import { IUser } from "@models/user";

export interface ILandLord extends Omit<IUser, "id"> {
    companyName: string
    companyDesc: string
    companyPassword: string
    properties?: IRentalPlace[] | undefined
}
