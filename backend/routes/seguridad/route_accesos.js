var express = require('express');
var router = express.Router();
const { protect, perfil_admin} = require("../../middleware/authMiddleware");
const { listado}= require("../../controllers/seguridad/ctrl_accesos")

router
    .route("/logs")
    .get((protect,perfil_admin), listado)

module.exports = router;