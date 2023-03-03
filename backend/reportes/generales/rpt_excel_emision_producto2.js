const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");
const reporteGeneral_Excel_Pro2 = asyncHandler(async (sucursal, res) => {

  const headingColumnNames=[
    { header: 'CODIGO', key: 'CODIGO', width: 10 },
    { header: 'NOMBRE', key: 'NOMBRE', width: 32 },
    { header: 'STOCK', key: 'STOCK', width: 10, outlineLevel: 1 },
    { header: 'CATEGORIA', key: 'CATEGORIA', width: 10 },
    { header: 'CIUDAD', key: 'CIUDAD', width: 32 },
    { header: 'ESTADO', key: 'ESTADO', width: 10, outlineLevel: 1 },
    { header: 'IMAGEN', key: 'IMAGEN', width: 10, outlineLevel: 1 }
  ];
  /*const headingColumnNames = [
    "CODIGO",
    "NOMBRE",
    "STOCK",
    "CATEGORIA",
    "CIUDAD",
    "ESTADO"
  ];*/
  var campos = [
    "MATE_CODIGO",
    "MATE_NOMBRE",
    "MATE_STOCK",
    "MATE_CATEGORIA",
    "MATE_CIUDAD",
    "MATE_ESTADO",
    "MATE_IMG"
  ];
  const camposF = [
    "MATE_FECING"
  ];
  var comando;
  comando = "SELECT " + campos.toString() + " FROM dbo.sy_inventario_materiales WHERE MATE_ESTADO='ACTIVO' AND MATE_CIUDAD = 'Santa Cruz'";
  objRep.generico_reporteGeneral_ExcelImagenes(res,comando,headingColumnNames,camposF,"EMISIÓN PRODCUTOS");
});

module.exports = {
  reporteGeneral_Excel_Pro2,
};
