const fs = require('fs');
var dir = __dirname;
const json = fs.readFileSync(dir + '/policies/policies.json', 'utf-8');

const log = console.log;

// console.log = function(txt) {
//     if (typeof txt === 'object') {
//         console.trace();
//         return;  
//     } 
//     log(txt);
// }

const readExcel = require('shared/dist/src/utils/JSONParser');

const pArray = JSON.parse(json);

const jsonArray = [];

for (let i = 0; i < pArray.length; i++) {

    let first = pArray[i];

    const { PolicyParameters, VBTOptions, LiSTModel, CalculationService, PolicyDataModel } = require('shared');

    var policyParameters = new PolicyParameters();
    Object.assign(policyParameters, first);
    policyParameters.setDOB(new Date(policyParameters.dob));
    policyParameters.issueDate = new Date();
    policyParameters.policyAge = 1;
    policyParameters.smoker = 'false';
    policyParameters.insuranceCarrier = 'Unkown';
    policyParameters.insuranceCarrierRating = 'Unkown';
    policyParameters.faceValueType = 'Unkown';
    policyParameters.constFaceValue = 0;
    policyParameters.faceValueType = 'Annual';
    policyParameters.leSrc = VBTOptions.VBTMonth;
    policyParameters.multiplier = 1;
    policyParameters.IRR = 13;
    // console.log(i);
    // console.log(policyParameters.checkValidation());
    // console.log(policyParameters.makeCalculateObject());
    // let res = new CalculationService().calculatePolicy({ policyParameters: policyParameters })
    // console.log(res.NAV);
    // console.log('kjhkhkhjk');
    jsonArray.push(policyParameters)
}

// module.exports = jsonArray;
var request = require('request');
baseUrl =  'https://api.server.listfunding.com/';//'http://localhost:8080/';//
// console.log(jsonArray);
jsonArray.forEach(element => {
    checkTime(0, element)
});

function easyCall(index) {
    start = Date.now();
    request.post({
        uri: baseUrl + 'api/manage/login', body: {
            "username": "izik@listsettlements.com",
            "password": "A123456!"
        }, json: true
    }, (err, res, body) => {
        console.log('easy ' + index, Date.now() - start);
    });

}

function checkTime(index, item) {
    start = Date.now();
    request.post({
        uri: baseUrl + 'api/manage/login', body: {
            "username": "izik@listsettlements.com",
            "password": "A123456!"
        }, json: true
    }, (err, res, body) => {
       // console.log(err, body);
        request.post({
            uri: baseUrl + 'api/manage/policies/createOrUpdate', body: item, json: true, 
            headers: {"x-access-token": body.token, 'Content-Type': 'application/json'}
        }, (err, res, data) => {
            console.log(index, Date.now() - start, data);
        });
    })
}