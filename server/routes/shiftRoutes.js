const express = require('express');
const { create, getAll, remove, createView } = require('../controllers/shiftController');
const router = express.Router();

//* Crear ruta *//
router.get("/create", createView)

//* Crear ruta *//
router.post("/", create)

//* Obtener todos los rutas *//
router.get("/all", getAll)

//* Eliminar rutas *//
router.delete("/:id", remove);
 
module.exports = router;