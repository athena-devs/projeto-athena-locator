import { AppError } from "@shared/app-error";
import { RentalPlacesRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";

export class RentalPlacesGetUseCase {
    constructor(private rentalPlacesRepository: RentalPlacesRepository) {
        this.rentalPlacesRepository = rentalPlacesRepository
    }
  
    async execute(id: string): Promise<IResponseFmt | AppError> {
        const payload = await this.rentalPlacesRepository.getRentalPlace(id)
        
        if (!payload) {
            throw new AppError("RentalPlace not found!", 404)
        }

        return responseFormat({
            data: payload, 
            message: "RentalPlace retrivied succesfully",
            statusCode: 200

        })
    }
}