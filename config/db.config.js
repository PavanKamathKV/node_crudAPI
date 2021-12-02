"user strict";

const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: process.env.HOST||"localhost",
  user: process.env.USER||"root",
  password: process.env.PASSWORD||"Kamath@123",
  database: process.env.DATABASE||"node_proj",
});
dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
