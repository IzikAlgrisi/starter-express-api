let Course = require('../models/course');
let Base = require('./baseController');

function CourseController() {

    function insertCourse(req, res) {
        if(Base.isMissingParams(req.body, res, ['course'])) {
            return;
        }
        let course = new Course(req.body.course);
        Base.saveDoc(course, res);
    }

    function getAll(req, res) {
        Course.find({}, (err, docs) => {
            if(err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(docs);
        })
    }

    return {
        insertCourse,
        getAll
    }
}

module.exports = CourseController();