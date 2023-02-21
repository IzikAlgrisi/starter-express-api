var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Question = new Schema({
    // id	coinId	topicId	courseId	questionTitle	questionType	answerList	answerType	priority	isAnsweredCorrectly
    // 0	0	    0	    0	         Which of these is "Chair"?	VAQUESTION	[{"localImage":2131165285,"title":"Chaise"},{"localImage":2131165380,"title":"Table"},{"localImage":2131165389,"title":"Mur"},{"localImage":2131165283,"title":"Plafond"}]	{"position":0}	0	
    topicId: {
        type: Schema.Types.ObjectId,
        ref: 'topic',
        require: true
    },
    coinId: {
        type: Schema.Types.ObjectId,
        ref: 'coin',
        require: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        require: true
    },
    questionTitle: {
        type: String
    },
    questionType: {
        type: String
    },
    answerList: {
        type: []
    },
    answerType: {
        type: {}
    },
    priority: {
        type: Number
    },
    isAnsweredCorrectly: {
        type: Boolean
    }
    
});
module.exports = mongoose.model('question', Question);

