let Question = require('../models/question');
let Base = require('./baseController');

function QuestionController() {

    function insertQuestion(req, res) {
        if(Base.isMissingParams(req.body, res)) {
            return;
        }
        let course = new Topic(req.body);
        Base.saveDoc(course, res);
    }

    function getAll(req, res) {
        Question.find({}, (err, docs) => {
            if(err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(docs);
        })
    }
    function getAllQuestionByCoinId(req, res) {

        Question.find({coinId: req.params.coinId}, (err, docs) => {
            if(err) {
                return res.status(500).send(err);
            }
            return res.status(200).send(docs);
        })
    }

    return {
        getAll,
        getAllQuestionByCoinId
    }
}

module.exports = QuestionController();