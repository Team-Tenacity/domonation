import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Counter from './components/Counter';
import HomePage from './components/HomeLandingPage/HomePage';
import ChartLandingPage from './components/ChartLandingPage/ChartLandingPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/counter" component={Counter} />
        <Route path="/charts" component={ChartLandingPage} />
    </Route>
);