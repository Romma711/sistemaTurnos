import { connection } from '../db/connect.mjs';
import { hash, compare } from 'bcrypt';
const saltRounds = 10;

export class userModel{

    //* CREATE USER *//
    static async create ({ input }) {
        const password = input.password;    
        const encryptedPassword = await hash(password, saltRounds)
        const {
            name,
            lastname,
            email,
            phoneNumber
          } = input
        try
        {
            await connection.query(`INSERT INTO user (name, lastname, email, password, phoneNumber, isAdmin)
                VALUES (?, ?, ?, ?, ?, ?);`,
                [name, lastname, email, encryptedPassword, phoneNumber, 0])
        }catch(err){
            if(err.sqlState == 23000)
            {
                return res.status(422).json({ message: "Mail en uso. Prueba con otro" })
            }
        }
    }
    
    //* GET ALL THE USERS *//
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
    
    //* GET USER BY ID *//
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
    
    //* GET USER BY EMAIL *//
    static async getByEmail({ email }) {
        try{
            const [user] = await connection.query(
                `SELECT * FROM user WHERE email =
                (?);`,
                [email])
                return user;
        }catch(err){
            console.error(err)
        }
    }
    
    //* DELETE USER *//
    static async remove({ id }) {
        try{
            await connection.query(`DELETE FROM user WHERE id =
            (?);`,
            [id])
        }catch(err){
            console.error(err)
        }
    }

    //* VERIFY IF USER EXISTS *//
    static async verify({email, password})
    {
        try{
            const emailExists = await this.getByEmail({ email })
            if(Object.keys(emailExists).length != 0) { //Verifies email
                const passwordVerified = await compare(password, emailExists[0].password); //Verifies password
                if(passwordVerified == true)
                { 
                    console.log("Inicio de sesion exitoso") //Redirect to the app
                }
                else{
                    console.log("Contraseña incorrecta.") //It should return a statusCode for the front-end
                }
            }else {
                console.log("Email inexistente") //The same here
            }
        }catch(err){
            console.error(err);
        }
    }
    
    
}
