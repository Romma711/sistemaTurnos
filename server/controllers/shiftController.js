const db = require('../db/connect');

const turnos = [{
        title: "Uñas",
        date: "25-12-2023",
        time: "18.00 hrs",
        reservedBy: null
    },
    {
        title: "Uñas celeste",
        date: "28-12-2023",
        time: "15.00 hrs",
        reservedBy: null
    },
    {
        title: "Pestañas",
        date: "28-12-2023",
        time: "15.00 hrs",
        reservedBy: null
    }
]

//* Crear turno *//



const create = function(req, res) {

    if(req.body)
    {
        const connection = db.connection();
        connection.query( `INSERT INTO shifts (title, date, time)
        VALUES (?, ?, ?);`,
        [req.body.title, req.body.date, req.body.time])
    }
    res.send("/")
}

//* Obtener todos los turnos *//
const getAll = function(req, res) {
    res.send(turnos);
    
}

//* Eliminar turno *//
const remove = function(req, res) {

}

module.exports = { create, getAll, remove };