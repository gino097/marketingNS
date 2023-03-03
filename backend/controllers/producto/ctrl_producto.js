const asyncHandler = require("express-async-handler");
const download = require('image-downloader')
const objSql = require("../../kernel/cSql");
const objVal = require("../../kernel/cValidacion");
const objToken = require("../../kernel/cToken");
const objUsu = require("../../kernel/cUsuario");
const objPag = require("../../kernel/cPaginacion");
const objMensajesApi = require("../../kernel/cMensajesApi");
const objFechaAuditoria = require("../../kernel/cFechas");
var fecha_auditoria = objFechaAuditoria.fecha_hora_actual();
const tabla = "sy_inventario_materiales";
var digitador = "DIGITADOR";
const fs = require("fs");

const sql = require('mssql');

const subirImg = asyncHandler(async (req, res) => {
  const newpath ="./images/";
  //console.log(req);
  //const newpath = "../Upload/img/instalaciones/";//especificar ruta para guardar el excel dentro del servidor
  const file = req.files.file;
  const filename = req.body.fileName+"."+req.files.file.mimetype.split("/")[1];
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Imagen subida...!!!")
  });
});

const   crear = asyncHandler(async (req, res) => {
  console.log(req);
  const file = req.files.file;
  const filename = req.body.fileName;
  const codigoP=req.body.codigoP;
  const nombre=req.body.nombre;
  const stock=req.body.stock;
  const categoria=req.body.categoria;
  const ciudad=req.body.ciudad;
  const tipoItem=req.body.tipoItem;
  
  const newpath = __dirname+"/imagesItems/";//especificar ruta para guardar el excel dentro del servidor
  console.log("crear dir: ",newpath);
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Imagen subida...!!!");
  });

  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);

  //Consulto los datos del usuario
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    digitador = datos_usuario["USUA_NOMBRE"]; 

    // Lo que me llega del from
    var valores = [codigoP, nombre, stock, ciudad, categoria, filename, "ACTIVO", tipoItem, "2000-01-01 00:00:00.0000000", fecha_auditoria,fecha_auditoria, digitador];
    const campos = ["MATE_CODIGOP", "MATE_NOMBRE", "MATE_STOCK", "MATE_CIUDAD","MATE_CATEGORIA","MATE_IMG", "MATE_ESTADO", "MATE_TIPO", "MATE_VENCIMIENTO", "MATE_FECING", "MATE_FECMOD","MATE_DIGITADOR"];

    //Campos fecha
    const campos_F = ["MATE_FECING", "MATE_FECMOD"];
    const campo_esp=["", ""]

    //Para que el campo no se repita 
    objVal.NoRepetirInsertar(tabla, "MATE_NOMBRE", nombre, (result) => {
      console.log(result);
      if (result === false) {
        objSql.insertar_PS(tabla, campos, valores, campos_F, campo_esp, res);
      } else {
        res.status(500).json(objMensajesApi.Send_MSG_Error_RegistroRepetido({}));
      }
    });
  });
});


const listado = asyncHandler(async (req, res) => {
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;


  var campos_busqueda = ["MATE_NOMBRE","MATE_STOCK","MATE_CATEGORIA","MATE_CIUDAD","MATE_ESTADO","MATE_CODIGOP"];
  var campos_execute = ["MATE_NOMBRE","MATE_STOCK","MATE_CATEGORIA","MATE_CIUDAD","MATE_ESTADO","MATE_CODIGOP"];

  var campo_orderby="MATE_CODIGO"

  var valor_busqueda = req.query.keyword;
  var campos = ["*"];
  var campos_where=["MATE_ESTADO"];
  valores_where=["ACTIVO"];
  //objPag.paginar_tabla_all("sy_inventario_materiales", campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res)
  objPag.paginar_tabla_all_where1("sy_inventario_materiales", campos_where, valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res)
});


const eliminar = asyncHandler(async (req, res) => {
  const Id_company = Number(req.params.id);
  var valores = ["INACTIVO", Id_company];
  var campos = ["MATE_ESTADO"];
  var campo_id = "MATE_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});
const activar = asyncHandler(async (req, res) => {
  const Id_company = Number(req.params.id);
  var valores = ["ACTIVO", Id_company];
  var campos = ["MATE_ESTADO"];
  var campo_id = "MATE_CODIGO";
  objSql.actualizar_PS(tabla, campos, valores, campo_id, [''], ['',''], res);
});

const actualizar = asyncHandler(async (req, res) => {
  const { nombre, stock, codigoP, categoria, ciudad, tipoItem } = req.body;
  const Id_company = Number(req.params.id);
  objSql.consulta_individual_PS_callback(tabla, ["*"], ["MATE_CODIGO"], Id_company, (result)=>{
    var valores = [nombre===''?result.MATE_NOMBRE:nombre,
      stock===''?result.MATE_STOCK:stock, 
      codigoP===''?result.MATE_CODIGOP:codigoP, 
      categoria===''?result.MATE_CATEGORIA:categoria, 
      ciudad===''?result.MATE_CIUDAD:ciudad, 
      tipoItem===''?result.MATE_TIPO:tipoItem, 
      digitador, fecha_auditoria, Id_company];
    var campos = ["MATE_NOMBRE", "MATE_STOCK", "MATE_CODIGOP", "MATE_CATEGORIA", "MATE_CIUDAD", "MATE_TIPO", "MATE_USUMOD", "MATE_FECMOD"];
    var campo_id = "MATE_CODIGO";
    var camposF=["MATE_FECMOD"];
    var campo_esp=["", ""];
    objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, campo_esp, res);
  })
  
});
const actualizarImg = asyncHandler(async (req, res) => {
  //console.log(req);
  let token = req.headers.authorization.split(" ")[1];
  console.log("token: ",token);
  let id_usuario = objToken.obtener_id_usuario(token);
  console.log("id usuario: ", id_usuario);
  //console.log(foto);
  const file = req.files.file;
  const filename = req.body.filename;
  const Id_company = Number(req.params.id);
  
  var campos = ["MATE_IMG", "MATE_USUMOD", "MATE_FECMOD"];
  var campos_where=["MATE_CODIGO", "MATE_IMG"];
  var campo_id = "MATE_CODIGO";
  var camposF=["MATE_FECMOD"];
  var campo_esp=["", ""];
  const newpath = __dirname+"/imagesItems/";
  console.log("actualizar dir: ", newpath);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    console.log(datos_usuario);
    var digitador = datos_usuario["USUA_NOMBRE"];
    var valores = [filename, digitador, fecha_auditoria, Id_company];

    objSql.consulta_individual_PS_callback(tabla, ["*"], campo_id, Id_company, (result)=>{
      console.log(newpath+result.MATE_IMG);
      var valores_where=[Id_company, result.MATE_IMG];
      fs.unlink(newpath+result.MATE_IMG, (err => {
        if (err) console.log(err);
        else {
          console.log("\nSe elimino la imagen");
        }
      }));
      //fs.unlinkSync(newpath+result.MATE_IMG);
      file.mv(`${newpath}${filename}`, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Imagen subida...!!!");
      });
      //objSql.actualizar_PS_where2(tabla, campos, valores, campos_where, valores_where, camposF, campo_esp, res);
      objSql.actualizar_PS(tabla, campos, valores, campo_id, camposF, campo_esp,res);
    });
  });
  
  
});

const getRegistro = asyncHandler(async (req, res) => {
  const codigo = Number(req.params.id);
  var campo_id = "MATE_CODIGO";
  objSql.consulta_individual_PS(tabla, "*", campo_id, codigo, res, "NO HISTORIAL");
});
module.exports = {
  subirImg,
  crear,
  listado,
  eliminar,
  activar,
  actualizar,
  actualizarImg,
  getRegistro
};

