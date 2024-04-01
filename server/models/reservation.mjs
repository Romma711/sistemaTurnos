import { connection } from '../db/connect.mjs';

export class reservationModel{
    //* Crear reserva *//
    static async create ({ input }) {
        const {
            idAppointment,
            idUser
          } = input
        try
        {
            await connection.query(`INSERT INTO reservation (idAppointment, idUser)
                VALUES (?, ?);`,
                [idAppointment, idUser])
        }catch(err){
            if(err.sqlState == 23000)
            {
                console.error(err)
            }
        }
    }
    
    //* Obtener todas las reservas *//
    static async getAll () {
        try{
            const [reservations] = await connection.query(
                'SELECT * FROM reservation'
                )
               return reservations
        }
        catch(err){
            console.error(err)
        }
    }
    
    //* Obtener reserva por id *//
    static async getByID ({ id }) {
        try{
            const [reservation] = await connection.query(
                `SELECT * FROM reservation WHERE id =
                (?);`
                [id]
                )
                return reservation[0]
        }
        catch(err){
            console.error(err)
        }
    }

    //* Obtener reservas por id de usuarios *//
    static async getByID ({ idUser }) {
        try{
            const [reservations] = await connection.query(
                `SELECT * FROM reservation WHERE idUser =
                (?);`
                [idUser]
                )
                return reservations[0]
        }
        catch(err){
            console.error(err)
        }
    }
    //* Eliminar reserva *//
    static async remove({ id }) {
        try{
            await connection.query(`DELETE FROM reservation WHERE id =
            (?);`,
            [id])
        }catch(err){
            console.error(err)
        }
    }
    
    
}
