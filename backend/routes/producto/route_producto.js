var express = require('express');
var router = express.Router();
const {protect, perfil_admin, perfil_logistica} = require("../../middleware/authMiddleware");

const {crear,listado, eliminar, actualizar, actualizarImg, getRegistro, activar} = require("../../controllers/producto/ctrl_producto")


router
    .route("/")
    .post((protect, (perfil_admin, perfil_logistica)), crear)

router
    .route("/listado")
    .get((protect, (perfil_admin, perfil_logistica)), listado)
router
    .route("/:id")
    .delete(protect, eliminar)
    .put(protect, actualizar)
    .get(protect, getRegistro)
router
    .route("/img/:id")
    .put(protect, actualizarImg)
router
    .route("/activate/:id")
    .put(protect, activar)

module.exports = router;