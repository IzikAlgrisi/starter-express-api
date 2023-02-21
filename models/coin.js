var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Coin = new Schema({
    // id;topicId;courseId;title;imageUrl;localIcon;completed;enabled
    topicId: {
        type: Schema.Types.ObjectId,
        ref: 'topic',
        require: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        require: true
    },
    title: {
        type: String
    },
    imageUrl: {
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
module.exports = mongoose.model('coin', Coin);

