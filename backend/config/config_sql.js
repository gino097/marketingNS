const sql = require('mssql');

const conn={
  user:'sa',
  password:'$_iDrix@2022',
  server:'144.126.136.185',
  port:1433,
  database:'nsmarketing',
  options:{
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
const connection= new sql.ConnectionPool(conn).connect();
console.log(connection);
module.exports={conn}