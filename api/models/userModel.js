var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;


var userSchema = new Schema({
  name: {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
  },
  twitterHandle: {type: String, unique: true, default: 'devmtn'},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  user_image: {type: String}
});


// Hash password before user is saved to database
userSchema.pre('save', function(next){
  var user = this;
  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash){
      if (err) return next(err);

      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

// Ensure the clean password and be compared against the hashed password in the database
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
