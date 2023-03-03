var express = require('express');
var router = express.Router();
const { protect, perfil_admin} = require("../../middleware/authMiddleware");
const { crear, eliminar, activar, actualizar, getRegistro, listado}= require("../../controllers/configuracion/ctrl_bodega")

router
    .route("/bodega")
    .get((protect,perfil_admin), listado)
router
    .route("/")
    .post((protect), crear)
router
    .route("/:id")
    .delete(protect, eliminar)
    .put(protect, actualizar)
    .get(protect, getRegistro)
router
    .route("/activate/:id")
    .put(protect, activar)

module.exports = router;