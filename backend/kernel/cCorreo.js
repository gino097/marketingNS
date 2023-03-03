"use strict";
const nodemailer = require("nodemailer");
  
//para produccion

const v_host = "mail.nacionalvida.com.bo";
const v_port = 25;
const v_correo = "formulariosalud@nacionalvida.com.bo";
const correo_from="formulariosalud@nacionalseguros.com.bo"
const from='"Nacional Seguros"<'+correo_from+'>'; // sender address
const v_clave = "fmrs7654321.";
const secure= false;

// para test
/*
const v_host = "smtp.gmail.com";
const v_correo = "serviciosnacionalseguros@gmail.com";
const from='"Nacional Seguros"<'+v_correo+'>'; // sender address
const v_clave = "liidkluwuovpqdyj";
const v_port = 465;
const secure= true;
*/

/*
const v_host = "mail.nacionalvida.com.bo";
const v_port = 587;
const v_correo = "formulariosalud@nacionalseguros.com.bo";
const v_clave = "fmrs7654321.";
*/
function enviar_correo_mensaje(destinatario, asunto, mensaje) {
  var transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    host: v_host,
    port: v_port,
    secure:secure,
    auth: {
      user: v_correo,
      pass: v_clave,
    },
  });

  const message = {
    from: from, // sender address,
    to: destinatario,
    subject: asunto,
    text: mensaje,
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

function enviar_correo_mensaje_archivo(destinatario, asunto, mensaje, archivo) {
  var transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    host: v_host,
    port: v_port,
    secure:secure,
    auth: {
      user: v_correo,
      pass: v_clave,
    },
  });
  const message = {
    from: from,
    to: destinatario,
    subject: asunto,
    text: mensaje,
    attachments: [
      {
        filename: "michi-img.jpg", //nombre del archivo que se mostrara en el correo (puede ser cualquier nombre)
        path: archivo, //ruta de archivo o URL
      },
    ],
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

function enviar_correo_html(destinatario, asunto, html) {
  var transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    host: v_host,
    port: v_port,
    secure:secure,
    auth: {
      user: v_correo,
      pass: v_clave,
    },
  });

  const message = {
    from: from,
    to: destinatario,
    subject: asunto,
    html: html, //'<h1>Probando si se puede enviar boton</h1><p>clickeame<b> AHORA </b> no soy un virus creeme we :v (Si envia html no se envia lo que este en mensaje)!</p> <button type="button">iPhone Gratiche</button>',
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}
function enviar_correo_html_archivo(destinatario, asunto, html, archivo) {
  var transporter = nodemailer.createTransport({
    tls: { rejectUnauthorized: false },
    host: v_host,
    port: v_port,
    secure:secure,
    auth: {
      user: v_correo,
      pass: v_clave,
    },
  });

  const message = {
    from: from,
    to: destinatario,
    subject: asunto,
    html: html, //'<h1>Probando si se puede enviar boton</h1><p>clickeame<b> AHORA </b> no soy un virus creeme we :v (Si envia html no se envia lo que este en mensaje)!</p> <button type="button">iPhone Gratiche</button>',
    attachments: [
      {
        filename: "michi-img.jpg", //nombre del archivo que se mostrara en el correo (puede ser cualquier nombre)
        path: archivo, //ruta de imagen o URL
      },
    ],
  };
  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = {
  enviar_correo_mensaje,
  enviar_correo_mensaje_archivo,
  enviar_correo_html,
  enviar_correo_html_archivo,
};
