const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const employeeTaxCalculationSchema =new Schema({
    employeeId:{
        type:String,
        required:true
    },
applicableFrom:{
    type:String,
    required:true
},
applicableTill:{
    type:String,
    required:true
},
houseRentPlanned:{
    type:String,
    required:true
},
investment80CPlanned:{
    type:String,
    required:true
},
investment80CCDPlanned:{
    type:String,
    required:true
},
investment24Planned:{
    type:String,
    required:true
},
interest80TTA:{
    type:String,
    required:true
},
computedTaxLiability:{
    type:String,
    required:true
},
taxDeducted:{
    type:String,
    required:true
},
monthlyTaxLiability:{
    type:String,
    required:true
},

});


const EmployeeTaxCalculation = mongoose.model('employeeTaxCalculation', employeeTaxCalculationSchema);
module.exports = EmployeeTaxCalculation;