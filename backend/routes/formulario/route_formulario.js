var express = require('express');
var router = express.Router();
const { crear}= require("../../controllers/formulario/ctrl_formulario")

router
    .route("/")
    .post(crear)

module.exports = router;