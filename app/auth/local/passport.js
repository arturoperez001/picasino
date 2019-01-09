const passport =  require('passport');
const Strategy =  require('passport-local');

function localAuthenticate(User, email, password, done) {
  User.findOne({
    email: email.toLowerCase()
  }).exec()
    .then(user => {
      if(!user) {
        return done(null, false, {
          message: 'This email is not registered.'
        });
      }
      user.authenticate(password, function(authError, authenticated) {
        if(authError) {
          return done(authError);
        }
        if(!authenticated) {
          return done(null, false, { message: 'This password is not correct.' });
        } else {
          return done(null, user);
        }
      });
    })
    .catch(err => done(err));
}

const setup = function(User/*, config*/) {
  passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password' // this is the virtual field on the model
  }, function(email, password, done) {
    console.log(email);
    return localAuthenticate(User, email, password, done);
  }));
}

module.exports = setup;