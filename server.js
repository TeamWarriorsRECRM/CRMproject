require("dotenv").config();

const createClass = require("./public/assets/script");
const orm = require("./public/assets/orm");
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
const { get } = require("http");
const passport = require("./app/config/passport");
const db = require("./app/models");
const { connection } = require("./app/config/connection");
const { Script } = require("vm");
const { async } = require("rxjs");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({ secret: "super secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/html-routes.js")(app);
require("./app/routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server is running, http://localhost:${PORT}/"`);
  });
});
