require("dotenv").config();

const createClass = require("./public/assets/script");
const orm = require("./public/assets/orm");
const express = require("express");
const session = require("express-session");
const sequelize = require("sequelize");
const routes = require("./app/routes/api");
const { get } = require("http");
const passport = require("./app/config/passport");
const db = require("./app/models");
const { connection } = require("./app/config/connection");
const { Script } = require("vm");
const { async } = require("rxjs");
const app = express();

const PORT = process.env.PORT || 8080;

require("./app/routes/html-route.js")(app);
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

app.post("/api/register", async function (req, res) {
  let result = await db.User.create({
    email: req.body.email,
    password: req.body.password,
  });
  res.send(result);
});

app.get("/logout", function (req, res) {
  req.logout();
  console.log("redirecting server side");
  res.redirect("/");
});

app.get("/api/database", function (req, res){
  res.redirect('/database')
  console.log("redirect to database")
})

app.get("/api/user_data", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

app.get("/api/database", async (req, res) => {
  const list = await orm.getClients();
  res.send(list);
});

app.post("/api/addClient", async (req, res) => {
  let body = req.body;
  orm.insertClient(body);
  res.send();
});

app.put("/database.html/:firstname/:lastname/:email", async (req, res) => {
  ////////////////////////////////////////////////////////////////////
  const body = req.body;
  const entry = await orm.updateInfo(body, body.id);
  res.send(entry);
});

/////DELETES ENTRY
app.delete("/database.html/:firstName/:lastName", (req, res) => {
  orm.deleteClient(req.params.firstName, req.params.lastName);
  res.send();
});

app.post("/database.html", (req, res) => {
  let body = req.body;
  orm.insertClient(body);
  res.send();
});

app.post("/addClient.html", (req, res) => {
  let body = req.body;
  orm.insertClient(body);
  res.send();
});

//////ONLY GETTING THE ID FOR THE SELECTED ENTRY
app.get(`/database.html/:firstName/:lastName/:email`, async (req, res) => {
  const [id] = await orm.getSingleClient(
    req.params.firstName,
    req.params.lastName,
    req.params.email
  );

  const result = JSON.stringify(id.id);
  res.send(result);
});

app.get("/api/clients", async (req, res) => {
  const quickList = await orm.quickList();
  res.send(quickList);
});

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Server is running, http://localhost:${PORT}/"`);
  });
});
