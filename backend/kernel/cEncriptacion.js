const { enc } = require("crypto-js");
var crypto = require("crypto-js");
var sha512 = require('js-sha512').sha512;
var sha512_256 = require('js-sha512').sha512_256;
var md5 = require('md5');
const key_AES="199131iDrixSA"
const generateHash = (password) => {
  let firma = crypto.HmacSHA512(password, "ABC123(*/");
  let base64 = firma.toString(crypto.enc.hex);
  return base64;
};
function encriptar_md5(texto) {
  return md5(texto);
}
function encriptar_sha256(texto) {
  return sha512_256(texto);
}
function encriptar_sha512(texto) {
  let encript=sha512(texto);
  return encript;
}
function encriptar_algoritmo_AES(texto) {
  return crypto.AES.encrypt(texto, key_AES).toString();
}
function desencriptar_algoritmo_AES(texto_encriptado) {
  var wA= crypto.AES.decrypt(texto_encriptado, key_AES);
  return wA.toString(crypto.enc.Utf8);
}

module.exports = {
  generateHash,
  encriptar_md5,
  encriptar_sha256,
  encriptar_sha512,
  encriptar_algoritmo_AES,
  desencriptar_algoritmo_AES,
};
