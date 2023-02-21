var express = require('express');
var UserToken = require('../models/userToken');
var Logger = require('../utils/logger.js')();
var _ = require('lodash');
var User = require('../models/schemas/user.js');
var UserController = require('../controllers/manage/UsersController.js');
const bcrypt = require('bcrypt');
const ListUtils = require('../utils/listUtils.js')
const tokenHeaderKey = 'x-access-token';
const jwt = require('njwt')

const expirationTime = 60 * 1000 *60;
var routes = function () {
    var mainRouter = express.Router();
    var msg;

    //var mainController = require("../controllers/mainController");


    var increaseUserFailedAttempts = function (userID, failedNumberOfTimes, failedLastAttempt, res, req) {
        //"failedNumberOfAttempts": failedNumberOfTimes + 1
        //"lastLoginAttemptFailed": Date()

        // Logger.debug(null, "Increase Failed Attempts");

        // var remaining = 0;

        // if (!failedNumberOfTimes) {
        //     //set to zero and will increment to 1
        //     failedNumberOfTimes = 0;
        // } 

        // User.update({ _id: userID },
        //     { "failedNumberOfAttempts": failedNumberOfTimes + 1, "lastLoginAttemptFailed": new Date() }, 
        //     function(err, raw) {
        //         //console.log('Updated Failed Attempts: ', raw); 
        //     }
        // );

        // if ((failedNumberOfTimes + 1) >= 5) {
        //     //If it just happened, then you block for 5 min
        //     // res.send (429, {"err":"Too many requests have been made, " +
        //     //         "please wait " + (5 * 60) + " seconds", "waitingTime": (5 * 60)});
        // } else {
        //     res.sendStatus(401);
        // }
        res.sendStatus(401);

        Logger.debug(req, "UserFailedAttempt: [ UserID: " + userID + ", Status: \"failed\", numberOfAttempts: " + failedNumberOfTimes + 1 + ", lastAttempt: " + new Date() + " ]");
    };

    var resetUserFailedAttempts = function (userID) {
        //"lastLogin": Date()
        //"failedNumberOfAttempts": 0

        Logger.debug("Reset Failed Attempts");

        User.update({ _id: userID },
            { "failedNumberOfAttempts": 0, "lastLogin": new Date() },
            function (err, raw) {
                //console.log('Updated Last Login: ', raw); 
            }
        );
    };

    var checkUserFailedAttempts = function (failedNumberOfTimes, failedLastAttempt, res) {
        var remaining = 0;
        var failedCompareDate;

        if (failedNumberOfTimes >= 5) {
            //Five min is 5 * 60
            if (!failedLastAttempt) {
                failedCompareDate = new Date();
            } else {
                failedCompareDate = new Date(failedLastAttempt);
            }
            //remaining = ;
            remaining = (Date.now() - failedCompareDate.getTime()) / 1000;

            if (remaining < (5 * 60)) {
                // remainingReversed = (5 * 60) - remaining;
                // res.send (429, {"err":"Too many requests have been made, " +
                //     "please wait " + remainingReversed + " seconds", "waitingTime":Math.floor(remainingReversed)});

                Logger.debug(null, "LOGIN - Forcing a 5 minute wait time");
                return true;
            } else {
                Logger.debug(null, "LOGIN - Forced wait time is complete");
                //Should Clear attempt count
                return false;
            }
        }

        Logger.debug(null, "LOGIN - Attempts Clear");
        return false;
    };

    // mainRouter.route('/api/careProvider/:_id/refreshSuperAdminToken').post(refreshToken);
    // mainRouter.route('/api/refreshSuperAdminToken').post(refreshToken);

    mainRouter.use('/admin', function (req, res, next) {
        var tokenString = req.header("x-access-token");
        let errMsg = 'Expired';
        if (tokenString) {
            var token = new UserToken(false, tokenString);
            if (token.isOK()) {
                next();
                return;
            }
        } else {
            errMsg = 'Token not valid'
        }
        return res.status(401).send({ err: errMsg });
    })

    mainRouter.route('/resetPassword').post(function(req, res) {
        Logger.debug(req);
        if(! req.body.email) {
            return res.status(400).send({});
        }
        req.body.isReset = true;
        UserController.generateCode(req, res);
    });

    mainRouter.route('/getEmailByResetToken/:token').get(function(req, res) {
        UserController.getEmailByResetToken(req, res);
    })

    mainRouter.route('/updatePassword').post(function (req, res) {
        if (!req.body.username || !req.body.newPassword) {
            return res.status(400).send({ err: 'Parameters must be include fields: username, newPassword' });
        }

        var tokenString = req.header("x-access-token");
        Logger.debug(req, 'tokenString ' + tokenString );
        Logger.debug(req, req.body);
        var jwtToken = req.body.token;
        let authError = false;
        if (tokenString) {
            var token = new UserToken(false, tokenString);
            if (! token.isOK() || token.username != req.body.username) {
                return res.status(401).send();
            }
        } else if(jwtToken) {
            Logger.debug(req, 'jwtToken: ' + jwtToken);
            jwt.verify(jwtToken, 'top-secret-phrase', function(err,verifiedJwt){
                console.log('verifiedJwt ', err);
                console.log(verifiedJwt);
                console.log(verifiedJwt.body.sub, req.body.username);
                if(err || ! verifiedJwt || verifiedJwt.body.sub != req.body.username){
                    authError = true;
                    return res.status(401).send();
                }
            })

        } else {
            return res.status(401).send();
        }

        if(authError) {
            return;
        }

        console.log(tokenString)
        Logger.debug(req, 'updatePassword ');
        Logger.debug(req, req.body);

        var sessionId = ('0000000' + Math.round(Math.random() * 10000000) + 1).slice(-7);
        var query = { "username": new RegExp('(^)' + req.body.username + '($)', 'i') };
        Logger.debug(req, query);
        User.findOne(query, function (err, user) {
            console.log(user, req.body.password)
            var newPassword = ListUtils.encriptPassword(req.body.newPassword);
            console.log('updatePassword ', req.body.newPassword, newPassword);
            User.update({ _id: user._id }, { $set: { password: newPassword, isNewPassword: false, isAccredited: req.body.isAccredited } }, function (err, success) {
                if (err) {
                    Logger.error(req, err);
                    return res.status(500).send({ err: err });
                }
                var showUser = {};
                Logger.debug(req, showUser);
                var currentUserToken;
                // Logger.debug(req, hierarchyArray);
                // if (user.role == "superDuper") {
                currentUserToken = new UserToken(true, null, user.username, user.password, user.role, user.roleNumber, user.displayName, user._id, sessionId, user.protfolios, user.isNewPassword);
                // }
                user.password = '';
                showUser.user = user;
                showUser.expirationTime = new Date(Date.now() + expirationTime);
                showUser.token = currentUserToken.getToken();
                showUser.changePassword = false;
                Logger.debug(req, 'return status 200');
                return res.status(200).send(showUser);

            });
        })
    });


    mainRouter.use('/users', function(req, res, next) {
        Logger.debug(req, 'main route use /users')
        checkPermission(req, res, function() {
            next();
        })
    })

    mainRouter.use('/manage', function(req, res, next) {
        Logger.debug(req, 'main route use /manage')
        checkPermission(req, res, function() {
            next();
        })
    })
    function checkPermission(req, res, callback) {
        Logger.debug(req, 'checkPermission ' + req.headers[tokenHeaderKey] )
        if(! req.headers[tokenHeaderKey]) {
            return res.status(401).send({});
        }
        var tokenString = req.headers[tokenHeaderKey];
        let errMsg = 'Expired';
        if (tokenString) {
            var token = new UserToken(false, tokenString);
            if (token.isOK()) {
                console.log('isOk OK: ', token);
                req.token = {
                    email: token.username,
                    role: token.role,
                    roleNumber: token.roleNumber, 
                    _id: token.userId,
                    name: token.username,
                    protfolios: token.protfolios
                }
                callback();
                return;
            }
        } else {
            errMsg = 'Token not valid'
        }
        return res.status(401).send({ err: errMsg });
    }
    mainRouter.route('/')
        .get(function (req, res, next) {
            res.send("login support post method only");
        })

        .post(function (req, res, next) {
            var user = req.body.username;
            var password = req.body.password;
            // Logger.debug(req, req.body)
            // Logger.debug(req, "LOGIN - attempting to log in user:" + user);
            // Logger.debug(req, "user log function in started " + user + " " + password);

            //DO NOT Check for password as we need to fetch the user object --- without it, we can not track failed attempts
            var query = { "username": new RegExp('(^)' + user + '($)', 'i'), $or: [{ isActive: { $exists: false } }, { isActive: true }] };

            //Changed to findOne, we do not want multiple users returned --- returns user and not users
            Logger.debug(req, query);
            User.findOne(query, function (err, user) {
                if (err) {
                    //Mongo failure or no item returned, so ignore failure attempts
                    Logger.debug(req, err);
                    res.sendStatus(401);
                } else {
                    Logger.debug(req, user);
                    var sessionId = ('0000000' + Math.round(Math.random() * 10000000) + 1).slice(-7);
                    if (user) {
                        var showUser = {
                            name: user.username,
                            role: user.role,
                            lastLogin: user.lastLogin,
                            sessionId: 's' + sessionId
                        };
                        console.log('user.password: ' + user.password, "password: " + password);
                        if (! bcrypt.compareSync(password, user.password)) {
                            //Failed to Login
                            Logger.debug(req, "LOGIN -login failed: [" + JSON.stringify(showUser) + "]");
                            increaseUserFailedAttempts(user._id, user.failedNumberOfAttempts, user.lastLoginAttemptFailed, res, req);
                        } else {
                            Logger.debug(req, "LOGIN - Login successful, Resetting bouncer");

                            // resetUserFailedAttempts(user._id);
                            // Bouncer.reset (req);
                            var currentUserToken;
                            var query = {};

                            // Logger.debug(req, hierarchyArray);
                            // if (user.role == "superDuper") {
                            currentUserToken = new UserToken(true, null, user.username, user.password, user.role, user.roleNumber, user.displayName, user._id, sessionId,user.toObject().protfolios, user.isNewPassword);
                            // }
                            user.password = '';
                            showUser.user = user;
                            showUser.token = currentUserToken.getToken();
                            showUser.expirationTime = new Date(Date.now() + expirationTime);
                            showUser.changePassword = user.isNewPassword;
                            return res.status(200).send(showUser);
                        }
                    } else {
                        //No user returned, therefore ignore failure attempt
                        res.sendStatus(401);
                    }
                }
            });
        }
        );




    return mainRouter;
};

module.exports = routes();
