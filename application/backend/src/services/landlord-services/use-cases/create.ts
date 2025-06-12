import { LandLordsRepository } from "../repositories";
import { ILandLord } from "@models/landlord";

export class LandLordsCreateUseCase {
    constructor(private landLordsRepository: LandLordsRepository) {
        this.landLordsRepository = landLordsRepository
    }
  
    async execute(id: string, data: ILandLord): Promise<ILandLord> {
        const user = await this.landLordsRepository.createLandLord(id, data)
        return user
    }
}