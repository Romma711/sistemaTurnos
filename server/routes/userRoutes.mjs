import express from 'express'
import { create, getAll, remove } from '../controllers/userController.mjs';
export const userRouter = express.Router();


//* Crear ruta *//
userRouter.post("/", create)

//* Obtener todos los rutas *//
userRouter.get("/", getAll)

//* Eliminar rutas *//
userRouter.delete("/:id", remove);
 