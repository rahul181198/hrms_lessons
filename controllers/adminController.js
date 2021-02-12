const Employee= require('../models/employee');
const EmployeeYearlyStructure = require('../models/employeeYearlyStructure');



//admin sees,uploads,edits employees details
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

const employee_deleteDetails=(req,res)=>
{
  const id = req.params.id;
    Employee.findByIdAndRemove(id)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err.message);
        //next(err);
    });


}



//yearly structure  controllers for admin

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

const employeeYearlyStructure_editDetails=(req,res)=>{
  const id = req.params.id;
  EmployeeYearlyStructure.findByIdAndUpdate(id,req.body)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err.message);
        //next(err);
    });

}

const employeeYearlyStructure_uploadDetails=(req,res)=>{
  var employeeYearlyStructure = new EmployeeYearlyStructure({
    employeeId:req.body.employeeId,
applicableFrom:req.body.applicableFrom,
applicableTill:req.body.applicableTill,
annualCtc:req.body.annualCtc,
isStipend:req.body.isStipend,
annualBonus:req.body.annualBonus,
monthlyGross:req.body.monthlyGross,
basic:req.body.basic,
hra:req.body.hra,
employeePf:req.body.employeePf,
employerPf:req.body.employerPf,
transport:req.body.transport,
medical:req.body.medical,
fbp:req.body.fbp,
others:req.body.others,

  }) 
  employeeYearlyStructure.save()
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });

}

const employeeYearlyStructure_deleteDetails=(req,res)=>{
  const id = req.params.id;
  EmployeeYearlyStructure.findByIdAndRemove(id)
    .then(result=>{
        res.send(result);
    })
    .catch(err=>{
        res.send(err.message);
        //next(err);
    });

}

module.exports = {
    employee_details,
    employee_editDetails,
    employee_uploadDetails,
    employee_deleteDetails,
    employeeYearlyStructure_details,
    employeeYearlyStructure_editDetails,
    employeeYearlyStructure_uploadDetails,
    employeeYearlyStructure_deleteDetails,
}


