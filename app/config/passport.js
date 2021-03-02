const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;
const db = require("./connection");

passport.use(
  new LocalStrategy(
    { usernameField: "username" },

    function (username, password, done) {
      db.Registered.findOne({
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

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((remove, done) => {
  done(null, remove);
});

module.exports = passport;
