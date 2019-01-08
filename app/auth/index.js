//'use strict';
const express = require('express');
const config = require('../config');
const User = require('../api/user/user.model');

// Passport Configuration
require('./local/passport')(User, config);

var router = express.Router();

router.use('/local', require('./local'));

module.exports = router;
