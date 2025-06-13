import { AppError } from "@shared/app-error";
import { RentalPlacesRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";

export class RentalPlacesDeleteUseCase {
    constructor(private rentalPlacesRepository: RentalPlacesRepository) {
        this.rentalPlacesRepository = rentalPlacesRepository
    }
  
    async execute(id: string): Promise<IResponseFmt | AppError> {
        const rentalPlace = await this.rentalPlacesRepository.getRentalPlace(id)

        if (!rentalPlace) {
            throw new AppError("RentalPlace not found!", 404)        
        }

        const payload = await this.rentalPlacesRepository.deleteRentalPlace(id)
        
        return responseFormat({
            data: payload, 
            message: "RentalPlace deleted",
            statusCode: 200

        })
    }
}