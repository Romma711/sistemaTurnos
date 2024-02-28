import { connection } from '../db/connect.mjs';

export class userModel{
    //* Crear usuario *//
    static async create ({ input }) {
        const {
            name,
            lastname,
            email,
            password,
            phoneNumber
          } = input
        try
        {
            await connection.query(`INSERT INTO user (name, lastname, email, password, phoneNumber, isAdmin)
                VALUES (?, ?, ?, ?, ?, ?);`,
                [name, lastname, email, password, phoneNumber, 0])
        }catch(err){
            if(err.sqlState == 23000)
            {
                return res.status(422).json({ message: "Mail en uso. Prueba con otro" })
            }
        }
    }
    
    //* Obtener todos los usuarios *//
    static async getAll () {
        try{
            const [users] = await connection.query(
                'SELECT * FROM user'
                )
               return users
        }
        catch(err){
            console.error(err)
        }
    }
    
    //* Obtener usuario por id *//
    static async getByID ({ id }) {
        try{
            const [user] = await connection.query(
                `SELECT * FROM user WHERE id =
                (?);`
                [id]
                )
                return user[0]
        }
        catch(err){
            console.error(err)
        }
    }
    
    //* Obtener usuario por email *//
    static async getByEmail({ email }) {
        try{
            const [user] = await connection.query(
                `SELECT * FROM user WHERE email =
                (?);`
                [email]
                )
                return user[0];
        }catch(err){
            console.error(err)
        }
    }
    
    
    //* Eliminar usuario *//
    static async remove({ id }) {
        try{
            await connection.query(`DELETE FROM user WHERE id =
            (?);`,
            [id])
        }catch(err){
            console.error(err)
        }
    }
    
    
}
