import { prisma } from "@config/prisma";
import { LandLordsRepository } from "@services/landlord-services/repositories";
import { ILandLord } from "@models/landlord";

export class PrismaLandLordsRepository implements LandLordsRepository {
    async createLandLord(data: ILandLord): Promise<ILandLord> {
        const landLord = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                isLandLord: 1
            }
        })
        return landLord
    }
    
    async getLandLord(id: string): Promise<ILandLord | null> {
        const landLord = await prisma.user.findUnique({
            where: {id}
        }) 
        return landLord
    }
    
    async updateLandLord(id: string, data: ILandLord): Promise<ILandLord |  null> {
        const landLord = await prisma.user.update({
            where: {id},
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        })
        return landLord
    }

    async deleteLandLord(id: string): Promise<void> {
        await prisma.user.delete({
            where: {id}
        }) 
    }

}