import React from 'react';
import {Link} from 'react-router';


import UpperNav from "./UpperNav";
import Subheader from './Subheader';


class ChartLandingPage extends React.Component {
    render() {
        return (
            <div>
                <UpperNav />
                <Subheader />
            </div>
        )
    }
}

export default ChartLandingPage;
