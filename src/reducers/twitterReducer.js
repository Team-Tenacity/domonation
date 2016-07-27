/**
 * Created by cjpowers on 7/14/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function counterReducer(state={counter: initialState.counter, twitterData: {}, showDomoBuzz:initialState.showDomoBuzz}, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                counter: action.counter,
                twitterData: state.twitterData
            };
        case types.DECREMENT:
            return {
                counter: action.counter,
                twitterData: state.twitterData
            };
        case types.TWITTER_GET_SUCCESS:
            return (
                {
                    counter: state.counter,
                    twitterData: action.userTweets
                }
            )
        case types.TOGGLE_SUCCESS:
            return (
                {
                    counter: state.counter,
                    twitterData: state.twitterData,
                    showDomoBuzz: action.response
                }
            );
        default:
            return state;
    }
}
