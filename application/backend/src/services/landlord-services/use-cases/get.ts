import { AppError } from "@shared/app-error";
import { LandLordsRepository } from "../repositories";
import { IResponseFmt, responseFormat } from "@shared/response-format";

export class LandLordsGetUseCase {
    constructor(private landLordsRepository: LandLordsRepository) {
        this.landLordsRepository = landLordsRepository
    }
  
    async execute(id: string): Promise<IResponseFmt | AppError> {
        const payload = await this.landLordsRepository.getLandLord(id)
        
        if (!payload) {
            throw new AppError("LandLord not found!", 404)
        }

        return responseFormat({
            data: payload, 
            message: "LandLord retrivied succesfully",
            statusCode: 200

        })
    }
}