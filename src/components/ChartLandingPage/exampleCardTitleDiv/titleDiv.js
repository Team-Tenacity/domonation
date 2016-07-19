import React from 'react';
import SharedDiv from './SharedDiv';

import './titleDiv.css'


const TitleDiv = () => {
    return (
      <div className="main-title-container">
          <div className="title-divs-container-left">
            <div className="title">
            Example Cards
            </div>
          </div>
          <div className="title-divs-container-right">
              <div className="title-domo-logo">
              <img className="title-logo" src="https://support.domo.com/public/images/logo-400.png"/>
                  <div className="text-container">
                    Owner
                    <div className="lower-text-container">
                      DomoSupport
                    </div>
                  </div>
              </div>
              <SharedDiv />
              <button className="title-add-card">
                <span>ADD CARD</span>
                <i className="title-chevron"></i>
              </button>
              <div className="title-page-options">
                <i className="title-wrench" ></i>
                <i className="title-chevron"></i>
              </div>
          </div>
      </div>
    )
}

export default TitleDiv
