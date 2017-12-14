var express = require('express');
const Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

var host = "13.126.122.77";


var employeeRoutes = require('./routes/employeeRoute.js');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With,X-XSRF-TOKEN, querycriteria, x-access-token, sessionId");
    res.removeHeader("X-Powered-By");
    next();
});




var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

connection.query('USE demo');

app.all('*', employeeRoutes);

// app.get('/', function (req, res) {
//   connection.query('SELECT * FROM employee', function (err, rows) {
//     console.log(rows)
//   });
// });


app.listen(3000, () => {
  console.log("server started at 3000")
});

module.exports.connection = connection;