require("dotenv").config();

const createClass = require("./public/assets/script");
const orm = require("./app/models/orm");
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
// const routes = require("./app/router/router");
const { get } = require("http");
const passport = require("passport");
const db = require("./app/config/connection");
const { connection } = require("./app/config/connection");
const { Script } = require("vm");
const { async } = require("rxjs");
const app = express();

const PORT = process.env.PORT || 5000;

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

app.get(`/database.html/:firstName/:lastName/:email`, (req, res) => {
  console.log(req.params);
});

app.listen(PORT, () => {
  console.log(`Server is running, http://localhost:${PORT}/"`);
});
