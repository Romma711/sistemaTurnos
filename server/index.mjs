//! Principal para funcionamiento !//
//!==============================================================!//


//? Cosas basicas para funcionamiento:
import express, { json } from 'express'
import * as path from 'path';
import cors from 'cors';

//? Inicializacion de cosas:
const app = express();
const PORT = process.env.PORT || 5000;
app.use(json())

//? Configuración de dirname:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//! Base de Datos !//
//!==============================================================!//
import { connection } from './db/connect.mjs';

//! Routers !//
app.use(cors());
//!==============================================================!//
//? Turnos ?//:
import { appointmentRouter } from './routes/appointmentRoutes.mjs';
app.use("/api/appointment", appointmentRouter);

//? Usuarios ?//:
import { userRouter } from './routes/userRoutes.mjs';
app.use("/api/user", userRouter);

//? Usuarios ?//:
import { reservationRouter } from './routes/reservationRoutes.mjs';
app.use("/api/reservation", reservationRouter);

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
