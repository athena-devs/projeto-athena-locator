import { ILandLord } from "@models/landlord"

export interface LandLordsRepository {
    createLandLord(data: ILandLord): Promise<ILandLord>
    getLandLord(id: string): Promise<ILandLord | null>
    updateLandLord(id: string, data: ILandLord): Promise<ILandLord | null>
    deleteLandLord(id: string | null): Promise<void>
}