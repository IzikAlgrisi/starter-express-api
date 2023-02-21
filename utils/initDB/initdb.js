let csvToJson = require('convert-csv-to-json');
const { default: mongoose } = require('mongoose');
let CourseModel = require('../../models/course')
let TopicModel = require('../../models/topic')
let CoinModel = require('../../models/coin')
let QuestionModel = require('../../models/question')
require('../dbConnection')

// let course = csvToJson.fieldDelimiter(',').getJsonFromCsv("./course.csv");
// for(let i=0; i<course.length;i++){
//     console.log(course[i]);
// }

// CourseModel.insertMany(course, function(err, res){
//     console.log(err, res);
// })


/*

[
  {
    fromLanguage: 'en',
    toLanguage: 'fr',
    icon: 'https://www.freepnglogos.com/uploads/france-flag-png/flag-france-clip-vector-clip-0.png',
    level: 'a',
    enabled: true,
    _id: new ObjectId("63e7f6d0deb78101952b29fe"),
    __v: 0
  },
  {
    fromLanguage: 'en',
    toLanguage: 'fr',
    icon: 'https://www.freepnglogos.com/uploads/france-flag-png/flag-france-clip-vector-clip-0.png',
    level: 'b',
    enabled: false,
    _id: new ObjectId("63e7f6d0deb78101952b29ff"),
    __v: 0
  },
  {
    fromLanguage: 'en',
    toLanguage: 'fr',
    icon: 'https://www.freepnglogos.com/uploads/france-flag-png/flag-france-clip-vector-clip-0.png',
    level: 'c',
    enabled: false,
    _id: new ObjectId("63e7f6d0deb78101952b2a00"),
    __v: 0
  },
  {
    fromLanguage: 'en',
    toLanguage: 'fr',
    icon: 'https://www.freepnglogos.com/uploads/france-flag-png/flag-france-clip-vector-clip-0.png',
    level: 'd',
    enabled: false,
    _id: new ObjectId("63e7f6d0deb78101952b2a01"),
    __v: 0
  }
]
*/

// let topic = csvToJson.fieldDelimiter(',').getJsonFromCsv("./topic.csv");
// for(let i=0; i<topic.length;i++){
//     topic[i].courseId = mongoose.Types.ObjectId("63e7f6d0deb78101952b29fe")
//     console.log(topic[i]);
// }

// TopicModel.insertMany(topic, function(err, res){
//     console.log(err, res);
// })

/*[
  {
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'Living room 1',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2927/2927347.png',
    localIcon: '2131165330',
    completed: false,
    enabled: true,
    _id: new ObjectId("63e7f8651d81678a49b0f269"),
    __v: 0
  },
  {
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'Fruits 1',
    iconUrl: 'https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-school-icon-png-image_4103758.jpg',
    localIcon: '2131165330',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7f8651d81678a49b0f26a"),
    __v: 0
  }
]
*/




// let coin = csvToJson.fieldDelimiter(',').getJsonFromCsv("./coin.csv");
// for(let i=0; i<coin.length;i++){
//     console.log(coin[i]);
// }

// CoinModel.insertMany(coin, function(err, res){
//     console.log(err, res);
// })

/*
[
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f269"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'apples',
    imageUrl: '',
    localIcon: '2131165329',
    completed: false,
    enabled: true,
    _id: new ObjectId("63e7fa7182f1d7629b0cdabf"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f269"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'bananas',
    imageUrl: '',
    localIcon: '2131165327',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac0"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f269"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'cherry',
    imageUrl: '',
    localIcon: '2131165328',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac1"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f269"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'bread',
    imageUrl: '',
    localIcon: '2131165331',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac2"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f26a"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'teachers',
    imageUrl: '',
    localIcon: '2131165331',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac3"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f26a"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'schools',
    imageUrl: '',
    localIcon: '2131165331',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac4"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f26a"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'friends',
    imageUrl: '',
    localIcon: '2131165331',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac5"),
    __v: 0
  },
  {
    topicId: new ObjectId("63e7f8651d81678a49b0f26a"),
    courseId: new ObjectId("63e7f6d0deb78101952b29fe"),
    title: 'siblings',
    imageUrl: '',
    localIcon: '2131165331',
    completed: false,
    enabled: false,
    _id: new ObjectId("63e7fa7182f1d7629b0cdac6"),
    __v: 0
  }
]
*/



let questions = csvToJson.getJsonFromCsv("./question3.csv");
let coinIds = ["63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdabf","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac0","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac1","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2","63e7fa7182f1d7629b0cdac2"]
let courseIds = ["63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe", "63e7f6d0deb78101952b29fe"]
let topicsIds = ["63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269", "63e7f8651d81678a49b0f269"]
for(let i=0; i<questions.length;i++){
    questions[i].courseId = courseIds[i];
    questions[i].coinId = coinIds[i];
    questions[i].topicId = topicsIds[i];
    questions[i].topicId = topicsIds[i];
    questions[i].isAnsweredCorrectly = false;
    console.log(questions[i]);
}

QuestionModel.insertMany(questions, function(err, res){
    console.log(err, res);
})
