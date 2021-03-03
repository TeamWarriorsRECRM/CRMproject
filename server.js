require("dotenv").config();

const mysql = require("mysql");
const orm = require("./app/models/orm");
const express = require("express");
// const session = require("epxress-session");
const routes = require("./app/router/router");
const { get } = require("http");
const passport = require("passport");
const db = require("./app/config/connection");
const app = express();

const PORT = process.env.PORT || 6000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get('/api/database', (req, res)=>{
//    const clientList =  await orm.getClients();
//    res.send(clientList);
// });

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});

orm.pull();
