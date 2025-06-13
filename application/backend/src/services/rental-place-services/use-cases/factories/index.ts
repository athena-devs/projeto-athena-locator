import { PrismaRentalPlacesRepository } from "@services/rental-place-services/repositories/prisma";
import { RentalPlacesCreateUseCase, RentalPlacesGetUseCase, RentalPlacesDeleteUseCase, RentalPlacesUpdateUseCase } from "@services/rental-place-services/use-cases";

export function makeRentalPlacesCreateUseCase() {
    const prismaRentalPlacesRepository  = new PrismaRentalPlacesRepository()
    const  rentalPlacesCreateUseCase = new RentalPlacesCreateUseCase(prismaRentalPlacesRepository)

    return rentalPlacesCreateUseCase
}

export function makeRentalPlacesUpdateUseCase() {
    const prismaRentalPlacesRepository  = new PrismaRentalPlacesRepository()
    const  rentalPlacesUpdateUseCase = new RentalPlacesUpdateUseCase(prismaRentalPlacesRepository)

    return rentalPlacesUpdateUseCase
}

export function makeRentalPlacesGetUseCase() {
    const prismaRentalPlacesRepository  = new PrismaRentalPlacesRepository()
    const  rentalPlacesGetUseCase = new RentalPlacesGetUseCase(prismaRentalPlacesRepository)

    return rentalPlacesGetUseCase
}

export function makeRentalPlacesDeleteUseCase() {
    const prismaRentalPlacesRepository  = new PrismaRentalPlacesRepository()
    const  rentalPlacesDeleteUseCase = new RentalPlacesDeleteUseCase(prismaRentalPlacesRepository)

    return rentalPlacesDeleteUseCase
}
