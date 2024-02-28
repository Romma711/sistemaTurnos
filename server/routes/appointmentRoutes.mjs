import express from 'express'
import { AppointmentController } from '../controllers/appointmentController.mjs';
export const appointmentRouter = express.Router();


//* Crear ruta *//
appointmentRouter.post("/", AppointmentController.create)

//* Obtener todos los rutas *//
appointmentRouter.get("/", AppointmentController.getAll)

//* Eliminar rutas *//
appointmentRouter.delete("/:id", AppointmentController.remove);
 