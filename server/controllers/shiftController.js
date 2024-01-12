const { Shift } = require('../models/shift');

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

const createView = function(req, res) {

}

const create = function(req, res) {
    const body = req.body
    Shift.create({
            title: body.title,
            date: body.date,
            time: body.time,
            reservedBy: body.reservedBy
        })
        .then((createdTask) => {
            res.status(201).json({
                ok: true,
                message: "Tarea creada con éxito",
                data: createdTask,
            })
        })
        .catch((err) => {
            res.status(400).json({ ok: false, message: "Error al crear la tarea" })
        })
}

//* Obtener todos los turnos *//
const getAll = function(req, res) {

}

//* Eliminar turno *//
const remove = function(req, res) {

}

module.exports = { create, getAll, remove, createView };