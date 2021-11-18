const express = require('express');
const Router = express.Router();
const multer = require('multer');
const path = require('path')

const PizzaController = require('../controllers/PizzaControllers');
const auth = require('../middlewares/auth')


//configurações de armazenamento de img
var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join('public','img','uploads'))
    },
    filename:(req,file, cb) => {
        cb(null, file.originalname)
    }
}); 
const upload = multer({ storage })

// Rotas do Sistema
Router.get('/', PizzaController.index);
Router.get('/pizza/:id', PizzaController.show)
Router.get('/cadastrar',auth, PizzaController.create)
Router.post('/cadastrar',auth, upload.any(), PizzaController.store)
Router.get('/editar/:id',auth, PizzaController.edit);
Router.put('/editar/:id',auth, upload.any(),PizzaController.update);


module.exports = Router;