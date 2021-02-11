const Employee= require('../models/employee');

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

module.exports = {
    employee_details, 
    
  }