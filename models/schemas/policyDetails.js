var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var policyAsset = new Schema({
    time: {
        type: Date,
        default: Date.now
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
    policyImageUrl:{
        type: String
    },
    policyPdfUrl: {
        type: String
    }


});

  
module.exports = mongoose.model('policyAsset', policyAsset);
