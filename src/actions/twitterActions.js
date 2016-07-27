import * as types from './actionTypes';
var config = '../../config.json';
import axios from 'axios';
import _ from 'underscore';

export function incrementSuccess(counter){
    return { type: types.INCREMENT, counter }
}

export function decrementSuccess(counter){
    return { type: types.DECREMENT, counter }
}

export function twitterGetSuccess(userTweets){
    return { type: types.TWITTER_GET_SUCCESS, userTweets}
}

export function toggleSuccess(response){
    return {type: types.TOGGLE_SUCCESS, response}
}



export function toggleDomoBuzz(response) {
    return function(dispatch) {
        dispatch(toggleSuccess(response))
    }
}



export function twitterGet() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/twitter/timeline')
            .then(response => {
                var userTweets = _.map(response.data, function (tweet) {
                    //console.log(tweet.text);
                    return (

                            {
                            id: 1,
                            card_name: "Favorites per tweet",
                            title: tweet.text,
                            series2: tweet.retweet_count,
                            series1: tweet.favorite_count,
                            date: tweet.created_at

                        }
                    )
                });
                var userTweets2 = _.map(response.data, function (tweet) {
                    //console.log(tweet.text);
                    return (

                    {
                        id: 2,
                        card_name: "Retweets per tweet",
                        title: tweet.text,
                        series1: tweet.retweet_count,
                        series2: tweet.favorite_count,
                        date: tweet.created_at

                    }
                    )
                });
                var tweets = [userTweets, userTweets2];
                //console.log(test);
                //console.log(response.data[0]);
                //return response.data});
                dispatch(twitterGetSuccess(tweets))
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
