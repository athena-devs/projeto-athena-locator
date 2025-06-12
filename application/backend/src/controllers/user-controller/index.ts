import { VerifyData } from "@shared/zod";
import { Request, Response } from "express";
import { makeUsersCreateUseCase, makeUsersGetUseCase, makeUsersUpdateUseCase, makeUsersDeleteUseCase } from "@services/user-services/use-cases/factories";

export async function createUser(request: Request, response: Response) {
  const data =  new VerifyData()
  const createUser = makeUsersCreateUseCase()
  const parsedUser = data.verify_user(request.body)
  const user = await createUser.execute(parsedUser)
  
  return response.status(201).send(user)
}

export async function getUser(request: Request, response: Response) {
    const data =  new VerifyData()
    const getUser = makeUsersGetUseCase()
    const { id } = data.verify_id(request.params.id)
    const user = await getUser.execute(id)
    
    return response.status(200).send(user)
}


export async function updateUser(request: Request, response: Response) {
    const data =  new VerifyData()
    const updateUser = makeUsersUpdateUseCase()
    const parsedUser = data.verify_user(request.body)
    const { id } = data.verify_id(request.params.id)
    const user = await updateUser.execute(id, parsedUser)
    
    return response.status(204).send(user)
}


export async function deleteUser(request: Request, response: Response) {
    const data =  new VerifyData()
    const deleteUser = makeUsersDeleteUseCase()
    const { id } = data.verify_id(request.params.id)

    await deleteUser.execute(id)
    return response.status(200)
}