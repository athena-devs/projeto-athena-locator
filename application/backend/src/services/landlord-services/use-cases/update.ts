import { AppError } from "@shared/app-error";
import { LandLordsRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";
import { ILandLord } from "@models/landlord";

export class LandLordsUpdateUseCase {
    constructor(private landLordsRepository: LandLordsRepository) {
        this.landLordsRepository = landLordsRepository
    }
  
    async execute(id: string, data:  ILandLord): Promise<IResponseFmt | AppError> {
        const landLord = await this.landLordsRepository.getLandLord(id)

        if (!landLord) {
            throw new AppError("User not found!", 404)        
        }
        
        const payload = await this.landLordsRepository.updateLandLord(id, data)
        
        return responseFormat({
            data: payload, 
            message: "User deleted",
            statusCode: 200

        })
    }
}