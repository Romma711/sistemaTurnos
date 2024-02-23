import express from 'express'
import { create, getAll, remove } from '../controllers/appointmentController.mjs';
export const appointmentRouter = express.Router();


//* Crear ruta *//
appointmentRouter.post("/", create)

//* Obtener todos los rutas *//
appointmentRouter.get("/", getAll)

//* Eliminar rutas *//
appointmentRouter.delete("/:id", remove);
 