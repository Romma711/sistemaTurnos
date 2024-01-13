//! Principal para funcionamiento !//
//!==============================================================!//

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

//? Archivos estáticos como el index.html y demás:
app.use(express.static(path.join(__dirname, '../client/public')));

//! Base de Datos !//
//!==============================================================!//
const dbConnect = require('./db/connect.js');

//! Routers !//
//!==============================================================!//
//? Turnos ?//:
const shiftRoutes = require('./routes/shiftRoutes');
app.use("/api/shifts", shiftRoutes);


//! Desarrollo !//
//!==============================================================!//

//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    dbConnect();
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});