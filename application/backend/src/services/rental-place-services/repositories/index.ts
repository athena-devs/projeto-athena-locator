import { IRentalPlace } from "@models/rental-place"

export interface RentalPlacesRepository {
    createRentalPlace(data: IRentalPlace): Promise<IRentalPlace>
    getRentalPlace(id: string): Promise<IRentalPlace | null>
    updateRentalPlace(id: string, data: IRentalPlace): Promise<IRentalPlace | null>
    deleteRentalPlace(id: string | null): Promise<void>
}