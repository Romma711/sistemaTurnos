import express from 'express'
import { ResevationController } from '../controllers/reservationController.mjs';
export const reservationRouter = express.Router();


//* Crear ruta *//
reservationRouter.post("/", ResevationController.create)

//* Obtener todos los rutas *//
reservationRouter.get("/", ResevationController.getAll)


 