"use strict";

const port = process.env.PORT || 8000;
const http = require('http');
const express = require('express');
const config = require('./server/config');
const app = express();
//const mongoose = require('mongoose');
//mongoose.Promise = require('bluebird');

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');

const log = config.logger;

/*
const sequelize = new Sequelize('casino2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
});



/*
Usuarios.findOne().then(Usuarios => {
  console.log(Usuarios.get('nombre'));
});
/*
  sequelize
  .authenticate()
  .then(() => {
    
    console.log('Connection has been established successfully.');
    
    
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err); 
  });
// */
    
//const Models = require('./models');



app.listen(port,function(){
    console.log('running on port: ' + port);
});


