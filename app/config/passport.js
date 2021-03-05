const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },

    function (email, password, done) {
      db.User.findOne({
        where: { email: email },
      }).then(function (dbUser) {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect Email",
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password please try again",
          });
        }
        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((id, cb) => {
  cb(null, id);
});

module.exports = passport;
