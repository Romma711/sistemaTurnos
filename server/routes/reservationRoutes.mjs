import express from 'express'
import { create, getAll, remove } from '../controllers/reservationController.mjs';
export const reservationRouter = express.Router();


//* Crear ruta *//
reservationRouter.post("/", create)

//* Obtener todos los rutas *//
reservationRouter.get("/", getAll)

//* Eliminar rutas *//
reservationRouter.delete("/:id", remove);
 