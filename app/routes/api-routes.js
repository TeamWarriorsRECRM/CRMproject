const express = require("express");
const session = require("express-session");
const passport = require("../config/passport");
const db = require("../models");
const orm = require("../../public/assets/orm");

module.exports = function (app) {
  // LOG IN AUTH CHECKS DATABASE TO SEE IF USER EXISTS AND IF PASSWORD MATCHES
  app.post("/api/index", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // SENDS NEW USER ACCOUNT INFORMATION TO BE STORED IN DATABASE
  app.post("/api/register", async function (req, res) {
    let result = await db.User.create({
      email: req.body.email,
      password: req.body.password,
    });
    res.send(result);
  });

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

  // GETS FULL DETAILS OF CLIENTS FROM DATABASE
  app.get("/api/database", async (req, res) => {
    const list = await orm.getClients();
    console.log(list);
    res.send(list);
  });

  // EDIT ENTRIES IN DATABASE
  app.put("/api/database/:firstname/:lastname/:email", async (req, res) => {
    const body = req.body;
    const entry = await orm.updateInfo(body, body.id);
    res.send(entry);
  });

  /////DELETES ENTRY FROM DATABASE
  app.delete("/api/database/:firstName/:lastName", (req, res) => {
    orm.deleteClient(req.params.firstName, req.params.lastName);
    res.send();
  });
  // INSERTS NEW ENTRY INTON DATABASE
  app.post("/database", (req, res) => {
    let body = req.body;
    orm.insertClient(body);
    res.send();
  });

  //////ONLY GETTING THE ID FOR THE SELECTED ENTRY
  app.get(`/api/database/:firstName/:lastName/:email`, async (req, res) => {
    const [id] = await orm.getSingleClient(
      req.params.firstName,
      req.params.lastName,
      req.params.email
    );
    const result = JSON.stringify(id.id);
    res.send(result);
  });

  // SHOWS 'QUICK LIST'
  app.get("/api/clients", async (req, res) => {
    const quickList = await orm.quickList();
    res.send(quickList);
  });
};
