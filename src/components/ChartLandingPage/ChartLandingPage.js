import React from 'react';
import {Link} from 'react-router';


import UpperNav from "./UpperNav";
import Subheader from './Subheader';
import ExampleCard from "./ExampleCards.js";


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
