const mensajes = require("./cMensajesApi");
const objconn = require('../config/config_sql');
const sql = require('mssql');

async function paginar_tabla_all(tabla, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res) {
    let valor_list2 = [];
    var cadena_campos1 = "";
    for (let i = 0; i < campos_busqueda.length; i++) {
        if (i < (campos_busqueda.length - 1)) {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" OR ";
        }
        else {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
        }
        valor_list2.push("%" + valor_busqueda + "%");
    }
    let count;
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM dbo." + tabla + " WHERE " + cadena_campos1;
    var cadenasql2 = "SELECT " + campos.toString() + " FROM dbo." + tabla + " WHERE " + cadena_campos1 + " ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute        
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos_execute.length;i++){
            ps1.input(campos_execute[i],sql.VarChar);
            if(i<(campos_execute.length-1))json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
            else json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async ()=>{
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
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
 async function paginar_tabla_all_where1(tabla, campos_where, valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res) {
    let valor_list2 = [];
    var cadena_campos1 = "";
    for (let i = 0; i < campos_busqueda.length; i++) {
        if (i < (campos_busqueda.length - 1)) {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" OR ";
        }
        else {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
        }
        valor_list2.push("%" + valor_busqueda + "%");
    }
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM dbo." + tabla + " WHERE " + campos_where[0] + " = '"+ valores_where[0] + "'  AND (" + cadena_campos1+")";
    var cadenasql2 = "SELECT " + campos.toString() + " FROM dbo." + tabla + " WHERE " + campos_where[0] + " = '"+ valores_where[0] + "'  AND (" + cadena_campos1 + ") ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos_execute.length;i++){
            ps1.input(campos_execute[i],sql.NVarChar);
            if(i<(campos_execute.length-1))json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
            else json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
            let data;
            var json_execute2="{";
            const aux2= await new sql.ConnectionPool(objconn.conn).connect();
            const ps2=new sql.PreparedStatement(aux2);
            for(let i=0;i<campos_execute.length;i++){
                ps2.input(campos_execute[i],sql.NVarChar);
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
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
async function paginar_tabla_all_where1_ext(tabla, campos_where, valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res) {
    let valor_list2 = [];
    var cadena_campos1 = "";
    for (let i = 0; i < campos_busqueda.length; i++) {
        if (i < (campos_busqueda.length - 1)) {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" OR ";
        }
        else {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
        }
        valor_list2.push("%" + valor_busqueda + "%");
    }
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM " + tabla + " WHERE " + campos_where[0] + " = '"+ valores_where[0] + "'  AND (" + cadena_campos1+")";
    var cadenasql2 = "SELECT " + campos.toString() + " FROM " + tabla + " WHERE " + campos_where[0] + " = '"+ valores_where[0] + "'  AND (" + cadena_campos1 + ") ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn_ext).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos_execute.length;i++){
            ps1.input(campos_execute[i],sql.NVarChar);
            if(i<(campos_execute.length-1))json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
            else json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
            let data;
            var json_execute2="{";
            const aux2= await new sql.ConnectionPool(objconn.conn_ext).connect();
            const ps2=new sql.PreparedStatement(aux2);
            for(let i=0;i<campos_execute.length;i++){
                ps2.input(campos_execute[i],sql.NVarChar);
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
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
async function paginar_tabla_all_where2(tabla, campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res) {
    let valor_list2 = [];
    var cadena_campos1 = "";
    for (let i = 0; i < campos_busqueda.length; i++) {
        if (i < (campos_busqueda.length - 1)) {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" OR ";
        }
        else {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
        }
        valor_list2.push("%" + valor_busqueda + "%");
    }
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM " + tabla + " WHERE (" + campos_where[0] + " = '" +valores_where[0]+ "' AND " + campos_where[1] + " = '"+valores_where[1]+"')  AND ("+ cadena_campos1+")";
    var cadenasql2 = "SELECT " + campos.toString() + " FROM " + tabla + " WHERE (" + campos_where[0] + " = '" +valores_where[0]+ "' AND " + campos_where[1] + " = '"+valores_where[1]+"')  AND ("+  cadena_campos1 + ") ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos_execute.length;i++){
            ps1.input(campos_execute[i],sql.NVarChar);
            if(i<(campos_execute.length-1))json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
            else json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
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
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
//funcion exclusiva para marketing y ferias
async function paginar_tabla_all_where3(tabla, campos_where , valores_where, campos, campos_busqueda, valor_busqueda, campos_execute, campo_orderby, pageSize, page, res) {
    let valor_list2 = [];
    var cadena_campos1 = "";
    for (let i = 0; i < campos_busqueda.length; i++) {
        if (i < (campos_busqueda.length - 1)) {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i]+" OR ";
        }
        else {
            cadena_campos1 += campos_busqueda[i] + " LIKE @"+campos_busqueda[i];
        }
        valor_list2.push("%" + valor_busqueda + "%");
    }
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM " + tabla + " WHERE (" + campos_where[0] + " = '" +valores_where[0]+ "' AND " + campos_where[1] + " = '"+valores_where[1]+"')  AND ("+ cadena_campos1+")";
    var cadenasql2 = "SELECT " + campos.toString() + " FROM " + tabla + " WHERE (" + campos_where[0] + " = '" +valores_where[0]+ "' AND " + campos_where[1] + " = '"+valores_where[1]+"' AND " + campos_where[2] + " = '"+valores_where[2]+"' AND MATE_STOCK > 0)  AND ("+  cadena_campos1 + ") ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute="{";//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        for(let i=0;i<campos_execute.length;i++){
            ps1.input(campos_execute[i],sql.NVarChar);
            if(i<(campos_execute.length-1))json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'",';
            else json_execute+='"'+campos_execute[i]+'":"'+valor_list2[i]+'"';
        }
        json_execute+="}";
        json_execute=JSON.parse(json_execute);//de String a Json
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
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
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
async function paginar_tabla_where_like(tabla, campos, campowhere, valorwhere, campo_busqueda, valor_busqueda, campo_orderby, pageSize, page, res) {
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM dbo." + tabla + " WHERE " + campowhere + " = @"+ campowhere + "  AND " + campo_busqueda+" LIKE @"+campo_busqueda+";";
    var cadenasql2 = "SELECT " + campos + " FROM dbo." + tabla + " WHERE " + campowhere + " = @"+ campowhere + "  AND " + campo_busqueda+" LIKE @"+campo_busqueda+ " ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute='{"'+campowhere+'":"'+valorwhere+'","'+campo_busqueda+'":"%'+valor_busqueda+'%"}';//string(que se pasara a json) para pool.execute
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campowhere,sql.VarChar);
        ps1.input(campo_busqueda,sql.VarChar);
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
            let data;
            var json_execute2='{"'+campowhere+'":"'+valorwhere+'","'+campo_busqueda+'":"%'+valor_busqueda+'%"}';//string(que se pasara a json) para pool.execute
            const aux2= await new sql.ConnectionPool(objconn.conn).connect();
            const ps2=new sql.PreparedStatement(aux2);
            ps2.input(campowhere,sql.VarChar);
            ps2.input(campo_busqueda,sql.VarChar);
            json_execute2=JSON.parse(json_execute2);
            ps2.prepare(cadenasql2).then(()=>ps2.execute(json_execute2)).then(_results2=>{
                data=_results2;
                return ps2.unprepare();
            })
            .then(()=>{
                var result=data.recordset;
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
async function paginar_tabla_2where_like(tabla, campos, campowhere, valorwhere, campo2where, valor2where, campo_busqueda, valor_busqueda, campo_orderby, pageSize, page, res) {
    var p_offset = ((page<=-1?page=1:page) * pageSize) - pageSize;
    var cadenasql1 = "SELECT COUNT(*) AS CONTAR FROM dbo." + tabla + " WHERE " + campowhere + " = @"+ campowhere +" AND "+campo2where+" = @"+campo2where+" AND " + campo_busqueda+" LIKE @"+campo_busqueda+";";
    var cadenasql2 = "SELECT " + campos + " FROM dbo." + tabla + " WHERE " + campowhere + " = @"+ campowhere + "  AND " +campo2where+" = @"+campo2where+" AND "+ campo_busqueda+" LIKE @"+campo_busqueda+ " ORDER BY "+campo_orderby+" OFFSET "+ p_offset + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY;";
    try {
        var json_execute='{"'+campowhere+'":"'+valorwhere+
        '","'+campo2where+'":"'+valor2where+
        '","'+campo_busqueda+'":"%'+valor_busqueda+'%"}';
        const aux1= await new sql.ConnectionPool(objconn.conn).connect();
        const ps1=new sql.PreparedStatement(aux1);
        ps1.input(campowhere,sql.VarChar);
        ps1.input(campo2where,sql.VarChar);
        ps1.input(campo_busqueda,sql.VarChar);
        json_execute=JSON.parse(json_execute);
        ps1.prepare(cadenasql1).then(()=> ps1.execute(json_execute)).then(_results=>{
            count = _results.recordset[0]["CONTAR"];
            return ps1.unprepare();
        })
        .then(async()=>{
            let data;
            var json_execute2='{"'+campowhere+'":"'+valorwhere+
            '","'+campo2where+'":"'+valor2where+
            '","'+campo_busqueda+'":"%'+valor_busqueda+'%"}';
            const aux2= await new sql.ConnectionPool(objconn.conn).connect();
            const ps2=new sql.PreparedStatement(aux2);
            ps2.input(campowhere,sql.VarChar);
            ps2.input(campo2where,sql.VarChar);
            ps2.input(campo_busqueda,sql.VarChar);
            json_execute2=JSON.parse(json_execute2);
            ps2.prepare(cadenasql2).then(()=>ps2.execute(json_execute2)).then(_results2=>{
                data=_results2;
                return ps2.unprepare();
            })
            .then(()=>{
                var result=data.recordset;
                res.json({ result, page, pages: Math.ceil(count / pageSize) });
            })
        })
      } catch (error) {
        console.log(error)
      }
}
module.exports = {
    paginar_tabla_all,
    paginar_tabla_where_like,
    paginar_tabla_2where_like,
    paginar_tabla_all_where1,
    paginar_tabla_all_where1_ext,
    paginar_tabla_all_where2,
    paginar_tabla_all_where3
}