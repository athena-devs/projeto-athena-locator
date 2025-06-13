import { createRentalPlace, deleteRentalPlace, getRentalPlace, updateRentalPlace } from "@controllers/rental-place-controller";
import { tryCatch } from "@middlewares/try-catch";
import { Router } from "express";

export const rentalPlaceRoutes = Router()
.post('/', tryCatch(createRentalPlace))
.patch('/:id', tryCatch(updateRentalPlace))
.delete('/:id', tryCatch(deleteRentalPlace))
