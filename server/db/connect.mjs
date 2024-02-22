import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    port: 3306,
    database: 'sistema_turnos',
    user: 'root',
    password: ''
}

export const connection = await mysql.createConnection(config);

