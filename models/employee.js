const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const employeeSchema =new Schema({
    employeeId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    phone:{
        type:String,
        required:true 
    },
    designation:{
        type:String,
        required:true 
    },
    bankName:{
        type:String,
        required:true 
    },
    ifscCode:{
        type:String,
        required:true 
   },
   accountNumber:{
    type:String,
    required:true 
   },
   accountName:{
    type:String,
    required:true 
   },
   branchAddress:{
    type:String,
    required:true 
   },
   
})



const Employee = mongoose.model('employee', employeeSchema);
module.exports = Employee;
