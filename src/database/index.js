const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/back',{useMongoClient:true});
mongoose.Promise = global.Promise;

module.exports = mongoose;