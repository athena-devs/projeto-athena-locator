import { makeLandLordsCreateUseCase, makeLandLordsDeleteUseCase, makeLandLordsGetUseCase, makeLandLordsUpdateUseCase } from "@services/landlord-services/use-cases/factories";
import { VerifyData } from "@shared/zod";
import { Request, Response } from "express";

export async function createLandLord(request: Request, response: Response) {
    const data =  new VerifyData()
    const createLandLord = makeLandLordsCreateUseCase()
    const parsedLandLord = data.verify_landLord(request.body)
    const { id } = data.verify_id(request.params.id)
    const landLord = await createLandLord.execute(id, parsedLandLord)
    
    return response.status(201).send(landLord)
}


export async function getLandLord(request: Request, response: Response) {
    const data =  new VerifyData()
    const getLandLord = makeLandLordsGetUseCase()
    const { id } = data.verify_id(request.params.id)
    const landLord = await getLandLord.execute(id)
    
    return response.status(200).send(landLord)
}


export async function updateLandLord(request: Request, response: Response) {
    const data =  new VerifyData()
    const updateLandLord = makeLandLordsUpdateUseCase()
    const parsedLandLord = data.verify_landLord(request.body)
    const { id } = data.verify_id(request.params.id)
    const landLord = await updateLandLord.execute(id, parsedLandLord)
    
    return response.status(200).send(landLord)
}


export async function deleteLandLord(request: Request, response: Response) {
    const data =  new VerifyData()
    const deleteLandLord = makeLandLordsDeleteUseCase()
    const { id } = data.verify_id(request.params.id)
    
    await deleteLandLord.execute(id)
    return response.status(200)
}