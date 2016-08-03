import React from 'react';
import {Link} from 'react-router';

require('./TextContent.css');

const TextContent = () => {
    return (
        <div className="text-content">
            <h2>Like an operating system for your business.</h2>
            <p>Domo brings your business and all its data together in one intuitive platform. With Domo, it's easy to see the information you care about in one place and use it to make faster, better‑informed decisions.</p>
            <button className="learn-more-btn">LEARN MORE</button>
        </div>
    )
}


export default TextContent;
