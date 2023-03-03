const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const tabla = "sy_solicitud_materiales";
const objPag = require("../../kernel/cPaginacion");
const sql = require('mssql');
const objPdf = require("../../informes/generales/info_pdf_solicitudes");
const objFechaAuditoria = require("../../kernel/cFechas");
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
const objCorreo=require("../../kernel/cCorreo");
var digitador = "DIGITADOR";

const crear = asyncHandler(async (req, res) => {
  const {userData}=req.body;
  //var {pData}=req.body;
  //console.log(userData);
  //console.log("req.body: ",req.body);
  const productos=userData.productosS;
  //console.log(productos);
  //const items1=userData.estado_detalle.split(',');
  //console.log(items1[0].split(':'));
 
    var valores = [userData.region, userData.solicitud, userData.objetivo_evento, userData.descripcion_evento, userData.fecha_inicio, userData.fecha_fin, userData.hora, userData.proyeccion_venta, userData.persona_solicita,userData.persona_responsable, userData.contacto, userData.productos_destacar, userData.correo, "PENDIENTE"/*, "2000-01-01 06:00:10.0000000"*/, fecha_auditoria,fecha_auditoria];
    const campos = ["SOLICI_REGIONAL","SOLICI_SOLICITUD","SOLICI_OBJ_EVENTO","SOLICI_DESC_EVENTO","SOLICI_FEC_INICIO","SOLICI_FEC_FIN","SOLICI_HORA_EVENTO","SOLICI_PROYEC_VENTAS","SOLICI_PERSO_SOLC","SOLICI_PERSO_RESP","SOLICI_NUM_CON_RESP", "SOLICI_PDESTACAR", "SOLICI_CORREO", "SOLICI_ESTADO"/*, "MATE_VENCIMIENTO"*/, "SOLICI_FECING","SOLICI_FECMOD"];
    const campos_F = ["SOLICI_FEC_INICIO","SOLICI_FEC_FIN","SOLICI_FECMOD","SOLICI_FECING"];
    const campo_esp=["SOLICI_HORA_EVENTO",sql.Time];
    objSql.insertar_PS(tabla, campos, valores, campos_F, campo_esp, res);

    
    var mensajeCliente='Estimado usuario\n\nSu solicitud ha sido registrada con éxito, procedemos con la revisión y nos ponemos en contacto para la gestión respectiva.\n\nSaludos cordiales;\n\nMarketing\nNacional Seguros';
    objCorreo.enviar_correo_mensaje(userData.correo,"SOLICITUD ENVIADA",mensajeCliente);

    const camposD = ["DETALLE_INVENTARIO","DETALLE_CANTIDAD","DETALLE_SOLICI_CODE","DETALLE_MATE_CODIGO", "DETALLE_TIPO", "DETALLE_FECMOD","DETALLE_FECING"];
    const camposD_F = ["DETALLE_FECMOD","DETALLE_FECING"];
    const campoD_esp=["",""];
    const codigo=userData.objetivo_evento;
    objSql.obtener_ultimo_registro_PS(tabla, ["*"], ["SOLICI_CODE"], (resultado)=>{
      //console.log(resultado);
      var idsoli=Number(resultado.SOLICI_CODE)+1;
      //console.log(idsoli);
      productos.map(function(element){
        if(element.cantidad>0){
          var valoresD = [element.producto, element.cantidad,idsoli, element.id, element.tipoP, fecha_auditoria,fecha_auditoria];
          objSql.insertar_PS_sin_res("sy_inventario_detalle", camposD, valoresD, camposD_F, campoD_esp);
          if(element.tipoP==="fecha")objSql.actualizar_PS_sin_res("sy_inventario_materiales", ["MATE_VENCIMIENTO"], [userData.fecha_fin, parseInt(element.id)], "MATE_CODIGO", ['MATE_VENCIMIENTO'], ['','']);
        }
        
      });
      var mensajePendiente="Nueva solicitud pendiente. Número de solicitud: "+idsoli;
      objSql.consulta_individual_PS_callbackAll("sy_seguridad_usuario","USUA_CORREO","PERF_CODIGO",14, (datos_suscriptor)=>{
        datos_suscriptor.map((element)=>{
          if(element["USUA_CORREO"]!=="")
          objCorreo.enviar_correo_mensaje(element["USUA_CORREO"],"NUEVA SOLICITUD PENDIENTE",mensajePendiente);
        })
        
      });
      objSql.consulta_individual_PS_callbackAll("sy_seguridad_usuario","USUA_CORREO","PERF_CODIGO",15, (datos_suscriptor)=>{
        datos_suscriptor.map((element)=>{
          if(element["USUA_CORREO"]!=="")
          objCorreo.enviar_correo_mensaje(element["USUA_CORREO"],"NUEVA SOLICITUD PENDIENTE",mensajePendiente);
        })
        
      });
      res.status(200);
    });
});
const crearReg = asyncHandler(async (req, res) => {
  
  var {pData}=req.body;
  //var {pData}=req.body;
  //console.log(userData);
  //console.log("req.body: ",req.body);
  /*const productos=userData.Productos;
  const items1=userData.estado_detalle.split(',');
  console.log(items1[0].split(':'));
 

    var valores = [userData.region, userData.solicitud, userData.objetivo_evento, userData.descripcion_evento, userData.fecha_inicio, userData.fecha_fin, userData.hora, userData.proyeccion_venta, userData.persona_solicita,userData.persona_responsable, userData.contacto, "PENDIENTE", fecha_auditoria,fecha_auditoria];
    const campos = ["SOLICI_REGIONAL","SOLICI_SOLICITUD","SOLICI_OBJ_EVENTO","SOLICI_DESC_EVENTO","SOLICI_FEC_INICIO","SOLICI_FEC_FIN","SOLICI_HORA_EVENTO","SOLICI_PROYEC_VENTAS","SOLICI_PERSO_SOLC","SOLICI_PERSO_RESP","SOLICI_NUM_CON_RESP","SOLICI_ESTADO", "SOLICI_FECING","SOLICI_FECMOD"];

    const campos_F = ["SOLICI_FEC_INICIO","SOLICI_FEC_FIN","SOLICI_FECMOD","SOLICI_FECING"];
    const campo_esp=["SOLICI_HORA_EVENTO",sql.Time];*/

    //objSql.insertar_PS(tabla, campos, valores, campos_F, campo_esp, res);
/*
    const camposD = ["DETALLE_INVENTARIO","DETALLE_CANTIDAD","DETALLE_SOLICI_CODE","DETALLE_MATE_CODIGO","DETALLE_FECMOD","DETALLE_FECING"];

    const camposD_F = ["DETALLE_FECMOD","DETALLE_FECING"];
    const campoD_esp=["",""];
    const codigo=userData.objetivo_evento;
    objSql.obtener_ultimo_registro_PS(tabla, ["*"], ["SOLICI_CODE"], (resultado)=>{
      console.log(resultado);
      var idsoli=Number(resultado.SOLICI_CODE)+1;
      console.log(idsoli);
      productos.map(function(element){
        var valoresD = [element.producto, element.cantidad,idsoli, element.id, fecha_auditoria,fecha_auditoria];
        //objSql.insertar_PS_sin_res("sy_inventario_detalle", camposD, valoresD, camposD_F, campoD_esp);
      });
      res.status(200);
    });*/
    
    //objSql.insertar_PS_sin_res("sy_inventario_detalle", camposD, valoresD, camposD_F, campoD_esp, res);
});
const listado = asyncHandler(async (req, res) => {
  //try {
    let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;
  var campos_busqueda = ["SOLICI_REGIONAL", "SOLICI_SOLICITUD", "SOLICI_OBJ_EVENTO", "SOLICI_DESC_EVENTO"];//CAMPOS DE BUSQUEDA EN LISTA DE DISPOSITIVOS
  var campos_execute = ["SOLICI_REGIONAL", "SOLICI_SOLICITUD", "SOLICI_OBJ_EVENTO", "SOLICI_DESC_EVENTO"];
  var valor_busqueda = req.query.keyword;
  var campo_orderby="SOLICI_CODE"
  var campos = ["*"];//campos(columnas) que se mostraran en la paginacion
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    let id_perfil=datos_usuario["PERF_CODIGO"];
    //if(id_perfil===14 || id_perfil===15){ //SUPER //ADMIN
      objPag.paginar_tabla_all(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    /*}else if(id_perfil===28 ){//SUSCRIPTOR
      var campos_where = ["SOLICI_ESTADO"];
      var valores_where = [NULL];
      objPag.paginar_tabla_all_where1(tabla, campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    }else{ //AGENTE //BROKER //DIRECTO
      var campos_where = ["USUA_CODIGO"];
      var valores_where = [id_usuario];
      objPag.paginar_tabla_all_where1(tabla, campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    }*/
  });
  /*} catch (error) {
    if(error.hasOwnProperty("expiredAt"))
    res.json({Message: "jwt expired"});
  }*/
  
});
const actualizar = asyncHandler(async (req, res) => {
  const {aprobar } = req.body;
  const Id_Solicitud = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  
  var campos = ["SOLICI_ESTADO", "SOLICI_ESTADO_POR"];
  var campo_id = "SOLICI_CODE";
  var camposF=["SOLICI_FECMOD"];
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"]+" "+datos_usuario["USUA_APELLI"];
    var valores = [aprobar, digitador, Id_Solicitud];
    if(aprobar==="APROBADO"){
      const comando="SELECT * FROM dbo.sy_inventario_detalle WHERE DETALLE_SOLICI_CODE='"+Id_Solicitud+"'"
      objSql.consulta_sql_reportes(comando,(result)=>{
        result.forEach(element => {
          objSql.consulta_individual_PS_callback("sy_inventario_materiales", ["MATE_STOCK"],["MATE_CODIGO"], element["DETALLE_MATE_CODIGO"],(result)=>{
            var newStock=result["MATE_STOCK"]-element["DETALLE_CANTIDAD"];
            objSql.actualizar_PS_sin_res("sy_inventario_materiales", ["MATE_STOCK"], [newStock, element["DETALLE_MATE_CODIGO"]], ["MATE_CODIGO"], ["",""], ["", ""]);
          });
        });
      });
    }

    objSql.consulta_individual_PS_callback(tabla, ["*"],["SOLICI_CODE"], Id_Solicitud,(result)=>{
      var mensajeAprobado="Estimado usuario\n\nNos complace informar que su solicitud ha sido APRODABA, procedemos la gestión respectiva.\n\nSaludos cordiales;\n\nMarketing\nNacional Seguros\n\n";
      var mensajeRechazado="Estimado usuario\n\nEsta solicitud ha sido RECHAZADA por validaciones internas. Para mayor información por consultarlo con su Gerencia Comercial - Regional.\n\nSaludos cordiales;\n\nMarketing\nNacional Seguros";
      
      var mensajeRespuesta="Su solicitud ha sido "+(aprobar==="APROBADO"?"APROBADA":aprobar==="RECHAZADO"?"RECHAZADA":"");
      objCorreo.enviar_correo_mensaje(result["SOLICI_CORREO"],"RESPUESTA A SOLICITUD",aprobar==="APROBADO"?mensajeAprobado:aprobar==="RECHAZADO"?mensajeRechazado:"");
    });
    objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, ["", ""], res);
  });
});
const eliminar = asyncHandler(async (req, res) => {
  const Id_PK = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos = ["SOLICI_ESTADO"/*,"SOLI_USUARIOANULACIONPLAN","SOLI_FECHAANULACIONPLAN"*/];
  var campo_id = "SOLICI_CODE";
  let campos_F=["SOLI_FECHAANULACIONPLAN"];
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    var valores = ["RECHAZADO"/*, digitador, fecha_auditoria*/, Id_PK];
    objSql.actualizar_PS(tabla, campos, valores, campo_id, [""], ['',''], res);
  });
});
const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "SOLICI_CODE";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});

const informePDF = asyncHandler(async (req, res) => {
  const {id}=req.params;
  objPdf.informeGeneralPDF(id, res)
});

module.exports = {
  crear,
  crearReg,
  listado,
  actualizar,
  eliminar,
  getRegistro,
  informePDF
};
