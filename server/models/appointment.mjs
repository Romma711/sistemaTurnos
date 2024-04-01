import { connection } from '../db/connect.mjs';

export class appointmentModel{
    //* Crear turno *//
    static async create ({ input }) {
        const {
            title,
            date,
            time
          } = input
        try
        {
            await connection.query(`INSERT INTO appointment (title, date, time)
            VALUES (?, ?, ?);`,
            [title, date, time])
        }catch(err){
            console.error(err)
        }
    }
    
    //* Obtener todos los turnos *//
    static async getAll () {
        try{
            const [appointments] = await connection.query(
                'SELECT id, title, date, time FROM appointment'
              )
             return appointments;
        }
        catch(err){
            console.error(err)
        }
    }

    //* Obtener todos los turnos disponibles para reservar *//
    static async availables () {
        try{
            const [appointments] = await connection.query(
                'SELECT id, title, date, time FROM appointment INNER JOIN reservation ON reservation.idAppointment != appointment.id;'
              )
             return appointments;
        }
        catch(err){
            console.error(err)
        }
    }
    
    //* Eliminar turno *//
    static async remove({ id }) {
        try{
            await connection.query(`DELETE FROM appointment WHERE id =
            (?);`,
            [id])
        }catch(err){
            console.error(err)
        }
    }


    
    
}
