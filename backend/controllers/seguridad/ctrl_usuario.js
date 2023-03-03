const asyncHandler = require("express-async-handler");
const objSql = require("../../kernel/cSql");
const objVal = require("../../kernel/cValidacion");
const objPag = require("../../kernel/cPaginacion");
const objCombo = require("../../kernel/cCombo");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objMensajesApi = require("../../kernel/cMensajesApi");
const objFechaAuditoria = require("../../kernel/cFechas");
const objEncrip = require("../../kernel/cEncriptacion");
const objDonvertDate = require("../../kernel/convertDate")
const tabla = "sy_seguridad_usuario";
const vista = "vista_usuarios";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "DIGITADOR";
const sql = require('mssql');

const crear = asyncHandler(async (req, res) => {
  const { cedula, nombre, apellido, genero, region, direccion, telefono, celular, correo, clave, observacion, perfil, supervisor } = req.body;
  var clave_encrip = objEncrip.encriptar_sha512(clave.toString());
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);

  //REGION
  let region_nombre_codigo = region.split('-x-');
  var region_nombre = "";
  var region_codigo = 0;
  //SUPERVISOR
  let supervisor_nombre_codigo = supervisor.split('-x-');
  var supervisor_nombre = "";
  var supervisor_codigo = 0;

  if ((region != "-1")) {
    region_nombre = region_nombre_codigo[0];
    region_codigo = region_nombre_codigo[1];
  }

  if ((supervisor != "-1")) {
    supervisor_nombre = supervisor_nombre_codigo[0];
    supervisor_codigo = supervisor_nombre_codigo[1];
  }
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    digitador = datos_usuario["USUA_NOMBRE"];
    var valores = [cedula, nombre, apellido, "0001-01-01", genero, region_codigo, region_nombre, direccion, telefono, celular, correo, clave_encrip, "NO", "FOTO", observacion!==undefined?observacion:"", digitador, fecha_auditoria, digitador, fecha_auditoria, "ACTIVO", " ", "0001-01-01 00:00:00", "0001-01-01 00:00:00", "0001-01-01 00:00:00", "0001-01-01 00:00:00", perfil, supervisor_codigo!==undefined?supervisor_codigo:"", supervisor_nombre];
    const campos = ["USUA_CEDULA", "USUA_NOMBRE", "USUA_APELLI", "USUA_FECNAC", "USUA_GENERO", "USUA_CODREG", "USUA_REGION", "USUA_DIRECC", "USUA_TELEFO", "USUA_CELULA", "USUA_CORREO", "USUA_CLAVEX", "USUA_RECCLA", "USUA_FOTOXX", "USUA_OBSERV", "USUA_USUING", "USUA_FECING", "USUA_USUMOD", "USUA_FECMOD", "USUA_ESTADO", "USUA_CRECUP", "USUA_CADCOD", "USUA_ULTACC", "USUA_ULTFAL", "USUA_CAMCLA", "PERF_CODIGO", "USUA_CODUSU", "USUA_NOMUSU"];
    const campos_F = ["USUA_FECING", "USUA_FECMOD","USUA_CAMCLA","USUA_ULTFAL","USUA_CADCOD", "USUA_ULTACC"]
    const campo_esp=["USUA_FECNAC",sql.Date]
    objVal.NoRepetirInsertar(tabla, "USUA_CEDULA", cedula, (result) => {
      if (result === false) {
        objSql.insertar_PS(tabla, campos, valores, campos_F, campo_esp, res);
      } else {
        res.status(200).json(objMensajesApi.Send_MSG_Error_RegistroRepetido({}));
      }
    });
  });
});

const listado = asyncHandler(async (req, res) => {
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;
  var campos_busqueda = ["USUA_NOMBRE","PERF_NOMBRE", "USUA_APELLI", "USUA_CORREO", "USUA_CEDULA"];
  var campos_execute = ["USUA_NOMBRE", "PERF_NOMBRE", "USUA_APELLI", "USUA_CORREO", "USUA_CEDULA"];
  var campo_orderby="USUA_CODIGO"
  var valor_busqueda = req.query.keyword;
  var campos = ["*"];
  objPag.paginar_tabla_all("vista_usuarios", campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res)
});

const eliminar = asyncHandler(async (req, res) => {
  const Id_company = Number(req.params.id);
  var valores = ["INACTIVO", Id_company];
  var campos = ["USUA_ESTADO"];
  var campo_id = "USUA_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});
const activar = asyncHandler(async (req, res) => {
  const Id_company = Number(req.params.id);
  var valores = ["ACTIVO", Id_company];
  var campos = ["USUA_ESTADO"];
  var campo_id = "USUA_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});

const actualizar = asyncHandler(async (req, res) => {
  const { nombre, web, email, emailfrom } = req.body;
  const Id_company = Number(req.params.id);
  var valores = [cedula, nombre, apellido, fecha_nacimiento, genero, direccion, telefono, celular, correo, clave, "FOTO", observacion, perfil, digitador, fecha_auditoria, Id_company];
  var campos = ["USUA_CEDULA", "USUA_NOMBRE", "USUA_APELLI", "USUA_FECNAC", "USUA_GENERO", "USUA_DIRECC", "USUA_TELEFO", "USUA_CELULA", "USUA_CORREO", "USUA_CLAVEX", "USUA_FOTOXX", "USUA_OBSERV", "PERF_CODIGO", "USUA_USUMOD", "USUA_FECMOD",];
  var campo_id = "USUA_CODIGO";
  var camposF=["USUA_FECMOD"];
  var campo_esp=["USUA_FECNAC", sql.Date];
  objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, campo_esp, res);
});
const actualizarClave = asyncHandler(async (req, res) => {
  const { clave } = req.body;
  const Id_company = Number(req.params.id);
  var clave_encrip = objEncrip.encriptar_sha512(clave.toString());
  var valores = [clave_encrip, digitador, fecha_auditoria, Id_company];
  var campos = ["USUA_CLAVEX", "USUA_USUMOD", "USUA_FECMOD",];
  var campo_id = "USUA_CODIGO";
  var camposF=["USUA_FECMOD"];
  var campo_esp=["",""];
  objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, campo_esp, res);
});

const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "USUA_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});

// PERFILES
const combo_perfiles = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT PERF_CODIGO, PERF_NOMBRE from dbo.sy_seguridad_perfil WHERE PERF_ESTADO='ACTIVO' AND PERF_CODIGO<>'1'", res);
});
// USUARIOS AGENTE-BROKER-DIRECTOEMPRESA
const combo_usuarios = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT USUA_CODIGO, USUA_APELLI, USUA_NOMBRE, USUA_CEDULA from dbo.sy_seguridad_usuario WHERE USUA_ESTADO='ACTIVO' AND (PERF_CODIGO='21' OR PERF_CODIGO='22')", res);
});
// PLANES
const combo_planes = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT PLAN_CODIGO, PLAN_NOMBRE, PLAN_TIPOXX, PLAN_VALORX from dbo.sy_salud_plan WHERE PLAN_ESTADO='ACTIVO'", res);
});
// SUPERVISORES
const combo_supervisores = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT USUA_CODIGO, USUA_NOMBRE, USUA_APELLI from dbo.sy_seguridad_usuario WHERE USUA_ESTADO='ACTIVO' AND PERF_CODIGO='25'", res);
});
// REGIONES
const combo_regiones = asyncHandler(async (req, res) => {
  objCombo.cargar_datos_combo("SELECT BODE_CODIGO, BODE_NOMBRE from dbo.ns_configuracion_bodega WHERE BODE_ESTADO='ACTIVO'", res);
});

//CAMBIAR CONTRASEÑA
const cambiar_clave = asyncHandler(async (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  var { clave_anterior, clave } = req.body;
  var clave_anterior_encrip = objEncrip.encriptar_sha512(clave_anterior.toString());
  var clave_encrip = objEncrip.encriptar_sha512(clave.toString());
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    digitador = datos_usuario["USUA_NOMBRE"];
    var valores = [clave_encrip, digitador, fecha_auditoria, id_usuario];
    var campos = ["USUA_CLAVEX", "USUA_USUMOD", "USUA_FECMOD"];
    var campos_F=["USUA_FECMOD"];
    var campo_id = "USUA_CODIGO";
    objVal.NoRepetirInsertar(tabla, "USUA_CLAVEX", clave_anterior_encrip, (result) => {
      if (result === false) {
        res.status(500).json("Mensaje: La clave anterior no es correcta");
      } else {
        objSql.actualizar_PS(tabla, campos, valores, campo_id, campos_F, ['',''], res);
      }
    });
  });
});

module.exports = {
  crear,
  listado,
  activar,
  eliminar,
  actualizar,
  actualizarClave,
  getRegistro,
  combo_perfiles,
  combo_usuarios,
  combo_planes,
  combo_supervisores,
  combo_regiones,
  cambiar_clave
};
