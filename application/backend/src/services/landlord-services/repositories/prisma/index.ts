import { prisma } from "@config/prisma";
import { LandLordsRepository } from "@services/landlord-services/repositories";
import { ILandLord } from "@models/landlord";

export class PrismaLandLordsRepository implements LandLordsRepository {
    async createLandLord(id: string, data: ILandLord): Promise<ILandLord> {
        const landLord = await prisma.landLord.create({
            data: {
                userId: id,
                companyName: data.companyName,
                companyDesc: data.companyDesc,
                companyEmail: data.email,
                companyPassword: data.companyPassword,
                properties: {
                    create: data.properties
                }
            },
            include: {
                properties: true
            }
        })

        return {
            ...data,
            properties: landLord.properties
        }
    }

    async getLandLord(userId: string): Promise<ILandLord | null> {
        const user = await prisma.user.findUnique({
            where: { id: userId  },
        })

        if (!user) return null

        const landLord = await prisma.landLord.findUnique({
            where: { userId },
            include: { properties: true }
        })
        
        if (!landLord) return null

        return {
            name: user.name,
            email: landLord.companyEmail,
            password: landLord.companyPassword,
            companyName: landLord.companyName,
            companyDesc: landLord.companyDesc,
            companyPassword: landLord.companyPassword,
            properties: landLord.properties
        }
    }

    async updateLandLord(userId: string, data: ILandLord): Promise<ILandLord | null> {
        const landLord = await prisma.landLord.update({
            where: { userId },
            data: {
                companyName: data.companyName,
                companyDesc: data.companyDesc,
                companyEmail: data.email,
                companyPassword: data.companyPassword
            },
            include: {
                properties: true
            }
        })

        return {
            ...data,
            properties: landLord.properties
        }
    }

    async deleteLandLord(userId: string): Promise<void> {
        await prisma.landLord.delete({
            where: { userId }
        })
    }
}
