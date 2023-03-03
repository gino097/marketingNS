const objconn = require('../config/config_sql');
const sql = require('mssql');
async function cargar_cuadros(consulta, res) {
  var result;
  const connection= await new sql.ConnectionPool(objconn.conn).connect();
  connection.request().query(consulta, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    result=results.recordset;
    res.json({result});
  });
}
module.exports = {
    cargar_cuadros,
}