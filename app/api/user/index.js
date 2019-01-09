const express = require('express');
const router  = express.Router();
const controller = require('./user.controller');
const auth = require('../../auth/auth.service');

//var router = new Router();
// Ver todos los usuarios en la base de datos 
// requiere: token

router.get('/', auth.hasRole('admin'), controller.index);

// Ver propiedades del cliente 
// require: token
// optional : none

router.get('/me', auth.isAuthenticated(), controller.me);

// Crear un nuevo usuario 
// require: email, nombre, last, password
// optional: none

router.post('/', controller.create);

// 
// require: email, nombre, last, password
// optional: none

router.get('/:id', auth.isAuthenticated(), controller.show);

// Elimina un usuario en la base de datos
// requiere: token

router.delete('/:id', auth.hasRole('admin'), controller.destroy);

// Cambia la contraseña del usuario
// requiere: token
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);

module.exports = router;