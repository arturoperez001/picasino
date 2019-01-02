
//const User = require('./user.model');
const controller = {};


controller.create = function (req, res) {
    return res.status(200).send('OK');
    /*
    return User.find({}, '-salt -password').exec()
      .then(users => {
        res.status(200).send('OK');
      })
      .catch(handleError(res));
      //*/
  }
  
module.exports = controller;