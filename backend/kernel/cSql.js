const mensajes = require("./cMensajesApi");
const objFec = require("./cFechas");
const objconn = require('../config/config_sql');
const sql = require('mssql');
const objMensajesApi=require("./cMensajesApi");
const objCorreo=require("./cCorreo");

function registar_historial_sql(usuario, tabla, query, tipo, proceso, nombre_form) {
    return "INSERT INTO dbo.sy_seguridad_historialsql(SEHI_FECHAX, SEHI_USUARI, SEHI_TABLAX, SEHI_QUERYX, SEHI_TIPOCO, SEHI_TIPOPR, SEHI_NOMFOR)  VALUES ( '" +  objFec.fecha_hora_actual() + "','" + usuario + "','" + tabla + "', '" + query.toString() + "','"  + tipo + "','" + proceso + "','" + nombre_form + "');";
}
function registar_excepciones_sql(usuario, tabla, query, tipo, proceso, nombre_form) {
    return "INSERT INTO dbo.sy_seguridad_excepciones(SEEX_FECHAX, SEEX_USUARI, SEEX_TABLAX, SEEX_QUERYX,SEEX_TIPOCO, SEEX_TIPOPR, SEEX_NOMFOR)  VALUES ( '" +  objFec.fecha_hora_actual() + "','" + usuario + "','" + tabla + "', '" + query.toString() + "','"  + tipo + "','" + proceso + "','" + nombre_form + "');";
}
function parsear_sqlquery_insert(tabla,campos,valores){
    var cadena_pars="INSERT INTO dbo." + tabla ;//"(" + campos.toString() + ") VALUES(" + valores.toString() + ");";
    return cadena_pars;
}
function format_values(valores){
    return valores;
}

//Puede ocupar este y lo llamo desde el controlador - prepare statemen - execute
async function insertar_PS(tabla, campos, valores, campos_F, campo_esp, res, historial="SI",usuario="SN",nombre_form="SN") {
    var values = "";
    
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += "@"+campos[i]+", ";
        else values += "@"+campos[i];
    }
    var cadenasql = "INSERT INTO dbo."+tabla+ "(" + campos.toString() + ") VALUES("+values+");";
    try {
        var json_execute="{";
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.NVarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else if(campos_F.includes(campos[i]))ps1.input(campos[i], sql.DateTime2);
            if(i<(campos.length-1))json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
            else json_execute+='"'+campos[i]+'":"'+valores[i]+'"';            
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql).then(()=> ps1.execute(json_execute)).then(_results=>{
            res.status(200).json(mensajes.Send_MSG_OK_Insertar({}));
            return ps1.unprepare();
        })
        .then(async()=>{
            if(historial==="SI"){
                var sql_historial=parsear_sqlquery_insert(tabla,campos,format_values(valores));
                let comando_historial=registar_historial_sql(usuario,tabla, sql_historial,"INSERT","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
            return res.status(200);
        }
        });
      } catch (error) {
        console.log(error);
        var sql_excepcion=parsear_sqlquery_insert(tabla,campos,format_values(valores));
        let comando_excepcion=registar_excepciones_sql(usuario,tabla, sql_excepcion,"INSERT","FORMULARIO",nombre_form)
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        return res.status(500);
      }
}
async function insertar_PS1(tabla, campos, valores, campos_F, campo_esp, res, historial="SI",usuario="SN",nombre_form="SN") {
    var values = "";
    
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += "@"+campos[i]+", ";
        else values += "@"+campos[i];
    }
    var cadenasql = "INSERT INTO dbo."+tabla+ "(" + campos.toString() + ") VALUES("+values+");";
    try {
        var json_execute="{";
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.NVarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else if(campos_F.includes(campos[i]))ps1.input(campos[i], sql.Date);
            if(i<(campos.length-1))json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
            else json_execute+='"'+campos[i]+'":"'+valores[i]+'"';            
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql).then(()=> ps1.execute(json_execute)).then(_results=>{
            res.status(200).json(mensajes.Send_MSG_OK_Insertar({}));
            return ps1.unprepare();
        })
        .then(async()=>{
            if(historial==="SI"){
                sql_historial=parsear_sqlquery_insert(tabla,campos,format_values(valores));
                let comando_historial=registar_historial_sql(usuario,tabla, sql_historial,"INSERT","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
            return res.status(200);
        }
        });
      } catch (error) {
        sql_excepcion=parsear_sqlquery_insert(tabla,campos,format_values(valores));
        let comando_excepcion=registar_excepciones_sql(usuario,tabla, sql_excepcion,"INSERT","FORMULARIO",nombre_form)
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        return res.status(500);
      }
}
async function insertar_formulariodesalud(correo_cliente,tabla, campos, valores, campos_F, campo_esp, res, historial="SI",usuario="SN",nombre_form="SN") {
    var values = "";
    
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += "@"+campos[i]+", ";
        else values += "@"+campos[i];
    }
    var cadenasql = "INSERT INTO dbo."+tabla+ "(" + campos.toString() + ") VALUES("+values+");";
    try {
        var json_execute="{";
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.NVarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else if(campos_F.includes(campos[i]))ps1.input(campos[i], sql.DateTime2);
            if(i<(campos.length-1))json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
            else json_execute+='"'+campos[i]+'":"'+valores[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql).then(()=> ps1.execute(json_execute)).then(_results=>{
            res.status(200).json(mensajes.Send_MSG_OK_Insertar({}));
            objCorreo.enviar_correo_mensaje(correo_cliente,"FORMULARIO ENVIADO","Estimado Cliente, su declaración jurada de salud ha sido registrada satisfactoriamente, su solicitud se encuentra en proceso.");
            return ps1.unprepare();
        })
        .then(async()=>{
            if(historial==="SI"){
                sql_historial=parsear_sqlquery_insert(tabla,campos,format_values(valores));
                let comando_historial=registar_historial_sql(usuario,tabla, sql_historial,"INSERT","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
            return res.status(200);
        }
        });
      } catch (error) {
        sql_excepcion=parsear_sqlquery_insert(tabla,campos,format_values(valores));
        let comando_excepcion=registar_excepciones_sql(usuario,tabla, sql_excepcion,"INSERT","FORMULARIO",nombre_form)
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        return res.status(500);
      }
}
async function insertar_PS_sin_res(tabla, campos, valores, campos_F, campo_esp, historial="SI",usuario="SN",nombre_form="SN") {
    var values = "";
    var campos_values="";
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1)){values += "@"+campos[i]+", ";campos_values+=campos[i]+", ";}
        else {values += "@"+campos[i];campos_values+=campos[i];}
        
    }
    var cadenasql = "INSERT INTO dbo."+tabla+ "(" + campos_values + ") VALUES("+values+");";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.NVarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else ps1.input(campos[i], sql.DateTime2);
            if(i<(campos.length-1))json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
            else json_execute+='"'+campos[i]+'":"'+valores[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql).then(()=> ps1.execute(json_execute)).then(_results=>{
            return ps1.unprepare();
        })
        .then(async ()=>{
            if(historial==="SI"){
                sql_historial=parsear_sqlquery_insert(tabla,campos,format_values(valores));
                let comando_historial=registar_historial_sql(usuario,tabla, sql_historial,"INSERT","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
        }
        });
      } catch (error) {
        sql_excepcion=parsear_sqlquery_insert(tabla,campos,format_values(valores));
        let comando_excepcion=registar_excepciones_sql(usuario,tabla, sql_excepcion,"INSERT","FORMULARIO",nombre_form)
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
      }
}
async function consulta_individual_PS(tabla, campos, campo_id_tabla, codigo, res, historial = "SI", usuario = "SN", proceso = "FORMULARIO", nombre_form = "SN") {
    
    let comando = "SELECT " + campos + " FROM dbo." + tabla + " WHERE " + campo_id_tabla + "=@"+campo_id_tabla+";";
    var resultQ;
    try {
        var json_execute='{"'+campo_id_tabla+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id_tabla,sql.Int);
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset;
            return ps1.unprepare();
        })
        .then(async()=>{
           if(historial==="SI"){
                let comando_historial=registar_historial_sql(usuario, tabla, comando,"SELECT",proceso,nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial);
            }
            return res.json(resultQ[0]);
        });
      } catch (error) {
        let comando_excepcion=registar_excepciones_sql(usuario, tabla, comando,"SELECT",proceso,nombre_form);
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion);
        return res.status(500);
      }
}

async function consulta_individual_PS_callback(tabla, campos, campo_id_tabla, codigo, callback) {
    let comando = "SELECT " + campos.toString()+ " FROM dbo." + tabla + " WHERE " + campo_id_tabla + "=@"+campo_id_tabla+";";
    var resultQ;
    try {
        var json_execute='{"'+campo_id_tabla+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id_tabla,sql.Int);
        json_execute=JSON.parse(json_execute);//de String a Json

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset[0];
            return ps1.unprepare();
        })
        .then(()=>{
            callback(resultQ);
        });
      } catch (error) {
        console.log("Error general 4: ",error);
      }
}
async function consulta_individual_PS_callbackAll(tabla, campos, campo_id_tabla, codigo, callback) {
    let comando = "SELECT " + campos.toString()+ " FROM dbo." + tabla + " WHERE " + campo_id_tabla + "=@"+campo_id_tabla+";";
    var resultQ;
    try {
        var json_execute='{"'+campo_id_tabla+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id_tabla,sql.Int);
        json_execute=JSON.parse(json_execute);//de String a Json

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset;
            return ps1.unprepare();
        })
        .then(()=>{
            callback(resultQ);
        });
      } catch (error) {
        console.log("Error general 4: ",error);
      }
}
async function consulta_individual_PS_callback1(tabla, campos, campo_id_tabla, codigo, callback) {
    let comando = "SELECT " + campos.toString()+ " FROM dbo." + tabla + " WHERE " + campo_id_tabla + "=@"+campo_id_tabla+";";
    var resultQ;
    try {
        var json_execute='{"'+campo_id_tabla+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id_tabla,sql.NVarChar);
        json_execute=JSON.parse(json_execute);//de String a Json

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset[0];
            return ps1.unprepare();
        })
        .then(()=>{
            callback(resultQ);
        });
      } catch (error) {
        console.log("Error general 4: ",error);
      }
}
async function delete_PS(tabla, campo_id, codigo, res, historial="SI",usuario="SN",nombre_form="SN") {
    var result;
    try{
        let comando = "DELETE FROM dbo." + tabla + " WHERE " + campo_id + "=@"+campo_id+";";
        var json_execute='{"'+campo_id+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id,sql.VarChar);
        json_execute=JSON.parse(json_execute);//de String a Json

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            result=_results
            return ps1.unprepare();
        })
        .then(async()=>{
            if(historial==="SI" && result.rowsAffected[0]>0){
                let comando_historial=registar_historial_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
                res.status(200).json(mensajes.Send_MSG_OK_Eliminar({}))
            }
        });
    } catch (error) {
        let comando_excepcion=registar_excepciones_sql(usuario, tabla, comando,"DELETE","FORMULARIO",nombre_form);
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        console.log("Error general 5: ",error);
        return res.status(500);
      }
}

async function actualizar_PS(tabla, campos, valores, campo_id, campos_F, campo_esp,res, historial="SI",usuario="SN",nombre_form="SN") {
    var result;
    var values = "";
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += campos[i]+'=@'+campos[i]+', ';
        else values += campos[i]+"=@"+campos[i];
    }
    let comando = "UPDATE dbo." + tabla + " SET " + values + " WHERE " + campo_id + "=@"+campo_id+";";
    console.log(comando);
    try {
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        var json_execute="{";

        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.VarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else ps1.input(campos[i], sql.DateTime2(0));
            json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
        }
        ps1.input(campo_id, sql.Int);
        json_execute+='"'+campo_id+'":"'+valores[campos.length]+'"}'
        json_execute=JSON.parse(json_execute);
        console.log(json_execute);
        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            result=_results;
            console.log(result);
            return ps1.unprepare();
        })
        .then(async()=>{return res.status(200).json(mensajes.Send_MSG_OK_Actualizar({}))
            /*if(historial==="SI" && result.rowsAffected[0]>0){
                let comando_historial=registar_historial_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
                
            }*/
        });
    } catch (error) {
        console.log(error);
        /*let comando_excepcion=registar_excepciones_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        console.log("Error general 6: ",error);
        return res.status(500);*/
    }
}
async function actualizar_PS_where2(tabla, campos, valores, campos_where, valores_where, campos_F, campo_esp, res) {
    var result;
    var values = "";
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += campos[i]+'=@'+campos[i]+', ';
        else values += campos[i]+"=@"+campos[i];
    }
    let comando = "UPDATE dbo." + tabla + " SET " + values + " WHERE " + campos_where[0] + "=@"+campos_where[0]+";";
    console.log(comando);
    try {
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        var json_execute="{";

        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.VarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else ps1.input(campos[i], sql.DateTime2(0));
            json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
        }
        ps1.input(campos_where[0], sql.Int);
        json_execute+='"'+campos_where+'":"'+valores_where[0]+'"}';
        json_execute=JSON.parse(json_execute);
        console.log(json_execute);
        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            result=_results;
            console.log(result);
            return ps1.unprepare();
        })
        .then(async()=>{return res.status(200).json(mensajes.Send_MSG_OK_Actualizar({}))
            /*if(historial==="SI" && result.rowsAffected[0]>0){
                let comando_historial=registar_historial_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
                
            }*/
        });
    } catch (error) {
        console.log(error);
        /*let comando_excepcion=registar_excepciones_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        console.log("Error general 6: ",error);
        return res.status(500);*/
    }
}
async function actualizar_PS_sin_res(tabla, campos, valores, campo_id, campos_F, campo_esp, historial="SI",usuario="SN",nombre_form="SN") {
    var result;
    var values = "";
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += campos[i]+'=@'+campos[i]+', ';
        else values += campos[i]+"=@"+campos[i];
    }
    let comando = "UPDATE dbo." + tabla + " SET " + values + " WHERE " + campo_id + "=@"+campo_id+";";
    try {
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        var json_execute="{";

        for(let i=0;i<campos.length;i++){
            if(!campos_F.includes(campos[i])){ps1.input(campos[i],sql.VarChar);}
            else if(campo_esp.includes(campos[i])){ps1.input(campo_esp[0],campo_esp[1]);}
            else ps1.input(campos[i], sql.DateTime2(0));
            json_execute+='"'+campos[i]+'":"'+valores[i]+'",';
        }
        ps1.input(campo_id, sql.Int);
        json_execute+='"'+campo_id+'":"'+valores[campos.length]+'"}'
        json_execute=JSON.parse(json_execute);
        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            result=_results;
            return ps1.unprepare();
        })
        .then(async()=>{/*return res.status(200).json(mensajes.Send_MSG_OK_Actualizar({}))*/

            /*if(historial==="SI" && result.rowsAffected[0]>0){
                let comando_historial=registar_historial_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
                const historial= await new sql.ConnectionPool(objconn.conn).connect();
                historial.request().query(comando_historial)
                
            }*/
        });
    } catch (error) {
        /*let comando_excepcion=registar_excepciones_sql(usuario, tabla, comando,"UPDATE","FORMULARIO",nombre_form);
        const excepcion= await new sql.ConnectionPool(objconn.conn).connect();
        excepcion.request().query(comando_excepcion)
        console.log("Error general 6: ",error);
        return res.status(500);*/
    }
}

async function consulta_sql_reportes(comando, callback) {
    var result;
    const connection= await new sql.ConnectionPool(objconn.conn).connect();
    connection.request().query(comando, (err, results) => {
    if (err) {
      console.log('Failed to execute select query.', err);
      //return res.status(500).json(mensajes.Send_MSG_Error_Select({}));
    }
    result=results;
    callback(result.recordset);
  });
}
async function consulta_sql_reportes_poliza(comando, callback) {
    const connection= await new sql.ConnectionPool(objconn.conn_ext).connect();
    //var stm="SELECT NroPoliza, Imei, FechaRegistro, NombreContratante, KmCobertura, KmAcumulado FROM [eProperty2].[dbo].[ProduccionXKM]"
    connection.request().query(comando, async(err, results) => {
    if (err) {
      console.log('Failed to execute select query.', err);
      return;
      //return res.status(500).json(mensajes.Send_MSG_Error_Select({}));
    }
    callback(results.recordset);
    
  });
}

async function getInfoDisp(tabla, campo_id, codigo, res) {
    var result;
    try{
        let comando = "SELECT *  FROM " + tabla + " WHERE " + campo_id + "=@"+campo_id+";";
        var json_execute='{"'+campo_id+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn_ext).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id,sql.VarChar);
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            result=_results;
            return ps1.unprepare();
        })
        .then(()=>{
            if(result.rowsAffected[0]>0){
            res.json({result:result.recordset[0]});}
            else {res.json({result:null});}
            
        });
    } catch (error) {
        
      }
}
async function consulta_codigo_PS_callback(tabla, campos, campos_id_tabla, codigos, callback) {//solo cuando el campo LUGAR es Empresa(formulariodesalud)
    let comando = "SELECT " + campos.toString()+ " FROM dbo." + tabla + " WHERE " + campos_id_tabla[0] +
     "=@"+campos_id_tabla[0]+" AND "+campos_id_tabla[1]+"=@"+campos_id_tabla[1]+";";
    var resultQ;
    try {
        var json_execute='{"'+campos_id_tabla[0]+'":'+'"'+codigos[0]+'",'+
        '"'+campos_id_tabla[1]+'":'+'"'+codigos[1]+'"}';
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campos_id_tabla[0],sql.NVarChar);
        ps1.input(campos_id_tabla[1],sql.Int);
        json_execute=JSON.parse(json_execute);

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset[0];
            return ps1.unprepare();
        })
        .then(()=>{
            callback(resultQ);
        });
      } catch (error) {
        console.log("Error general 4: ",error);
      }
}
async function obtener_ultimo_registro_PS(tabla, campos, campo_id_tabla, callback) {
    //"SELECT " + campos.toString()+ " FROM dbo."+tabla+" WHERE"+campo_id_tabla+"=(SELECT max("+campo_id_tabla+") FROM "+tabla+");";
    //let comando = "SELECT " + campos.toString()+ " FROM dbo." + tabla + " WHERE " + campo_id_tabla + "=@"+campo_id_tabla+";";
    let comando = "SELECT " + campos.toString()+ " FROM dbo."+tabla+" WHERE "+campo_id_tabla+"=(SELECT max("+campo_id_tabla+") FROM dbo."+tabla+");";
    var resultQ;
    const connection= await new sql.ConnectionPool(objconn.conn).connect();
    connection.request().query(comando, (err, results) => {
        if (err) {
        console.log('Failed to execute select query.', err);
        //return res.status(500).json(err);
        }
        resultQ=results.recordset[0];
        callback(resultQ);
    });
    /*
    try {
        var json_execute='{"'+campo_id_tabla+'":'+'"'+codigo+'"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campo_id_tabla,sql.NVarChar);
        json_execute=JSON.parse(json_execute);//de String a Json

        ps1.prepare(comando).then(()=> ps1.execute(json_execute)).then(_results=>{
            resultQ=_results.recordset[0];
            return ps1.unprepare();
        })
        .then(()=>{
            callback(resultQ);
        });
      } catch (error) {
        console.log("Error general 4: ",error);
      }*/
}
async function actualizar_Fecha(tabla, campos, valores, campo_id, campos_F, campo_esp, historial="SI",usuario="SN",nombre_form="SN") {
    var result;
    var values = "";
    for (let i = 0; i < campos.length; i++) {
        if (i < (campos.length - 1))values += campos[i]+'=@'+campos[i]+', ';
        else values += campos[i]+"=@"+campos[i];
    }//                           campo de estado       
    //"UPDATE dbo." + tabla + " SET "+ campo_actualizar+ " = CASE WHEN "+ campo_condicion+" > "+valor_condicion+" THEN "+campo_actualizar+" = 'ACTIVO' END"
    let comando = "UPDATE dbo." + tabla + " SET "+ campo_actualizar+ " = CASE WHEN "+ campo_condicion+" > "+valor_condicion+" THEN "+campo_actualizar+" = 'ACTIVO' END"
    try {
        var result;
        const connection= await new sql.ConnectionPool(objconn.conn).connect();
        connection.request().query(comando, (err, results) => {
            if (err) {
            console.log('Failed to execute select query.', err);
            //return res.status(500).json(err);
            }
            else console.log("Estado actualizado")
        });
    } catch (error) {
    }
}
module.exports = {
    insertar_PS,
    insertar_PS_sin_res,
    delete_PS,
    actualizar_PS,
    actualizar_PS_sin_res,
    consulta_individual_PS,
    consulta_individual_PS_callback,
    consulta_sql_reportes,  
    getInfoDisp, 
    consulta_sql_reportes_poliza,
    insertar_formulariodesalud,
    consulta_codigo_PS_callback,
    insertar_PS1,
    consulta_individual_PS_callback1,
    obtener_ultimo_registro_PS,
    consulta_individual_PS_callbackAll,
    actualizar_Fecha,
    actualizar_PS_where2,
}