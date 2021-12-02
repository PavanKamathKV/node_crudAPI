require('dotenv').config({path:'./.env'})
const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: process.env.HOST||"localhost",
    user: process.env.USER||"root",
    password: process.env.PASSWORD||"",
    database: process.env.DATABASE||"node_proj",
  });

describe('Database ', () => {
    test('Connection', async() => {
          dbConn.connect(function (err) {
            expect(err).toBe(null)
          });
    });
    test('Table Creation', async() => {
        dbConn.query(`CREATE TABLE IF NOT EXISTS tasks (title varchar(255),description varchar(255),assigned_to varchar(255),status BOOLEAN,created_at DATE,updated_at DATE)`, function (error, results, fields) {
            expect(error).toBe(null)
          });
    });
    test('Close Connection',()=>{
        dbConn.end()
    })
  });