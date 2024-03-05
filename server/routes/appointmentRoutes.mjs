import express from 'express'
import { AppointmentController } from '../controllers/appointmentController.mjs';
export const appointmentRouter = express.Router();


//!:::::::::::::: APPOINTMENT ROUTES ::::::::::::::

//* CREATE APPOINTMENT *//
appointmentRouter.post("/", AppointmentController.create)

//* GET ALL THE APPOINTMENTS *//
appointmentRouter.get("/", AppointmentController.getAll)

//* DELETE APPOINTMENT *//
appointmentRouter.delete("/:id", AppointmentController.remove);
 