/**
 * Created by cjpowers on 7/14/16.
 */
import * as types from './actionTypes';

export function incrementSuccess(counter){
    return { type: types.INCREMENT, counter }
}

export function decrementSuccess(counter){
    return { type: types.DECREMENT, counter }
}


export function increment(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        let newCount = ++counter;
        dispatch(incrementSuccess(counter));
    }
}

export function decrement(counter) {
    return function(dispatch) {
        console.log('entered increment function');
        let newCount = --counter;
        dispatch(decrementSuccess(counter));
    }
}