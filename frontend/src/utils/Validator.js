import validator from 'validator';
function validarCampos(list) {
  for (let i = 0; i < list.lenght; i++) {
    if (!validator.isEmpty(list[i])) {
      return false;
    }
  }
  return true;
}

export function validarSoloLetras(entrada, list) {
  var result = { msg: "Campo invalido/vacio", color: "red", data: "", validacion: false };
  entrada=entrada.toUpperCase();
  if (validator.isEmpty(entrada) || validator.isNumeric(entrada)) {
    return result
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  let patronNombreMa = /^([A-ZÑÁÉÍÓÚ]+[\s]*)+$/;
  let patronNombreMi = /^([a-zñáéíóú]+[\s]*)+$/;
  var comprobacionMa;
  var comprobacionMi;
  for (let x = 0; x < entrada.length; x++)
  {
    comprobacionMa=patronNombreMa.test(entrada[x]);
    comprobacionMi=patronNombreMi.test(entrada[x]);
    if (comprobacionMa || comprobacionMi || entrada[x]===" ")
      cant++;
  }
  if (cant === entrada.length) {
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}
export function validarSoloLetrasMinMax(entrada, min, max, list) {
  var result = { msg: "Campo invalido/vacio", color: "red", data: "", validacion: false };
  entrada=entrada.toUpperCase();
  if (validator.isEmpty(entrada) || entrada.length < min) {
    result.msg = "Campo debe tener entre " + min + " y " + max + " digitos";
    result.color = "red";
    result.validacion = false;
  } else if (validator.isEmpty(entrada)) {
    result.msg = "Campo debe tener entre " + min + " y " + max + " digitos";
    result.color = "red";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (validator.isAlpha(entrada[x]) || entrada[x] === " ")
      cant++;
  if (cant === entrada.length) {
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; return result; }
}

export function validarVacio(entrada, list) {
  var result = { msg: "Campo inválido/vacío", color: "red", data: "", validacion: false };
  if (validator.isEmpty(entrada)) {
    return result
  }
  else {
    result.msg = ""; result.color = "indigo"; result.data = entrada;
    if (validarCampos(list)) { result.validacion = true } return result;
  }
}

export function validarVacioMayus(entrada, list) {
  entrada=entrada.toUpperCase();
  var result = { msg: "Campo inválido/vacío", color: "red", data: "", validacion: false };
  if (validator.isEmpty(entrada)) {
    return result
  }
  else {
    result.msg = ""; result.color = "indigo"; result.data = entrada;
    if (validarCampos(list)) { result.validacion = true } return result;
  }
}

export function validarNumerosMax(entrada, max, list) {
  const regExp = /[\d,]+/;
  var result = { msg: "", color: "", data: "", validacion: false };
  if (validator.isEmpty(entrada) || entrada.length < max) {
    result.msg = "Campo invalido/vacio";
    result.color = "red";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (regExp.test(entrada[x]))
      cant++;
  if (cant === entrada.length) {
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}
export function validarNumerosMaxPunto(entrada, max, list) {
  const regExp = /[\d.]+/;
  var result = { msg: "", color: "", data: "", validacion: false };
  if (validator.isEmpty(entrada) || entrada.length < max) {
    result.msg = "Campo invalido/vacio";
    result.color = "red";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (regExp.test(entrada[x]))
      cant++;
  if (cant === entrada.length) {
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}
export function validarNumerosEnteros(entrada, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (validator.isEmpty(entrada) || !validator.isNumeric(entrada)) {
    result.msg = "Campo invalido/vacio";
    result.color = "red";
    result.data = "";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (validator.isNumeric(entrada[x]))
      cant++;
  if (cant === entrada.length || validator.isNumeric(entrada)) {
    
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}
export function validarNumerosDec(entrada, list) {
  const regexp=/[\d.]+/;
  var result = { msg: "", color: "", data: "", validacion: false };
  //console.log("Palabra",entrada[entrada.length-1])
  if (!regexp.test(entrada.substr(-1)) || validator.isEmpty(entrada)) {
    result.msg = "Campo invalido/vacio";
    result.color = "red";
    result.data = "";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo"; result.data=entrada
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (regexp.test(entrada[x]))
      cant++;
  if (cant === entrada.length) {
    
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else if(validator.isEmpty(entrada)){ result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}
export function validarNumerosMinMax(entrada, min, max, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (validator.isEmpty(entrada) || entrada.length < min) {
    result.msg = "Campo debe tener entre " + min + " y " + max + " digitos";
    result.color = "red";
    result.validacion = false;
  } else if (validator.isEmpty(entrada)) {
    result.msg = "Campo debe tener entre " + min + " y " + max + " digitos";
    result.color = "red";
    result.validacion = false;
  } else {
    result.msg = ""; result.color = "indigo";
    if (validarCampos(list)) { result.validacion = true; }
  }
  let cant = 0;
  for (let x = 0; x < entrada.length; x++)
    if (validator.isNumeric(entrada))
      cant++;
  if (cant === entrada.length) {
    result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  }
  else { result.msg = 'Campo invalido/vacio'; result.color = "red"; result.validacion = false; }
}

export function validarEmail(entrada, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (validator.isEmpty(entrada) || entrada.length === 1) {
    result.msg = "Email invalido/vacio";
    result.color = "red";
    result.validacion = false;
  }
  if (validator.isEmail(entrada)) {
    result.msg = "";
    result.color = "indigo";
    //result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  } else {
    result.color = "red";
    result.msg = "Email invalido/vacio";
    result.validacion = false;
  }
  return result;
}

export function validarCombo(entrada, valorDefecto, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (entrada !== valorDefecto) {
    result.msg = ""; result.data = entrada; result.color="indigo";
    if (validarCampos(list)) { result.validacion = true; }
    return result;
  } else {
    result.msg = "Elija opción válida";
    result.color="red";
    result.validacion = false;
    return result;
  }
}

export function validarClave(entrada, min, max, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (entrada.length < min) {
    result.msg = "Clave debe tener entre " + min + " y " + max + " caracteres";
    result.color = "red";
    result.validacion = false;
    result.data = entrada;
    if (entrada.length > min && entrada.length < max) {
      result.msg = "Clave debe tener entre " + min + " y " + max + " caracteres";
      result.color = "red";
      result.validacion = false;
      result.data = entrada;
    }
  } else {
    result.msg = ""; result.color = "indigo"; result.data = entrada;
    if (validarCampos(list)) { result.validacion = true; } return result;
  }
  return result;
}

export function validarIguales(entrada1, entrada2, nombreCampo) {
  var result = { msg: "", color: "", data: "", validacion: false };
  if (entrada1 === entrada2) {
    result.color = "indigo";
    result.validacion = true;
    result.data = entrada1;
    return result
  }
  else {
    result.msg = nombreCampo + " no coinciden";
    result.color = "red";
    result.validacion = false;
    result.data = entrada1;
    return result
  }
}
export function validarArchivo(e, list) {
  var result = { msg: "Archivo vacio", color: "red", filename: "", file: null, validacion: false };
  if (validator.isEmpty(e.target.files[0].name)) {
    return result;
  }
  else {
    result.msg = ""; result.color = "indigo"; result.filename = e.target.files[0].name;
    result.file = e.target.files[0]; if (validarCampos(list)) { result.validacion = true; } return result;
  }
}
export function validarFechaInicio(entrada,fechaA, list){
  var result={msg:"", color:"", data:"", validacion: false, diferencia:0};
  var fechaE=new Date(entrada);
  var fechaAN=new Date(fechaA);
  var diferenciaDias=parseInt(entrada.split("-")[2])-parseInt(fechaA.split("-")[2])
  if(fechaE>=fechaAN)
  {
    result.msg=""; result.color="indigo"; result.data=entrada; result.validacion=true; result.diferencia=diferenciaDias;
    if (validarCampos(list)) { result.validacion = true; }
  }
  else{
    result.msg="Fecha invalida"; result.color="red"; result.data=entrada; result.validacion=false; result.diferencia=diferenciaDias;
  } 
  return result;
}
export function desactivarFechasAnteriores(){
  const today = new Date();
  const dd = String(today.getDate() + 1).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}
export function validarFechaFin(entrada,fechaA, list){
  var result={msg:"", color:"", data:"", validacion: false};
  var fechaE=new Date(entrada);
  var fechaAN=new Date(fechaA);
  if(fechaE>=fechaAN)
  {
    result.msg=""; result.color="indigo"; result.data=entrada; result.validacion=true;
    if (validarCampos(list)) { result.validacion = true; }
  }
  else{
    result.msg="Fecha invalida"; result.color="red"; result.data=entrada; result.validacion=false;
  } 
  return result;
}
export function validarMultiSelect(entrada, list){
  var result={msg:"", color:"", data:"", validez:false, validacion:false};
  if(entrada.length===0){
    result.validez=false;
    result.msg="Seleccione al menenos una opción";
    result.color="red";
    result.validacion=false;
    result.data="";
  }
  else{result.data=entrada; result.validacion=true; result.validez=true; result.color="indigo"; result.msg=""; if (validarCampos(list)) { result.validacion = true; }}
  return result;
}
//ALKM-SC2-000028-00-2022
export function validarPoliza(entrada, list) {
  var result = { msg: "", color: "", data: "", validacion: false };
  let cant = 0;
  for (let i = 0; i < 25; i++) {
    if (i >= 0 && i <= 4) {
      if (validator.isAlpha(entrada[i])) {
        cant++;
      }
    }
    else if (i === 5) {
      if (entrada[i] === "-") {
        cant++;
      }
    }
  }
  if (cant === entrada.lenght) {
    result.data = entrada;
    return result;
  }
}