import {combineReducers} from 'redux';
import twitter from './twitterReducer';


const rootReducer = combineReducers({
    twitter
});

export default rootReducer;