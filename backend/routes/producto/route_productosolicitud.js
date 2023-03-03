var express = require('express');
var router = express.Router();
const {protect} = require("../../middleware/authMiddleware");

const {crear, crearReg, listado, actualizar, eliminar, getRegistro, informePDF} = require("../../controllers/producto/ctrl_solicitudproducto")

router
    .route("/")
    .post( crear)
router
    .route("/reg")
    .post( crearReg)
router
    .route("/listado")
    .get( listado)
router
    .route("/:id")
    .put(actualizar)
    .delete(eliminar)
    .get(getRegistro)
router
    .route("/informePDF/:id", {responseType: 'arraybuffer'})
    .get(informePDF)
    
module.exports = router;