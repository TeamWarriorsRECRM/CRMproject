const db = require( '../config/connection.js' );

function getClients(){
    return db.query(`SELECT * FROM crm_client_db`)
}

module.exports = {
    getClients
}