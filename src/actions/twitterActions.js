import * as types from './actionTypes';
// import OAuth from 'oauth-1.0a';
// import request from 'request';
var config = '../../config.json';
import axios from 'axios';
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



export function twitterGet() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/twitter/timeline')
            .then(response => {
                return response})
                .then(data => {
                console.log(data.data);
                //dispatch(loadUsersSuccess(data))
                });
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
