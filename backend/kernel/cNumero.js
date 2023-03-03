function formatear_decimales(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

module.exports={
    formatear_decimales
}