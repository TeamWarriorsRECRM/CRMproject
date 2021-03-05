const { async } = require("rxjs");
const db = require("../../app/config/connection");

async function getClients() {
  return await db.query(`SELECT * FROM clients`);
  // .then((res) => res.json());
}

// getClients();

async function getSingleClient(firstName, lastName, email) {
  return await db.query(
    `SELECT id FROM clients WHERE firstname="${firstName}" AND lastname="${lastName}" AND email="${email}";`
  );

  // console.log(res, "  ORM SCRIPT");
}

async function insertClient(obj) {
  return await db
    .query(
      `INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area, email, _status,note) VALUES ("${obj.firstName}","${obj.lastName}",${obj.budget},${obj.downPay},"${obj.interest}","${obj.email}", "${obj.status}", "${obj.notes}");`
    )
    .then((res) => console.log("new client inserted"));
}

async function updateInfo(obj, id) {
  return db.query(
    `UPDATE clients SET firstname="${obj.firstName}", lastname="${obj.lastName}", totalbudget=${obj.budget}, downpayment=${obj.downPay}, area="${obj.interest}", email="${obj.email}", _status="${obj.status}",note="${obj.notes}" WHERE id=${id}`
  );
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
