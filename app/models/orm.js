const { async } = require("rxjs");
const db = require("../config/connection.js");

async function getClients() {
  return await db
    .query(`SELECT firstname, lastname, area FROM clients`)
    .then((res) => console.log(res));
}

async function getSingleClient(firstName, lastName, email) {
  return await db
    .query(
      `SELECT id FROM clients WHERE firstname="${firstName}" AND lastname="${lastName}" AND area="${email}";`
    )
    .then((res) => console.log(res, "  ORM SCRIPT"));
}

async function insertClient(obj) {
  return await db
    .query(
      `INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area, email, _status,note) VALUES ("${obj.firstName}","${obj.lastName}",${obj.budget},${obj.downPay},"${obj.interest}","${obj.email}", "${obj.status}", "${obj.notes}");`
    )
    .then((res) => console.log("new client inserted"));
}

async function updateInfo(field, newValue, id) {
  return db.query(`UPDATE clients SET ${field}="${newValue} WHERE id=${id}"`);
}

async function deleteClient(name, lastName) {
  return await db
    .query(
      `DELETE FROM clients WHERE firstname="${name}" AND lastname="${lastName}"`
    )
    .then((res) => console.log(`Deleted!`));
}

module.exports = {
  getClients,
  updateInfo,
  insertClient,
  deleteClient,
  getSingleClient,
};
