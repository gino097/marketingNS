function fecha_hora_actual() {
    var fecha = new Date();
    var anio=fecha.getFullYear();
    var mes=fecha.getMonth()+1;
    var dia=fecha.getDate();
    var hora = fecha.getHours();
    if(hora>=4)hora=hora-4;
    else{
        if(hora===3)hora=23;
        if(hora===2)hora=22;
        if(hora===1)hora=21;
        if(hora===0)hora=20;
    }
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var fechaF=anio+"-"+mes+"-"+dia+" "+hora+":"+minutos+":"+segundos;
    return fechaF;
    /*var fecha = new Date();
    let usDate = fecha.toLocaleString("en-US", {timeZone: "America/New_York"});
    //console.log(usDate.split(" "));
    usDate=usDate.split(" ");
    var fechaF=usDate[0].replaceAll(",","");
    fechaF=fechaF.replaceAll("/","-")
    var timeF=usDate[1];
    
    
    var anio=fecha.getFullYear();
    var mes=fecha.getMonth()+1;
    var dia=fecha.getDate();
    
    console.log(fechaF+" "+timeF);
    //var fechaF=anio+"-"+mes+"-"+dia+" "+hora+":"+minutos+":"+segundos;
    return (fechaF+" "+timeF); */
}

function fecha_actual() {
    var fecha = new Date();
    var anio=fecha.getFullYear();
    var mes=fecha.getMonth()+1;
    var dia=fecha.getDate();
    var fechaF=anio+"-"+mes+"-"+dia;
    return fechaF;
}

function getYear() {
    var fecha = new Date();
    var anio=fecha.getFullYear();
    return anio;
}

function getDay() {
    var fecha = new Date();
    var dia = fecha.getDate();
    return dia;
}

function getMonth() {
    var fecha = new Date()
    var mes = fecha.getMonth();
    return mes;
}

function obtener_hora(hora) {
    var horaNum = Number(hora);
    return horaNum;
}

function obtener_minuto(min) {
    var minNum = Number(min);
    return minNum;
}

function semana_letras(day) {
    let days = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    date = days[day];
    return date;
}

function mes_letras(month) {
    let months = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    date = months[month];
    return date;
}
module.exports = {
    fecha_actual,
    fecha_hora_actual,
    getYear,
    getDay,
    getMonth,
    semana_letras,
    mes_letras,
    obtener_hora,
    obtener_minuto,
};
