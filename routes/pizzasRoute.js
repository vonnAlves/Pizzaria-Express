const express = require('express');
const router = express.Router()
const pizzasController = require('../controllers/pizzasController');


router.get('/:nome', pizzasController.listarPizzas);

router.get('/', pizzasController.mostrarPizza);

module.exports = router;