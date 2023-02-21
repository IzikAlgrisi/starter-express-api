//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./utils/dbConnection');

// const UserToken = require('./models/userToken.js');

String.prototype.getWithVars = function (args) {
    var arr = Object.keys(args);
    var str = this.toString();
    arr.map(function(val, i, arr){
        console.log("val", val);
        var re = new RegExp('{{'+ val + '}}',"g");
        str = str.replace(re, args[val]);
    })

    return str;
}

// mongoose.set('useFindAndModify', false);
const app = express();

app.use('/api', bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.get('/ping', function (req, res) {
    return res.status(200).send({ server: 'Hello' });
})


// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/list'));

app.use('/api', function (req, res, next) { //__setxhr_
    console.log(req.baseUrl);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, x-access-token, __setxhr_');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    console.log('access controll');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        try {
            console.log('next');
            next();
        } catch (er) {
            Logger.error(req, er);
            try {
                req.status(500).send()
            } catch (err) {
                Logger.error(req, err);
            }
        }
    }
});
// const mainRoutes = require('./routes/mainRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');
const topicRoutes = require('./routes/topicRoutes');
app.use('/api/course', courseRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/topics', topicRoutes);

// const UserModel = require('./models/schemas/user.js');
// app.use('/qa/resetUser/:email', function(req, res) {
//     UserModel.findOneAndUpdate({email: req.params.email}, {$set: {accreditedFile : {status: null, fileUrl: ''} }}, function(err, raw){
//         console.log(err, raw);
//         res.status(200).send({});
//     })
// })

// for user name and password
// app.use('/api', mainRoutes);

// app.use('/api/manage', function (req, res, next) {
//     if (req.header("x-access-token")) {
//         var userToken = new UserToken(false, req.header("x-access-token"));
//         if (userToken.isNotExpired()) {
//             next();
//         } else {
//             Logger.debug(req, "login expired, creation time=" + new Date(careAccessToken.getCreationTime()));
//             res.status(401).send();
//         }
//     } else {
//         Logger.debug(req, "no access token for call");
//         res.status(401).send();
//     }
// })

// app.use('/api/admin', adminRoutes);
   
// var axios = require('axios');

//     var config = {
//         method: 'post',
//         url: 'https://api.shuftipro.com/',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Basic ' + 'OTliOTM5MWRlYWNjMTJiOGY3YWE2NmM3NmNkNjFjMWUzNjAwNzJmZDEwYzA5ZjBiOWVmZTcxYmU4NTlmMzVkYjoxRURQd0lWSldoc0ZramgyU3R4MUxPN2ZBOU9qS2VXZg=='
//         },
//         data: JSON.stringify(payload)
//     };
//     axios(config)
//         .then(function (response) {
//             // console.log(JSON.stringify(response.data));
//             console.log(response.headers);
//             console.log(response.data);
//             res.status(200).send({url: response.data.verification_url})
//         })
//         .catch(function (error) {
//             console.log(error);
//         });

// });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5001, function() {
    console.log('port: ' + process.env.PORT || 5001);
});

