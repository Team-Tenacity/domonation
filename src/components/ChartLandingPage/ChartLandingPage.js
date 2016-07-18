import React from 'react';
import ExampleCard from "./ExampleCards.js";
import {Link} from 'react-router';
import UpperNav from "./UpperNav";

class ChartLandingPage extends React.Component {
    render() {
        return (
            <div>
                <UpperNav />
                <ExampleCard />
            </div>
        )
    }
}

export default ChartLandingPage;
