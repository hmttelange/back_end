"use strict";
//External dependencies
var express = require('express');
var router = express.Router();
var employeeController = require('../controllers/employeeController.js');
router.post('/employee/create', employeeController.createEmployee);
router.post('/employee/getall', employeeController.getAllEmployees);


module.exports = router;