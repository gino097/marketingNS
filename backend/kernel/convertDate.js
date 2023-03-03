function convert_date(str_date) {
    var fecha = new Date(str_date);
    var anio=fecha.getFullYear();
    var mes=fecha.getMonth()+1;
    var dia=fecha.getDate();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var fechaF=anio+"-"+mes+"-"+dia+" "+hora+":"+minutos+":"+segundos;
    return fechaF;
}

module.exports={
    convert_date
}