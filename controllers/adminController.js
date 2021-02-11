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

const employee_uploadDetails=(req,res)=>{
    var employee  =new Employee({
    employeeId:req.body.employeeId,
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    designation:req.body.designation,
    bankName:req.body.bankName,
    ifscCode:req.body.ifscCode,
    accountNumber:req.body.accountNumber,
    accountName:req.body.accountName,
    branchAddress:req.body.branchAddress

    });
    employee.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

    

}


module.exports = {
    employee_details,
    employee_editDetails,
    employee_uploadDetails,
}


