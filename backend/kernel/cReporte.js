const asyncHandler = require("express-async-handler");
const objSql = require("./cSql");
const objCDate = require('./convertDate');
var xl = require('excel4node');
const objconn = require("../config/config_sql");
const sql = require('mssql');
const objFechaAuditoria = require("../kernel/cFechas");
const dateA=new Date(objFechaAuditoria.fecha_hora_actual());
const ExcelJS = require('exceljs');

async function generico_reporteGeneral_ExcelImagenes(res, comando, columnas_excel, camposF, titulo, index_titulo=1, index_cabeceras=2, index_datos=3, name_archivo="reporte.xlsx"){
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('My Sheet');

  sheet.columns=columnas_excel;
  
  objSql.consulta_sql_reportes(comando, (result) => {
    let rowIndex = index_datos; //fila donde inician a agregarse los datos de base
    //console.log(result);
    let numitem=1;
    result.forEach(record => {
      
      const myBase64Image = record["MATE_IMG"];
      const imageId2 = workbook.addImage({
        base64: myBase64Image,
        extension: 'png',
      });
          sheet.addRow({CODIGO:numitem,
          NOMBRE: JSON.stringify(record.MATE_NOMBRE).replaceAll('"', ""),
          STOCK:JSON.stringify(record.MATE_STOCK).replaceAll('"', ""),
          CATEGORIA: JSON.stringify(record.MATE_CATEGORIA).replaceAll('"', ""),
          CIUDAD: JSON.stringify(record.MATE_CIUDAD).replaceAll('"', ""),
          ESTADO: JSON.stringify(record.MATE_ESTADO).replaceAll('"', "")});
          sheet.addImage(imageId2, {
            tl: { col: 6, row: numitem },
            ext: { width: 60, height: 60 }
          });
          sheet.getRow(numitem+1).height=60;
          numitem++;
    });
    return workbook.xlsx.write(res).then(function () {
      res.status(200).end();
    });
  });
}

async function generico_reporteGeneral_Excel(res, comando, columnas_excel, camposF, titulo, index_titulo = 1, index_cabeceras = 2, index_datos = 3, name_archivo = "reporte.xlsx") {
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet('Reporte');
  /***** ESTILOS PARA EL EXCEL *****/
  var headers = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 12,
      center: true,
      bold: true
    },
    alignment: {
      wrapText: true,
      vertical: 'center',
      horizontal: 'center'
    },
    border: {
      left: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      right: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      top: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      bottom: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      outline: true
    }
  });
  //BODY
  var body = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 11
    }
  });
  //TITLE
  var title = wb.createStyle({
    font:
    {
      bold: true,
      color: '#000000',
      size: 12
    }
  });
  const headingColumnNames = columnas_excel;
  let titleRowIndex = index_titulo;
  ws.cell(titleRowIndex, 1).string(titulo).style(title);
  let headingColumnIndex = 1;//columna inicial de las cabeceras
  let headingRowIndex = index_cabeceras;
  var i = 1;
  headingColumnNames.forEach(heading => {
    ws.cell(headingRowIndex, headingColumnIndex++)
      .string(heading).style(headers);
    ws.column(i).setWidth(20);
    i++;
  });
  objSql.consulta_sql_reportes(comando, (result) => {
    let rowIndex = index_datos; //fila donde inician a agregarse los datos de base
    result.forEach(record => {
      let columnIndex = 1;
      Object.keys(record).forEach(columnName => {
        if (camposF.includes(columnName) && record[columnName] !== "" && record[columnName] !== null) {
          fechaC = objCDate.convert_date(JSON.stringify(record[columnName]).replaceAll('"', ""));
          ws.cell(rowIndex, columnIndex++).date(fechaC).style({ numberFormat: 'yyyy-mm-dd hh:mm:ss' });
        }
        // if (typeof (record[columnName]) == 'string' || typeof (record[columnName]) == 'datetime' ) {
        else if (record[columnName] !== null) { JSON.stringify(record[columnName]).replaceAll('"', ""); ws.cell(rowIndex, columnIndex++).string(JSON.stringify(record[columnName]).replaceAll('"', "")).style(body); }
        else { ws.cell(rowIndex, columnIndex++).string("").style(body); }
        // }
        // else { ws.cell(rowIndex, columnIndex++).string(" "); }
        
      });
      rowIndex++;
    });
    wb.write(name_archivo, res);
  });

}
async function reporte_polizas_porVencer(res, comando, columnas_excel, camposF, titulo, campos, index_titulo = 1, index_cabeceras = 2, index_datos = 3, name_archivo = "reporte.xlsx") {
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet('Reporte');
  /***** ESTILOS PARA EL EXCEL *****/
  var headers = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 12,
      center: true,
      bold: true
    },
    alignment: {
      wrapText: true,
      vertical: 'center',
      horizontal: 'center'
    },
    border: {
      left: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      right: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      top: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      bottom: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      outline: true
    }
  });
  //BODY
  var body = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 11
    }
  });
  //TITLE
  var title = wb.createStyle({
    font:
    {
      bold: true,
      color: '#000000',
      size: 12
    }
  });
  const headingColumnNames = columnas_excel;
  let titleRowIndex = index_titulo;
  ws.cell(titleRowIndex, 1).string(titulo).style(title);
  let headingColumnIndex = 1;//columna inicial de las cabeceras
  let headingRowIndex = index_cabeceras;
  var i = 1;
  headingColumnNames.forEach(heading => {
    ws.cell(headingRowIndex, headingColumnIndex++)
      .string(heading).style(headers);
    ws.column(i).setWidth(20);
    i++;
  });
  objSql.consulta_sql_reportes_poliza(comando, async (result) => {
    let rowIndex = index_datos; //fila donde inician a agregarse los datos de base

    result.forEach(record => {
      let columnIndex = 1;
      var porcentaje = (record.KmAcumulado / record.KmCobertura)*100;

      var dateF=new Date(record.FechaRegistro);
      
      dateF.setFullYear(dateF.getFullYear()+1);

      if(porcentaje>80 && porcentaje<=100 && dateA.getTime()<dateF.getTime() && record.Activo===true){
        //console.log(dateA+"-----"+dateF+"-----"+record.Activo+"----"+porcentaje);
        Object.keys(record).forEach(columnName => {
          if (camposF.includes(columnName) && record[columnName] !== "" && record[columnName] !== null) {
            fechaC = objCDate.convert_date(JSON.stringify(record[columnName]).replaceAll('"', ""));
            ws.cell(rowIndex, columnIndex++).date(fechaC).style({ numberFormat: 'yyyy-mm-dd hh:mm:ss' });
          }
          else if (record[columnName] !== null) { JSON.stringify(record[columnName]).replaceAll('"', ""); ws.cell(rowIndex, columnIndex++).string(JSON.stringify(record[columnName]).replaceAll('"', "")).style(body); }
          else { ws.cell(rowIndex, columnIndex++).string("").style(body); }
        });
        ws.cell(rowIndex, columnIndex++).string(porcentaje+"%").style(body);
        rowIndex++;
      };
      }); 
    wb.write(name_archivo, res);
  });
}
async function reporte_polizas_vencidas(res, comando, columnas_excel, camposF, titulo, campos, index_titulo = 1, index_cabeceras = 2, index_datos = 3, name_archivo = "reporte.xlsx") {
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet('Reporte');
  /***** ESTILOS PARA EL EXCEL *****/
  var headers = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 12,
      center: true,
      bold: true
    },
    alignment: {
      wrapText: true,
      vertical: 'center',
      horizontal: 'center'
    },
    border: {
      left: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      right: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      top: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      bottom: {
        // style: 'solid',
        solid: true,
        color: '#FF0000'
      },
      outline: true
    }
  });
  //BODY
  var body = wb.createStyle({
    font:
    {
      color: '#000000',
      size: 11
    }
  });
  //TITLE
  var title = wb.createStyle({
    font:
    {
      bold: true,
      color: '#000000',
      size: 12
    }
  });
  const headingColumnNames = columnas_excel;
  let titleRowIndex = index_titulo;
  ws.cell(titleRowIndex, 1).string(titulo).style(title);
  let headingColumnIndex = 1;//columna inicial de las cabeceras
  let headingRowIndex = index_cabeceras;
  var i = 1;
  headingColumnNames.forEach(heading => {
    ws.cell(headingRowIndex, headingColumnIndex++)
      .string(heading).style(headers);
    ws.column(i).setWidth(20);
    i++;
  });
  objSql.consulta_sql_reportes_poliza(comando, async (result) => {
    let rowIndex = index_datos; //fila donde inician a agregarse los datos de base

    result.forEach(record => {
      let columnIndex = 1;
      var porcentaje = (record.KmAcumulado / record.KmCobertura)*100;
      
      var dateF=new Date(record.FechaRegistro);
      
      dateF.setFullYear(dateF.getFullYear()+1);

      if(record.Activo===true && (porcentaje>100 || dateA.getTime()>=dateF.getTime())){
        //console.log(dateA+"-----"+dateF+"-----"+record.Activo+"----"+porcentaje);
        Object.keys(record).forEach(columnName => {
          if (camposF.includes(columnName) && record[columnName] !== "" && record[columnName] !== null) {
            fechaC = objCDate.convert_date(JSON.stringify(record[columnName]).replaceAll('"', ""));
            ws.cell(rowIndex, columnIndex++).date(fechaC).style({ numberFormat: 'yyyy-mm-dd hh:mm:ss' });
          }
          else if (record[columnName] !== null) { JSON.stringify(record[columnName]).replaceAll('"', ""); ws.cell(rowIndex, columnIndex++).string(JSON.stringify(record[columnName]).replaceAll('"', "")).style(body); }
          else { ws.cell(rowIndex, columnIndex++).string("").style(body); }
        });
        ws.cell(rowIndex, columnIndex++).string(porcentaje+"%").style(body);
        //console.log(wb)
        rowIndex++;
      };
      }); 
    wb.write(name_archivo, res);
  });
}
module.exports = {
  generico_reporteGeneral_ExcelImagenes,
  generico_reporteGeneral_Excel,
  reporte_polizas_porVencer,
  reporte_polizas_vencidas,
}