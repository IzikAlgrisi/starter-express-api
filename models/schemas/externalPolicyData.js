var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var externalPolicyData = new Schema({
    type: {
        type: String,
        required: true
    },
    fieldId: {
        type: String,
        required: true
    },
    data: {
        type: {}
    },
    externalId: {
        type: String
    }
});
externalPolicyData.pre('save', function(){
    
})


module.exports = mongoose.model('externalPolicyData', externalPolicyData);
