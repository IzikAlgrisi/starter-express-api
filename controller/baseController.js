module.exports = {
    isMissingParams: function(body, res, requiredKeys, keepReqLive) {
        let missing = [];
        let keys = Object.keys(body);
        requiredKeys.map((item) => {
            if(keys.indexOf(item) === -1)
                missing.push(item);
        })
        if(missing.length > 0) {
            if(! keepReqLive){
                res.status(400).send({message: 'missing ' + missing})
            }
            return missing;
        }
        return null;
    },
    saveDoc: function(newDoc, res, callback, keepReqLive) {
        newDoc.save((err, newDoc) => {
            if(!keepReqLive) {
                if(err)
                    res.status(500).send(err);
                else {
                    res.status(201).send(newDoc);
                }
            }
            if(callback) {
                callback(err, newDoc);
            }
        })
    }
}