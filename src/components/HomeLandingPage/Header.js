import React from 'react';
import {Link} from 'react-router';

require('./Header.css');

const Header = () => {
        return (
            <div className="header">
                <div className="logo"><img src="https://www.domo.com/assets/images/domo-logo.jpg" alt="domo-logo"/></div>
                <div className="header-menu-options">
                    <div>Product</div>
                    <div>Solutions</div>
                    <div>Resources</div>
                    <div>Company</div>
                </div>
                <div className="header-other-options">
                    <div><Link to="counter">Sign In</Link></div>
                    <div>Buy</div>
                    <div><button className="demo-button">WATCH DEMO</button></div>
                </div>
            </div>
        )
    }


export default Header;
