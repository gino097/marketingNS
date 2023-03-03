var express = require('express');
var router = express.Router();
const { protect, perfil_admin } = require("../../middleware/authMiddleware");
const { dashboard_soli_pendientes, dashboard_soli_aprobadas, dashboard_soli_rechazadas, dashboard_solicitudes, dashboard_solicitudesData } = require("../../controllers/dashboard/ctrl_dashboard")

router
    .route("/solipendientes")
    .get((protect, perfil_admin),dashboard_soli_pendientes)
router
    .route("/soliaprobadas")
    .get((protect, perfil_admin), dashboard_soli_aprobadas)
router
    .route("/solirechazadas")
    .get((protect, perfil_admin), dashboard_soli_rechazadas)
router
    .route("/solicitudes")
    .get((protect, perfil_admin), dashboard_solicitudes)
router
    .route("/solicitudesData")
    .get((protect, perfil_admin), dashboard_solicitudesData)    
module.exports = router;