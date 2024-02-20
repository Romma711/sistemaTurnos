const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    password: null,
    host: process.env.MYSQL_HOST,
    database: "sistema_turnos"
})


const dbConnect = () => {
    db.connect(err => {
        if (err) throw err
        console.log('Conexión correcta a la BBDD')
    });
}

const connection = () => db

module.exports = {
    dbConnect,
    connection
};