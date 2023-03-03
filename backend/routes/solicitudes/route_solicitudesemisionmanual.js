var express = require('express');
var router = express.Router();
const { protect } = require("../../middleware/authMiddleware");
const { actualizaremision} = require("../../controllers/solicitudes/ctrl_solicitudes")

router
    .route("/:id")
    .put(actualizaremision)

module.exports = router;