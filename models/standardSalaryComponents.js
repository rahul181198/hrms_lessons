const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const standardSalaryComponentsSchema =new Schema({
    basicFactor:{
        type:String,
        required:true
    },
hrafactor:{
    type:String,
    required:true
},
employerPFFactor:{
    type:String,
    required:true
},
employeePFFactor:{
    type:String,
    required:true
},
employerPFFixed:{
    type:String,
    required:true
},
employeePFFixed:{
    type:String,
    required:true
},
transport:{
    type:String,
    required:true
},
medical:{
    type:String,
    required:true
},

});
const StandardSalaryComponents = mongoose.model('standardSalaryComponents', standardSalaryComponentsSchema);
module.exports = StandardSalaryComponents;




