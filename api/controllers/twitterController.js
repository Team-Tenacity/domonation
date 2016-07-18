var config = require('../../config.json');
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
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=devmtn',
    method: 'GET',
};

var token = {
    public: config.twitterAccessToken,
    secret: config.twitterAccessTokenSecret
};


const twitterController = {
    index: function(req, res) {
        request({
            url: request_data.url,
            method: request_data.method,
            form: request_data.data,
            headers: oauth.toHeader(oauth.authorize(request_data, token))
        }, function(error, response, body) {
            var parsed = JSON.parse(response.body);
            console.log(parsed[0]);
            return res.json(parsed);
        });
    }
}

module.exports = twitterController;