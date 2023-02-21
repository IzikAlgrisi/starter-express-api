let express = require('express');
const QuestionController = require('../controller/questionController');

var routes = function () {
    var courseRoutes = express.Router();
    courseRoutes.get('/', QuestionController.getAll);
    courseRoutes.get('/getByCoinId/:coinId', QuestionController.getAllQuestionByCoinId);
    // courseRoutes.post('/insert', courseController.insertCourse);

    return courseRoutes;
}
module.exports = routes();
