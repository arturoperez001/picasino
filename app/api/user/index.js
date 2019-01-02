const express = require('express');
const router  = express.Router();
const controller = require('./user.controller');
//import * as auth from '../../auth/auth.service';

//var router = new Router();

// @Todo : crear el dashboard del usuario o cliente 
// require: token
// optional : none
// router.get('/', auth.isAuthenticated(), controller.index);


// @TODO: eliminar este el metodo de acceso de testing
router.get('/', controller.create);

// @TODO: crear usuarios por medio de post
// require: email, nombre, last, password
// optional: none

router.post('/', controller.create);

// router.get('/', auth.hasRole('admin'), controller.index);
/*
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
/*/
module.exports = router;