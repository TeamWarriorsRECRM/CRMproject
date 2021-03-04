require("dotenv").config();

// const orm = require("./app/models/orm");
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
const routes = require("./app/routes/api");
const { get } = require("http");
const passport = require("./app/config/passport");
const db = require("./app/models");
const { connection } = require("./app/config/connection");
const app = express();

const PORT = process.env.PORT || 8080;

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

app.post("/api/index", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

app.post("/public/register", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(function () {
      res.redirect(307, "/api/index");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/index");
});

// app.get("/api/user_data", function (req, res) {
//   if (!req.user) {
//     res.json({});
//   } else {
//     res.json({
//       email: req.user.email,
//       id: req.user.id,
//     });
//   }
// });

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server is running, http://localhost:${PORT}/"`);
  });
});
