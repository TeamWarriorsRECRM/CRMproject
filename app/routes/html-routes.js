// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
const isAuth = require("../config/middleware/isAuth");
const express = require("express");
const session = require("express-session");
const app = express();

module.exports = function (app) {
  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/database");
    }
    res.sendFile(path.join(__dirname, "../../public/register.html"));
  });

  app.get("/index", function (req, res) {
    if (req.user) {
      res.redirect("/database.html");
    }
    res.sendFile(path.join(__dirname, "../../public/index.html"));
  });

  app.get("/database", isAuth, function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/database.html"));
  });

  app.get("/logout", function (req, res) {
    req.logout();
    console.log("redirecting server side");
    res.redirect("/");
  });
};
