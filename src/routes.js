import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Counter from './components/Counter';


export default (
    <Route path="/src/" component={App}>
        <IndexRoute component={Counter} />
    </Route>
);