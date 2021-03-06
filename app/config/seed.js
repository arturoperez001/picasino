/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

const User = require('../api/user/user.model');
const config = require('./');

module.exports = function seedDatabaseIfNeeded() {
    if(config.seedDB) {
      User.find({}).remove()
        .then(() => {
          User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@example.com',
            password: 'test'
          }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@example.com',
            password: 'admin'
          })
          .then(() => console.log('finished populating users'))
          .catch(err => console.log('error populating users', err));
        });
    }
  }
  
