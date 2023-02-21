const bcrypt = require('bcrypt');

var utils = function (){
    
    function encriptPassword(pws) {
        return bcrypt.hashSync(pws, 10);
    }


    return {
        encriptPassword
    }
}

module.exports = utils();