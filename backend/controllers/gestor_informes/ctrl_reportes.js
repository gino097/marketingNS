const asyncHandler = require("express-async-handler");
const objconn = require("../../config/config_sql");
const sql = require('mssql');
const objrep_dispositivos = require("../../informes/generales/info_pdf_solicitudes");
const informeGeneral = asyncHandler(async (req, res) => {
  /*const id_perfilS = Number(req.headers.id_perfils || -1);
  const valueSelected = Number(req.params.value);
  const connection= await new sql.ConnectionPool(objconn.conn).connect();
  if(id_perfilS===21 || id_perfilS===22){
    let comando="SELECT USUA_REGION FROM dbo.sy_seguridad_usuario WHERE PERF_CODIGO = '"+id_perfilS+"'";
    connection.request().query(comando,(err, results)=>{
      if(err){return}
      var region=results.recordset[0].USUA_REGION;
      if (valueSelected == 1) {
        objrep_dispositivos.informeGeneralPDF(region, res);
      } 
    })
  } else{*/
    if (valueSelected == 1) {
      objrep_dispositivos.informeGeneralPDF(-1, res);
    //} 
  }
});

module.exports = {
  informeGeneral,
};