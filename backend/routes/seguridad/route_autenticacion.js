var express = require('express');
var router = express.Router();
const {login, createUser} = require('../../controllers/seguridad/ctrl_autenticacion')

//*Login
router.post('/login', login);
module.exports = router;