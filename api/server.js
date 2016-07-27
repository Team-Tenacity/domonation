var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;


/*********Controllers************/
const twitterController = require('./controllers/twitterController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

//var db = massive.connectSync({db : "testdb"});
var app = express();
// var massiveInstance = massive.connectSync({connectionString : config.connectionString})
// app.set('db', massiveInstance);
// var db = app.get('db');

mongoose.set("debug", true);
mongoose.connect(config.database);
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB");
});



app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

var port = config.port;

app.use(cors());

passport.use(new Strategy(
  function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
}));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());


/**************Login Endpoints**************/
app.post('/api/login', passport.authenticate('local', { failureRedirect: '/' }), authController.login);

app.get('/api/logout', authController.logout);


/**************Twitter Endpoints**************/
app.get('/api/twitter/timeline', twitterController.index);



/**************Database Endpoints**************/
app.post('/api/user', userController.create);
app.post('/api/login', userController.show);


app.listen(port, function() {
    console.log("Started server on port ", port);
});
