import React from 'react';
import {Link} from 'react-router';
import UpperNav from "./UpperNav";

import TitleDiv from './exampleCardTitleDiv/titleDiv';

class ChartLandingPage extends React.Component {
    render() {
        return (
            <div>
                <UpperNav />
                <TitleDiv />
            </div>
        )
    }
}

export default ChartLandingPage;
