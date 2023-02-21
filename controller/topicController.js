let Topic = require('../models/topic');
let Base = require('./baseController');

function TopicController() {

    function insertTopic(req, res) {
        if(Base.isMissingParams(req.body, res)) {
            return;
        }
        let course = new Topic(req.body);
        Base.saveDoc(course, res);
    }

    function getAll(req, res) {
        let query = req.params.courseId ? {courseId: req.params.courseId} : {}
        Topic.find(query, (err, docs) => {
            if(err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(docs);
        })
    }

    return {
        insertTopic,
        getAll
    }
}

module.exports = TopicController();