var model = require('../models/employee');
var db = require('../app.js');

var createEmployee = function (data, successData, errorData) {
 
    db.connection.query("INSERT INTO employee set ? ", data, function (err, rows) {

        if (err) {
            errorData(err)
        } else {
            // successData(rows)
            db.connection.query('SELECT * FROM employee ORDER BY id DESC LIMIT 1', function (err, rows) {
                if (err) {
                    errorData(err)
                } else {
                    successData(rows)
                }
            });
        }
    });
}


var getAllEmployees = function (data, successData, errorData) {
    var limit = data.limit;
    var offset = data.offset;
    db.connection.query('SELECT * FROM employee LIMIT ? OFFSET ?', [limit, offset], function (err, rows) {
        if (err) {
            errorData(err)
        } else {
            successData(rows)
        }
    });
}
module.exports.createEmployee = createEmployee;
module.exports.getAllEmployees = getAllEmployees;