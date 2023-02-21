var express = require('express');
const registartionController = require('../controllers/registartionController.js');
const UserController = require('../controllers/manage/UsersController.js');
// const registrationModel = require('../models/schemas/registerSchema.js');

var routes = function () {
    var userRoutes = express.Router();

    userRoutes.post('/register', registartionController.register);
    userRoutes.post('/generateCode', registartionController.generateCode);
    userRoutes.post('/isUser', registartionController.isUser);
    userRoutes.post('/updatePassword', registartionController.updatePassword);
    userRoutes.get('/getAll', UserController.getAll);
    userRoutes.post('/updateAccredited', UserController.updateAccreditedObject);
    userRoutes.post('/accreditaed/pushFile', UserController.pushAccreditedFile);
    userRoutes.post('/deleteAccreditadeFile', UserController.deleteAccreditadeFile);
    userRoutes.get('/getFinanceInfo', UserController.getFinanceInfo);
    userRoutes.post('/addSupportTicket', UserController.addSupportTicket);
    
    userRoutes.post('/analytics/addPage', UserController.addPageToAnalytics);
    userRoutes.post('/analytics/addEvent', UserController.addEventToAnalytics);
    userRoutes.post('/analytics/closeSession', UserController.closeSession);


    return userRoutes;
}
module.exports = routes();

