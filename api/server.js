var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
//var db = massive.connectSync({db : "testdb"});
var app = express();
// var massiveInstance = massive.connectSync({connectionString : config.connectionString})
// app.set('db', massiveInstance);
// var db = app.get('db');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));

var port = config.port;

app.use(cors());
var request = require('request');
var OAuth   = require('oauth-1.0a');

var oauth = OAuth({
    consumer: {
        public: config.twitterConsumerKey,
        secret: config.twitterConsumerSecret
    },
    signature_method: 'HMAC-SHA1'
});

var request_data = {
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=cjpwrs',
    method: 'GET',
};

var token = {
    public: config.twitterAccessToken,
    secret: config.twitterAccessTokenSecret
};
//
// request({
//     url: request_data.url,
//     method: request_data.method,
//     form: request_data.data,
//     headers: oauth.toHeader(oauth.authorize(request_data, token))
// }, function(error, response, body) {
//     console.log(response);
// });


// app.post('/api/cartcreate', function(req, res){
//     console.log(req.body);
//     db.shoppingcart.save({ownerid: req.body.userid}, function(err, response){
//         if(err) console.log(err);
//         else {
//             db.shoppingcart.findOne({ownerid: req.body.userid}, function(err, cart){
//                 console.log(cart);
//                 req.body.cartid = cart.id;
//                 console.log(req.body);
//                 res.json(req.body);
//             });
//         }
//     })
// })
//
app.get('/api/twitter/timeline', function(req, res) {
    request({
        url: request_data.url,
        method: request_data.method,
        form: request_data.data,
        headers: oauth.toHeader(oauth.authorize(request_data, token))
    }, function(error, response, body) {
        console.log(response);
        return res.json(response.body);
    });
});




app.listen(port, function() {
    console.log("Started server on port ", port);
});