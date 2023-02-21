const {ConvertExcel} = require('shared')
var request = require('request');
baseUrl = 'http://localhost:8080/';

const username = process.argv[2];
const password = process.argv[3];
const filePath = process.argv[4];


function getToken(callback) {
    request.post({
        uri: baseUrl + 'api/manage/login', body: {
            "username": "izik@listsettlements.com",
            "password": "A123456!"
        }, json: true
    }, (err, res, body) => {
        callback(body.token);
    });

}

ConvertExcel.readExcelFileToJson(filePath, 'PostBecker',(data) => {
    data = data.map(item => {
        item['G Int'] = item['G. Int'];
        item['Ill Date'] = item['Ill. Date'];
        delete item['G. Int'];
        delete item['Ill. Date'];
        return {
            type: 'monday',
            fieldId: 'Policy Number',
            externalId: 'lala',
            data: item
        }
    })
    getToken(token => {
        request.post({
            uri: baseUrl + 'api/internal/addExternalPolicyData',
            body: data,
            json: true
        }, (err, res, body) => {
            console.log(body);
        })
    })
})


// // console.log(jsonArray);
// jsonArray.forEach(element => {
//     checkTime(0, element)
// });

// function easyCall(index) {
//     start = Date.now();
//     request.post({
//         uri: baseUrl + 'api/manage/login', body: {
//             "username": "izik@listsettlements.com",
//             "password": "A123456!"
//         }, json: true
//     }, (err, res, body) => {
//         console.log('easy ' + index, Date.now() - start);
//     });

// }
