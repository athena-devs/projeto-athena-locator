import { prisma } from "@config/prisma";
import { RentalPlacesRepository } from "@services/rental-place-services/repositories";
import { IRentalPlace } from "@models/rental-place";

export class PrismaRentalPlacesRepository implements RentalPlacesRepository {
    async createRentalPlace(data: IRentalPlace): Promise<IRentalPlace> {
        const rentalPlace = await prisma.rentalPlace.create({
            data: {
                title: data.title,
                address: data.address,
                description: data.description,
                price: data.price,
                available: data.available,
                landLordId: data.landLordId
            }
        })
        return rentalPlace
    }
    
    async getRentalPlace(id: string): Promise<IRentalPlace | null> {
        const rentalPlace = await prisma.rentalPlace.findUnique({
            where: {id}
        }) 
        return rentalPlace
    }
    
    async updateRentalPlace(id: string, data: IRentalPlace): Promise<IRentalPlace |  null> {
        const rentalPlace = await prisma.rentalPlace.update({
            where: {id},
            data: {
                title: data.title,
                address: data.address,
                description: data.description,
                price: data.price,
                available: data.available
            }
        })
        return rentalPlace
    }

    async deleteRentalPlace(id: string): Promise<void> {
        await prisma.rentalPlace.delete({
            where: {id}
        }) 
    }

}