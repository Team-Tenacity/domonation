import * as types from './actionTypes';
var config = '../../config.json';
import axios from 'axios';
import _ from 'underscore';

let serverString;
if(process.env.NODE_ENV === 'production'){
    serverString = ''
} else {
    serverString = 'http://localhost:3001'
}

console.log(process.env.NODE_ENV);

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

export function getMessagesSuccess(messages) {
    return {type: types.GET_MESSAGES_SUCCESS, messages}
}



export function toggleDomoBuzz(response) {
    return function(dispatch) {
        dispatch(toggleSuccess(response))
    }
}

export function addMessage(message) {
    let messageObj = {
        content: message.content,
        user: message.user
    }
    return function(dispatch) {
        axios.post(serverString + '/api/messages', messageObj)
            .then(response =>{
                console.log(response);
                if(response.status==200) {
                    return dispatch(addMessageSuccess(message))
                }
                else{
                    return alert('There was an issue sending your message, please try again.')
                }
            })
    }
}

export function getMessages(){
    return function(dispatch) {
        axios.get(serverString + '/api/messages')
            .then(response => {
                var messages = _.map(response.data, function (message) {
                    //console.log(tweet.text);
                    return (

                    {
                        user: message.user._id,
                        user_image: "https://www.b1g1.com/assets/admin/images/no_image_user.png",
                        content: message.content,
                        date: message.date,
                        user_name: message.user.name.firstName + " " + message.user.name.lastName

                    }
                    )
                });
                console.log(messages);
                return dispatch(getMessagesSuccess(messages));
            })
    }
}

export function userLogin(user) {
    console.log('this is my user: ', user);
    return function(dispatch){
        axios.post(serverString + '/api/login', user)
            .then(response => {
                if(response.data.success===false){
                } else {
                    return dispatch(userLoginSuccess(response.data));

                }
                console.log('this is our response from the server ',response);
            })

    }
}



export function registerUser(user) {
  console.log('this is the new user', user);
  return function(dispatch){
      axios.post(serverString + '/api/user', user)
          .then(response => {
              return dispatch(userRegisterSuccess(response.data));
          })
  }
}




export function twitterGet(handle) {
    console.log(handle);
    return function(dispatch) {


        axios.get(serverString + '/api/twitter/timeline/'+handle)
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
                            retweet_count: tweet.retweet_count,
                            favorite_count: tweet.favorite_count,
                            date: tweet.created_at

                        }
                    )
                });
                userTweets = userTweets.reverse();
                var userTweets2 = _.map(response.data, function (tweet) {
                    //console.log(tweet.text);
                    return (

                    {
                        id: 2,
                        card_name: "Retweets per tweet",
                        title: tweet.text,
                        series1: tweet.retweet_count,
                        series2: tweet.favorite_count,
                        retweet_count: tweet.retweet_count,
                        favorite_count: tweet.favorite_count,
                        date: tweet.created_at

                    }
                    )
                });
                userTweets2 = userTweets2.reverse();
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
