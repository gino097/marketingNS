const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objFechaAuditoria = require("../../kernel/cFechas");
const objCombo=require("../../kernel/cCombo");

const objPag = require("../../kernel/cPaginacion");

var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
const tabla = "sy_inventario_detalle";
var digitador = "DIGITADOR";

const crear = asyncHandler(async (req, res) => {
  const {cantidad,detalle,solici_code,mate_code} = req.body;

  //let token = req.headers.authorization.split(" ")[1];
  //let id_usuario = objToken.obtener_id_usuario(token);

  //objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    //digitador = datos_usuario["USUA_NOMBRE"]; 

    var valores = [detalle,cantidad,solici_code,mate_code,fecha_auditoria,fecha_auditoria, digitador];
    
    const campos = ["DETALLE_INVENTARIO"
    ,"DETALLE_CANTIDAD"
    ,"DETALLE_SOLICI_CODE"
    ,"DETALLE_MATE_CODIGO"
    ,"DETALLE_FECING"
    ,"DETALLE_FECMOD"
    ,"DETALLE_DIGITADOR"];

    const campos_F = ["DETALLE_FECING", "DETALLE_FECMOD"];
    const campo_esp=["",""]

    objSql.insertar_PS(tabla, campos, valores, campos_F, campo_esp, res);
  });
//});

const listado = asyncHandler(async (req, res) => {
  console.log("listado para solicitud");
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;

  var campos_busqueda = ["MATE_NOMBRE", "MATE_STOCK"]
  var campos_execute = ["MATE_NOMBRE", "MATE_STOCK"]
  var valor_busqueda = req.query.keyword;
  var campo_orderby="MATE_STOCK";
  var campos = ["*"];
  var ciudad = req.query.ciudad;
 
  var campos_where = ["MATE_ESTADO","MATE_CIUDAD", "MATE_VIGENCIA"];
  var valores_where = ["ACTIVO", ciudad, "LIBRE"];
  objPag.paginar_tabla_all_where3("sy_inventario_materiales", campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);

});

const consultarStok = asyncHandler(async (req, res) => {
  let tabla = "sy_inventario_materiales";
  let { stock } = req.body;
  var campos_consInd=["MATE_STOCK"];
  let stockR;
  
  objSql.consulta_individual_PS_callback(tabla,campos_consInd,"MATE_STOCK",Number(stock), (resultado_Rows)=>{

    if(stock===undefined || stock==="undefined" || stock==="" || stock===null){
      stockR=resultado_Rows["MATE_STOCK"];
    }

    if(stock<=stockR){
      res.status(200).json({success:true, message:"Stock dispobilible"});
    }else{
      res.status(200).json({success:false, message:"Stock no disponible"});
    }
  });
});
const combo_regiones = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT BODE_CODIGO, BODE_NOMBRE from dbo.ns_configuracion_bodega WHERE BODE_ESTADO='ACTIVO'", res);
});


module.exports = {
  crear,
  listado,
  consultarStok,
  combo_regiones
};








