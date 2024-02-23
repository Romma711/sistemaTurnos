import { connection } from '../db/connect.mjs';

//* Crear turno *//

export const create = async function(req, res) {
    console.log(req.body)
    try{
        if(req.body)
        {
            await connection.query(`INSERT INTO appointment (title, date, time)
            VALUES (?, ?, ?);`,
            [req.body.title, req.body.date, req.body.time])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
   
}

//* Obtener todos los turnos *//
export const getAll = async function(req, res) {
    try{
        if(req.body)
        {
            const [appointments] = await connection.query(
                'SELECT id, title, date, time FROM appointment'
              )
              console.log(appointments)
              res.send(appointments)
        }
    }catch(err){
        console.error(err)
    }
}

//* Eliminar turno *//
export const remove = async function(req, res) {
    try{
        if(req.body)
        {
            await connection.query(`DELETE FROM appointment WHERE id =
            (?);`,
            [req.body.id])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
}

