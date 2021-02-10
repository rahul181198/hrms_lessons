const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const taxSlabSchema =new Schema({
    financialYear:{
        type:String,
        required:true 
   },

slabName:{
    type:String,
    required:true 
},

slabStart:{
    type:String,
    required:true 
},

slabEnd:{
    type:String,
    required:true 
},

slabTaxRate:{
    type:String,
    required:true 
}

});
const TaxSlab = mongoose.model('taxSlab', taxSlabSchema);
module.exports = TaxSlab;