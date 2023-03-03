const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objVal = require("../../kernel/cValidacion");
const objPag = require("../../kernel/cPaginacion");
const objFechaAuditoria = require("../../kernel/cFechas");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objMensajesApi = require("../../kernel/cMensajesApi");
const tabla = "ns_configuracion_bodega";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "SN";

const crear = asyncHandler(async (req, res) => {
  const { nombre, observacion} = req.body;
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, async(datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    let valores = [nombre, observacion!==undefined?observacion:"", "ACTIVO", digitador, fecha_auditoria, digitador, fecha_auditoria];
    let campos = ["BODE_NOMBRE","BODE_OBSERV","BODE_ESTADO","BODE_USUING","BODE_FECING","BODE_USUMOD","BODE_FECMOD"];
    let campos_F=["BODE_FECING","BODE_FECMOD"];
    objVal.NoRepetirInsertar(tabla, "BODE_NOMBRE", nombre, (result)=>{
      if (result === false) {
      objSql.insertar_PS(tabla, campos, valores, campos_F, ['',''], res);
    } else {
      res.status(200).json(objMensajesApi.Send_MSG_Error_RegistroRepetido({}));
    }
    });
  });
});

const listado = asyncHandler(async (req, res) => {
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;
  var campos_busqueda = ["BODE_NOMBRE"];
  var campos_execute = ["BODE_NOMBRE"];
  var valor_busqueda = req.query.keyword;
  var campos = ["*"];
  var campo_orderby="BODE_CODIGO"
  objPag.paginar_tabla_all(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res)
});

const eliminar = asyncHandler(async (req, res) => {
  const Id_PK = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos = ["BODE_ESTADO","BODE_USUANU","BODE_FECANU"];
  var campo_id = "BODE_CODIGO";
  let campos_F=["BODE_FECANU"];
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    var valores = ["INACTIVO", digitador, fecha_auditoria, Id_PK];
    objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
  });
});
const activar = asyncHandler(async (req, res) => {
  const Id_bodega = Number(req.params.id);
  var valores = ["ACTIVO", Id_bodega];
  var campos = ["BODE_ESTADO"];
  var campo_id = "BODE_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});

const actualizar = asyncHandler(async (req, res) => {
  let { nombre, observacion} = req.body;
  const Id_bodega = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos_consInd=["BODE_NOMBRE", "BODE_OBSERV"];
  objSql.consulta_individual_PS_callback(tabla,campos_consInd,"BODE_CODIGO",Id_bodega, (resultado_Rows)=>{
   if(nombre===undefined || nombre==="undefined" || nombre==="" || nombre===null){
      nombre=resultado_Rows["BODE_NOMBRE"];
    }
    if(observacion===undefined || observacion==="undefined" || observacion==="" || observacion===null){
      observacion=resultado_Rows["BODE_OBSERV"];
    }
    objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    var valores = [nombre, observacion, digitador, fecha_auditoria, "ACTIVO", Id_bodega];
    var campos = ["BODE_NOMBRE","BODE_OBSERV","BODE_USUMOD","BODE_FECMOD", "BODE_ESTADO"];
    var campos_F=["BODE_FECMOD"];
    var campo_id = "BODE_CODIGO";
    objVal.NoRepetirActualizar(tabla, "BODE_NOMBRE", nombre, "BODE_CODIGO", Id_bodega, (result) => {
      if (result === false) {
        objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
      } else {
        res.status(500).json("Mensaje: Dato Repetido");
      }
    });
  });
  });
});

const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "BODE_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});

module.exports = {
  crear,
  listado,
  eliminar,
  activar,
  actualizar,
  getRegistro
};