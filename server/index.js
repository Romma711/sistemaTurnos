//! Principal para funcionamiento !//
//!==============================================================!//

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors')

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
app.use(cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:8080',
        'http://localhost:1234',
        'http://localhost:5173'
      ]
  
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true)
      }
  
      if (!origin) {
        return callback(null, true)
      }
  
      return callback(new Error('Not allowed by CORS'))
    }
  }))


//! Desarrollo !//
//!==============================================================!//

//? Escuchamos al servidor ?//
//?==============================================================?//
app.listen(PORT, () => {
    dbConnect();
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
});