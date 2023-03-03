const jwt = require("jsonwebtoken");
const objEncriptacion = require("./cEncriptacion")
const secretoTokenAPPMovil = 'FLUTTER2021ANDROIDIOS1991';
const verify_jwt="def987654";
//seguridad token JWT
const generateToken_JWT = (id) => {
  return jwt.sign({ id }, verify_jwt, {
    expiresIn: "365d",
  });
};
//seguridad token api Key
function validar_tokenAPPMovil_apiKey(form,token) {
  const secret = secretoTokenAPPMovil;
  correct = objEncriptacion.encriptar_md5(secret + form);
  return (token == correct);
}
function obtener_id_usuario(token) {
  const decoded = jwt.verify(token, verify_jwt);
  return decoded.id;
}

function verificar_token(token){
  const encoder=new TextEncoder();
  let result=jwt.verify(token, verify_jwt);
}
module.exports = {
    generateToken_JWT,
    validar_tokenAPPMovil_apiKey,
    obtener_id_usuario,
    verificar_token
};
