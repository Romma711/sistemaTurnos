import { userModel } from '../models/user.mjs'

export class UserController {
    static async getAll (req, res) {
      const users = await userModel.getAll()
      res.json(users)
    }
  
    static async getById (req, res) {
      const { id } = req.params
      const user = await userModel.getById({ id })
      if (user) return res.json(user)
      res.status(404).json({ message: 'User not found' })
    }

    static async getByEmail(req, res){
      const { emai } = req.params
      const user = await userModel.getByEmail({ email })
    }

    static async create (req, res) {
        const newUser = await userModel.create({ input: req.body })
        res.status(201).json(newUser)
      }
}