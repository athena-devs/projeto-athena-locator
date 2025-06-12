import { Router } from "express";

export const adminRoutes = Router()
.post('/admin')
.get('/admin/:id')
.patch('/admin/:id')
.delete('admin/:id')
