function Send_MSG_OK_Consulta({mensaje="CONSULTA SQL EXITOSA"}){
    var result={"success": "OK","status_code":"SELECT", "mensaje":mensaje};
    return result;
}
function Send_MSG_OK_Actualizar({mensaje="DATOS ACTUALIZADOS CORRECTAMENTE"}){
    var result={"success": "OK", "status_code":"ACTUALIZADO", "mensaje":mensaje};
    return result;
}

function Send_MSG_OK_Insertar({mensaje="DATOS INSERTADOS CORRECTAMENTE"}){
    var result={"success": "OK", "status_code":"INSERTADO", "mensaje":mensaje};
    return result;
}

function Send_MSG_OK_Eliminar({mensaje="DATOS ELIMINADOS CORRECTAMENTE"}){
    var result={"success": "OK", "status_code":"ELIMINADO", "mensaje":mensaje};
    return result;
}

function Send_MSG_OK_Select({data, mensaje="DATOS ENCONTRADOS"}){
    var result={"success": "OK", "status_code":"SELECT", "mensaje":mensaje, "data":data};
    return result;
}

function Send_MSG_Error_TokenVacio({mensaje="EL TOKEN SE ENCUENTRA VACIO"}){
    var result={"success": "ERROR", "status_code":"TOKEN_VACIO", "mensaje":mensaje};
    return result;
}
function Send_MSG_Error_TokenInvalido({mensaje="EL TOKEN SE ENCUENTRA INVALIDO"}){
    var result={"success": "ERROR", "status_code":"TOKEN_INVALIDO", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Parametro({mensaje="ERROR AL RECIBIR UN PARAMETRO"}){
    var result={"success": "ERROR", "status_code":"ERROR_PARAMETRO", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Dato_Invalido({mensaje = "ERROR DATO INVALIDO"}){
    var result={"success": "ERROR", "status_code":"ERROR_DATO_INVALIDO", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Metodo_POST_GET({mensaje="ERROR DE METODO POST Y GET"}) {
    var result={"success": "ERROR", "status_code":"ERROR_POST_GET", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Metodo_POST({mensaje="ERROR DE METODO POST"}) {
    var result={"success": "ERROR", "status_code":"ERROR_POST", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Metodo_GET({mensaje="ERROR DE METODO GET"}) {
    var result={"success": "ERROR", "status_code":"ERROR_GET", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_RegistroRepetido({mensaje = "EL REGISTRO SE ENCUENTRA REPETIDO"}) {
    var result={"success": "ERROR", "status_code":"REGISTRO_REPETIDO", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Credenciales({mensaje="LAS CREDENCIALES DE ACCESO NO COINCIDEN"}) {
    var result={"success": "ERROR", "status_code":"ERROR_CLAVES", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Insertar({mensaje = "ERROR AL INSERTAR"}) {
    var result={"success": "ERROR", "status_code":"ERROR_INSERTAR", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Actualizar({mensaje = "ERROR AL ACTUALIZAR"}) {
    var result={"success": "ERROR", "status_code":"ERROR_ACTUALIZAR", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Eliminar({mensaje = "ERROR AL ELIMINAR"}) {
    var result={"success": "ERROR", "status_code":"ERROR_ELIMINAR", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Select({mensaje = "ERROR AL REALIZAR UNA CONSULTA SELECT"}) {
    var result={"success": "ERROR", "status_code":"ERROR_SELECT", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_SubirArchivo({mensaje = "ERROR AL SUBIR ARCHIVO"}) {
    var result={"success": "ERROR", "status_code":"ERROR_SUBIR", "mensaje":mensaje};
    return result;
}

function Send_MSG_Error_Session_Activa({mensaje = "ERROR EL USUARIO SE ENCUENTRA INACTIVO"}) {
    var result={"success": "ERROR", "status_code":"ERROR_SELECT", "mensaje":mensaje};
    return result;
}


module.exports={
    Send_MSG_OK_Consulta,
    Send_MSG_OK_Actualizar,
    Send_MSG_OK_Insertar,
    Send_MSG_OK_Eliminar,
    Send_MSG_OK_Select,
    Send_MSG_Error_TokenVacio,
    Send_MSG_Error_TokenInvalido,
    Send_MSG_Error_Parametro,
    Send_MSG_Error_Dato_Invalido,
    Send_MSG_Error_Metodo_POST_GET,
    Send_MSG_Error_Metodo_POST,
    Send_MSG_Error_Metodo_GET,
    Send_MSG_Error_RegistroRepetido,
    Send_MSG_Error_Credenciales,
    Send_MSG_Error_Insertar,
    Send_MSG_Error_Actualizar,
    Send_MSG_Error_Eliminar,
    Send_MSG_Error_Select,
    Send_MSG_Error_SubirArchivo,
    Send_MSG_Error_Session_Activa,
};