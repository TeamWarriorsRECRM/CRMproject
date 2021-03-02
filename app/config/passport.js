const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const connection = require("./connection");
// const User = connection.models.User;
const db = require("./connection");
const orm = require("../models/orm");

const customField = {
  usernameField: "user",
  password: "pw",
};

const verifyCallback = (username, password, done) => {
  let userLookUp = orm
    .userRetrieve({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((e) => {
      done(e);
    });
};

const strategy = new localStrategy();

passport.use(new localStrategy(function (username, password, callback) {}));
