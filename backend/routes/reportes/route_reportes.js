var express = require('express');
var router = express.Router();
const { protect, perfil_admin } = require("../../middleware/authMiddleware");
const { reporteGeneral}= require("../../controllers/gestor_reportes/ctrl_reportes")

router
    .route("/:value")
    .get(reporteGeneral)

module.exports = router;