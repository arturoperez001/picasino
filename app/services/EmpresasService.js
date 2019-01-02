const Models = require('../models');

let client = null;
let models = null;


    models = Models(_client);
    client = _client;

    
    module.exports(Models);