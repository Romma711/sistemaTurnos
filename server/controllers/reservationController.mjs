import { reservationModel } from '../models/reservation.mjs'

export class ResevationController {
    static async getAll (req, res) {
      const reservations = await reservationModel.getAll()
      res.json(reservations)
    }
  
    static async getById (req, res) {
      const { id } = req.params
      const reservation = await reservationModel.getById({ id })
      if (reservation) return res.json(reservation)
      res.status(404).json({ message: 'reservation not found' })
    }

    static async create (req, res) {
        const newReservation = await reservationModel.create({ input: req.body })
        res.status(201).json(newReservation)
      }

    static async showByUserId(req, res){
      const { idUser } = req.params
      const reservations = await reservationModel.getByUserId({ idUser })
      if (reservations) return res.json(reservations)
      res.status(404).json({ message: 'reservation not found' })
    }
}