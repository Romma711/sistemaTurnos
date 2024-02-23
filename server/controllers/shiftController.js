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
    console.log(req)
    const connection = db.connection();
    try {
        if(req.body)
        {
            connection.query(`INSERT INTO turnos (descripcion, dia, hora)
            VALUES (?, ?, ?);`,
            [req.body.descripcion, req.body.dia, req.body.hora])
        }
    } finally {
        connection.destroy();
    }
}

//* Obtener todos los turnos *//
const getAll = function(req, res) {
    res.send(turnos);
    const connection = db.connection();
    const [turnos] = connection.query(`SELECT idturno, dia, hora, descripcion FROM turnos`)
    return turnos
}

//* Eliminar turno *//
const remove = function(req, res) {

}

module.exports = { create, getAll, remove };
