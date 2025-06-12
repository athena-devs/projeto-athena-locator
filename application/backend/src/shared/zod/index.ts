import { z } from "zod";
import { IUser } from "@models/user";
import { ILandLord } from "@models/landlord";
import { IRentalPlace } from "@models/rental-place";

export class VerifyData {
    verify_user(user: IUser) {
        const schema = z.object({
            name: z.string().max(50),
            email: z.string().email().max(25),
            password: z.string().min(6)
        });

        return schema.parse(user);
    }

    verify_landLord(landLord: ILandLord) {
        const rentalPlaceSchema = z.object({
            title: z.string().max(100),
            description: z.string().max(500),
            address: z.string().max(255),
            price: z.number().nonnegative(),
            available: z.boolean(),
            landLordId: z.string().uuid()
        });

        const schema = z.object({
            name: z.string().max(50),
            email: z.string().email().max(25),
            password: z.string().min(6),
            isLandLord: z.literal(1),
            companyName: z.string().max(100),
            companyDesc: z.string().max(500),
            companyPassword: z.string().min(6),
            properties: z.array(rentalPlaceSchema).optional()
        });

        return schema.parse(landLord);
    }

    verify_rentalPlace(place: IRentalPlace) {
        const schema = z.object({
            title: z.string().max(100),
            description: z.string().max(500),
            address: z.string().max(255),
            price: z.number().nonnegative(),
            available: z.boolean(),
            landLordId: z.string().uuid()
        });

        return schema.parse(place);
    }

    verify_id(id: string) {
        const schema = z.object({
            id: z.string().uuid()
        });

        return schema.parse({ id });
    }
}
