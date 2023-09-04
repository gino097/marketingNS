const express = require("express");
const fileUpload = require('express-fileupload')
const morgan = require("morgan");
var cors = require('cors');
const path = require("path");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/seguridad/route_autenticacion');
var usuarioRouter = require('./routes/seguridad/route_usuario');
var asignacionesRouter = require('./routes/seguridad/route_asignaciones');
var warehousesRouter = require('./routes/configuracion/route_bodega');
var planesRouter = require('./routes/configuracion/route_planes');
var dispositivosRouter = require('./routes/solicitudes/route_solicitudes');
var emisionesRouter = require('./routes/solicitudes/route_solicitudesemisionmanual');
var reportesRouter = require('./routes/reportes/route_reportes');
var accesosRouter = require('./routes/seguridad/route_accesos');
var dashboardRouter = require('./routes/dashboard/route_dashboard');
var passwordRouter = require('./routes/seguridad/route_password');
var redirectRouter = require('./routes/seguridad/route_redirectError');
var formularioRouter = require('./routes/formulario/route_formulario');
var productoRouter = require('./routes/producto/route_producto');
var productoSolicitudRouter = require('./routes/producto/route_productosolicitud');
var detalleRouter = require('./routes/solicitud_materiales/route_detalle');


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//*Apis
app.use(fileUpload());
console.log(__dirname+"/controllers/producto/imagesItems");
const rutaimagenes= path.join(__dirname,"/controllers/producto/imagesItems/")
app.use(express.static(rutaimagenes));
app.use('/', cors(), indexRouter);
app.use('/users', cors(), usersRouter);
app.use('/usuario', cors(), usuarioRouter);
app.use('/asignacion', cors(), asignacionesRouter);
app.use('/ware', cors(), warehousesRouter);
app.use('/planes', cors(), planesRouter);
app.use('/solicitudes', cors(), dispositivosRouter);
app.use('/solicitudesemision', cors(), emisionesRouter);
app.use('/accesos', cors(), accesosRouter);
app.use('/reportes', cors(), reportesRouter);
app.use('/dashboard', cors(), dashboardRouter);
app.set('trust proxy', true);
app.use('/password', cors(), passwordRouter);
app.use('/redirectError', cors(), redirectRouter);
app.use('/formulario', cors(), formularioRouter);
//---------------------------------------------------------------
app.use('/producto', cors(), productoRouter);
app.use('/solicitudproducto', cors(), productoSolicitudRouter);
app.use('/detalle', cors(), detalleRouter);



const rootPath = path.resolve();
/* File folder */
app.use("/uploads", express.static(path.join(rootPath, "/uploads")));
const entorno="development";
if (entorno === "production") {
    app.use(express.static(path.join(rootPath, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(rootPath, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        res.send("API is running...");
    });
}
//PRUEBAS
let objCorreo = require('./kernel/cCorreo');
const { Console } = require("console");
//objCorreo.enviar_correo_html("ramosmarcelo69@gmail.com","hola");
/* Error Handlers */
app.use(notFound);
app.use(errorHandler);
const PORT =  5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
module.exports = app;
