import { Router } from "express";
import { userRoutes } from "@routes/user-routes";
import { userUnprotectedRoutes } from "@routes/user-unprotected-routes";
import { landLordRoutes } from "./landlord-routes";

export const appRouter = Router()
appRouter.use('/users', userUnprotectedRoutes)
appRouter.use('/users', userRoutes)
appRouter.use('/landlords', landLordRoutes)
	
