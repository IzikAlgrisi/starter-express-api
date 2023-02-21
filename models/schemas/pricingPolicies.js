var mongoose = require('mongoose'),
            Schema = mongoose.Schema;
var PolicyPricingParameters = new Schema({
    policyNumber: {
        type: String,
        unique: true
    },
    pricingId: {
        type: String
    },
    baseData: {
        type: {}
    },
    versions:{
        type: []
    }
})
const model = mongoose.model('PolicyPricingParameter', PolicyPricingParameters);
module.exports = model;
