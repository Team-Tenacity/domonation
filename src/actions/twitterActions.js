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

export function addMessageSuccess(message){
    return {type: types.ADD_MESSAGE_SUCCESS, message}
}

export function userLoginSuccess(user) {
    return {type: types.USER_LOGIN_SUCCESS, user}
}

export function userRegisterSuccess(user) {
    return {type: types.USER_REGISTER_SUCCESS, user}
}


export function toggleDomoBuzz(response) {
    return function(dispatch) {
        dispatch(toggleSuccess(response))
    }
}

export function addMessage(message) {
    return function(dispatch) {
        dispatch(addMessageSuccess(message))
    }
}

export function userLogin(user) {
    console.log('this is my user: ', user);
    return function(dispatch){
        axios.post('/api/login', user)
            .then(response => {
                console.log('this is our response from the server ',response);
                return dispatch(userLoginSuccess(response.data));
            })

    }
}

export function registerUser(user) {
  console.log('this is the new user', user);
  return function(dispatch){
      axios.post('http://localhost:3001/api/user', user)
          .then(response => {
              console.log('server response for new user: ', response);
              return dispatch(userRegisterSuccess(response.data))
          })
  }
}



export function twitterGet(handle) {
    console.log(handle);
    return function(dispatch) {

        axios.get('/api/twitter/timeline/'+handle)
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
