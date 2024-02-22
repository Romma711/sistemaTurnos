//! Principal para funcionamiento !//
//!==============================================================!//


//? Cosas basicas para funcionamiento:
import express from 'express'
import * as path from 'path';
import cors from 'cors';
import pkg from 'body-parser';
const { urlencoded } = pkg;

//? Inicializacion de cosas:
const app = express();
const PORT = process.env.PORT || 5000;
app.use(urlencoded({ extended: true }))

//? Configuración de dirname:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//! Base de Datos !//
//!==============================================================!//
import { connection } from './db/connect.mjs';

//! Routers !//
//!==============================================================!//
//? Turnos ?//:
import { appointmentRouter } from './routes/appointmentRoutes.mjs';
app.use(cors())
app.use("/api/appointment", appointmentRouter);


//! Desarrollo !//
//!==============================================================!//

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    connection
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});