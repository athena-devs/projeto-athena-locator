import { IRentalPlace } from "@models/rental-place";
import { RentalPlacesRepository } from "../repositories";

export class RentalPlacesCreateUseCase {
    constructor(private rentalPlacesRepository: RentalPlacesRepository) {
        this.rentalPlacesRepository = rentalPlacesRepository
    }
  
    async execute(data: IRentalPlace): Promise<IRentalPlace> {
        const rentalPlace = await this.rentalPlacesRepository.createRentalPlace(data)
        return rentalPlace
    }
}