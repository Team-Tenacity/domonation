var config = require('../../config.json');
var request = require('request');
var OAuth   = require('oauth-1.0a');
//
// var oauth = OAuth({
//     consumer: {
//         public: config.twitterConsumerKey,
//         secret: config.twitterConsumerSecret
//     },
//     signature_method: 'HMAC-SHA1'
// });
//
// var request_data = {
//     url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=devmtn',
//     method: 'GET',
// };
//
// var token = {
//     public: config.twitterAccessToken,
//     secret: config.twitterAccessTokenSecret
// };


var twitterController = {
    index: function(req, res) {
        console.log(req.params.id);

        var oauth = OAuth({
            consumer: {
                public: config.twitterConsumerKey,
                secret: config.twitterConsumerSecret
            },
            signature_method: 'HMAC-SHA1'
        });

        var request_data = {
            url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+req.params.id,
            method: 'GET',
        };

        var token = {
            public: config.twitterAccessToken,
            secret: config.twitterAccessTokenSecret
        };
        request({
            json: true,
            url: request_data.url,
            method: request_data.method,
            form: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data, token))
        }, function(error, response, body) {
            if(error) {
                console.log(error);
                return res.json(error);
            }
            else {
                //console.log(body);
                return res.json(body);
            }
        });
    }
}

module.exports = twitterController;