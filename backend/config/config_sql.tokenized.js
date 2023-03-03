const sql = require('mssql');

const conn={
  server: "#{host}#",
  user: "#{user}#",
  database: "#{database}#",
  password: "#{password}#",
  port: #{port}#,
  options:{
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
};
const connection= new sql.ConnectionPool(conn).connect();
console.log(connection);
module.exports={conn}