import { createUser } from "@controllers/user-controller";
import { tryCatch } from "@middlewares/try-catch";
import { Router } from "express";

export const userUnprotectedRoutes = Router()
.post('/', tryCatch(createUser))
