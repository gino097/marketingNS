const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel_Sol_Todos = asyncHandler(async (sucursal, res) => {

  const headingColumnNames = [
    "CODIGO",
    "REGION",
    "SOLICITUD",
    "DESCRIPCION",
    "ESTADO"
  ];

  var campos = [
    "SOLICI_CODE",
    "SOLICI_REGIONAL",
    "SOLICI_SOLICITUD",
    "SOLICI_DESC_EVENTO",
    "SOLICI_ESTADO"
  ];

  const camposF = [
    "SOLICI_FECING"
  ];
  
  var comando;
  comando = "SELECT " + campos.toString() + " FROM dbo.sy_solicitud_materiales";
  objRep.generico_reporteGeneral_Excel(res,comando,headingColumnNames,camposF,"TODAS LAS SOLICITUDES");
});

module.exports = {
  reporteGeneral_Excel_Sol_Todos,
};
