const nodemailer = require('nodemailer');
const settings = require('./settings.js');
const  strings = require('./strings.json')


const testMode = ! process.env.PRODUCTION;
const key = require('./key.json');

const errEmailAddress = 'izik@listsettlements.com';
const ceoAddress = testMode ? errEmailAddress: 'yaakovb@listsettlements.com' ;
const fs = require('fs');
const emails = {
    emailInvestorNonCallhtml: '',
    emailInvestorCallhtml: '',
    emailPolicyNonCallhtml: 'trtrtr',
    emailPolicyCallhtml: '',
    emailEnterInfoLandingPage: ''
}


function readFiles() {
    readFile(__dirname + '/mail_investor_noncall.txt', 'emailInvestorNonCallhtml');
    readFile(__dirname + '/mail_investor_call.txt', 'emailInvestorCallhtml');
    readFile(__dirname + '/mail_policy_noncall.txt', 'emailPolicyNonCallhtml');
    readFile(__dirname + '/mail_policy_call.txt', 'emailPolicyCallhtml');
    readFile(__dirname + '/ent_info.txt', 'emailEnterInfoLandingPage');
}

function readFile(fileName, varName) {
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) throw err;
        emails[varName] = data;
    });

}

readFiles();

function emailUtils() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'team@listsettlements.com',
      serviceClient: key.client_id,
      privateKey: key.private_key,
    },
  });

    // var transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    //     // port: 465,
    //     // secure: true,
    //     auth: {
    //         // type: 'OAuth2',
    //         // user: 'izik@listsettlements.com',
    //         // clientId: '20354172772-dfngj116iqftp2mjv0u5vd35crrjiq4s.apps.googleusercontent.com',
    //         // clientSecret: 'LzO55hPMzA0qc-SVmqf7DXSY',
    //         // refreshToken: '1//04kFMvKBddAGRCgYIARAAGAQSNwF-L9IrhIn4HeiKMkkydOAAUY6x2OyPdpvBG_zHHMfipZJ22wwV_0DZ6n7H-OY-TCxQvVXpsho',
    //         // accessToken: 'ya29.Il-0BxcneworAmU7QwU4-uaW2m9tt9zllIJe9yFJKne6QpiDCsTyXhAsh4WYuo1Ul0FisMlLPSsqReIkl70uzGjkfMzKY-UfEHdWjqN5inS8tM6Csfo1wPD56IdZaAvZMw'
    //         user: 'izik@listsettlements.com',
    //         pass: 'Email2019@'
    //     }
    // });


    function makeEmail(from, to, subject, text, html) {
        return {
            from,
            to,
            subject,
            text,
            html: html
        }
    }
    const sender = 'The LiST Platform <team@listfunding.com>'; // 'LiST <invoice@listsettlements.com>';

    function sendInvestmentEmail(text) {
        let email = makeEmail(sender, settings.emails.investmentEmail, 'New Investment inquiry in platform', text);
        send(email);
    }
    function sendLearnEmail(text) {
        let email = makeEmail(sender, settings.emails.investmentEmail, 'New Investment want to Learn More', text);
        send(email);
    }


    function sendLoginEmail(name, to, password, url) {
        console.log(to, password, url);
        // let email = makeEmail(sender, to, 
        //     `Dear {{name}},
 
        // Thank you for expressing interest in LiST’s platform, which will give you access to unique investment opportunities in assets that are not correlated to the traditional stock market.
         
        // In order to register, please click on: 
        // {{link}}
        // Your username is your email address and your initial password is: {{password}}
         
        // We are available for any questions.
        // The LiST team`.getWithVars({name: name, link: url, password: password}));
        let email = makeEmail(sender, to, 'Activate and login to your account', strings.registrationEmail.getWithVars({name: name, button: url, password: password}))
        send(email);
        email = makeEmail(sender, 'izik@listsettlements.com', 'Password for login (' + to + ')', 'Hi, your temp password is: ' + password + '\nplease update your password here: ' + url);
        send(email);
    }
    function sendResetPasswordEmail(to, token, url) {
        console.log(to, token, url);
        let text = `Click below to set up your new password. The link will be valid for a single use. If you did not request this, please contact us immediately at support@listfunding.com Thank you, 
        The LiST Team
        
        ` + url + "?t="+token;
        let email = makeEmail(sender, to, 'Instructions to reset your LiST password‏', text);
        send(email);
        email = makeEmail(sender, 'izik@listsettlements.com', 'Password for login (' + to + ')', 'Hi, your temp password is: ' + token + '\nplease update your password here: ' + url);
        send(email);
    }

    function sendContactUsEmail(err, obj, objId) {
        console.log(err, obj, objId)
        let to = err ? errEmailAddress: ceoAddress;
        let name = err ? 'Error' : obj.form_name;
        let mail = makeEmail(sender,to, 'Server: ' + name, JSON.stringify(obj));
        console.log(mail);
        send(mail);
    }
    function sendEnterInfoEmail(to, name) {
        let txt = emails.emailEnterInfoLandingPage.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(sender, to, name + ', Welcome to LiST', '', txt);
        send(mail);
    }

    function sendAlarmEmail(txt) {
        let mail = makeEmail(sender, 'yaakovb@listsettlements.com', 'Someone registered', txt);
        send(mail);
    }
    function sendSupportEmail(txt) {
        let mail = makeEmail(sender, ['yaakovb@listsettlements.com', 'izik@listfunding.com', 'yaacovb@listfunding.com'], 'New ticket', txt);
        send(mail);
    }

    function sendEmailInvestorNonCall(to, name) {
        let txt = emails.emailInvestorNonCallhtml.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(sender, to, name + ', Welcome to LiST', '', txt);
        send(mail);
    }
    function sendEmailInvestorCall(to, name) {
        let txt = emails.emailInvestorCallhtml.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(sender, to, name + ', Welcome to LiST', '', txt);
        send(mail);
    }
    function sendEmailPolicyNonCall(to, name) {
        let txt = emails.emailPolicyNonCallhtml.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(sender, to, name + ', Welcome to LiST', '', txt);
        send(mail);
    }
    function sendEmailPolicyCall(to, name) {
        let txt = emails.emailPolicyCallhtml.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(sender, to, name + ', Welcome to LiST', '', txt);
        send(mail);
    }

    function testHtmlEmail(name, from, to, header, text) {
        let txt = emails.emailPolicyCallhtml.replace('Hi Yaakov,', 'Hi ' + name + ',');
        let mail = makeEmail(from, to, header, '', text);
        send(mail);
    }

    async function send(mail, callback) {
        try {
            await transporter.verify();
            await transporter.sendMail(mail);
        } catch (err) {
            console.error(err);
            
        }

        // transporter.sendMail(mail, function (err, info) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         // see https://nodemailer.com/usage
        //         console.log("info.messageId: " + info.messageId);
        //         console.log("info.envelope: " + info.envelope);
        //         console.log("info.accepted: " + info.accepted);
        //         console.log("info.rejected: " + info.rejected);
        //         console.log("info.pending: " + info.pending);
        //         console.log("info.response: " + info.response);
        //     }
        //     transporter.close();
        // });
    }


    var mail = {
        from: "LiST <invoice@listsettlements.com>",
        to: "y.modiiin@gmail.com",
        subject: "Registration successful",
        text: "You successfully registered an account at www.mydomain.com",
        html: "<p>You successfully registered an account at www.mydomain.com</p>"
    }



    // transporter.sendMail(mail, function (err, info) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // see https://nodemailer.com/usage
    //         console.log("info.messageId: " + info.messageId);
    //         console.log("info.envelope: " + info.envelope);
    //         console.log("info.accepted: " + info.accepted);
    //         console.log("info.rejected: " + info.rejected);
    //         console.log("info.pending: " + info.pending);
    //         console.log("info.response: " + info.response);
    //     }
    //     transporter.close();
    // });

    return {
        sendEmailInvestorCall,
        sendEmailInvestorNonCall,
        sendEmailPolicyCall,
        sendEmailPolicyNonCall,
        sendAlarmEmail,
        sendLoginEmail,
        sendContactUsEmail,
        testHtmlEmail,
        sendEnterInfoEmail,
        sendResetPasswordEmail,
        sendInvestmentEmail,
        sendSupportEmail,
        sendLearnEmail
    }
}

module.exports = emailUtils();
