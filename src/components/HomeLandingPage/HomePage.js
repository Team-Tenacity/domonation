import React from 'react';
import {Link} from 'react-router';
import Header from './Header'
import MainContent from './MainContent'
import TextContent from './TextContent'
// import Subheader from '../ChartLandingPage/Subheader'

class HomePage extends React.Component {

    render(){
        return (
            <div>
                <Header />
                <MainContent />
                <TextContent />
            </div>
        )
    }
}
export default HomePage;
