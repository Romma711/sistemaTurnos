const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME
})


const dbConnect = () => {
    db.connect(err => {
        if (err) throw err
        console.log('Conexión correcta a la BBDD')
    });
}


module.exports = dbConnect;