/**
 * Main application routes
 

'use strict';

import errors from './components/errors';
import path from 'path';
//*/

const express = require('express');
const app = express.Router();

//Rutas para las API 
app.use('/api/users', require(__dirname+'/api/user'));
app.use('/auth', require(__dirname+'/auth'));


// All undefined asset or api routes should return a 404

app.route('/:url(api|auth|components|app|bower_components|assets)/*')
 .get(function(req, res){
    var viewFilePath = '404';
    var statusCode = 404;
    var result = {
      status: statusCode
    };
  
    res.status(result.status);
    res.render(viewFilePath, {}, function(err, html) {
      if(err) {
        return res.status(result.status).json(result);
      }
  
      res.send(html);
    });
});
app.use(require(__dirname+'/routes/index'));
//Rutas para las vistas
/*
app.route('/panel').get(function(req, res){
  var pageInfo = {
      pageName: 'Colacionator',
      pageTitle: 'Panel de control'
  };
  var userInfo = {
      userName : 'Asdrubal'
  };
  res.render('panel',{
      pageInfo : pageInfo,
      userInfo: userInfo
  });
});

app.route('/login').get(function(req, res){
  var pageInfo = {
      pageName: 'Colacionator',
      pageTitle: 'Login'
  };
  var userInfo = {
      userName : 'Asdrubal'
  };
  res.render('login',{
      pageInfo : pageInfo,
      userInfo: userInfo
  });
});

app.route('/signup').get(function(req, res){
  var pageInfo = {
      pageName: 'Colacionator',
      pageTitle: 'Registrar usuario'
  };
  var userInfo = {
      userName : 'Asdrubal'
  };
  res.render('signup',{
      pageInfo : pageInfo,
      userInfo: userInfo
  });
});

app.route('/usuarios').get(function(req, res){
  var pageInfo = {
      pageName: 'Colacionator',
      pageTitle: 'Registrar usuario'
  };
  var userInfo = {
      userName : 'Asdrubal'
  };
  
  res.render('signup',{
      pageInfo : pageInfo,
      userInfo: userInfo,
      users: userList
  });
});

//*/
module.exports = app;
