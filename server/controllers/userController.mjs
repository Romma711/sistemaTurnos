import { connection } from '../db/connect.mjs';

//* Crear usuario *//

export const create = async function(req, res) {
    try{
        if(req.body)
        {
            await connection.query(`INSERT INTO user (name, lastname, email, password, isAdmin)
            VALUES (?, ?, ?, ?, ?, 0);`,
            [req.body.name, req.body.lastname, req.body.email, re.body.password])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
   
}

//* Obtener todos los usuarios *//
export const getAll = async function(req, res) {
    try{
        if(req.body)
        {
            const [user] = await connection.query(
                'SELECT * FROM user'
              )
              res.send(user)
        }
    }catch(err){
        console.error(err)
    }
}

//* Obtener usuario por id *//
export const getByID = async function(req, res) {
    try{
        if(req.body)
        {
            const [user] = await connection.query(
                `SELECT * FROM user WHERE id =
                (?);`
                [req.body.id]
              )
              res.send(user)
        }
    }catch(err){
        console.error(err)
    }
}

//* Obtener usuario por email *//
export const getByEmail = async function(req, res) {
    try{
        if(req.body)
        {
            const [user] = await connection.query(
                `SELECT * FROM user WHERE email =
                (?);`
                [req.body.email]
              )
              res.send(user)
        }
    }catch(err){
        console.error(err)
    }
}


//* Eliminar usuario *//
export const remove = async function(req, res) {
    try{
        if(req.body)
        {
            await connection.query(`DELETE FROM user WHERE id =
            (?);`,
            [req.body.id])
            res.send("/")
        }
    }catch(err){
        console.error(err)
    }
}

