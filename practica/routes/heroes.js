const express = require('express');
var router = express.Router();
const heroeController = require('../controllers/heroeController')


router.get('/', heroeController.listaNombres);//home (mostrar lista)
router.get('/detalle/:id', heroeController.detalle); //detalle con id obligatorio
router.get('/bio/:id/:ok?', heroeController.bio);  // :ok? es un parametro no obligatorio
router.get('/creditos', heroeController.creditos)





module.exports = router;
