const db = require("../config/connection.js");

async function getClients() {
  return db.query(`SELECT * FROM crm_client_db`);
}

async function userRetrieve() {
  return db.query(`SELECT * FROM user_db`);
}
async function insert() {
  return db.query(`INSERT INTO test (name) VALUES ('hi');`);
}
async function pull() {
  let x = await db.query(
    `INSERT INTO clients (firstname, lastname, totalbudget, downpayment, area) VALUES ("test2","test2",1,2,"T Downtown");`
  );
  console.log(x);
}

module.exports = {
  getClients,
  userRetrieve,
  insert,
  pull,
};
