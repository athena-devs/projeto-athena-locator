import { Router } from "express";
import { userRoutes } from "@routes/user-routes";
import { userUnprotectedRoutes } from "@routes/user-unprotected-routes";

export const appRouter = Router()
appRouter.use('/users', userUnprotectedRoutes)
appRouter.use('/users', userRoutes)

	
