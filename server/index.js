//! Principal para funcionamiento !//
//!==============================================================!//

const express = require('express');
const app = express();
const path = require('path');

//? Archivos estáticos como el index.html y demás:
app.use(express.static(path.join(__dirname, '../client/public')));

//! Base de Datos !//
//!==============================================================!//
const PORT = process.env.PORT || 3000;

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
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});