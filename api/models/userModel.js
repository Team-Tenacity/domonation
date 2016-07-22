var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = {
  twitterHandle: {type: String, unique: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true}
}

module.exports = mongoose.model('User', userSchema);
