
const User = require('./user.model');
const controller = {};
const jwt = require('jsonwebtoken');


function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
    return res.status(statusCode).json(err);
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}


/**
 * Get list of users
 * restriction: 'admin'
 */
controller.index = function (req, res) {
  return User.find({}, '-salt -password').exec()
    .then(users => {
      res.status(200).send('OK');
    })
    .catch(handleError(res));
}

/**
 * Get a single user
 */
controller.show = function (req, res, next) {
  var userId = req.params.id;

  return User.findById(userId).exec()
    .then(user => {
      if(!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
controller.destroy =  function (req, res) {
  return User.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
controller.changePassword = function (req, res) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  return User.findById(userId).exec()
    .then(user => {
      if(user.authenticate(oldPass)) {
        user.password = newPass;
        return user.save()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Get my info
 */
controller.me = function (req, res, next) {
  var userId = req.user._id;

  return User.findOne({_id: userId}, '-salt -password').exec()
    .then(user => { // don't ever give out the password or salt
      if(!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Creates a new user
 */
controller.create = function (req, res) {
  //var newUser = new User(req.body);
  let newUser = new User({name: 'Some',email:'som@lia.com',password:'secret',salt:'salt'});

  newUser.provider = 'local';
  newUser.role = 'user';
  
  newUser.save()
    .then( user => {
      let token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      console.log('inside save');
      console.log(token);

      res.json({ token });
    })
    .catch(validationError(res));

}

/**
 * Authentication callback
 */
controller.authCallback = function (req, res) {
  res.redirect('/');
}

module.exports = controller;