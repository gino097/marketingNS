const asyncHandler = require("express-async-handler");
const objFechaAuditoria = require("../../kernel/cFechas");
const objDashboard = require("../../kernel/cDashboard");
const { user_token } = require("../../middleware/authMiddleware");
const objCombo = require("../../kernel/cCombo");

//USUARIOS ACTIVOS
const dashboard_soli_pendientes = asyncHandler(async (req,res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(SOLICI_CODE) AS PENDIENTES FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='PENDIENTE'", res);
  //objCombo.cargar_datos_combo("SELECT COUNT(USUA_CODIGO) AS USUARIOS FROM " + tabla_usuarios + " WHERE USUA_ESTADO='ACTIVO' AND USUA_FECING >= DATE_ADD('" + fecha_actual + "', INTERVAL -3 MONTH)", res);
});
const dashboard_soli_aprobadas = asyncHandler(async (req,res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(SOLICI_CODE) AS APROBADAS FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='APROBADO'", res);
  //objCombo.cargar_datos_combo("SELECT COUNT(USUA_CODIGO) AS USUARIOS FROM " + tabla_usuarios + " WHERE USUA_ESTADO='ACTIVO' AND USUA_FECING >= DATE_ADD('" + fecha_actual + "', INTERVAL -3 MONTH)", res);
});
const dashboard_soli_rechazadas = asyncHandler(async (req,res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(SOLICI_CODE) AS RECHAZADAS FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='RECHAZADO'", res);
  //objCombo.cargar_datos_combo("SELECT COUNT(USUA_CODIGO) AS USUARIOS FROM " + tabla_usuarios + " WHERE USUA_ESTADO='ACTIVO' AND USUA_FECING >= DATE_ADD('" + fecha_actual + "', INTERVAL -3 MONTH)", res);
});
const dashboard_solicitudes = asyncHandler(async (req,res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(SOLICI_CODE) AS SOLICITUDES FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='APROBADO' OR SOLICI_ESTADO='RECHAZADO' OR SOLICI_ESTADO='PENDIENTE'", res);
  //objCombo.cargar_datos_combo("SELECT COUNT(USUA_CODIGO) AS USUARIOS FROM " + tabla_usuarios + " WHERE USUA_ESTADO='ACTIVO' AND USUA_FECING >= DATE_ADD('" + fecha_actual + "', INTERVAL -3 MONTH)", res);
});
const dashboard_solicitudesData = asyncHandler(async (req,res) => {
  //objDashboard.cargar_cuadros("SELECT * FROM dbo.sy_solicitud_materiales", res);
  objCombo.cargar_datos_combo("SELECT * FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='PENDIENTE' OR SOLICI_ESTADO='RECHAZADO' OR SOLICI_ESTADO='APROBADO';", res);
});
//DISPOSITIVOS
const dashboard_dispositivos = asyncHandler(async (req, res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(DISP_CODIGO) AS DISPOSITIVOS FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOENTREGADO='NO' AND DISP_SINOINSTALADO='NO'", res);
});
//DISPOSITIVOS POR ENTREGA
const dashboard_dispositivos_entregar = asyncHandler(async (req, res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(DISP_CODIGO) AS DISPOSITIVOS FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOPOLIZA='SI' AND DISP_SINOENTREGADO='NO'", res);
});
//DISPOSITIVOS POR INSTALAR
const dashboard_dispositivos_porinstalar = asyncHandler(async (req, res) => {
  objDashboard.cargar_cuadros("SELECT COUNT(DISP_CODIGO) AS DISPOSITIVOS FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOENTREGADO='SI' AND DISP_SINOINSTALADO='NO'", res);
});

module.exports = {
  dashboard_soli_pendientes,
  dashboard_soli_aprobadas,
  dashboard_soli_rechazadas,
  dashboard_solicitudes,
  dashboard_solicitudesData
};
