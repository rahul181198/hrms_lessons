const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const employeeMonthlyStructureSchema =new Schema({
    
    employeeId:{
        type:String,
        required:true
    },

financialYear:{
    type:String,
    required:true
},

month:{
    type:String,
    required:true
},

noOfDays:{
    type:String,
    required:true
},

noOfWorkingDays:{
    type:String,
    required:true
},

pfEnabled:{
    type:String,
    required:true
},

bonusEnabled:{
    type:String,
    required:true
},

hraEnabled:{
    type:String,
    required:true
},

basic:{
    type:String,
    required:true
},

hra:{
    type:String,
    required:true
},

employeePf:{
    type:String,
    required:true
},

employerPf:{
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

fbp:{
        type:String,
        required:true
    },

others:{
        type:String,
        required:true
    },

monthlyBonus:{
        type:String,
        required:true
    },

performanceBonus:{
        type:String,
        required:true
    },

monthlyGross:{
        type:String,
        required:true
    },

employeePfDeduction:{
        type:String,
        required:true
    },

employerPfDeduction:{
        type:String,
        required:true
    },

taxDeduction:{
        type:String,
        required:true
    },

otherDeduction:{
        type:String,
        required:true
    },

totalDeduction:{
        type:String,
        required:true
    },

netSalary:{
        type:String,
        required:true
    },

actualSalaryPaid:{
        type:String,
        required:true
    },

balanceRemaining:{
        type:String,
        required:true
    }

});

const EmployeeMonthlyStructure = mongoose.model('employeeMonthlyStructure',employeeMonthlyStructureSchema);
module.exports=EmployeeMonthlyStructure;