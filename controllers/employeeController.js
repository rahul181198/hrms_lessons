const Employee= require('../models/employee');
const EmployeeYearlyStructure = require('../models/employeeYearlyStructure');
const EmployeeTaxCalculation = require('../models/employeeTaxCalculation');

const employee_details=(req,res)=>{
    const id = req.params.id;
    Employee.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
}


const employeeYearlyStructure_details=(req,res)=>{
    const id = req.params.id;
    EmployeeYearlyStructure.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
}
const employee_editDetails =(req,res)=>{
    const id = req.params.id;
    Employee.findByIdAndUpdate(id,req.body)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err.message);
        //next(err);
    });
}

const employeeTaxCalculation_details =(req,res)=>{
    const id = req.params.id;
    EmployeeTaxCalculation.findById(id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });

}

module.exports = {
    employee_details,
    employeeYearlyStructure_details,
    employee_editDetails,
    employeeTaxCalculation_details
  }