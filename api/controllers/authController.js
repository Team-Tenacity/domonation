// var passport = require('passport');
// var Strategy = require('passport-local').Strategy;
var User = require('../models/userModel')

module.exports = {
  login: (req, res, next) => {

     User.findOne({email: req.body.email}, function(err, user) {
      if (err) throw err;
      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // check if password matches
        user.comparePassword(req.body.password, function(err, isMatch){
          if (err) throw err;
          if(!isMatch)  return res.json({ success: false, message: 'Authentication failed. Wrong password.' });
           res.json({
             email: user.email,
             twitterHandle: user.twitterHandle,
             userId: user._id,
             name: user.name.firstName + ' ' + user.name.lastName
           })
          })
        }

      })
    },


  logout: (req, res, next) => {
      req.logout();
      res.redirect('/');
  }



}
