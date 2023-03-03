var express = require('express');
var router = express.Router();
const { protect, perfil_admin, perfil_agente, perfil_broker } = require("../../middleware/authMiddleware");
const { eliminar, actualizar, getRegistro, listado, combo_solicitudes_planes, combo_dispositivos_users, informePDF, combo_solicitudes_ciudades} = require("../../controllers/solicitudes/ctrl_solicitudes")

router
    .route("/solicitudes")
    .get(listado) // EL PROTECT MANEJA LA SEGURIDAD JWT quitarlo solo para usar postman
router
    .route("/comboplanes")
    .get(combo_solicitudes_planes)
router
    .route("/combointermediario/:intermediario/:lugar")
    .get(combo_dispositivos_users)
router
    .route("/ciudades")
    .get(combo_solicitudes_ciudades)
router
    .route("/informePDF/:id", {responseType: 'arraybuffer'})
    .get(informePDF)

router
    .route("/:id")
    .delete(eliminar)
    .put(actualizar)
    .get(getRegistro)

module.exports = router;