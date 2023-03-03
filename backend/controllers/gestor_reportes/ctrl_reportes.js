const asyncHandler = require("express-async-handler");
const objrep_usuarios = require("../../reportes/generales/rpt_excel_usuarios");
const { reporteGeneral_Excel_Pro } = require("../../reportes/generales/rpt_excel_emision_producto");
const { reporteGeneral_Excel_Sol_Pen } = require("../../reportes/generales/rpt_excel_solicitudes_pendiente");
const { reporteGeneral_Excel_Sol_Todos } = require("../../reportes/generales/rpt_excel_solicitudes_todos");
const { reporteGeneral_Excel_Sol_Apro } = require("../../reportes/generales/rpt_excel_solicitudes_aprobado");
const { reporteGeneral_Excel_Sol_Rech } = require("../../reportes/generales/rpt_excel_solicitudes_rechazado");

const { reporteGeneral_Excel_Pro1 } = require("../../reportes/generales/rpt_excel_emision_producto1");
const { reporteGeneral_Excel_Pro2 } = require("../../reportes/generales/rpt_excel_emision_producto2");
const { reporteGeneral_Excel_Pro3 } = require("../../reportes/generales/rpt_excel_emision_producto3");
const { reporteGeneral_Excel_Pro4 } = require("../../reportes/generales/rpt_excel_emision_producto4");
const { reporteGeneral_Excel_Pro5 } = require("../../reportes/generales/rpt_excel_emision_producto5");
const { reporteGeneral_Excel_Pro6 } = require("../../reportes/generales/rpt_excel_emision_producto6");
const { reporteGeneral_Excel_Pro7 } = require("../../reportes/generales/rpt_excel_emision_producto7");
const { reporteGeneral_Excel_Pro8 } = require("../../reportes/generales/rpt_excel_emision_producto8");

const reporteGeneral = asyncHandler(async (req, res) => {
  const valueSelected = Number(req.params.value);
    if (valueSelected == 1) {
      objrep_usuarios.reporteGeneral_Excel(-1, res);
    } else if (valueSelected == 2) {
      reporteGeneral_Excel_Pro(-1, res);
    }else if (valueSelected == 3) {
      reporteGeneral_Excel_Sol_Apro(-1, res);
    }else if (valueSelected == 4) {
      reporteGeneral_Excel_Sol_Pen(-1, res);
    }else if (valueSelected == 5) {
      reporteGeneral_Excel_Sol_Rech(-1, res);
    }else if (valueSelected == 6) {
      reporteGeneral_Excel_Sol_Todos(-1, res);
    } else if (valueSelected == 7) {
      reporteGeneral_Excel_Pro1(-1, res);
    }else if (valueSelected == 8) {
      reporteGeneral_Excel_Pro2(-1, res);
    }else if (valueSelected == 9) {
      reporteGeneral_Excel_Pro3(-1, res);
    }else if (valueSelected == 10) {
      reporteGeneral_Excel_Pro4(-1, res);
    }else if (valueSelected == 11) {
      reporteGeneral_Excel_Pro5(-1, res);
    }else if (valueSelected == 12) {
      reporteGeneral_Excel_Pro6(-1, res);
    }else if (valueSelected == 13) {
      reporteGeneral_Excel_Pro7(-1, res);
    }else if (valueSelected == 14) {
      reporteGeneral_Excel_Pro8(-1, res);
    }
});

module.exports = {
  reporteGeneral,
};