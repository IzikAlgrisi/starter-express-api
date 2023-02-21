var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var policyAsset = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    investorId: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    policyId: {
        type: mongoose.Types.ObjectId,
        ref: 'policyDetail'
    },
    status: {
        type: String
    }

});

  
module.exports = mongoose.model('investmentPolicy', policyAsset);
