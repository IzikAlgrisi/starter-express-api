let express = require('express');
const topicController = require('../controller/topicController');

var routes = function () {
    var courseRoutes = express.Router();
    courseRoutes.get('/', topicController.getAll);
    courseRoutes.get('/topicByCourseId/:courseId', topicController.getAll);
    // courseRoutes.post('/insert', topicController.insertCourse);

    return courseRoutes;
}
module.exports = routes();
