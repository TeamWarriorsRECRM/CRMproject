require("dotenv").config();

const createClass = require("./public/assets/script");
const orm = require("./app/routes/orm");
const express = require("express");
const session = require("express-session");
// const sequelize = require("sequelize");
const routes = require("./app/routes/api");
const { get } = require("http");
// const passport = require("./app/config/passport");
const db = require("./app/models");
const { connection } = require("./app/config/connection");
const { Script } = require("vm");
const { async } = require("rxjs");
const app = express();
const moment = require('moment')

const PORT = process.env.PORT || 500;

// require("./routes/router.js")(app);
// require("./routes/api-routes.js")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({ secret: "super secret", resave: true, saveUninitialized: true })
);
// app.use(passport.initialize());
// app.use(passport.session());

// app.post("/public/index", passport.authenticate("local"), function (req, res) {
//   res.json(req.user);
// });

app.post("/public/register", function (req, res) {
  db.User.create({
    username: req.body.email,
    password: req.body.password,
  })
    .then(function () {
      res.redirect(307, "/public/index");
    })
    .catch(function (err) {
      res.status(401).json(err);
    });
});

// app.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("/index");
// });

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
// db.sequelize.sync();
// createClass();

app.put("/database.html/:firstname/:lastname/:email", async (req, res) => {
  console.log(req.body, "   REQUEST BODY"); /////////////////////////////////////////////////////////////
  console.log(res.body, "   RESPONSE BODY"); /////////////////////////////////////////////////////////////
  const id = await orm.getSingleClient(
    req.body.firstname,
    req.body.lastname,
    req.body.area
  );
  console.log(id, "   ID");
}); ////////////////////////////////////////////////

app.put("/database.html", (req, res) => {});

app.delete("/database.html/:firstName/:lastName", (req, res) => {
  // console.log(req.params);
  orm.deleteClient(req.params.firstName, req.params.lastName);
  res.send();
});

app.post("/database.html", (req, res) => {
  // console.log(req.body);
  let body = req.body;
  orm.insertClient(body);
  res.send();
});

app.get(`/database.html/:firstName/:lastName/:email`, async (req, res) => {
  console.log(req.params);
  const id = await orm
    .getSingleClient(
      req.params.firstName,
      req.params.lastName,
      req.params.email
    )
    .then((res) => console.log(res, "  SERVER SCRIPT"));
  console.log(id, " FROM SERVER ID");
});

app.get("/database.html", (req, res) => {
  orm.getClients();
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server is running, http://localhost:${PORT}/"`);
  });
});
