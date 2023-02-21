/**
 * Created by wael on 08/10/2016.
 */

var SHA256 = require("sha256");

var expirationPeriodInMillis = 3600000; //one hour expiration
var spr = '_!!_';
var salt = 'doubleSalt+1';
var userSalt = 'doubleSalt+1';
var validation = function () {
    var validateUnitvHash = function (mac, time, hashed) {
        var CurrentKey = SHA256(mac + spr + time + spr + salt);
        console.log("Calculated-Hash: " + CurrentKey + "\n Input-Hash: " + hashed);
        if (hashed === CurrentKey) {
            if (time + expirationPeriodInMillis > new Date().getTime()) {
                return true; //token ok
            } else {
                return false; //token time expired.
            }
        } else {
            return false; //token is not valid.
        }
    };

    var validateUserHash = function (username, password, time, hashed, callback) {
        var strToHash = (username + spr + time );
        var currentKey = SHA256(strToHash + spr + password);
        if (currentKey !== hashed) {
            callback("");
            return;
        }
        var query = {"username": username};
        var exist = false;
        UniperStaff.findOne(query, function (err, uniperstaffs) {
            if (err) {
                console.log(err);
                callback("");
                return;
            }
            else {

                if (uniperstaffs) {
                    if (uniperstaffs.saltedpassword == password) {
                        callback("uniperStaff");
                        return;
                    }
                }
                else {
                    CareProvider.findOne(query, function (err, careproviders) {
                        if (err) {
                            console.log(err);
                            callback("");
                            return;
                        }
                        else {
                            if (careproviders) {
                                if (careproviders.saltedpassword == password) {
                                    callback("careProvider");
                                    return;
                                }
                            }
                        }
                        callback("");
                        return;
                    });

                }

            }

        });

    };


    return {
        validateUserHash: validateUserHash,
        validateUnitvHash: validateUnitvHash,

    }

}

module.exports = validation;
