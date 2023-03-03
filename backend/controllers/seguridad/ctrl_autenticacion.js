const objEncriptacion = require("../../kernel/cEncriptacion");
const objUser=require("../../kernel/cUsuario");
const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res) => {
    const { correo, password } = req.body;
    let variables=[correo, objEncriptacion.encriptar_sha512(password),"ACTIVO"];
    var campos=["USUA_CEDULA", "USUA_CLAVEX", "USUA_ESTADO"];
    objUser.validar_identidad_usuario(campos, variables, correo, req, res);
})

module.exports = {
    login
}