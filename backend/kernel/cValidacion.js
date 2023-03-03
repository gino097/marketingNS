const objconn = require('../config/config_sql');
const sql = require('mssql');


async function NoRepetirInsertar(tabla, campo, dato, callback) {
  var cadenasql = "SELECT " + campo + " FROM dbo." + tabla + " WHERE " + campo + "=@" + campo + ";";
  var validacion;
  try {
    var json_execute = '{"' + campo + '":' + '"' + dato + '"}';//string(que se pasara a json) para pool.execute
    const aux1 = await new sql.ConnectionPool(objconn.conn).connect();
    const ps1 = new sql.PreparedStatement(aux1);
    ps1.input(campo, sql.VarChar);
    json_execute = JSON.parse(json_execute);//de String a Json
    ps1.prepare(cadenasql).then(() => ps1.execute(json_execute)).then(_results => {
      if (_results.rowsAffected[0] > 0) { validacion = true }
      else { validacion = false }
      return ps1.unprepare();
    })
      .then(() => {
        callback(validacion);
      });

  } catch (error) {
    console.log("Error comando exepcion: ", error);
  }
}

async function NoRepetirInsertar2Campos(tabla, campos, datos, callback) {
  var cadenasql = "SELECT " + campos.toString() + " FROM dbo." + tabla + " WHERE " + campos[0] + "=@" + campos[0] + " AND "+campos[1]+"=@"+campos[1]+";";
  var validacion;
  try {
    var json_execute = '{"' + campos[0] + '":' + '"' + datos[0] + '",'+
  '"'+campos[1]+'":'+'"'+datos[1]+'"}';//string(que se pasara a json) para pool.execute
    const aux1 = await new sql.ConnectionPool(objconn.conn).connect();
    const ps1 = new sql.PreparedStatement(aux1);
    ps1.input(campos[0], sql.VarChar);
    ps1.input(campos[1], sql.VarChar);
    json_execute = JSON.parse(json_execute);//de String a Json
    ps1.prepare(cadenasql).then(() => ps1.execute(json_execute)).then(_results => {
      if (_results.rowsAffected[0] > 0) { validacion = true }
      else { validacion = false }
      return ps1.unprepare();
    })
      .then(() => {
        callback(validacion);
      });

  } catch (error) {
    console.log("Error comando exepcion: ", error);
  }
}

async function NoRepetirActualizar(tabla, campo, dato, campo_codigo, valor_codigo, callback) {
  var cadenasql = "SELECT " + campo_codigo + " FROM dbo." + tabla + " WHERE " + campo + "=@" + campo + ";";
  var validacion;
  var vcodigo = -1;
  try {
    var json_execute = '{"' + campo + '":' + '"' + dato + '"}';
    const aux1 = await new sql.ConnectionPool(objconn.conn).connect();
    const ps1 = new sql.PreparedStatement(aux1);
    ps1.input(campo, sql.VarChar);
    json_execute = JSON.parse(json_execute);
    ps1.prepare(cadenasql).then(() => ps1.execute(json_execute)).then(_results => {
      if (_results.rowsAffected[0] > 0) {
        validacion = true;
      }
      if (_results.rowsAffected[0] > 0) {
        vcodigo = _results.recordset[0][campo_codigo];
      }
      if (vcodigo == -1 || vcodigo === valor_codigo) {validacion = false; }
      else {validacion = true; }

      return ps1.unprepare();
    })
      .then(() => {
        callback(validacion);
      });
  } catch (error) {
    console.log("Error comando exepcion: ", error);
  }
}
function NoRepetirInsertarMasivo(tabla, datos, campo_id, callback) {
  var validacion = false;
  for (let i = 0; i < datos.length; i++) {
    const dato = datos[i];
    this.NoRepetirInsertar(tabla, campo_id, dato['IMEI - DISPOSITIVO'].toString(), (resultR) => {
      if (resultR === false) {
      } else {
        return callback(resultR);
      }
    });
  }
  return callback(validacion);
}
/*
function NoRepetirActualizarSql(cadena, campo_codigo, valor_codigo, callback) {
  var v_validacion = false;
  var vcodigo="0";
  connection.query(cadena, function (err, results) {
  if (err) {
      v_validacion = true;
  } else {
      if (Object.keys(results).length > 0) {
        vcodigo = results[0][campo_codigo];
      }
      if (vcodigo == "0" || vcodigo == valor_codigo){
          v_validacion = false;
      }else{
          v_validacion = true;
      }
  }
  callback(v_validacion);
  });
}*/
module.exports = {
  NoRepetirInsertar,
  //NoRepetirInsertarSql,
  NoRepetirActualizar,
  //NoRepetirActualizarSql,
  NoRepetirInsertarMasivo,
  NoRepetirInsertar2Campos
};
