var cryptos = require('../utils/cryptos');
// var Config = require('../config');
var strSplit = '_!!_';
var Logger = require('../utils/logger.js')();

function UserToken(isNew,token, username, password, role, roleNumber, userDisplayName, userId, sessionId, protfolios, newPassword) {
    // Logger.debug(null,[isNew,token,username, password, role, careEntityId, careType, hierarchyNodeType, hierarchyNodeId, careProviderId].join());
    if (isNew) {//this is a request for a new token sent by user, so the input is the user
        console.log('isNew: ', isNew,token, username, password, role, roleNumber, userDisplayName, userId, sessionId, protfolios, newPassword)
        this.username = username;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.password = password;
        this.creationTime = (new Date()).getTime();
        this.role = role;
        this.roleNumber = roleNumber;
        this.sessionId = sessionId;
        this.protfolios = protfolios ? JSON.stringify(protfolios) : 'null';
        this.token = cryptos().getEncrypted('textToEncryptThisNeedStoreItAnyway' 
                                + strSplit + this.username 
                                + strSplit + this.password 
                                + strSplit + this.creationTime 
                                + strSplit + this.role 
                                + strSplit + this.roleNumber
                                + strSplit + this.userDisplayName 
                                + strSplit + (this.userId || '')
                                + strSplit + (this.sessionId || '')
                                + strSplit + ((this.protfolios ? JSON.parse(this.protfolios): []) || []),
                                + strSplit + (newPassword || '')
                            );
        // this.token = cryptos().getEncrypted('uniperServer' + strSplit + this.username + strSplit + this.password + strSplit + this.creationTime + strSplit + this.role );

    }
    else {//this is a server token for already logged in User, so the input is the token itself.
        console.log('decript token')
        this.token = token;
        this.tokenSections      = cryptos().getDecrypted(token).split(strSplit);
        tokenSections = this.tokenSections;
        this.username          = tokenSections[1];
        this.password          = tokenSections[2];
        this.creationTime      = parseInt(tokenSections[3]);
        this.role              = tokenSections[4];
        this.roleNumber        = tokenSections[5];
        this.userDisplayName   = tokenSections[6] || undefined;
        this.userId            = tokenSections[7] || undefined;
        this.sessionId         = tokenSections[8] || undefined;
        this.protfolios         = tokenSections[9] || undefined;
        this.newPassword       = tokenSections[10] || undefined;
    }
}

UserToken.prototype = {
    constructor: UserToken,
    getCreationTime: function () {
        return this.creationTime;
    },
    getUserName: function () {
        return this.username;
    },
    isValid: function() {
        console.log(this.tokenSections)
        return this.tokenSections.length > 7 && this.tokenSections[7];
    },
    isNotExpired: function () {
        var expirationPeriodInMillis = undefined || 14 * 60 * 60 * 1000;//one hour expiration
        //Logger.debug(typeof req!== 'undefined'? req:null,"this.creationTime:"+this.creationTime);
        //Logger.debug(typeof req!== 'undefined'? req:null,"expirationPeriodInMillis:"+expirationPeriodInMillis);
        //Logger.debug(typeof req!== 'undefined'? req:null,"(new Date).getTime()"+(new Date).getTime());
        console.log(this.creationTime , expirationPeriodInMillis, this.creationTime + expirationPeriodInMillis,  (new Date).getTime())
        if ((this.creationTime + expirationPeriodInMillis) < (new Date).getTime()) {
            // Logger.debug(null, "log-in time expired, creation: " + new Date(this.creationTime) + " timeout at: " + new Date(this.creationTime + expirationPeriodInMillis) + " now: " + (new Date()));
            return false;
        } else {

            return true;
        }
    },
    isOK: function() {
        if(this.newPassword){
            Logger.debug(undefined, "New password tomen " + this.isNotExpired())
        }
        return this.isValid() && this.isNotExpired() && ! this.newPassword;
    },
    getToken: function () {
        return this.token;
    },
    getRole: function () {
        return this.role;
    },
    // getCareProvider: function () {
    //     return this.careProvider
    // },
    getPassword: function () {
        return this.password;
    }
};

module.exports = UserToken;