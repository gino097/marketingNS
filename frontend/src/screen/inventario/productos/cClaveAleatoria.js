function generarHash(base, length){
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
}

function randomico(length, level){
    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if (level==1) base=base;
    if (level==2) base=base+numbers;
    if (level==3) base=base+numbers+symbols;
    var password=generarHash(base,length);
    return password;
}

module.exports={
    randomico
}