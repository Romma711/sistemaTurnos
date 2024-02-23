//! Principal para funcionamiento !//
//!==============================================================!//

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))


//? Archivos estáticos como el index.html y demás:
app.use(express.static(path.join(__dirname, '../client/public')));

//! Base de Datos !//
//!==============================================================!//
const db = require('./db/connect.js');

//! Routers !//
//!==============================================================!//
//? Turnos ?//:
const shiftRoutes = require('./routes/shiftRoutes');
app.use(cors())
app.use("/api/shifts", shiftRoutes);


//! Desarrollo !//
//!==============================================================!//

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    db.dbConnect();
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});
