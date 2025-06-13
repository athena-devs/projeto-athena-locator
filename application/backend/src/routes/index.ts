import { Router } from "express";
import { userRoutes, userUnprotectedRoutes } from "@routes/user-routes";
import { landLordRoutes } from "./landlord-routes";
import { rentalPlaceRoutes, rentalPlaceUnprotectedRoutes } from "./rental-place-routes";

export const appRouter = Router()
appRouter.use('/users', userUnprotectedRoutes)
appRouter.use('/users', userRoutes)
appRouter.use('/landlords', landLordRoutes)
appRouter.use('/places', rentalPlaceUnprotectedRoutes)
appRouter.use('/places', rentalPlaceRoutes)