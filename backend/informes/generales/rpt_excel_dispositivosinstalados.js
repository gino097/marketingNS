const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel = asyncHandler(async (sucursal, res) => {
  const headingColumnNames = [
    "IMEI - DISPOSITIVO",
    "VALIDACIÓN DE FUNCIONAMIENTO",
    "OBSERVACIÓN DE VALIDACIÓN",
    "NOMBRE DE SUCURSAL",
    "NÚMERO DE POLIZA",
    "FECHA REGISTRO DE INSTALACIÓN",
    "USUARIO REGISTRO DE INSTALACIÓN",
    "OBSERVACIÓN DE INSTALACIÓN"
  ]
  var comando;
  var campos = ["DISP_NOMBRE, DISP_VALFUN, DISP_OBSERV, DISP_SUCURS, DISP_POLIZA, DISP_FECINS, DISP_USUINS, DISP_OBSINS"]//campos que se agregaran a la tabla
  // var campos = ["DISP_NOMBRE, DISP_VALFUN, DISP_OBSERV, DISP_SUCURS, DISP_POLIZA, DISP_FECINS, DISP_USUINS, DISP_OBSINS"]//campos que se agregaran a la tabla
  // var campos = ["DISP_NOMBRE, DISP_VALFUN, DISP_OBSERV, DISP_SUCURS, DISP_POLIZA, DISP_USUINS, DISP_OBSINS"]//campos que se agregaran a la tabla
  var camposF = ["DISP_FECINS"];
  if(sucursal===-1)comando = "SELECT " + campos.toString() + " FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOPOLIZA='SI' AND DISP_SINOENTREGADO='SI' AND DISP_SINOINSTALADO='SI'";
  else comando = "SELECT " + campos.toString() + " FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOPOLIZA='SI' AND DISP_SINOENTREGADO='SI' AND DISP_SINOINSTALADO='SI' AND DISP_SUCURS = '"+sucursal+"'";
  objRep.generico_reporteGeneral_Excel(res, comando, headingColumnNames, camposF, "LISTA DE DISPOSITIVOS INSTALADOS");
});

module.exports = {
  reporteGeneral_Excel
};