const sql = require("mssql");
const connStr = require('./config/config');

const conn = sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log("erro! " + err));

module.exports = conn;