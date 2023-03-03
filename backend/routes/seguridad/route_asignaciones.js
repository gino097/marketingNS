var express = require('express');
var router = express.Router();
const { protect, perfil_admin} = require("../../middleware/authMiddleware");
const {crear, activar, eliminar, actualizar, getRegistro, listado} = require("../../controllers/asignaciones/ctrl_asignaciones")

router
    .route("/asignaciones")
    .get(listado)

router
    .route("/")
    .post(crear)
router
    .route("/:id")
    .delete(eliminar)
    .put(protect, actualizar)
    .get(protect, getRegistro)
router
    .route("/activate/:id")
    .put(activar)

module.exports = router;