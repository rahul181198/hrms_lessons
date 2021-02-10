const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const taxDeductionFeaturesSchema =new Schema({
    financialYear:{
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
limit80TTA:{
    type:String,
    required:true
},
rebate:{
    type:String,
    required:true
},
standardDeduction:{
    type:String,
    required:true
},
surcharge:{
    type:String,
    required:true
},

});
const TaxDeductionFeaturesSchema = mongoose.model('taxDeductionFeatures', taxDeductionFeaturesSchema);
module.exports = TaxDeductionFeaturesSchema;