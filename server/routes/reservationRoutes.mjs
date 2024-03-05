import express from 'express'
import { ResevationController } from '../controllers/reservationController.mjs';
export const reservationRouter = express.Router();

//!:::::::::::::: RESERVATION ROUTES ::::::::::::::

//* CREATE RESERVATION *//
reservationRouter.post("/", ResevationController.create)

//* GET ALL THE RESERVATIONS *//
reservationRouter.get("/", ResevationController.getAll)


 