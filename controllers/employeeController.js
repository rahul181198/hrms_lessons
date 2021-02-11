const Employee= require('../models/employee');
const EmployeeYearlyStructure = require('../models/employeeYearlyStructure');


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

module.exports = {
    employee_details,
    employeeYearlyStructure_details,
    
  }