var express = require('express');
var router = express.Router();
const { protect, perfil_admin} = require("../../middleware/authMiddleware");
const { crear, eliminar, actualizar, getRegistro, listado}= require("../../controllers/configuracion/ctrl_planes")
router
    .route("/planes")
    .get((protect,perfil_admin),listado)
router
    .route("/")
    .post(protect,crear)
router
    .route("/:id")
    .delete(protect,eliminar)
    .put(protect,actualizar)
    .get(protect,getRegistro)
module.exports = router;