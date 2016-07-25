import React from 'react';
import {Link} from 'react-router';
import LoginModal from "./LoginModal";
import SignInModal from "./SignInModal";

require('./Header.css');

const Header = () => {
        return (
            <div className="header">
                <div className="logo"><img src="https://www.domo.com/assets/images/domo-logo.jpg" alt="domo-logo"/></div>
                <div className="header-menu-options">

                    <div>Products</div>
                    <div>Solutions</div>
                    <div>Resources</div>
                    <div><Link to="chart">Company</Link></div>
                </div>
                <div className="header-other-options">
                    <div><SignInModal /></div>
                    <div><LoginModal /></div>
                    <div><Link to="charts">Sign In</Link></div>
                    <div><Link to="counter">Buy</Link></div>
                    <div><button className="demo-button">WATCH DEMO</button></div>
                </div>
            </div>
        )
    }


export default Header;
