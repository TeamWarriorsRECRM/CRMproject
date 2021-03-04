require("dotenv").config();

const orm = require("./app/models/orm");
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
// const routes = require("./app/router/router");
const { get } = require("http");
const passport = require("passport");
const db = require("./app/config/connection");
const { connection } = require("./app/config/connection");
const app = express();
const moment = require('moment')

const PORT = process.env.PORT || 400;

// require("./routes/router.js")(app);
// require("./routes/api-routes.js")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({ secret: "super secret", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// db.sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server is running, http://localhost:${PORT}/"`);
});
