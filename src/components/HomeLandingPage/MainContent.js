import React from 'react';
import {Link} from 'react-router';

require('./MainContent.css');

const MainContent = () => {
    return (
        <div className="main-content">
            <h2>Information is empowering.</h2>
            <p>Introducing The Business Cloud--the world's first self -service platform for running your entire organization.</p>
            <button className="learn-more-btn">LEARN MORE</button>
        </div>
    )
}


export default MainContent;