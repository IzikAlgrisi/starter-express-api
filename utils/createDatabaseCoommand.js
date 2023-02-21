const mongoose = require('mongoose');
const UserToken = require('../models/schemas/user.js');


var db = process.env.MONGO_URI_CREATE;
mongoose.connect(db);

mongoose.set('useFindAndModify', false);

UserToken.insertMany([
    {
        "_id" : ("5e5e5babfb5e6ade139d6345"),
        "username" : "izik@listsettlements.com",
        "password" : "$2b$10$kqB0opkD8cxxmnPv2tWLz.3Xipaq3z6NoGnVh6amEwyNKSmKtGGX.",
        "role" : "superAdmin",
        "email" : "izik@listsettlements.com",
        "isNewPassword" : false,
        "firstName" : "Super",
        "lastName" : "Admin",
        "roleNumber" : 999,
        "accreditedFile" : {
            "files" : [ ]
        },
    },
    {
        "_id" : "5f53b5ab71d22908b5aecd06",
        "email" : "in@vest.or",
        "firstName" : "John",
        "lastName" : "Smith",
        "role" : "investor",
        "roleNumber" : 199,
        "time" : ("2020-09-05T15:58:35.151Z"),
        "username" : "in@vest.or",
        "password" : "$2b$10$BsqkP78lJhwHfQL1dNyo1.14ppdK4rsj4fizau0uiTsU2I1EkVQ8u",
        "isNewPassword" : false,
        "__v" : 0,
        "accreditedFile" : {
            "files" : [
                {
                    "fileName" : "20.09.08.14.10.07-Apps Devlop 07.08- WEB.pdf",
                    "fileUrl" : "https://list-upload-files-test.s3.amazonaws.com/ggg/cd22c4e8e4ebd3fa7f88352033d3e3b7.pdf"
                }
            ],
            "status" : "pending"
        },
        "resetPasswordToken" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsaXN0ZnVuZGluZyIsInN1YiI6ImluQHZlc3Qub3IiLCJqdGkiOiI3ZWM0ZDljOC05YWQyLTRkZDEtOGM5Ni1mOTk2Mzc0MDJjN2YiLCJpYXQiOjE2MDgyMjczNDYsImV4cCI6MTYwODIyNzk0Nn0.-YdZmGIk8-iS-0aIri0MuAPOJs6-SXe-AAzbzqxvoi8",
        "isAccredited" : true,
        "personalInfo" : {
            "country" : "Antigua and Barbuda",
            "facebook" : "rrrhtgf",
            "address" : "t"
        },
        "phoneNumber" : "054819761",
        "policies" : [
        ],
        "holdingPolicies" : [ ]
    }
    
    
])