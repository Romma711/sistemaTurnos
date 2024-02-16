const mysql = require('mysql2');

const db = mysql.createConnection({
    user: 'root',
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DBNAME
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