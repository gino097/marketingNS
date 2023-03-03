const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel = asyncHandler(async (sucursal, res) => {
  const headingColumnNames = [
    "NOMBRE",
    "SIGLAS",
    "TIPO",
    "CATEGORIA",
    "ESTADO",
    "USUARIO INGRESO",
    "FECHA INGRESO",
    "USUARIO MODIFICACIÓN",
    "FECHA MODIFICACIÓN"
  ];
  var campos = [
    "PLAN_NOMBRE",
    "PLAN_SIGLAS",
    "PLAN_TIPOXX",
    "PLAN_CATEGORIA",
    "PLAN_ESTADO",
    "PLAN_USUING",
    "PLAN_FECING",
    "PLAN_USUMOD",
    "PLAN_FECMOD"
  ];
  const camposF = [
    "PLAN_FECING",
    "PLAN_FECMOD"
  ];
  var comando;
  comando = "SELECT " + campos.toString() + " FROM dbo.sy_salud_plan";
  objRep.generico_reporteGeneral_Excel(res,comando,headingColumnNames,camposF,"LISTADO DE PLANES");
});

module.exports = {
  reporteGeneral_Excel,
};
