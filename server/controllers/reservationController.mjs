import { connection } from '../db/connect.mjs';

//* Crear reserva *//

export const create = async function(req, res) {
    try{
        if(req.body)
        {
            await connection.query(`INSERT INTO reservation (idAppointment, idUser)
            VALUES (?, ?);`,
            [req.body.idAppointment, req.body.idUser])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
   
}

//* Obtener todas las reservas *//
export const getAll = async function(req, res) {
    try{
        if(req.body)
        {
            const [reservations] = await connection.query(
                'SELECT id, idAppointment, idUser FROM reservation'
              )
              res.send(reservations)
        }
    }catch(err){
        console.error(err)
    }
}

//* Eliminar reserva *//
export const remove = async function(req, res) {
    try{
        if(req.body)
        {
            await connection.query(`DELETE FROM reservation WHERE id =
            (?);`,
            [req.body.id])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
}

