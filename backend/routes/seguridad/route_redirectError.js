var express = require('express');
var router = express.Router();
const {redirectError} = require('../../controllers/seguridad/ctrl_redirectError')

//*Login
router.get('/', redirectError);
module.exports = router;