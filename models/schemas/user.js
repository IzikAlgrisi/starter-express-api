var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var user = new Schema({
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
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true,
        required: true
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
    resetPasswordToken: {
        type: String
    },
    meta: {
        type: {}
    },
    role: {
        type: String,
        // superAdmin - 999, admin - 800 - 899, policyholder, policyHolderFamily ,financialEdvisor, investor, policyManager - 400 - 499
    },
    roleNumber: {
        type: Number
    },
    roleMetaData: {
        type: {}
    },
    personalInfo: {
        type: {}
    },
    isAccredited: {
        type: Boolean
    },
    accreditedFile: {
        type: {
            status: {
                type: String,
                default: ''
            },
            fileUrl: {
                type: String,
                default: ''
            }
        },
        files: [
            {fileUrl:{ type: String, fileName: String}}
        ],
        default: {
            status: '',
            fileUrl: '',
            files: []
        },
        
    },
    platformSettings: {
        dontShowFirstPopups: {
            type: Boolean
        }
    },
    kyc: {
        type: {
            status: String
        }
    },
    policies: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'investmentPolicy',
            unique: true        
        }],
});
module.exports = mongoose.model('user', user);
