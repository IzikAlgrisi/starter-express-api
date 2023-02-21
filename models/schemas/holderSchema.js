var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var holder = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    ID: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    userText: {
        type: String
    },
    isInvestor: {
        type: Boolean
    },
    isPolicyHolder: {
        type: Boolean
    },
    password: {
        type: String
    },
    isNewPassword: {
        type: Boolean
    },
    meta: {
        type: {}
    },
    role: {
        type: String,
        // superAdmin, admin, policyholder, policyHolderFamily ,financialEdvisor, investor,
    },
    roleMetaData: {
        type: {}
    }
});
module.exports = mongoose.model('holder', holder);
