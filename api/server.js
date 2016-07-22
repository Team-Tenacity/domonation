var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var path = require('path');
var config = require('../config.json');
var mongoose = require('mongoose');

/*********Controllers************/
const twitterController = require('./controllers/twitterController');


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

/********Twitter Endpoints**************/
app.get('/api/twitter/timeline', twitterController.index);



app.listen(port, function() {
    console.log("Started server on port ", port);
});
