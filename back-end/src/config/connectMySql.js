const mysql = require("mysql");

require("dotenv").config();

const mysqlConn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

mysqlConn.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

module.exports = mysqlConn;
