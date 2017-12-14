
"use strict";
var employeeService = require('../services/employeeService');

var createEmployee = function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    employeeService.createEmployee(input, function (successData) {
        res.send(successData)
    }, function (errorData) {
        res.send(errorData)
    })
}

var getAllEmployees = function (req, res) {

    var input = JSON.parse(JSON.stringify(req.body));
    employeeService.getAllEmployees(input, function (successData) {
        res.send(successData)
    }, function (errorData) {
        res.send(errorData)
    })
}

module.exports.createEmployee = createEmployee;
module.exports.getAllEmployees = getAllEmployees;