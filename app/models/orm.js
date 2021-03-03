const { async } = require("rxjs");
const db = require("../config/connection.js");

async function getClients() {
  return await db
    .query(`SELECT firstname, lastname, area FROM clients`)
    .then((res) => console.log(res));
}

async function insertClient(obj) {
  ////////decontruct obj/////////

  return await db
    .query(
      `INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area, email, _status,note) VALUES ("${obj.firstNme}","${obj.lastName}",${obj.budget},${obj.downPay},"${obj.interest}","${obj.email}", "${obj.status}", "${obj.notes}");`
    )
    .then((res) => console.log("new client inserted"));
}

async function updateInfo(field, newValue, id) {
  return db.query(`UPDATE clients SET ${field}="${newValue} WHERE id=${id}"`);
}

async function deleteClient(id) {
  return await db
    .query(`DELETE FROM clients WHERE id=${id}`)
    .then((res) => console.log(`Deleted!`));
}

module.exports = {
  getClients,
  updateInfo,
  insertClient,
  deleteClient,
};
