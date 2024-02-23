const express = require('express');
const { create, getAll, remove } = require('../controllers/shiftController');
const router = express.Router();


//* Crear ruta *//
router.post("/create", create)

//* Obtener todos los rutas *//
router.get("/all", getAll)

//* Eliminar rutas *//
router.delete("/:id", remove);
 
module.exports = router;
