var express = require('express');
var router = express.Router();
const { protect, perfil_admin, perfil_logistica} = require("../../middleware/authMiddleware");
const { combo_perfiles, combo_supervisores, combo_regiones, cambiar_clave, crear, activar, eliminar, actualizar, actualizarClave, getRegistro, listado, combo_usuarios, combo_planes} = require("../../controllers/seguridad/ctrl_usuario")

router
    .route("/company")
    .get((protect,perfil_admin), listado)
router
    .route("/perfiles")
    .get(protect, combo_perfiles)
router
    .route("/supervisores")
    .get(protect, combo_supervisores)
router
    .route("/regiones")
    .get(protect, combo_regiones)
router
    .route("/combousuarios")
    .get(combo_usuarios)
    router
    .route("/comboplanes")
    .get(combo_planes)
router
    .route("/cambiar_clave")
    .put(protect, cambiar_clave)

router
    .route("/")
    .post((protect,perfil_admin), crear)
router
    .route("/:id")
    .delete(protect, eliminar)
    .put(protect, actualizar)
    .get(protect, getRegistro)
router
    .route("/activate/:id")
    .put(protect, activar)
router
    .route("/changepass/:id")
    .put((protect,perfil_admin), actualizarClave)

module.exports = router;