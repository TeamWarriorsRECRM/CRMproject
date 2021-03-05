const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },

    function (username, password, done) {
      db.User.findOne({
        where: { username: username },
      }).then(function (dbUser) {
        if (dbUser) {
          return done(null, dbUser, {
            message: "Successful login",
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password please try again",
          });
        } else {
          return done(null, false, {
            message: "Incorrect username please try again",
          });
        }
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
