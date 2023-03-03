var express = require('express');
var router = express.Router();
const {protect} = require("../../middleware/authMiddleware");

const {crear, listado, combo_regiones} = require("../../controllers/solicitud_materiales/ctrl_detalle")

router
    .route("/")
    .post(crear)
router
    .route("/listado")
    .get(listado)
router
    .route("/regiones")
    .get(combo_regiones)

module.exports = router;