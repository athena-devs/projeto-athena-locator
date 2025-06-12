import { PrismaLandLordsRepository } from "@services/landlord-services/repositories/prisma"
import { LandLordsCreateUseCase, LandLordsGetUseCase, LandLordsDeleteUseCase, LandLordsUpdateUseCase } from "@services/landlord-services/use-cases";

export function makeLandLordsCreateUseCase() {
    const prismaLandLordsRepository  = new PrismaLandLordsRepository()
    const  landLordsCreateUseCase = new LandLordsCreateUseCase(prismaLandLordsRepository)

    return landLordsCreateUseCase
}

export function makeLandLordsUpdateUseCase() {
    const prismaLandLordsRepository  = new PrismaLandLordsRepository()
    const  landLordsUpdateUseCase = new LandLordsUpdateUseCase(prismaLandLordsRepository)

    return landLordsUpdateUseCase
}

export function makeLandLordsGetUseCase() {
    const prismaLandLordsRepository  = new PrismaLandLordsRepository()
    const  landLordsGetUseCase = new LandLordsGetUseCase(prismaLandLordsRepository)

    return landLordsGetUseCase
}

export function makeLandLordsDeleteUseCase() {
    const prismaLandLordsRepository  = new PrismaLandLordsRepository()
    const  landLordsDeleteUseCase = new LandLordsDeleteUseCase(prismaLandLordsRepository)

    return landLordsDeleteUseCase
}
