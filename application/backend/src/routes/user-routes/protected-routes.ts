import { deleteUser, getUser, updateUser } from "@controllers/user-controller";
import { tryCatch } from "@middlewares/try-catch";
import { Router } from "express";

export const userRoutes = Router()
.get('/:id', tryCatch(getUser))
.patch('/:id', tryCatch(updateUser))
.delete('/:id', tryCatch(deleteUser))

