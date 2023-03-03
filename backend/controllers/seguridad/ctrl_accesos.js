const asyncHandler = require("express-async-handler");
const objPag = require("../../kernel/cPaginacion");
const tabla = "sy_seguridad_logusuario";

const listado = asyncHandler(async (req, res) => {
  var pageSize = Number(req.query.pageSize) || 5;
  var page = Number(req.query.pageNumber) || 1;
  var campos_busqueda = ["LOUS_NOMBRE","LOUS_FECHAX", "LOUS_CORREO"];
  var campos_execute = ["LOUS_NOMBRE","LOUS_FECHAX", "LOUS_CORREO"];
  var valor_busqueda = req.query.keyword;
  var campo_where = "LOUS_ESTADO";
  var campo2_where = "LOUS_USUSIS";
  var valor_where = "ACCESADO";
  var valor2_where = "SI";
  var campos = ["*"];
  var campo_orderby="LOUS_CODIGO";
  objPag.paginar_tabla_all(tabla,campos,campos_busqueda,valor_busqueda, campos_execute, campo_orderby, pageSize, page, res);
});

module.exports = {
  listado
};