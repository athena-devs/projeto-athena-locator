import { IUser } from "@models/user";

export interface IAdmin extends IUser {
    isAdmin: number
}