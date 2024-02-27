import express from 'express'
import { create, getAll, getByEmail, remove } from '../controllers/userController.mjs';
export const userRouter = express.Router();


//* Crear ruta *//
userRouter.post("/", create)

//* Obtener todos los rutas *//
userRouter.get("/", getAll)

//* Obtener por email*//
userRouter.get("/:email", getByEmail)

//* Eliminar rutas *//
userRouter.delete("/:id", remove);
 