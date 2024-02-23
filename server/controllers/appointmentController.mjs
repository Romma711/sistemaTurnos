import { connection } from '../db/connect.mjs';

//* Crear turno *//

export const create = async function(req, res) {
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
export const getAll = function(req, res) {
    res.send(turnos);
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

