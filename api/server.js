var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');


var port = config.port;

/*********Controllers************/
const twitterController = require('./controllers/twitterController');


var app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));


app.use(cors());


/********Twitter Endpoints**************/
app.get('/api/twitter/timeline', twitterController.index);



app.listen(port, function() {
    console.log("Started server on port ", port);
});