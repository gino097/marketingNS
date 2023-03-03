var parser = require('ua-parser-js');

function getIP(req){
    var ip=req.ip;
    return ip;
}

function getUserAgent(req){
    var ua = parser(req.headers['user-agent']);
    return ua;
}

function getNavegador(req){
    var ua=parser(req.headers['user-agent']);
    return ua.browser;
}

function getSistemaOperativo(req){
    var ua=parser(req.headers['user-agent']);
    return ua.os;
}

function getDispositivo(req){
    var ua=parser(req.headers['user-agent']);
    return ua.device;
}

module.exports={
    getIP,
    getUserAgent,
    getNavegador,
    getSistemaOperativo,
    getDispositivo,
}