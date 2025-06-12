import { AppError } from "@shared/app-error";
import { LandLordsRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";

export class LandLordsDeleteUseCase {
    constructor(private landLordsRepository: LandLordsRepository) {
        this.landLordsRepository = landLordsRepository
    }
  
    async execute(id: string): Promise<IResponseFmt | AppError> {
        const landLord = await this.landLordsRepository.getLandLord(id)

        if (!landLord) {
            throw new AppError("LandLord not found!", 404)        
        }

        const payload = await this.landLordsRepository.deleteLandLord(id)
        
        return responseFormat({
            data: payload, 
            message: "LandLord deleted",
            statusCode: 200

        })
    }
}