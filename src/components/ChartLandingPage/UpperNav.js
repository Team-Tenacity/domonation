import React from "react";

require("./UpperNav.css");

const UpperNav = () => {
  return (
    <div className="upper-nav-div">
        <div className="left-half">
            <div className="logo-div">
                <a href="/">
                    <img src="https://support.domo.com/public/images/logo-400.png" width="120" height="120" />
                </a>
            </div>
            <i className="plus-icon">+</i>
            <div className="cobrand-div">
                <img src="https://devmounta.in/img/logoonly.png" width="60" height="60" />
            </div>
        </div>

        <div className="right-half">
            <div className="glyphicon-div">
                <span className="glyphicon glyphicon-search"></span>
            </div>
            <div className="glyphicon-div">
                <span className="glyphicon glyphicon-comment"></span>
            </div>
            <div className="glyphicon-div">
                <span className="glyphicon glyphicon-th"></span>
            </div>
            <div className="glyphicon-div">
                <span className="glyphicon glyphicon-user"></span>
            </div>
        </div>
    </div>
  )
}

export default UpperNav;
