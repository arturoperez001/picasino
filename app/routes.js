/**
 * Main application routes
 

'use strict';

import errors from './components/errors';
import path from 'path';
//*/

const express = require('express');
const app = express.Router();

app.use('/api/users', require(__dirname+'/api/user'));

//app.use('/auth', require('./auth').default);

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

module.exports = app;
