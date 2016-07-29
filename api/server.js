var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo');


/*********Controllers************/
const twitterController = require('./controllers/twitterController');
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const messageController = require('./controllers/messageController');


mongoose.set("debug", true);
mongoose.connect(config.database);
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB");
});

//var db = massive.connectSync({db : "testdb"});
var app = express();
// var massiveInstance = massive.connectSync({connectionString : config.connectionString})
// app.set('db', massiveInstance);
// var db = app.get('db');


app.use(bodyParser.json());
app.use(cors());
// app.use(cookieParser());
// app.use(session({
//   store: new MongoStore({
//     url: config.db
//   }),
//   secret: config.sessionSecret,
// }))

app.use(express.static('public'));

var port = config.port;

app.use(cors());



/**************Login Endpoints**************/
app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);


/**************Twitter Endpoints**************/
app.get('/api/twitter/timeline/:id', twitterController.index);



/**************User Endpoints**************/
app.post('/api/user', userController.create);
app.post('/api/login', userController.show);

/**************Message Endpoints**************/
app.post('/api/messages', messageController.create);
app.get('/api/messages/', messageController.read);


app.listen(port, function() {
    console.log("Started server on port ", port);
});
