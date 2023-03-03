const PDFDocument = require('pdfkit');
const pdfTable = require('voilab-pdf-table');
//const fs = require('fs');
const moment = require('moment');

const asyncHandler = require("express-async-handler");
const objSql = require("../kernel/cSql");
const objCDate = require('../kernel/convertDate');
//var xl = require('excel4node');
const objconn = require("../config/config_sql");
const sql = require('mssql');
const objFechaAuditoria = require("../kernel/cFechas");
const doc = require('pdfkit');
const { fill, font, x } = require('pdfkit');
const dateA = new Date(objFechaAuditoria.fecha_hora_actual());

async function informe_PDF(res, comando, camposF, campos_esp, titulo, index_titulo = 1, index_cabeceras = 2, index_datos = 3, name_archivo = "reporte.xlsx") {

  var pdfDoc = new PDFDocument({ autoFirstPage: false }),
    table = new pdfTable(pdfDoc, {
      bottomMargin: 30,
    }),
    table1 = new pdfTable(pdfDoc, {
      bottomMargin: 30,
    }),
    table2 = new pdfTable(pdfDoc, {
      bottomMargin: 30,
    }),
    table3 = new pdfTable(pdfDoc, {
      bottomMargin: 30,
    });
  //pdfDoc.pipe(fs.createWriteStream('Informe1.pdf'));
  //var stream = pdfDoc.pipe(blobStream());


  objSql.consulta_sql_reportes(comando, (result) => {
    result = result[0];

    //Validar campos nulos/undefined


    //Formato de fecha
    const datoFecha1 = result["SOLICI_FEC_INICIO"];
    const datoFecha2 = result["SOLICI_FEC_FIN"];
    const datoFecha3 = result["SOLICI_FECMOD"];
    const datoFecha4 = result["SOLICI_FECING"];
    
    const fechaBolv1 = (moment.utc(datoFecha1).isValid() ? moment.utc(datoFecha1).format('DD/MM/YYYY') : '-----------------------');
    const fechaBolv2 = (moment.utc(datoFecha2).isValid() ? moment.utc(datoFecha2).format('DD/MM/YYYY') : '-----------------------');
    const fechaBolv3 = (moment.utc(datoFecha3).isValid() ? moment.utc(datoFecha3).format('DD/MM/YYYY') : '-----------------------');
    const fechaBolv4 = (moment.utc(datoFecha4).isValid() ? moment.utc(datoFecha4).format('DD/MM/YYYY') : '-----------------------');

    //FUENTE
    pdfDoc.font('Helvetica')

  //CABECERA Y PIE DE PAGINA
  pdfDoc.addPage();

  let bottom = pdfDoc.page.margins.bottom;
  pdfDoc.page.margins.bottom = 0;

  //CABECERA SUPERIOR DISEÑO
  //LOGO
  pdfDoc.image('pdf/logo.png', 40, 15, { fit: [180, 180], align: 'left', valign: 'left', margin: 5 });
  //vector linea 4
  /*pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(450, 0).lineWidth(30).stroke('#88919b'); //azul 4
  //vector linea 3
  pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(455, 0).lineWidth(30).stroke('#66798e'); //azul 3
  //vector linea 2
  pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(465, 0).lineWidth(30).stroke('#476484'); //azul 2
  //vector linea 1
  pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(480, 0).lineWidth(30).stroke('#214e82'); //azul 1*/

  //PIE DE PAGINA DISEÑO
  //vector linea 4
  /*pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(0, 790).lineWidth(14).stroke('#f79825'); //anaranjado
  //vector linea 3
  pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(90, 790).lineWidth(14).stroke('#3eb5e0'); //celeste
  //vector linea 2
  pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(190, 790).lineWidth(14).stroke('#2d66a8'); //azul claro*/
  //vector linea 1
  pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(0, 790).lineWidth(84).stroke('#214e82'); //azul
  pdfDoc.fillColor('white').font('Helvetica-Bold').fontSize(9).text(`SANTA CRUZ - LA PAZ - COCHABAMBA - SUCRE - TARIJA - TRINIDAD - ORURO - POTOSI`, 0.3 * (400), pdfDoc.page.height - 35, {
    align: 'justify'
  });
  pdfDoc.lineCap('round').moveTo(530, 790).lineTo(90, 790).lineWidth(40).stroke('#3eb5e0'); //celeste
  pdfDoc.fillColor('white').font('Helvetica').fontSize(8).text(`Telf.: 800 - 10 7000    www.nacionalseguros.com.bo`, 0.3 * (700), pdfDoc.page.height - 15, {
    align: 'justify'
  });
  /*pdfDoc.image('pdf/facebook.svg', 700, pdfDoc.page.height - 15, { fit: [10, 10], align: 'left', valign: 'left', margin: 5 });
  pdfDoc.image('pdf/instagram.svg', 710, pdfDoc.page.height - 15, { fit: [10, 10], align: 'left', valign: 'left', margin: 5 });
  pdfDoc.image('pdf/youtube.svg', 720, pdfDoc.page.height - 15, { fit: [10, 10], align: 'left', valign: 'left', margin: 5 });*/
  //pdfDoc.lineCap('butt').moveTo(-20, 600).bezierCurveTo(0, 100, 100, 100, 100, 100).lineWidth(14).stroke('#214e82'); //azul

  pdfDoc.text('', 50, 50)
  pdfDoc.page.margins.bottom = bottom;

  let pageNumber = 1;

  pdfDoc.on('pageAdded', () => {
    pageNumber++
    let bottom = pdfDoc.page.margins.bottom;
    pdfDoc.page.margins.bottom = 0;

    //CABECERA SUPERIOR DISEÑO
    //LOGO
    pdfDoc.image('pdf/logo.png', 40, 15, { fit: [90, 90], align: 'left', valign: 'left', margin: 5 });
    //vector linea 4
    pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(450, 0).lineWidth(30).stroke('#88919b'); //azul 4
    //vector linea 3
    pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(455, 0).lineWidth(30).stroke('#66798e'); //azul 3
    //vector linea 2
    pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(465, 0).lineWidth(30).stroke('#476484'); //azul 2
    //vector linea 1
    pdfDoc.lineCap('butt').moveTo(800, 0).lineTo(480, 0).lineWidth(30).stroke('#214e82'); //azul 1

    //PIE DE PAGINA DISEÑO
    //vector linea 4
    pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(0, 790).lineWidth(14).stroke('#f79825'); //anaranjado
    //vector linea 3
    pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(90, 790).lineWidth(14).stroke('#3eb5e0'); //celeste
    //vector linea 2
    pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(190, 790).lineWidth(14).stroke('#2d66a8'); //azul claro
    //vector linea 1
    pdfDoc.lineCap('butt').moveTo(800, 790).lineTo(550, 790).lineWidth(14).stroke('#214e82'); //azul
    //vector circulo
    pdfDoc.lineCap('square').moveTo(850, 790).circle(610, 790, 13.5).stroke('#214e82');

    pdfDoc.fillColor('white').text(
      pageNumber, 
      0.3 * (pdfDoc.page.width - 10), pdfDoc.page.height - 15,
      {
        width: 425,
        align: 'right',
        lineBreak: false,
      });

    // Reset text writer position
    pdfDoc.fillColor('black').text('', 50, 50);
    pdfDoc.page.margins.bottom = bottom;

  });

    //color titulo
    /*pdfDoc.fillColor('#175797');

    //TITULO INFORME
    pdfDoc.fontSize(12).text('SOLICITUD DE PRODUCTOS', {
      align: 'center',
    });
    pdfDoc.font('Helvetica-Bold').fontSize(25).fillColor('#175797').text('MARKETING Y FERIAS', {
      align: 'center',
      lineGap: -6,
    });
    pdfDoc.font('Helvetica').fontSize(9).text('Resolucion Administrativa APS/DS/Nº 592/2017 de 17 Mayo', {
      align: 'center',
      characterSpacing: 2.5
    });*/
    //vector linea titulo formulario
    pdfDoc.lineCap('butt').moveTo(500, 110).lineTo(100, 110).lineWidth(3).stroke('#175797');
    pdfDoc.moveDown(1);
    pdfDoc.font('Helvetica').fontSize(8).text('206-934762-2011-02-037-3003', {
      align: 'center' //aliniacion
    }).fillColor('black');
    pdfDoc.moveDown(0.5); //espacio 


    // SECCION OBSERVACIONES IMPORTANTES
    /*pdfDoc.moveDown(1);
    pdfDoc.font('Helvetica-Bold').fontSize(10).text('OBSERVACIONES IMPORTANTES');
    //Fuente y tamaño seccion
    pdfDoc.font('Helvetica').fontSize(9);

    pdfDoc.moveDown(1);
    pdfDoc.font('Helvetica').fontSize(9).text(`"Sírvase llenar este formulario, haga sus declaraciones con toda tranquilidad y franqueza, si tiene alguna enfermedad,manifiéstela de forma clara y detallada. La falta de declaración completa y verdadera llevará a una evaluación equivocada de su salud. En todo caso, una declaración auténtica nunca será discutida por la Compañía que tomó conocimiento del riesgo aceptado."`, {
      align: 'justify'
    });
    pdfDoc.moveDown(1);*/
    

    //SECCION DATOS DE SOLICITUD
    pdfDoc.moveDown(2);
    pdfDoc.font('Helvetica-Bold').fontSize(10).text('DATOS DE SOLICITUD', {
      align: 'center'
    });
    //Fuente y tamaño seccion
    pdfDoc.font('Helvetica').fontSize(9);

    pdfDoc.moveDown(1);
pdfDoc.text('Ciudad/Región: ' + (result["SOLICI_REGIONAL"] + '                                                                       Tipo de solicitud: ' + result["SOLICI_SOLICITUD"]), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });
    /*pdfDoc.moveDown(1);
    pdfDoc.text('Tipo de solicitud: ' + result["SOLICI_SOLICITUD"], {
      align: 'left',
      paragraphGap: -5
    });*/
    pdfDoc.moveDown(1);
    pdfDoc.text('Objetivo del evento: ' + (result["SOLICI_OBJ_EVENTO"] || "-----------------------"), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });

    pdfDoc.moveDown(1);
    pdfDoc.text('Descripción del evento: ' + (result["SOLICI_DESC_EVENTO"] || "-----------------------"), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });
    pdfDoc.moveDown(1);
    pdfDoc.text('Fecha de inicio del evento: ' + (fechaBolv1) + '                                              Fecha de finalización del producto: ' + (fechaBolv2), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });
    /*pdfDoc.moveDown(1);
    pdfDoc.text('Fecha de finalización del producto: ' + (fechaBolv2 || "-----------------------"), {
      align: 'left',
      paragraphGap: -5
    });*/
    pdfDoc.moveDown(1);
    pdfDoc.text('Persona que solicita: ' + (result["SOLICI_PERSO_SOLC"]) + '                                                             Persona responsable:  ' + (result["SOLICI_PERSO_RESP"]), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });
    /*pdfDoc.moveDown(1);
    pdfDoc.text('Persona responsable:  ' + (result["SOLICI_PERSO_RESP"] || "-----------------------"), {
      align: 'left',
      paragraphGap: -5
    });*/
    pdfDoc.moveDown(1);
    pdfDoc.text('Contacto de persona responsable:  ' + (result["SOLICI_NUM_CON_RESP"] + '                                                 Correo:  ' + (result["SOLICI_CORREO"])), {
      align: 'left',
      paragraphGap: -5,
      align: 'justify'
    });
    pdfDoc.moveDown(1);
    pdfDoc.text('Estado de aprobacion:  ' + (result["SOLICI_ESTADO"] || "-----------------------"), {
      align: 'left',
      paragraphGap: -5
    });

  pdfDoc.moveDown(3);

  //pdfDoc.moveDown(2);
    pdfDoc.fontSize(10).text('MATERIALES SOLICITADOS', {
      align: 'center'
    });
  //TABLA firmas y condiciones

  table1
    // add some plugins (here, a 'fit-to-width' for a column)
    .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
      column: 'nombre',
  }))
  // set defaults to your columns
  .setColumnsDefaults({
      headerBorder: 'B',
      align: 'right',
      padding: [3, 5, 5, 5],
      headerPadding: [3, 7, 7, 7]
  })
  // add table columns
  .addColumns([
      {
          id: 'nombre',
          header: 'Nombre',
          align: 'left'
      },
      {
          id: 'cantidad',
          header: 'Cantidad',
          width: 65
      }
  ])
  // add events (here, we draw headers on each new page)
  .onPageAdded(function (tb) {
    tb.addHeader();
});

// draw content, by passing data to the addBody method
var comando1 = "SELECT * FROM dbo.sy_inventario_detalle WHERE DETALLE_SOLICI_CODE = '" + result["SOLICI_CODE"] + "'";
objSql.consulta_sql_reportes(comando1, (result1) => {
  var auxnombre;
  var auxcantidad;
  var listbody=[];
  for(var i=0; i<result1.length;i++){
    auxnombre=result1[i].DETALLE_INVENTARIO;
    auxcantidad=result1[i].DETALLE_CANTIDAD;
    listbody.push({nombre: auxnombre, cantidad: auxcantidad});
  }
  table1.addBody(listbody);
  table3
    // add some plugins (here, a 'fit-to-width' for a column)
    .addPlugin(new (require('voilab-pdf-table/plugins/fitcolumn'))({
      column: 'description',
      x:pdfDoc.page.height,
    }))
    // set defaults to your columns
    .setColumnsDefaults({
      // headerBorder: 'B',
      align: 'center'
    })
    // add table columns
    .addColumns([
      {
        id: 'text1',
        header: '',
        align: 'center',
        width: 240
      },
      {
        id: 'text2',
        header: '',
        align: 'center',
        width: 240
      },
    ]);
    pdfDoc.moveDown(15);
    var textfirmaE='ENTREGA CONFORME';
    var textfirmaR='RECIBE CONFORME';
  table3.addBody([
    { text1: '__________________________________', text2: '__________________________________' },
    { text1: textfirmaE, text2: textfirmaR }
  ]);
  pdfDoc.end();
    pdfDoc.pipe(res)
});
    
  });
}

module.exports = {
  informe_PDF
}