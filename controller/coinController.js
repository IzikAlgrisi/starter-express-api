let Coin = require('../models/coin');
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

    function getCoinCountByTopic(req, res) {
        let query = {};
        req.params.topicId ? {topicId: req.params.topicId} : {};
        Coin.count(query, function(err, count){
            if(err){
                return res.status(500).send(err);
            }
            res.status(200).send({count: count});
        })
    }

    function getCoinCountByCourse(req, res) {
        Coin.count( {courseId: req.params.courseId}, function(err, count){
            if(err){
                return res.status(500).send(err);
            }
            res.status(200).send({count: count});
        })
    }

    return {
        insertTopic,
        getCoinCountByTopic,
        getCoinCountByCourse
    }
}

module.exports = TopicController();