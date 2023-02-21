let express = require('express');
const courseController = require('../controller/courseController');

var routes = function () {
    var courseRoutes = express.Router();
    courseRoutes.get('/', courseController.getAll);
    courseRoutes.post('/insert', courseController.insertCourse);

    return courseRoutes;
}
module.exports = routes();
