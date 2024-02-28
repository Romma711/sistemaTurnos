import express from 'express'
import { UserController } from '../controllers/userController.mjs';
export const userRouter = express.Router();


//* Crear ruta *//
userRouter.post("/", UserController.create)

//* Obtener todos los rutas *//
userRouter.get("/", UserController.getAll)


 