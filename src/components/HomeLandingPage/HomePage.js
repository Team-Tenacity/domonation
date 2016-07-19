import React from 'react';
import {Link} from 'react-router';
import Header from './Header'
import MainContent from './MainContent'
// import Subheader from '../ChartLandingPage/Subheader'

class HomePage extends React.Component {

    render(){
        return (
            <div>
                <Header />
                <MainContent />
            </div>
        )
    }
}
export default HomePage;
