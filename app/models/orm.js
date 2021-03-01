const mysql = require("mysql");
const db = require("../config/connection.js");

async function getClients() {
  return await db
    .query(`SELECT * FROM clientsCRM_db`)
    .then((res) => console.log(res));
}

module.exports = {
  getClients,
};
