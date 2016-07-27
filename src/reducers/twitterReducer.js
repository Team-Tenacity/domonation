/**
 * Created by cjpowers on 7/14/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function counterReducer(state={counter: initialState.counter, twitterData: {}, showDomoBuzz:initialState.showDomoBuzz, domoBuzzMessages: initialState.domoBuzzMessages}, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                counter: action.counter,
                twitterData: state.twitterData,
                showDomoBuzz: state.showDomoBuzz,
                domoBuzzMessages: state.domoBuzzMessages
            };
        case types.DECREMENT:
            return {
                counter: action.counter,
                twitterData: state.twitterData,
                showDomoBuzz: state.showDomoBuzz,
                domoBuzzMessages: state.domoBuzzMessages
            };
        case types.TWITTER_GET_SUCCESS:
            return (
                {
                    counter: state.counter,
                    twitterData: action.userTweets,
                    showDomoBuzz: state.showDomoBuzz,
                    domoBuzzMessages: state.domoBuzzMessages
                }
            )
        case types.TOGGLE_SUCCESS:
            return (
                {
                    counter: state.counter,
                    twitterData: state.twitterData,
                    showDomoBuzz: action.response,
                    domoBuzzMessages: state.domoBuzzMessages
                }
            );
        default:
            return state;
    }
}
