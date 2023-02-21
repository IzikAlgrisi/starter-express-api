var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Course = new Schema({
    // id	fromLanguage	toLanguage	icon	level	enabled
    fromLanguage: {
        type: String
    },
    toLanguage: {
        type: String
    },
    icon: {
        type: String
    },
    level: {
        type: String
    },
    enabled: {
        type: Boolean
    }
    
});
module.exports = mongoose.model('course', Course);

