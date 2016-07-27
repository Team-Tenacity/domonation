var passport = require('passport');
var Strategy = require('passport-local').Strategy;

module.exports = {
  login: (req, res, next) => {
      res.redirect('/charts');
  },

  logout: (req, res, next) => {
      req.logout();
      res.redirect('/');
  }



}
