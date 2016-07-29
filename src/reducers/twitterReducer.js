import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function counterReducer(state=initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return Object.assign({}, state, {counter: action.counter});
        case types.DECREMENT:
            return Object.assign({}, state, {counter: action.counter});
        case types.TWITTER_GET_SUCCESS:
            return Object.assign({}, state, {twitterData: action.userTweets});
        case types.TOGGLE_SUCCESS:
            return Object.assign({}, state, {showDomoBuzz: action.response});
        case types.GET_MESSAGES_SUCCESS:
            return Object.assign({}, state, {domoBuzzMessages: action.messages})
        case types.ADD_MESSAGE_SUCCESS:
            return Object.assign({}, state, {domoBuzzMessages:[...state.domoBuzzMessages, action.message]})
        case types.USER_LOGIN_SUCCESS:
            return Object.assign({}, state, {user: action.user,isUserLoggedIn: true});
        default:
            return state;
    }
}
