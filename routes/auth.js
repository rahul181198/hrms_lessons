const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');
const employeeController =require('../controllers/employeeController');

router.get('/:id',employeeController.employee_details);

module.exports=router;