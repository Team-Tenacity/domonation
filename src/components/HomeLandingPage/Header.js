import React from 'react';
import {Link} from 'react-router';

require('./Header.css');

const Header = () => {
        return (
            <div className="header">
                <div className="logo">DOMO</div>
                <div className="header-options">
                    <div>Product</div>
                    <div>Solutions</div>
                    <div>Resources</div>
                    <div>Company</div>
                    <div><Link to="counter">Sign In</Link></div>
                    <div>Buy</div>
                    <div><button>Watch Demo</button></div>
                </div>
            </div>
        )
    }


export default Header;
