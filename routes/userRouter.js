const express = require('express');
const Router = express.Router();
const multer = require('multer');
const path = require('path')

const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth')



Router.get('/', auth, UserController.index)
Router.get('/cadastrar', UserController.create);
Router.post('/cadastrar',UserController.store);
Router.get('/login', UserController.show);
Router.post('/login', UserController.login);

module.exports = Router;