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
const objCorreo = require("../../kernel/cCorreo");
const objClaAle = require("../../kernel/cClaveAleatoria");
const sql = require('mssql');
const tabla = "sy_seguridad_usuario";
const vista = "vista_usuarios";
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
var digitador = "DIGITADOR";

const recuperar_password = asyncHandler(async (req, res) => {
  // const { identidad, email, emailfrom } = req.body;

  var clave_aleatoria = objClaAle.randomico(5, 1);
  var destinatario = "princesaluna919697@gmail.com";
  // var destinatario = "tatiana.sinchiguano.12@gmail.com";
  var asunto = "NACIONAL SEGUROS: Solicitud de restablecimiento de contraseña";
  var nombre_usuario = "USUARIO PROGRAMADOR";
  var html = ` 
  <div> 
  <p>Hola <b>` + nombre_usuario + `,</b></p> 
  <p style='text-align: justify;'>Usted solicitó un reestablecimiento de contraseña para su usuario en Nacional Seguros.</p> 
  <p style='text-align: justify;'>Si desea proceder con su solicitud y establecer una nueva contraseña para su usuario, por favor ingrese el siguiente código de verificación: </p><h3>` + clave_aleatoria + `</h3> 
  <p style='text-align: justify;'>En caso de no haber solicitado el restablecimiento de su contraseña solo ignore este correo.</p> 
  <p style='text-align: justify;'>Si necesita ayuda, contáctese con el administrador del sitio, <a href='mailto:info@idrix.com.ec'>info@idrix.com.ec</a>.</p> 
  </div> 
`
  objCorreo.enviar_correo_html(destinatario, asunto, html);

});

const crear = asyncHandler(async (req, res) => {
  const { cedula, nombre, apellido, genero, region, direccion, telefono, celular, correo, clave, observacion, perfil } = req.body;
  var clave_encrip = objEncrip.encriptar_sha512(clave.toString());
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);

  let region_nombre_codigo = region.split('-');
  var region_nombre = "";
  var region_codigo = 0;

  if ((region != "-1")) {
    region_nombre = region_nombre_codigo[0];
    region_codigo = region_nombre_codigo[1];
  }

  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    digitador = datos_usuario["USUA_NOMBRE"];
    var valores = [cedula, nombre, apellido, 0000-00-00, genero, region_codigo, region_nombre, direccion, telefono, celular, correo, clave_encrip, "NO", "FOTO", observacion!==undefined?observacion:"", digitador, fecha_auditoria, digitador, fecha_auditoria, "ACTIVO", " ", "0000-00-00 00:00:00", "0000-00-00 00:00:00", "0000-00-00 00:00:00", "0000-00-00 00:00:00", perfil];
    const campos = ["USUA_CEDULA", "USUA_NOMBRE", "USUA_APELLI", "USUA_FECNAC", "USUA_GENERO", "USUA_CODREG", "USUA_REGION", "USUA_DIRECC", "USUA_TELEFO", "USUA_CELULA", "USUA_CORREO", "USUA_CLAVEX", "USUA_RECCLA", "USUA_FOTOXX", "USUA_OBSERV", "USUA_USUING", "USUA_FECING", "USUA_USUMOD", "USUA_FECMOD", "USUA_ESTADO", "USUA_CRECUP", "USUA_CADCOD", "USUA_ULTACC", "USUA_ULTFAL", "USUA_CAMCLA", "PERF_CODIGO"];
    const campos_F = ["USUA_FECING", "USUA_FECMOD", "USUA_CADCOD", "USUA_ULTACC", "USUA_ULTFAL", "USUA_CAMCLA"]
    const campo_esp=["USUA_FECNAC", sql.Date];
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
  var campos_busqueda = ["USUA_NOMBRE", "USUA_NOMBRE", "USUA_APELLI", "USUA_CORREO"];
  var valor_busqueda = req.query.keyword;
  var campos = ["*"];
  objPag.paginar_tabla_all(vista, campos, campos_busqueda, valor_busqueda, pageSize, page, res)
});

const eliminar = asyncHandler(async (req, res) => {
  const Id_company = Number(req.params.id);
  var valores = ["INACTIVO", Id_company];
  var campos = ["USUA_ESTADO"];
  var campo_id = "USUA_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});

const actualizar = asyncHandler(async (req, res) => {
  const { nombre, web, email, emailfrom } = req.body;
  const Id_company = Number(req.params.id);
  var valores = [cedula, nombre, apellido, 0000-00-00, genero, direccion, telefono, celular, correo, clave, "FOTO", observacion!==undefined?observacion:"", perfil, digitador, fecha_auditoria, Id_company];
  var campos = ["USUA_CEDULA", "USUA_NOMBRE", "USUA_APELLI", "USUA_FECNAC", "USUA_GENERO", "USUA_DIRECC", "USUA_TELEFO", "USUA_CELULA", "USUA_CORREO", "USUA_CLAVEX", "USUA_FOTOXX", "USUA_OBSERV", "PERF_CODIGO", "USUA_USUMOD", "USUA_FECMOD",];
  var camposF=["USUA_FECMOD"]
  var campo_id = "USUA_CODIGO";
  var campo_esp=["USUA_FECNAC", sql.Date];
  objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, campo_esp, res);
});

const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "USUA_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
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
    var campo_id = "USUA_CODIGO";
    var camposF=["USUA_FECMOD"]
    objVal.NoRepetirInsertar(tabla, "USUA_CLAVEX", clave_anterior_encrip, (result) => {
      if (result === false) {
        res.status(500).json("Mensaje: La clave anterior no es correcta");
      } else {
        objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, ['',''], res);
      }
    });
  });
});

module.exports = {
  recuperar_password,
  crear,
  listado,
  eliminar,
  actualizar,
  getRegistro,
  cambiar_clave
};
