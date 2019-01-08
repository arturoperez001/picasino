"use strict";

const port = process.env.PORT || 8000;
//const http = require('http');
const express = require('express');
const config = require('./config');
const app = express();
const bodyParser = require('body-parser');
const seedDatabaseIfNeeded = require('./config/seed')
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(require('./routes/index'));
app.use(require('./routes'));
app.set('view engine', 'ejs');
app.set('views', 'app/views');

//const log = config.logger;


mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1); // eslint-disable-line no-process-exit
});

seedDatabaseIfNeeded();

app.listen(port,function(){
    console.log('running on port: ' + port);
});

module.exports = app;

