import { createLandLord, deleteLandLord, getLandLord, updateLandLord } from "@controllers/landlord-controller";
import { tryCatch } from "@middlewares/try-catch";
import { Router } from "express";

export const landLordRoutes = Router()
.post('/:id', tryCatch(createLandLord))
.get('/:id', tryCatch(getLandLord))
.patch('/:id', tryCatch(updateLandLord))
.delete('/:id', tryCatch(deleteLandLord))
