const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel = asyncHandler(async (sucursal, res) => {
    const headingColumnNames = [
      "IMEI - DISPOSITIVO",
      "VALIDACIÓN DE FUNCIONAMIENTO",
      "OBSERVACIÓN DE VALIDACIÓN",
      "NOMBRE DE SUCURSAL",
      "NÚMERO DE POLIZA",
      "ENTREGADO",
      "TALLER",
    ]
    var campos = ["DISP_NOMBRE, DISP_VALFUN, DISP_OBSERV, DISP_SUCURS, DISP_POLIZA, DISP_LUGENT, DISP_TALLER"]//campos que se agregaran a la tabla
    if(sucursal===-1)comando = "SELECT " + campos.toString() + " FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOPOLIZA='SI' AND DISP_SINOENTREGADO='SI' AND DISP_SINOINSTALADO='NO'";
    else comando = "SELECT " + campos.toString() + " FROM dbo.ns_inventario_dispositivos WHERE DISP_ESTADO='ACTIVO' AND DISP_SINOPOLIZA='SI' AND DISP_SINOENTREGADO='SI' AND DISP_SINOINSTALADO='NO' AND DISP_SUCURS = '"+sucursal+"'";
    objRep.generico_reporteGeneral_Excel(res,comando,headingColumnNames,[""],"LISTA DE DISPOSITIVOS POR INSTALAR");
});

module.exports = {
  reporteGeneral_Excel
};