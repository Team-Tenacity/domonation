var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
var mongoose = require('mongoose');


var port = config.port;

/*********Controllers************/
const twitterController = require('./controllers/twitterController');


var app = express();

mongoose.set("debug", true);
mongoose.connect(config.database); 
mongoose.connection.once("open", function(){
  console.log("Connected to MongoDB");
});



app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));


app.use(cors());


/********Twitter Endpoints**************/
app.get('/api/twitter/timeline', twitterController.index);



app.listen(port, function() {
    console.log("Started server on port ", port);
});
