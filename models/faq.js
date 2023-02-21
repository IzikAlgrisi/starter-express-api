// Email: 'izik@listsettlemets.com',
// Name: 'rt',
// Message: 'jhtfgh',
// form_id: '2fdf25a',
// form_name: 'investorContactUs'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var FAQ = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    form_name: {
        type: String,
        default: 'FAQ'
    },
    name: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
    isInvestor: {
        type: Boolean
    },
    isPolicyHolder: {
        type: Boolean
    },
    emailStatus: {
        type: String
    },
    meta: {
        type: {}
    }
});
module.exports = mongoose.model('faq', FAQ);

