const express= require('express');
const router= express.Router();
const mongoose = require('mongoose');
const employeeController =require('../controllers/employeeController');
const adminController =require('../controllers/adminController');
//employee routes
router.get('/employee/:id',employeeController.employee_details);
router.get('/employee/yearlyStructure/:id',employeeController.employeeYearlyStructure_details);
router.put('/employee/:id',employeeController.employee_editDetails);
router.get('/employee/taxCalculation/:id',employeeController.employeeTaxCalculation_details);


//admin routes
router.get('/admin/:id',adminController.employee_details);
router.put('/admin/:id',adminController.employee_editDetails);
router.post('/admin',adminController.employee_uploadDetails);
router.delete('/admin/:id',adminController.employee_deleteDetails);
router.get('/admin/yearlyStructure/:id',adminController.employeeYearlyStructure_details);
router.put('/admin/yearlyStructure/:id',adminController.employeeYearlyStructure_editDetails);
router.post('/admin/yearlyStructure',adminController.employeeYearlyStructure_uploadDetails);
router.delete('/admin/yearlyStructure/:id',adminController.employeeYearlyStructure_deleteDetails);




module.exports=router;