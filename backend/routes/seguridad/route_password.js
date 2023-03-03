var express = require('express');
var router = express.Router();
const { protect, perfil_admin } = require("../../middleware/authMiddleware");
const { recuperar_password, cambiar_clave, crear, eliminar, actualizar, getRegistro, listado } = require("../../controllers/seguridad/ctrl_password")

router
    .route("/password")
    .get(/*protect,*/ listado)
router
    .route("/cambiar_clave")
    .put(/*protect,*/ cambiar_clave)
router
    .route("/recuperarpassword")
    .post(/*protect,*/ recuperar_password)

router
    .route("/")
    .post(/*protect,*/ crear)
router
    .route("/:id")
    .delete(/*protect,*/ eliminar)
    .put(/*protect,*/ actualizar)
    .get(/*protect,*/ getRegistro)

module.exports = router;