import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Counter from './components/Counter';
import HomePage from './components/HomeLandingPage/HomePage';
import ChartLandingPage from './components/ChartLandingPage/ChartLandingPage';
import Chart from './components/d3/Chart';
import LargeCard from "./components/ChartLandingPage/LargeCardView.js";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/counter" component={Counter} />
        <Route path="/charts" component={ChartLandingPage} />
        <Route path="/chart" component={Chart} />
        <Route path="/chartDetail" component={LargeCard} />
    </Route>
);
