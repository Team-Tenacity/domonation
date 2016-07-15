import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Counter from './components/Counter';
import HomePage from './components/HomeLandingPage/HomePage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/counter" component={Counter} />
    </Route>
);