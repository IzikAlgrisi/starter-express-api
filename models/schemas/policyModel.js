
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var policyDetail = new Schema({
    "viewData": {
        type: {
            _id: {
                type: mongoose.Types.ObjectId
            },
            providorName: {
                type: String
            },
            headerImageUrl: {
                type: String
            },
            lineOne: {
                type: String
            },
            policyNumber: {
                type: String
            },
            pdfUrl: {
                type: String
            },
            date: {
                type: Date
            },
            meta: {
                type: {}
            },
            policyImageUrl: {
                type: String
            },
            policyPdfUrl: {
                type: String
            },
            faceValue: {
                type: Number
            },
            minInvestment: {
                type: Number
            },
            isPublic: {
                type: Boolean
            },
            status:{
                type: String,
                default: 'uploaded' // pending, active 
            }
        }
    },
    "faceValue": {
        type: Number
    },
    "bgImage": {
        type: String
    },
    "name": {
        "type": "String"
    },
    "offeringNumber": {
        required: true,
        "type": "String"
    },
    "issueDate": {
        "type": "Date"
    },
    "totalFaceAmount": {
        "type": "Number"
    },
    "annualizedAvg": {
        "type": "Number"
    },
    "guaranteed": {
        "type": Boolean
    },
    "investmentPurchase": {
        "type": Number
    },
    "toatlInvestment": {
        "type": [Number]
    },
    "toatlInvestmentTxt": {
        "type": [
            "String"
        ]
    },
    "NumberOfPayments": {
        "type": "String"
    },
    "exampleInvestmentAtPurchase": {
        "type": "Number"
    },
    "minAnnualInvestment": {
        "type": [
            "Number"
        ]
    },
    "nuberOfPolicies": {
        "type": "string"
    },
    "anualInvestmentComitment": {
        "type": "Number"
    },
    "NumberOfPolicyHolders": {
        "type": "Number"
    },
    "irrReturns": {
        "type": [
            "Number"
        ]
    },
    "irrProb": {
        "type": [
            "Number"
        ]
    },
    "insuranceCarrier": {
        "type": [
            "String"
        ]
    },
    "faceAmount": {
        "type": [
            "Number"
        ]
    },
    "policyNumber": {
        "type": "Array"
    },
    "insuranceCarrierRating": {
        "type": [
            "String"
        ]
    },
    "primaryImpairmentCategory": {
        "type": "String"
    },
    "le": {
        "type": [
            "String"
        ]
    },
    "gender": {
        "type": "String"
    },
    "age": {
        "type": "Number"
    },
    "graphImageUrl": {
        "type": "String"
    },
    "average_IRR": {
        type: String
    },
    paymentTable: {
        type: []
    },
    navTable: {
        type: []
    },
    isPublic: {
        type: Boolean
    },
    Max_Total: {
        type: Number
    },
    Max_investor: {
        type: Number
    },
    Min_Total: {
        type: Number
    },
    Min_investor: {
        type: Number
    },
    OGֹ_TYPE: {
        type: String
    },
    status:{
        type: String,
        default: 'uploaded' // pending, active 
    },
    "minInvestment": {
        type: Number
    },
        NAV:{
            type: Number
        },
    units: {
        type: Number
    },
    NAV_per_unit: {
        type: Number
    },
    DB_per_unit:{
        type: Number
    },
    Rating: {
        type: Number
    }, 
    IRR:{
        type: Number
    },

    LE:{
        type: Number
    },
    DB: {
        type: Number
    },
    // tag: {
    //     required: true,
    //     type: String
    // },
    // protfolio: {
    //     required: true,
    //     type: String
    // }
});
policyDetail.index({ tag: 1, protfolio: 1, offeringNumber: 1}, { unique: true });

policyDetail.pre('validate', function (next) {
    // do stuff
    var self = this;
    self.viewData._id = this._id;
    self.viewData.isPublic = this.isPublic;
    next();
});

const model = mongoose.model('policyDetail', policyDetail);

module.exports = model;