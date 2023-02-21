// Email: 'izik@listsettlemets.com',
// Name: 'rt',
// Message: 'jhtfgh',
// form_id: '2fdf25a',
// form_name: 'investorContactUs'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var subscribeArticle = new Schema({
    time: {
        type: Date,
        default: Date.now
    },
    form_name: {
        type: String,
        default: 'FAQ'
    },
    email: {
        type: String
    },
    
});
module.exports = mongoose.model('subscribeArticle', subscribeArticle);

