const objToken = require("./cToken");
const objSql = require("./cSql");
const objFec = require("./cFechas");
const objIp = require("./cObtenerIp");
const objconn = require('../config/config_sql');
const sql = require('mssql');
const { Send_MSG_Error_Credenciales } = require("./cMensajesApi");

async function validar_identidad_usuario(campos, variables, nickname, req, res) {
  const cadenasql1 = "SELECT USUA_CEDULA, USUA_CODIGO,USUA_NOMBRE, USUA_APELLI, USUA_CORREO, USUA_CORREO, PERF_NOMBRE, dbo.sy_seguridad_usuario.PERF_CODIGO FROM dbo.sy_seguridad_usuario, dbo.sy_seguridad_perfil WHERE dbo.sy_seguridad_usuario.PERF_CODIGO = dbo.sy_seguridad_perfil.PERF_CODIGO AND USUA_CEDULA = @USUA_CEDULA AND USUA_CLAVEX = @USUA_CLAVEX AND USUA_ESTADO=@USUA_ESTADO;";
  var result;
  try {
    var json_execute='{';
    const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
    for(let i=0;i<variables.length;i++){
      ps1.input(campos[i],sql.VarChar);
      if(i<(variables.length-1))json_execute+='"'+campos[i]+'":"'+variables[i]+'",';
      else json_execute+='"'+campos[i]+'":"'+variables[i]+'"';
    }
    json_execute+='}';
    json_execute=JSON.parse(json_execute);
    ps1.prepare(cadenasql1).then(()=>ps1.execute(json_execute)).then(_results=>{
      result=_results;
      console.log(result);
    })
    .then(()=>{
      var valores;
        const campos = ["LOUS_CODUSE", "LOUS_NOMBRE", "LOUS_CORREO", "LOUS_FECHAX", "LOUS_IPXXXX", "LOUS_HOSTXX", "LOUS_ESTADO", "LOUS_TIPOXX", "LOUS_USUSIS", "LOUS_TOKENX", "LOUS_USERAG", "LOUS_APLICA", "LOUS_ESTSES", "LOUS_IDSESS"];
        var fecha_auditoria = objFec.fecha_hora_actual();
        var ip = objIp.getIP(req);
        var user_agent = "SN";// objIp.getUserAgent(req);
        var host = "SN";
        if(result.rowsAffected[0]===0){
        valores = [0, "SN", nickname, fecha_auditoria, ip, host, "FALLIDO", "EMPRESA", "NO", "", user_agent, "WEB", "", ""];
        res.status(401);
        return res.json({ message: "USUARIO O CONTRASEÑA INCORRECTO" });
      }else{
        var token_generado = objToken.generateToken_JWT(result.recordset[0]["USUA_CODIGO"]);
          res.json({
            _id: result.recordset[0]["USUA_CODIGO"],
            name: result.recordset[0]["USUA_NOMBRE"],
            lastname: result.recordset[0]["USUA_APELLI"],
            id_perfil: result.recordset[0]["PERF_CODIGO"],
            perfil: result.recordset[0]["PERF_NOMBRE"],
            token: token_generado
          });
          valores = [result.recordset[0]["USUA_CODIGO"], result.recordset[0]["USUA_NOMBRE"] , nickname, fecha_auditoria, ip, host, "ACCESADO", "USUARIO", "SI", token_generado, user_agent, "WEB", "Abierta", token_generado];
      }
      objSql.insertar_PS_sin_res("sy_seguridad_logusuario", campos, valores, ['LOUS_FECHAX'], ['',''], "NO HISTORIAL");
      return ps1.unprepare();
    })
  } catch {
    res.json({ message: "ERROR EN BASE DE DATOS" });
  }
}
async function consulta_datos_usuario(codigo, callback) {
  let comando = "SELECT USUA_NOMBRE, USUA_APELLI, PERF_CODIGO, USUA_CODIGO, USUA_CORREO FROM dbo.sy_seguridad_usuario WHERE USUA_CODIGO=@USUA_CODIGO;";
  var result;
  try {
    var json_execute='{"USUA_CODIGO":'+'"'+codigo+'"}';
    const aux1= await new sql.ConnectionPool(objconn.conn).connect();
    const ps1=new sql.PreparedStatement(aux1);
    ps1.input("USUA_CODIGO",sql.Int);
    json_execute=JSON.parse(json_execute); 
    console.log(json_execute);
    ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
        result=_results.recordset[0];
        console.log(result);
        return ps1.unprepare();
    })
    .then(()=>{
      callback(result);
    });
  } catch (error) {
    console.log("Error comando exepcion: ",error);
  }
}

module.exports = {
  validar_identidad_usuario,
  consulta_datos_usuario
};
