import { makeRentalPlacesCreateUseCase, makeRentalPlacesDeleteUseCase, makeRentalPlacesGetUseCase, makeRentalPlacesUpdateUseCase } from "@services/rental-place-services/use-cases/factories";
import { VerifyData } from "@shared/zod";
import { Request, Response } from "express";

export async function createRentalPlace(request: Request, response: Response) {
    const data =  new VerifyData()
    const createRentalPlace = makeRentalPlacesCreateUseCase()
    const parsedRentalPlace = data.verify_rentalPlace(request.body)
    const rentalPlace = await createRentalPlace.execute(parsedRentalPlace)
    
    return response.status(201).send(rentalPlace)
}


export async function getRentalPlace(request: Request, response: Response) {
    const data =  new VerifyData()
    const getRentalPlace = makeRentalPlacesGetUseCase()
    const { id } = data.verify_id(request.params.id)
    const rentalPlace = await getRentalPlace.execute(id)
    
    return response.status(200).send(rentalPlace)
}


export async function updateRentalPlace(request: Request, response: Response) {
    const data =  new VerifyData()
    const updateRentalPlace = makeRentalPlacesUpdateUseCase()
    const parsedRentalPlace = data.verify_rentalPlace(request.body)
    const { id } = data.verify_id(request.params.id)
    const rentalPlace = await updateRentalPlace.execute(id, parsedRentalPlace)
    
    return response.status(200).send(rentalPlace)
}


export async function deleteRentalPlace(request: Request, response: Response) {
    const data =  new VerifyData()
    const deleteRentalPlace = makeRentalPlacesDeleteUseCase()
    const { id } = data.verify_id(request.params.id)
    
    await deleteRentalPlace.execute(id)
    return response.status(200)
}