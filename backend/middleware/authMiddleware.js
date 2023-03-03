const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const objToken = require("../kernel/cToken");
const objUsu = require("../kernel/cUsuario");
exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")) ||
    (req.body.headers.Authorization &&
      req.body.headers.Authorization.startsWith("Bearer"))
  ) {
    try {
      if (req.headers.authorization !== undefined) token = req.headers.authorization.split(" ")[1];
      else if (req.body.headers.Authorization !== undefined) token = req.body.headers.Authorization.split(" ")[1];
      //token = ((req.headers.authorization.split(" "))[1] || (req.body.headers.Authorization.split(" ")[1]));
      //const decoded = jwt.verify(token, "abc123456");  
      //console.log(token)
      objToken.verificar_token(token);
      next();
    } catch (error) {
      //console.error(error);
      res.json({Message: "jwt expired"});
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});
exports.perfil_admin = asyncHandler(async (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  const id_permitido = req.headers.id_permitido.split(",");
  console.log(id_permitido);
  const id_permitidoN = id_permitido.map(str => { return Number(str); });
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    let id_perfil = datos_usuario["PERF_CODIGO"];
    if (id_permitidoN.includes(14) || id_permitidoN.includes(15)) {
      next();
    } else {
      console.error("Error 1: ", id_perfil);
      res.redirect('/redirectError/')
    }
  });
});
exports.perfil_logistica = asyncHandler(async (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  const id_permitido = req.headers.id_permitido.split(",");
  const id_permitidoN = id_permitido.map(str => { return Number(str); });
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    let id_perfil = datos_usuario["PERF_CODIGO"];
    if (id_permitidoN.includes(id_perfil)) {
      next();
    } else {
      console.error("Error 2: ", id_perfil);
      res.redirect('/redirectError/')
    }
  });
});
exports.perfil_tecnico = asyncHandler(async (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  const id_permitido = req.headers.id_permitido.split(",");
  const id_permitidoN = id_permitido.map(str => { return Number(str); });
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    let id_perfil = datos_usuario["PERF_CODIGO"];
    if (id_permitidoN.includes(id_perfil)) {
      next();
    } else {
      console.error("Error 3: ", id_perfil);
      res.redirect('/redirectError/')
    }
  });
});
exports.perfil_broker = asyncHandler(async (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  const id_permitido = req.headers.id_permitido.split(",");
  const id_permitidoN = id_permitido.map(str => { return Number(str); });

  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    let id_perfil = datos_usuario["PERF_CODIGO"];
    if (id_permitidoN.includes(id_perfil)) {
      next();
    } else {
      console.error("Error 7: ", id_perfil);
      res.redirect('/redirectError/')
    }
  });
});
exports.perfil_agente = asyncHandler(async (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  const id_permitido = req.headers.id_permitido.split(",");
  const id_permitidoN = id_permitido.map(str => { return Number(str); });
  let token = req.headers.authorization.split(" ")[1];
  let id_usuario = objToken.obtener_id_usuario(token);
  objUsu.consulta_datos_usuario(id_usuario, (datos_usuario) => {
    let id_perfil = datos_usuario["PERF_CODIGO"];
    if (id_permitidoN.includes(id_perfil)) {
      next();
    } else {
      console.error("Error 9: ", id_perfil);
      res.redirect('/redirectError/')
    }
  });
});
