const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel = asyncHandler(async (sucursal, res) => {
  const headingColumnNames = [
    "CODIGO",
    "NOMBRES",
    "EMPRESA",
    "CIUDAD",
    "CORREO",
    "PERFIL",
    "ESTADO",
    "USUARIO INGRESO",
    "FECHA INGRESO",
    "USUARIO MODIFICACIÓN",
    "FECHA MODIFICACIÓN"
  ];
  var campos = [
    "USUA_CEDULA",
    "USUA_NOMBRE",
    "USUA_APELLI",
    "USUA_REGION",
    "USUA_CORREO",
    "PERF_NOMBRE",
    "USUA_ESTADO",
    "USUA_USUING",
    "USUA_FECING",
    "USUA_USUMOD",
    "USUA_FECMOD"
  ];
  const camposF = [
    "USUA_FECING",
    "USUA_FECMOD"
  ];
  var comando;
  comando = "SELECT " + campos.toString() + " FROM dbo.vista_usuarios";
  objRep.generico_reporteGeneral_Excel(res,comando,headingColumnNames,camposF,"LISTADO DE USUARIOS");
});

module.exports = {
  reporteGeneral_Excel,
};
