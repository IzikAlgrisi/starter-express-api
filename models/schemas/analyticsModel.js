var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var analytics = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    sessionId: {
        type: Number
    },
    endTime : {
        type: Date
    },
    time: {
        type: Date,
        default: Date.now
    },
    userEmail: {
        type: String
    },
    pages: {
        type: [
            {
                pageId: {
                    type: String
                },
                pageName: {
                    type: String
                },
                duration: {
                    type: String,
                },
                events: [
                    {
                        type: { type: String },
                        elementName: { type: String },
                        time: { type: Number },
                        timeFromPrev: { type: Number },
                        sessionId: { type: Number },
                        pageId: { type: Number }

                    }]
            }
        ],
        default: []
    },

});
module.exports = mongoose.model('analytics', analytics);
