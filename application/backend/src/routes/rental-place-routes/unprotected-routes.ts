import { createRentalPlace, deleteRentalPlace, getRentalPlace, updateRentalPlace } from "@controllers/rental-place-controller";
import { tryCatch } from "@middlewares/try-catch";
import { Router } from "express";

export const rentalPlaceUnprotectedRoutes = Router()
.get('/:id', tryCatch(getRentalPlace))
