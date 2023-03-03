const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objVal = require("../../kernel/cValidacion");
const objPag = require("../../kernel/cPaginacion");
const objFechaAuditoria = require("../../kernel/cFechas");
const objToken = require("../../kernel/cToken");
const objCombo = require("../../kernel/cCombo");
const objPDF = require("../../pdf/cPdf");
const objUsu = require("../../kernel/cUsuario");
const tabla = "sy_salud_solicitud";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "DIGITADOR";
const objPdf = require("../../informes/generales/info_pdf_solicitudes");
const objCorreo=require("../../kernel/cCorreo");

const listado = asyncHandler(async (req, res) => {
  //try {
    let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;
  var campos_busqueda = ["SOLI_FECSOL", "SOLI_LUGARX", "SOLI_INTERM", "USUA_NOMBRE", "SOLI_USTEDES", "SOLI_NOMBRES"]//CAMPOS DE BUSQUEDA EN LISTA DE DISPOSITIVOS
  var campos_execute = ["SOLI_FECSOL", "SOLI_LUGARX", "SOLI_INTERM", "USUA_NOMBRE", "SOLI_USTEDES", "SOLI_NOMBRES"]
  var valor_busqueda = req.query.keyword;
  var campo_orderby="SOLI_CODIGO"
  var campos = ["*"];//campos(columnas) que se mostraran en la paginacion
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    let id_perfil=datos_usuario["PERF_CODIGO"];
    if(id_perfil===14 || id_perfil===15){ //SUPER //ADMIN
      objPag.paginar_tabla_all("vista_solicitud", campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    }else if(id_perfil===28 ){//SUSCRIPTOR
      var campos_where = ["SOLI_ESTADO"];
      var valores_where = ["EMISION MANUAL"];
      objPag.paginar_tabla_all_where1("vista_solicitud", campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    }else{ //AGENTE //BROKER //DIRECTO
      var campos_where = ["USUA_CODIGO"];
      var valores_where = [id_usuario];
      objPag.paginar_tabla_all_where1("vista_solicitud", campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
    }
  });
  /*} catch (error) {
    if(error.hasOwnProperty("expiredAt"))
    res.json({Message: "jwt expired"});
  }*/
  
});

const eliminar = asyncHandler(async (req, res) => {
  const Id_PK = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var campos = ["SOLI_ESTADO","SOLI_USUARIOANULACIONPLAN","SOLI_FECHAANULACIONPLAN"];
  var campo_id = "SOLI_CODIGO";
  let campos_F=["SOLI_FECHAANULACIONPLAN"];
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario)=>{
    digitador=datos_usuario["USUA_NOMBRE"];
    var valores = ["RECHAZADO", digitador, fecha_auditoria, Id_PK];
    objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
  });
});

const informePDF = asyncHandler(async (req, res) => {
  const {id}=req.params;
  objPdf.informeGeneralPDF(id, res)
});

const actualizar = asyncHandler(async (req, res) => {
  const {observacion, planes, valor } = req.body;
  const Id_Solicitud = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    var digitador = datos_usuario["USUA_NOMBRE"];
    objSql.consulta_individual_PS_callback("sy_salud_solicitud","*","SOLI_CODIGO",Id_Solicitud, (datos_solicitud)=>{
      //ALGORITMO PARA EVALUAR RIESGOS*********************************
      var existe_riesgo="No";
      if(datos_solicitud["SOLI_ESTATURA"]!=="" && datos_solicitud["SOLI_ESTATURA"]!==null && datos_solicitud["SOLI_ESTATURA"]>0 && datos_solicitud["SOLI_PESO"]!=="" && datos_solicitud["SOLI_PESO"]!==null && datos_solicitud["SOLI_PESO"]>0){//Calculo del Peso ideal
        var calculopeso_ideal=0;
        var estatura=datos_solicitud["SOLI_ESTATURA"];
        estatura=estatura/100;
        var peso=datos_solicitud["SOLI_PESO"];
        calculopeso_ideal= (peso / (estatura*estatura));
        if(calculopeso_ideal<20 || calculopeso_ideal>31){
          existe_riesgo="Si";
        }
      }
      if(datos_solicitud["SOLI_HAPADECIDOENFERMEDADES"]==="Si"){//Enfermedades relacionada con las convulsiones, epilepsia, etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_TOSENFERMEDADESRESPIRATORIAS"]==="Si"){//Enfermedades relacionada con la tos cronica, y pulmones, etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESCORAZON"]==="Si"){//Enfermedades relacionada con el corazon etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESRINION"]==="Si"){//Enfermedades relacionada con el rinion etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESARTICULACIONES"]==="Si"){//Enfermedades relacionada con articulaciones etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESSANGRE"]==="Si"){//Enfermedades relacionada con la sangre etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESCOLESTEROL"]==="Si"){//Enfermedades relacionada con el colesterol etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_ENFERMEDADESDECANCER"]==="Si"){//Enfermedades relacionada con el cancer etc.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_SIDA"]==="Si"){//Enfermedades relacionada con el SIDA.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_TIENEALGUNAOTRAENFERMEDAD"]==="Si"){//Otras Enfermedades.
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_FUMA"]==="Si" && datos_solicitud["SOLI_CUANTOFUMA"]==="Mayor cinco"){//Fuma SI y mas de 5 cigarrillos al día
        existe_riesgo="Si";
      }
      if(datos_solicitud["SOLI_INGIEREALCOHOL"]==="Si" && datos_solicitud["SOLI_DETALLEINGIEREALCOHOL"]==="Frecuentemente"){//Ingiere Alcohol SI y frecuentemente
        existe_riesgo="Si";
      }
              /*
      if(datos_solicitud["SOLI_PRACTICADOEXAMEN"]==="No"){//Si se ha practicado examen
        existe_riesgo="Si";
      }else{
        if(datos_solicitud["SOLI_EXAMENSANGRE"]==="Si"){ //Si se ha practicado Examen de sangre
          if(datos_solicitud["SOLI_RESULTADOEXAMENSANGRE"]!=="Normal"){
            existe_riesgo="Si";
          }
          //if(datos_solicitud["SOLI_DETALLEEXAMENSANGRE"]==="Otros"){
          //  existe_riesgo="Si";
          //}
        }
        if(datos_solicitud["SOLI_EXAMENORINA"]==="Si"){ //Si se ha practicado Examen de Orina
          if(datos_solicitud["SOLI_RESULTADOEXAMENORINA"]!=="Normal"){
            existe_riesgo="Si";
          }
            //if(datos_solicitud["SOLI_DETALLEEXAMENSANGRE"]==="Otros"){
            //  existe_riesgo="Si";
            //}
        }
        if(datos_solicitud["SOLI_ELECTROCARDIOGRAMA"]==="Si"){ //Si se ha practicado Examen Electrocardiograma
          if(datos_solicitud["SOLI_RESULTADOEXAMENELECTRO"]!=="Normal"){
            existe_riesgo="Si";
          }
            //if(datos_solicitud["SOLI_DETALLEEXAMENSANGRE"]==="Otros"){
            //  existe_riesgo="Si";
            //}
        }
        if(datos_solicitud["SOLI_RAYOSX"]==="Si"){ //Si se ha practicado Examen Rayos X
          if(datos_solicitud["SOLI_RESULTADOEXAMENRAYOSX"]!=="Normal"){
            existe_riesgo="Si";
          }
            //if(datos_solicitud["SOLI_DETALLEEXAMENSANGRE"]==="Otros"){
            //  existe_riesgo="Si";
            //}
        }
      }
        */
      if(datos_solicitud["SOLI_EMBARAZO"]==="Si"){//Si esta embarazada
        if(datos_solicitud["SOLI_EVOLUCIONEMBARAZO"]==="No"){//Evoluciona el embarazo sin problemas si la respuesta es NO. Existe riesgo
          existe_riesgo="Si";
        }
      }

      if(datos_solicitud["SOLI_TESTSIDA"]==="No"){//Si se ha practicado test SIDA
        //existe_riesgo="Si";
      }else{
        if(datos_solicitud["SOLI_RESULTADOSIDA"]==="Positivo"){
          existe_riesgo="Si";
        }
      }
      var estado_poliza ="EMISION AUTOMATICA";
      if(existe_riesgo==="Si"){
         estado_poliza ="EMISION MANUAL";
      }
      //FIN ALGORITMO**************************************************
      var valores = [Number(planes), observacion, valor, digitador, fecha_auditoria,"SI", estado_poliza, Id_Solicitud];
      var campos = ["PLAN_CODIGO", "SOLI_PLANOBSERVACION", "SOLI_VALORX", "SOLI_USUARIOASIGNACIONPLAN", "SOLI_FECHAASIGNACIONPLAN","SOLI_PLANASIGNADO","SOLI_ESTADO"];
      var campo_id = "SOLI_CODIGO";
      var campos_F=["SOLI_FECHAASIGNACIONPLAN"];
      objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
      var mensajeIntermediario="Estimado Intermediario, la solicitud Nro: "+Id_Solicitud+" se le ha asignado para que pueda ser verificada.";
      if(estado_poliza==="EMISION MANUAL"){
        var mensajeSuscriptor="Estimado Suscriptor, la solicitud Nro.: "+Id_Solicitud+" se le ha asignado para que pueda ser verificada."
        objSql.consulta_individual_PS_callback("sy_seguridad_usuario","USUA_CORREO","PERF_CODIGO",28, (datos_suscriptor)=>{
          objCorreo.enviar_correo_mensaje(datos_suscriptor["USUA_CORREO"],"PLAN ASIGNADO",mensajeSuscriptor);
        });
      }
      else{
      objSql.consulta_individual_PS_callback("sy_seguridad_usuario","USUA_CORREO","USUA_CODIGO",datos_solicitud["USUA_CODIGO"], (datos_intermediario)=>{
        objCorreo.enviar_correo_mensaje(datos_intermediario["USUA_CORREO"],"PLAN ASIGNADO",mensajeIntermediario);
      });  
    }   
      
    });
  });
});


const actualizaremision = asyncHandler(async (req, res) => {
  const {observacion} = req.body;
  const Id_Solicitud = Number(req.params.id);
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var estado_poliza="EMISION AUTOMATICA";
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    var digitador = datos_usuario["USUA_NOMBRE"];
      var valores = [fecha_auditoria, observacion, digitador, estado_poliza, Id_Solicitud];
      var campos = ["SOLI_FECHAMODIFICACION_EMISION_MANUAL", "SOLI_OBSERVACIONMODIFICACION_EMISION_MANUAL", "SOLI_USUARIORESPONSABLE_EMISION_MANUAL","SOLI_ESTADO"];
      var campo_id = "SOLI_CODIGO";
      var campos_F=["SOLI_FECHAMODIFICACION_EMISION_MANUAL"]
      objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
    });
});


const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "SOLI_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});

const combo_solicitudes_planes = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    const perf_codigo=datos_usuario.PERF_CODIGO;
    const usua_codigo=datos_usuario.USUA_CODIGO;
    if(perf_codigo===14 || perf_codigo===15 || perf_codigo===27){
      objCombo.cargar_datos_combo("SELECT PLAN_CODIGO, PLAN_NOMBRE from dbo.sy_salud_plan WHERE PLAN_ESTADO='ACTIVO'", res);
    }
    else if(perf_codigo===21 || perf_codigo===22){
      const comando_combo="SELECT PLAN_CODIGO, PLAN_NOMBRE from dbo.vista_asignacion_planes WHERE ASIG_ESTADO='ACTIVO' AND USUA_CODIGO='"+usua_codigo+"'";
      objCombo.cargar_datos_combo(comando_combo, res);
    }
  });
  
});
const combo_solicitudes_ciudades = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT BODE_CODIGO, BODE_NOMBRE from ns_configuracion_bodega WHERE BODE_ESTADO='ACTIVO'", res);
});

//COMBO USUARIOS -AGENTES BROKERS DIRECTOS
const combo_dispositivos_users = asyncHandler(async (req, res) => {
  var intermediario=req.params.intermediario;
  var lugar=req.params.lugar;
  var busqueda=27;// 27 codigo del directo
  if(intermediario==="Agente"){
    busqueda=22;
  }else if(intermediario==="Broker"){
    busqueda=21;
  }
  var campos=["USUA_CODIGO", "USUA_NOMBRE"];
  var valor_busqueda;
  var campos_busqueda;
  var campos_execute;
  if(busqueda===22){ //Agente    
    campos_busqueda=["USUA_ESTADO","PERF_CODIGO"];
    campos_execute=["USUA_ESTADO","PERF_CODIGO"];
    valor_busqueda=["ACTIVO", busqueda];
  }else{
    campos_busqueda=["USUA_ESTADO","PERF_CODIGO", "USUA_REGION"];
    campos_execute=["USUA_ESTADO","PERF_CODIGO", "USUA_REGION"];
    valor_busqueda=["ACTIVO", busqueda, lugar];
  }
  objCombo.cargar_datos_combo_where("sy_seguridad_usuario", campos, campos_busqueda, valor_busqueda, campos_execute, res)
});
module.exports = {
  listado,
  eliminar,
  actualizar,
  getRegistro,
  combo_solicitudes_planes,
  informePDF,
  combo_dispositivos_users,
  combo_solicitudes_ciudades,
  actualizaremision
};