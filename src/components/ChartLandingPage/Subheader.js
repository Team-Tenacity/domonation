import React from 'react';
import {Link} from 'react-router';

import './Subheader.css'
const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAA1teXP8meAAAAO9JREFUaAXtmcEKg0AMRGvxG9t+ou1PtvTm5UHCZrMOjCcJIe7kDaPgdrw/39uFrtfzsWWOc880X7HXAlZTMYHVBHY6QDYNaA7Vq9LPFqINd9VNoGvT9Bx5AphCpLgqParmyxOwALJCV90EujZNz0mnEA1a9e1kCxGRrnqZhSIHppfgiP1socjmZ/aYwMztRmbLE5iSQpQ2tFHqj6STPAF5AWghwko2WFWXJyAvAC00YglKD7Il9UfOIE9AXsCexUc2iOCe0SNPQF7AlBQiq2TtSnPOdXkC8gJSf8X/6JxCZwMX3MtbyAIKXDA0Qp7AD5xvLV9IgDIwAAAAAElFTkSuQmCC'

const Subheader = () => {
    return (
      <div className="subheader">
          <div className="subheader-views  spacer-bar">
              <div className="option">Overview</div>
              <div className="option">Favorites</div>
              <div className="option">Alerts</div>
          </div>
          <div className="subheader-views">
          <div className="option-wrapper">
            <div className="option-drop option">
              Twitter
              <div className="Chevron"></div>
            </div>
              <ul className="dropdown">
                <li>
                  <a className="dropdown-option">Test</a>
                </li>
              </ul>
          </div>
          </div>
          <div className="manage-pages">
            <div className="icon-container">
              <img className="icon-right" src={icon} />
              <div className="desc">
              <div className="text">
              Manage Pages
              <i className="glyphicon subheader-glyphicon-triangle-bottom glyphicon-triangle-bottom"></i>
              </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Subheader;
