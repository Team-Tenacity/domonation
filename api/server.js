var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
var mongoose = require('mongoose');
var session = require('express-session');



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



/**************Login Endpoints**************/
app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);


/**************Twitter Endpoints**************/
app.get('/api/twitter/timeline', twitterController.index);



/**************Database Endpoints**************/
app.post('/api/user', userController.create);
app.post('/api/login', userController.show);


app.listen(port, function() {
    console.log("Started server on port ", port);
});
