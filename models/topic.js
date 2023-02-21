var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Topic = new Schema({
    //id;courseId;title;iconUrl;completed;enabled;localIcon
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        require: true
    },
    title: {
        type: String
    },
    iconUrl: {
        type: String
    },
    localIcon: {
        type: String
    },
    completed: {
        type: Boolean
    },
    enabled: {
        type: Boolean
    }
    
});
module.exports = mongoose.model('topic', Topic);

