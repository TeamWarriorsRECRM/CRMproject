require("dotenv").config();

const orm = require("./app/models/orm");
const express = require("express");
const apiRouter = require("./app/router/router");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/api/clientdb", async function (req, res) {
  const savedClients = await orm.getClients();
  res.send(savedClients);
});

app.listen(PORT, function () {
  orm.getClients();
  console.log(
    `Database (name=${process.env.DB_NAME}); Serving app on: https://localhost:${PORT}`
  );
});
