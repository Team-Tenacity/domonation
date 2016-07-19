import React from 'react';
import ExampleCard from "./ExampleCards.js";
import {Link} from 'react-router';


import UpperNav from "./UpperNav";
import Subheader from './Subheader';


class ChartLandingPage extends React.Component {
    render() {
        return (
            <div>
                <UpperNav />
                <ExampleCard />
                <Subheader />

            </div>
        )
    }
}

export default ChartLandingPage;
