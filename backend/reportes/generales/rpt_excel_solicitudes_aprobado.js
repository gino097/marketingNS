const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel_Sol_Apro = asyncHandler(async (sucursal, res) => {

  const headingColumnNames = [
    "CODIGO",
    "REGION",
    "SOLICITUD",
    "DESCRIPCION",
  ];

  var campos = [
    "SOLICI_CODE",
    "SOLICI_REGIONAL",
    "SOLICI_SOLICITUD",
    "SOLICI_DESC_EVENTO",
  ];

  const camposF = [
    "SOLICI_FECING"
  ];
  
  var comando;
  comando = "SELECT " + campos.toString() + " FROM dbo.sy_solicitud_materiales WHERE SOLICI_ESTADO='APROBADO'";
  objRep.generico_reporteGeneral_Excel(res,comando,headingColumnNames,camposF,"SOLICITUDES PENDIENTES");
});

module.exports = {
  reporteGeneral_Excel_Sol_Apro,
};
