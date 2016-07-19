import * as types from './actionTypes';
// import OAuth from 'oauth-1.0a';
// import request from 'request';
var config = '../../config.json';
import axios from 'axios';
import _ from 'underscore';
// var request = require('request');
// var OAuth   = require('oauth-1.0a');

// var oauth = OAuth({
//     consumer: {
//         public: config.twitterConsumerKey,
//         secret: config.twitterConsumerSecret
//     },
//     signature_method: 'HMAC-SHA1'
// });
//
// var token = {
//     public: config.twitterAccessToken,
//     secret: config.twitterAccessTokenSecret
// };
//
// var request_data = {
//     url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=domotalk',
//     method: 'GET'
// };
//
// export function twitterGetSuccess(data){
//     return { type: types.INCREMENT, data }
// }
//
export function incrementSuccess(counter){
    return { type: types.INCREMENT, counter }
}

export function decrementSuccess(counter){
    return { type: types.DECREMENT, counter }
}

export function twitterGetSuccess(userTweets){
    return { type: types.TWITTER_GET_SUCCESS, userTweets}
}



export function twitterGet() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/twitter/timeline')
            .then(response => {
                var userTweets = _.map(response.data, function (tweet) {
                    console.log(tweet.text);
                    return (
                    {
                        title: tweet.text,
                        retweet_count: tweet.retweet_count,
                        favorite_count: tweet.favorite_count,
                        created_at: tweet.created_at

                    }
                    )
                });
                //console.log(test);
                //console.log(response.data[0]);
                //return response.data});
                dispatch(twitterGetSuccess(userTweets))
            })
    }
}

export function increment(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        dispatch(incrementSuccess(counter));
    }
}

export function decrement(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        dispatch(decrementSuccess(counter));
    }
}
