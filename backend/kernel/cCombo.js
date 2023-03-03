const objconn = require('../config/config_sql');
const sql=require('mssql');

async function cargar_datos_combo(consulta, res) {
  var result;
  const connection= await new sql.ConnectionPool(objconn.conn).connect();
  connection.request().query(consulta, (err, results) => {
    if (err) {
      console.log('Failed to execute select query.', err);
      return res.status(500).json(err);
    }
    result=results.recordset;
    res.json({result});
  });
}
async function cargar_datos_combo_condicional(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, res) {
  let valor_list2 = [];
  var cadena_campos1 = "";
  for (let i = 0; i < campos_busqueda.length; i++) {
      if (i < (campos_busqueda.length - 1)) {
          cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" AND ";
      }
      else {
          cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
      }
      valor_list2.push("%" + valor_busqueda[i] + "%");
  }
  var cadenasql2 = "SELECT " + campos.toString() + " FROM dbo." + tabla + " WHERE " + cadena_campos1 +";";
  try {
          let data;
          var json_execute2="{";
          const aux2= await new sql.ConnectionPool(objconn.conn).connect();
        const ps2=new sql.PreparedStatement(aux2);
          for(let i=0;i<campos_execute.length;i++){
              ps2.input(campos_execute[i],sql.VarChar);
              if(i<(campos_execute.length-1))json_execute2+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
              else json_execute2+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
          }
          json_execute2+="}";
          json_execute2=JSON.parse(json_execute2);
          ps2.prepare(cadenasql2).then(()=>ps2.execute(json_execute2)).then(_results2=>{
              data=_results2;
              return ps2.unprepare();
          })
          .then(()=>{
              var result=data.recordset;
              res.json({result});
              
          })
    } catch (error) {
      console.log(error)
      
    }
}
async function cargar_datos_combo_where(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, res) {
  let valor_list2 = [];
  var cadena_campos1 = "";
  for (let i = 0; i < campos_busqueda.length; i++) {
      if (i < (campos_busqueda.length - 1)) {
          cadena_campos1 += campos_busqueda[i] + " = @"+campos_busqueda[i]+" AND ";
      }
      else {
          cadena_campos1 += campos_busqueda[i] + " = @"+campos_busqueda[i];
      }
      valor_list2.push("" + valor_busqueda[i] + "");
  }
  var cadenasql2 = "SELECT " + campos.toString() + " FROM dbo." + tabla + " WHERE " + cadena_campos1 +";";
  try {
          let data;
          var json_execute2="{";
          const aux2= await new sql.ConnectionPool(objconn.conn).connect();
        const ps2=new sql.PreparedStatement(aux2);
          for(let i=0;i<campos_execute.length;i++){
              ps2.input(campos_execute[i],sql.VarChar);
              if(i<(campos_execute.length-1))json_execute2+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
              else json_execute2+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
          }
          json_execute2+="}";
          json_execute2=JSON.parse(json_execute2);
          ps2.prepare(cadenasql2).then(()=>ps2.execute(json_execute2)).then(_results2=>{
              data=_results2;
              return ps2.unprepare();
          })
          .then(()=>{
              var result=data.recordset;
              res.json({result});
          })
    } catch (error) {
      console.log(error);
    }
}
module.exports = {
    cargar_datos_combo,
    cargar_datos_combo_condicional,
    cargar_datos_combo_where
}