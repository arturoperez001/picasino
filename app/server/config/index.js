const bunyan = require('bunyan');
const appname = 'colacionator';


module.exports = {
    applicationName : appname,
    logger: bunyan.createLogger({name:appname}),
    mysql:{
        options:{
            host: 'localhost',
            port: 3306,
            database: 'casino2',
            dialect: 'mysql',
            username: 'root',
            password: ''
        }
    },
};