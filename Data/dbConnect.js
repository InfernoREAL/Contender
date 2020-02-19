const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'user',
  password: 'pass',
  database: 'dbName'
});
con.connect((err) => {
  if (err) throw err;
  console.log('Connected to DB!');
});

module.exports = con;