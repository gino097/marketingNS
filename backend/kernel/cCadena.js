function convertir_Mayusculas_InicialMayuscula(cadena){
    let splitCadena = cadena.split(" ");
    let mayusSplitCadena = splitCadena.map(palabra => {
        return palabra[0].toUpperCase() + palabra.slice(1);
    })
    let cadenaFinal = mayusSplitCadena.join(" ");
    return cadenaFinal;
}
function convertir_Mayusculas(cadena){
    return cadena.toUpperCase();
}
function convertir_minuscula(cadena){
    return cadena.toLowerCase();
}
module.exports={
    convertir_Mayusculas_InicialMayuscula,
    convertir_Mayusculas,
    convertir_minuscula
}