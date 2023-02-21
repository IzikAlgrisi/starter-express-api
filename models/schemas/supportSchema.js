var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var supportModule = new Schema({
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
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    userType: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId
    }
});
module.exports = mongoose.model('support', supportModule);
