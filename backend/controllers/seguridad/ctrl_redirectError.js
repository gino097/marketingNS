const objEncriptacion = require("../../kernel/cEncriptacion");
const objUser=require("../../kernel/cUsuario");
const asyncHandler = require("express-async-handler");

const redirectError = asyncHandler(async (req, res) => {
    console.log("Error, redireccionando...")
})

module.exports = {
    redirectError
}