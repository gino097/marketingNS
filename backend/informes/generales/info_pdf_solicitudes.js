const asyncHandler = require("express-async-handler");
const objRep = require("../../kernel/cReporte");

const objPDF = require("../../pdf/cPdf");
const informeGeneralPDF = asyncHandler(async (idSoli, res) => {

  
  var campos = ["*"];


  const camposF = ["SOLICI_FECMOD", "SOLICI_FECING", "SOLICI_FEC_INICIO" ,"SOLICI_FEC_FIN"];
  const campo_esp=["SOLICI_HORA_EVENTO"];
  var comando = "SELECT " + campos.toString() + " FROM dbo.sy_solicitud_materiales WHERE SOLICI_CODE = '" + idSoli + "'";
  objPDF.informe_PDF(res, comando, camposF, campo_esp, "INFORME DE SOLICITUD");
});

module.exports = {
  informeGeneralPDF,
};
