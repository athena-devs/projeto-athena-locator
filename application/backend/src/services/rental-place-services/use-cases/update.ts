import { AppError } from "@shared/app-error";
import { RentalPlacesRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";
import { IRentalPlace } from "@models/rental-place";

export class RentalPlacesUpdateUseCase {
    constructor(private rentalPlacesRepository: RentalPlacesRepository) {
        this.rentalPlacesRepository = rentalPlacesRepository
    }
  
    async execute(id: string, data:  IRentalPlace): Promise<IResponseFmt | AppError> {
        const rentalPlace = await this.rentalPlacesRepository.getRentalPlace(id)

        if (!rentalPlace) {
            throw new AppError("RentalPlace not found!", 404)        
        }
        
        const payload = await this.rentalPlacesRepository.updateRentalPlace(id, data)
        
        return responseFormat({
            data: payload, 
            message: "RentalPlace deleted",
            statusCode: 200

        })
    }
}