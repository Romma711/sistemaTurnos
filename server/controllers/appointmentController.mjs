import { appointmentModel } from '../models/appointment.mjs'

export class AppointmentController {
    static async getAll (req, res) {
      const appointments = await appointmentModel.getAll()
      res.json(appointments)
    }
  
    static async getById (req, res) {
      const { id } = req.params
      const user = await appointmentModel.getById({ id })
      if (user) return res.json(user)
      res.status(404).json({ message: 'Appointment not found' })
    }

    static async create (req, res) {
        const newAppointments = await appointmentModel.create({ input: req.body })
        res.status(201).json(newAppointments)
    }

    static async remove (req, res) {
        const { id } = req.params
        const queryResult = await appointmentModel.remove({ id })
        res.status(201).json(queryResult)
    }
}