const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objVal = require("../../kernel/cValidacion");
const objPag = require("../../kernel/cPaginacion");
const objFechaAuditoria = require("../../kernel/cFechas");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objMensajesApi = require("../../kernel/cMensajesApi");
const tabla = "sy_salud_plan";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "SN";
const crear = asyncHandler(async (req, res) => {
  const { nombre, tipo, valor, estado, siglas, categoria } = req.body;
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, async(datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    let valores = [nombre, tipo, valor, estado, digitador, fecha_auditoria, digitador, fecha_auditoria, siglas, categoria];
    let campos = ["PLAN_NOMBRE","PLAN_TIPOXX","PLAN_VALORX","PLAN_ESTADO","PLAN_USUING","PLAN_FECING", "PLAN_USUMOD", "PLAN_FECMOD", "PLAN_SIGLAS", "PLAN_CATEGORIA"];
    let campos_F=["PLAN_FECING", "PLAN_FECMOD"];
    objVal.NoRepetirInsertar(tabla, "PLAN_NOMBRE", nombre, (result)=>{
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
  var campos_busqueda = ["PLAN_NOMBRE"];
  var campos_execute = ["PLAN_NOMBRE"];
  var valor_busqueda = req.query.keyword;
  var campos = ["*"];
  var campo_orderby="PLAN_CODIGO"
  objPag.paginar_tabla_all(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res)
});
const eliminar = asyncHandler(async (req, res) => {
  const Id_PK = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos = ["PLAN_ESTADO","PLAN_USUANU","PLAN_FECANU"];
  var campo_id = "PLAN_CODIGO";
  let campos_F=["PLAN_FECANU"];
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    var valores = ["INACTIVO", digitador, fecha_auditoria, Id_PK];
    objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
  });
});
const actualizar = asyncHandler(async (req, res) => {
  let { nombre, siglas, tipo, categoria } = req.body;
  const Id_plan = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos_consInd=["PLAN_NOMBRE", "PLAN_SIGLAS", "PLAN_TIPOXX", "PLAN_CATEGORIA"];
  objSql.consulta_individual_PS_callback(tabla,campos_consInd,"PLAN_CODIGO",Id_plan, (resultado_Rows)=>{
      if(nombre===undefined || nombre==="undefined" || nombre==="" || nombre===null){
        nombre=resultado_Rows["PLAN_NOMBRE"];
    }
    if(tipo===undefined || tipo==="undefined" || tipo==="" || tipo===null){
      tipo=resultado_Rows["PLAN_TIPOXX"];
    }
    if(siglas===undefined || siglas==="undefined" || siglas==="" || siglas===null){
      siglas=resultado_Rows["PLAN_SIGLAS"];
    }
    if(categoria===undefined || categoria==="undefined" || categoria==="" || categoria===null){
      categoria=resultado_Rows["PLAN_CATEGORIA"];
    }
    objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];

    var valores = [nombre, siglas, tipo, categoria, digitador, fecha_auditoria, "ACTIVO", Id_plan];
    var campos = ["PLAN_NOMBRE", "PLAN_SIGLAS", "PLAN_TIPOXX", "PLAN_CATEGORIA", "PLAN_USUMOD", "PLAN_FECMOD", "PLAN_ESTADO"];
    var campos_F=["PLAN_FECMOD"];
    var campo_id = "PLAN_CODIGO";
    objVal.NoRepetirActualizar(tabla, "PLAN_NOMBRE", nombre, "PLAN_CODIGO", Id_plan, (result) => {
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
  var campo_id = "PLAN_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});

module.exports = {
  crear,
  listado,
  eliminar,
  actualizar,
  getRegistro
};