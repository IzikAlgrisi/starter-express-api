const mongoose = require('mongoose');


var db = process.env.MONGO_URI || 'mongodb+srv://root:Languages123@cluster0.hf6iwba.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db);

module.exports = {}
