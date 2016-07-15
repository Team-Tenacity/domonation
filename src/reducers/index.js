import {combineReducers} from 'redux';
import counter from './twitterReducer';


const rootReducer = combineReducers({
    counter
});

export default rootReducer;