/**
 * Created by cjpowers on 7/14/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function counterReducer(state=initialState.counter, action) {
    switch (action.type) {
        case types.INCREMENT:
            return action.counter;
        case types.DECREMENT:
            return action.counter;
        default:
            return state;
    }
}
