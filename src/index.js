import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import {loadShopperProducts} from './actions/shopperProductActions';
import initialState from './reducers/initialState';

//this accepts an initial state as a param, which is useful for initializing store with data  from server
const store = configureStore();

//store.dispatch(loadUsers());
console.log('This is what is in my store: ',store.getState());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
